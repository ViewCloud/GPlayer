export function loadScript(url, callback) {
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
  var bodyTag = document.getElementsByTagName('body')[0];
  var gpscript = document.getElementById('gplayer')
  bodyTag.insertBefore(script, gpscript);
}
