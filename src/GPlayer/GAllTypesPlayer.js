import {loadScript} from './utils.js';

export default class GAllTypesPlayer {
  constructor (player, source, vjsOptions, flashOptions) {
    this.player = player;
    this.source = source;
    this.vjsOptions = vjsOptions;
    this.flashOptions = flashOptions;
  }

  init () {
    this.dynamicLoadPluginJs(this.source, ()=> {
      this.player.ready(()=> {
        // should run src function first so the player can make sure which tech it can use
        this.player.src(this.source);
        // TODO: test currentTime avalibility
        this.player.currentTime(0);
        let techName_ = this.player.techName_;
        if(techName_ != 'Html5') {
          this.player.player_.bigPlayButton.hide();
          this.player.controlBar.hide();
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


}
