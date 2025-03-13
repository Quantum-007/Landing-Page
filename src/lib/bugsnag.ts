import Bugsnag from "@bugsnag/js";

if (!Bugsnag.isStarted()) {
  Bugsnag.start({
    apiKey: '73b19935a78bb4a6f0db259e4d87b243',
    releaseStage: process.env.NODE_ENV,
  });
}

export default Bugsnag;
