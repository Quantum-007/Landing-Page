#!/usr/bin/env bash
set -e

node_modules/.bin/prettier --check .

yarn lint

yarn tsc
