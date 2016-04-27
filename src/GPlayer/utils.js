export function loadStyle(url, callback) {
  var link = document.createElement('link');
  link.setAttribute("rel", "stylesheet")
  link.setAttribute("type", "text/css")
  link.setAttribute("href", url)
  link.onload = function() {
    callback();
  }
  document.getElementsByTagName('head')[0].appendChild(link);

}


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
  document.getElementsByTagName('body')[0].appendChild(script);
  // var bodyTag = document.getElementsByTagName('body')[0];
  // var gpscript = document.getElementById('gplayer')
  // bodyTag.insertBefore(script, gpscript);
}
