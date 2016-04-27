import config from './config';
// TODO: how to include
import videojs from 'video.js';
import sdk from './src/GPlayer/app.js';

((root) => {
  let sdkRef = root[config.sdkName];
  if (sdkRef && sdkRef._ready && sdkRef._config) {
    sdk.init(sdkRef._config).then(sdkRef._ready.bind(sdkRef, sdk));
  } else {
    root[config.sdkName] = sdk;
    root['videojs'] = videojs;
  }
})(window);
