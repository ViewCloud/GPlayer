import {loadStyle, loadScript} from './utils.js';
import videojs from 'video.js';

export default class GAllTypesPlayer {
  constructor (id, source, vjsOptions, flashOptions) {
    this.id = id;
    this.source = source;
    this.vjsOptions = vjsOptions;
    this.flashOptions = flashOptions;
  }

  init () {
    this.dynamicLoadPluginJs(this.source, ()=> {
      // init flash options
      this.initFlashOptions()
      let player = videojs(this.id, this.options);
      player.ready(()=> {
        // should run src function first so the player can make sure which tech it can use
        player.src(this.source);
        // TODO: test currentTime avalibility
        player.currentTime(0);
        let techName_ = player.techName_;
        if(techName_ != 'Html5') {
          player.player_.bigPlayButton.hide();
          player.controlBar.hide();
        }
      })
    })
  }
  // dynamic load plugin js
  dynamicLoadPluginJs (source, callback) {
    var label = source.label ? source.label : this.getStreamLabel(source.type);
    if (label == 'hls') {
      loadScript('./GPlayer/lib/videojs-contrib-hls.min.js', callback);
    } else if (label == 'dash') {
      loadScript('./GPlayer/lib/dash.all.min.js', ()=> {
        loadScript('./GPlayer/lib/videojs-dash.min.js', callback);
      });
    } else {
      callback();
    }
  }

  getStreamLabel(type) {
    var streamingFormats = {
      'rtmp/mp4': 'rtmp',
      'rtmp/flv': 'rtmp',
      'application/x-mpegURL': 'hls',
      'application/dash+xml': 'dash'
    }
    return streamingFormats[type];
  }

  initFlashOptions (source, flashOptions) {
    videojs.options.flash.swf = "./GPlayer/lib/TanVodPlayer.swf";
    videojs.options.flash.flashVars = {
      'autostart': 'true',
      'streamtype': 'MP4',
      'reportplaytime': '1',
      'isvr': this.source.isvr,
      // TODO: what is videoid
      'videoid': 'dbdf4ac3bed84f44a9bade194432f8de',
      'file': this.source.src
    };
  }
}
