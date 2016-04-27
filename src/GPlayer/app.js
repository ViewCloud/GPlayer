import videojs from 'video.js';
import {loadStyle} from './utils.js';
import GAllTypesPlayer from './GAllTypesPlayer.js';


let GPlayer = function(id, source, vjsOptions, flashOptions) {
  loadStyle('./GPlayer/lib/video-js.min.css', function() {
    var player = new GAllTypesPlayer(id, source, vjsOptions, flashOptions);
    player.init();
  })

  // return player;
}

export default GPlayer;
