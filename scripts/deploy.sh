#!/bin/bash

set -e

ORIGINAL_DIR=$(pwd)

# Get path to script
SOURCE=${BASH_SOURCE[0]}
while [ -L "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )
  SOURCE=$(readlink "$SOURCE")
  [[ $SOURCE != /* ]] && SOURCE=$DIR/$SOURCE # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )

set -o xtrace

cd $DIR/..


PROJECT_ROOT=$(pwd)
echo $PROJECT_ROOT

GIT_BRANCH=$2
if [[ $(git status -s) ]]; then
  echo "ERROR: Cannot deploy if non-git-ignored files have been added or modified in the local path. Run git status and reset the changes when safe."
  exit 1
fi


git fetch
git reset --hard origin/$GIT_BRANCH

GIT_SHA=$(git rev-parse HEAD)
set +o xtrace

echo "Current branch: $(git rev-parse --abbrev-ref HEAD)"
echo "Current sha: $GIT_SHA"
cd $ORIGINAL_DIR

read -p "Continue with deploy? [y] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    [[ "$0" = "$BASH_SOURCE" ]] && exit 1 || return 1
fi

set -o xtrace

cd $PROJECT_ROOT

export BUILDKIT_PROGRESS=plain

DOCKER_ROOT=$PROJECT_ROOT/docker
DOCKER_ENV_FILE=$DOCKER_ROOT/.env

if [ -f $DOCKER_ENV_FILE ]; then
  set -a
  set +o xtrace
  echo "source $DOCKER_ENV_FILE"
  source $DOCKER_ENV_FILE
  set -o xtrace
  set +a
else
  echo "Error: $DOCKER_ENV_FILE file not found."
  exit 1
fi

if [ -z "$NODE_ENV" ]; then
  echo "Error: NODE_ENV not set in $DOCKER_ENV_FILE file."
  exit 1
fi

if [ "$NODE_ENV" != "$1" ]; then
  echo "Error: NODE_ENV ($NODE_ENV) does not match argument ($1). Aborting."
  exit 1
fi

DEPLOY_ENV_FILE=$DOCKER_ROOT/.deploy.env
rm -f $DEPLOY_ENV_FILE

echo "DD_VERSION=$GIT_SHA" >> $DEPLOY_ENV_FILE
echo "DD_ENV=$1" >> $DEPLOY_ENV_FILE
echo "DD_SERVICE=fk-fullkitchenweb-next" >> $DEPLOY_ENV_FILE
echo "DEPLOYMENT_GIT_SHA=$GIT_SHA" >> $DEPLOY_ENV_FILE
echo "DEPLOYMENT_ENV=$1" >> $DEPLOY_ENV_FILE

docker compose -f $DOCKER_ROOT/docker-compose.$1.yml up -d --build
# docker container prune -f
# docker image prune -f
# docker volume prune -f

set +o xtrace

cd $ORIGINAL_DIR
echo "Deployment completed."

# TODO: Add health check to ensure the deployment was actually successful
