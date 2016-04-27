import videojs from 'video.js';
import {loadScript} from './utils.js';
import GAllTypesPlayer from './GAllTypesPlayer.js';

let GPlayer = function(id, source, vjsOptions, flashOptions) {
  // init flash options
  initFlashOptions(source, flashOptions);
  let player = videojs(id, vjsOptions);
  var gplayer = new GAllTypesPlayer(player, source, vjsOptions, flashOptions);
  gplayer.init();

  // return player;
}

function initFlashOptions (source, flashOptions) {
  videojs.options.flash.swf = "./GPlayer/lib/TanVodPlayer.swf";
  videojs.options.flash.flashVars = {
    'autostart': 'true',
    'streamtype': 'MP4',
    'reportplaytime': '1',
    'isvr': source.isvr,
    // TODO: what is videoid
    'videoid': 'dbdf4ac3bed84f44a9bade194432f8de',
    'file': source.src
  };
}

export default GPlayer;
