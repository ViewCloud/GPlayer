var GPlayer = function(id, source, vjsOptions, flsOptions) {
  dynamicLoadPluginJs(source, function() {

    initFlashOptions(source, flsOptions);
    var player = videojs(id, vjsOptions);
    player.ready(function() {
      // should run src function first so the player can make sure which tech it can use
      player.src(source);
      // TODO: test currentTime avalibility
      player.currentTime(0);
      var techName_ = player.techName_;
      if(techName_ != 'Html5') {
        player.player_.bigPlayButton.hide();
        player.controlBar.hide();
      }
    })
  });
}

// dynamic load plugin js by the label of media
function dynamicLoadPluginJs(source, callback) {
  var label = source.label ? source.label : getStream(source.type);

  // if (label == 'hls') {
  //   loadScript('../../node_modules/videojs-contrib-hls/dist/videojs-contrib-hls.js', callback)
  // } else if (label == 'dash') {
  //   loadScript('../../node_modules/dashjs/dist/dash.all.min.js', function() {
  //     loadScript('../../node_modules/videojs-contrib-dash/dist/videojs-dash.js', callback)
  //   })
  // } else {
  //   callback();
  // }

  if (label == 'hls') {
    loadScript('../../dist/GPlayer/lib/videojs-contrib-hls.min.js', callback)
  } else if (label == 'dash') {
    loadScript('../../dist/GPlayer/lib/dash.all.min.js', function() {
      loadScript('../../dist/GPlayer/lib/videojs-dash.min.js', callback)
    })
  } else {
    callback();
  }

  function getStream(type) {
    var streamingFormats = {
      'rtmp/mp4': 'rtmp',
      'rtmp/flv': 'rtmp',
      'application/x-mpegURL': 'hls',
      'application/dash+xml': 'dash'
    }
    return streamingFormats[type]
  }
}

// init Tan14 flash player options
function initFlashOptions (source, flsOptions) {
  videojs.options.flash.swf = "../../dist/GPlayer/swf/TanVodPlayer.swf";
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

function toTitleCase(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';

  if (script.readyState) { // IE
    script.onreadystatechange = function (){
      if (script.readyState == 'loaded' || script.readyState == 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    }
  } else {
    script.onload = function() {
      callback();
    }
  }

  script.src = url;
  document.getElementsByTagName('body')[0].appendChild(script);
}
