// function GPlayer(id, source) {
//   // set flash swf option to TanVodPlayer
//   videojs.options.flash.swf = "./TanVodPlayer.swf";
//   videojs.options.flash.flashVars = {
//     'autostart': 'true',
//     'reportplaytime': '1',
//     'isvr': source.isvr,
//     // TODO: what is videoid
//     'videoid': 'dbdf4ac3bed84f44a9bade194432f8de',
//     'file': source.src
//   };
//   videojs(id, {
//     controls: true,
//     preload: "none"
//   }).ready(function() {
//     var player = this;
//     // should run src function first so the player can make sure which tech it can use
//     player.src(source);
//     // TODO: test currentTime avalibility
//     player.currentTime(0);
//     console.log(player);
//     console.log(player.currentType_);
//     console.log(player.techName_);
//     if (player.techName_ != 'Html5') {
//       player.player_.bigPlayButton.hide();
//       player.controlBar.hide();
//     }
//
//     player.play();
//
//   })
// }

import toTitleCase from './utils/to-title-case.js';

class GPlayer {
  constructor (id, source, options) {
    this.id = id;
    this.source = source;
    this.options = options;
  }

  init () {
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
        this.initFlashOptions();
      }
    })
    console.log(player);
  }

  initFlashOptions () {
    videojs.options.flash.swf = "./TanVodPlayer.swf";
    videojs.options.flash.flashVars = {
      'autostart': 'true',
      'reportplaytime': '1',
      'isvr': this.source.isvr,
      // TODO: what is videoid
      'videoid': 'dbdf4ac3bed84f44a9bade194432f8de',
      'file': this.source.src
    };
  }

  identifyTech () {

  }
}

export default GPlayer;
