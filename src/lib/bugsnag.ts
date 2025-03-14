import Bugsnag from "@bugsnag/js";

if (!Bugsnag.isStarted()) {
  Bugsnag.start({
    apiKey: 'bdd109d0dec2f676a8ab79fe291fdab3',
    releaseStage: process.env.NODE_ENV,
  });
}

export default Bugsnag;
