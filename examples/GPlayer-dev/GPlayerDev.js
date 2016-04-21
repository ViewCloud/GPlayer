(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // function GPlayer(id, source) {
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

var _toTitleCase = require('./utils/to-title-case.js');

var _toTitleCase2 = _interopRequireDefault(_toTitleCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GPlayer = function () {
  function GPlayer(id, source, options) {
    _classCallCheck(this, GPlayer);

    this.id = id;
    this.source = source;
    this.options = options;
  }

  _createClass(GPlayer, [{
    key: 'init',
    value: function init() {
      var _this = this;

      // init flash options
      this.initFlashOptions();
      var player = videojs(this.id, this.options);
      player.ready(function () {
        // should run src function first so the player can make sure which tech it can use
        player.src(_this.source);
        // TODO: test currentTime avalibility
        player.currentTime(0);
        var techName_ = player.techName_;
        if (techName_ != 'Html5') {
          player.player_.bigPlayButton.hide();
          player.controlBar.hide();
          _this.initFlashOptions();
        }
      });
      console.log(player);
    }
  }, {
    key: 'initFlashOptions',
    value: function initFlashOptions() {
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
  }, {
    key: 'identifyTech',
    value: function identifyTech() {}
  }]);

  return GPlayer;
}();

exports.default = GPlayer;

},{"./utils/to-title-case.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file to-title-case.js
 *
 * Uppercase the first letter of a string
 *
 * @param  {String} string String to be uppercased
 * @return {String}
 * @private
 * @method toTitleCase
 */
function toTitleCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.default = toTitleCase;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvR1BsYXllci5qcyIsInNyYy91dGlscy90by10aXRsZS1jYXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUNBOzs7Ozs7OztJQUVNO0FBQ0osV0FESSxPQUNKLENBQWEsRUFBYixFQUFpQixNQUFqQixFQUF5QixPQUF6QixFQUFrQzswQkFEOUIsU0FDOEI7O0FBQ2hDLFNBQUssRUFBTCxHQUFVLEVBQVYsQ0FEZ0M7QUFFaEMsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQUZnQztBQUdoQyxTQUFLLE9BQUwsR0FBZSxPQUFmLENBSGdDO0dBQWxDOztlQURJOzsyQkFPSTs7OztBQUVOLFdBQUssZ0JBQUwsR0FGTTtBQUdOLFVBQUksU0FBUyxRQUFRLEtBQUssRUFBTCxFQUFTLEtBQUssT0FBTCxDQUExQixDQUhFO0FBSU4sYUFBTyxLQUFQLENBQWEsWUFBSzs7QUFFaEIsZUFBTyxHQUFQLENBQVcsTUFBSyxNQUFMLENBQVg7O0FBRmdCLGNBSWhCLENBQU8sV0FBUCxDQUFtQixDQUFuQixFQUpnQjtBQUtoQixZQUFJLFlBQVksT0FBTyxTQUFQLENBTEE7QUFNaEIsWUFBRyxhQUFhLE9BQWIsRUFBc0I7QUFDdkIsaUJBQU8sT0FBUCxDQUFlLGFBQWYsQ0FBNkIsSUFBN0IsR0FEdUI7QUFFdkIsaUJBQU8sVUFBUCxDQUFrQixJQUFsQixHQUZ1QjtBQUd2QixnQkFBSyxnQkFBTCxHQUh1QjtTQUF6QjtPQU5XLENBQWIsQ0FKTTtBQWdCTixjQUFRLEdBQVIsQ0FBWSxNQUFaLEVBaEJNOzs7O3VDQW1CWTtBQUNsQixjQUFRLE9BQVIsQ0FBZ0IsS0FBaEIsQ0FBc0IsR0FBdEIsR0FBNEIsb0JBQTVCLENBRGtCO0FBRWxCLGNBQVEsT0FBUixDQUFnQixLQUFoQixDQUFzQixTQUF0QixHQUFrQztBQUNoQyxxQkFBYSxNQUFiO0FBQ0EsMEJBQWtCLEdBQWxCO0FBQ0EsZ0JBQVEsS0FBSyxNQUFMLENBQVksSUFBWjs7QUFFUixtQkFBVyxrQ0FBWDtBQUNBLGdCQUFRLEtBQUssTUFBTCxDQUFZLEdBQVo7T0FOVixDQUZrQjs7OzttQ0FZSjs7O1NBdENaOzs7a0JBMkNTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRWYsU0FBUyxXQUFULENBQXFCLE1BQXJCLEVBQTRCO0FBQzFCLFNBQU8sT0FBTyxNQUFQLENBQWMsQ0FBZCxFQUFpQixXQUFqQixLQUFpQyxPQUFPLEtBQVAsQ0FBYSxDQUFiLENBQWpDLENBRG1CO0NBQTVCOztrQkFJZSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBmdW5jdGlvbiBHUGxheWVyKGlkLCBzb3VyY2UpIHtcbi8vICAgLy8gc2V0IGZsYXNoIHN3ZiBvcHRpb24gdG8gVGFuVm9kUGxheWVyXG4vLyAgIHZpZGVvanMub3B0aW9ucy5mbGFzaC5zd2YgPSBcIi4vVGFuVm9kUGxheWVyLnN3ZlwiO1xuLy8gICB2aWRlb2pzLm9wdGlvbnMuZmxhc2guZmxhc2hWYXJzID0ge1xuLy8gICAgICdhdXRvc3RhcnQnOiAndHJ1ZScsXG4vLyAgICAgJ3JlcG9ydHBsYXl0aW1lJzogJzEnLFxuLy8gICAgICdpc3ZyJzogc291cmNlLmlzdnIsXG4vLyAgICAgLy8gVE9ETzogd2hhdCBpcyB2aWRlb2lkXG4vLyAgICAgJ3ZpZGVvaWQnOiAnZGJkZjRhYzNiZWQ4NGY0NGE5YmFkZTE5NDQzMmY4ZGUnLFxuLy8gICAgICdmaWxlJzogc291cmNlLnNyY1xuLy8gICB9O1xuLy8gICB2aWRlb2pzKGlkLCB7XG4vLyAgICAgY29udHJvbHM6IHRydWUsXG4vLyAgICAgcHJlbG9hZDogXCJub25lXCJcbi8vICAgfSkucmVhZHkoZnVuY3Rpb24oKSB7XG4vLyAgICAgdmFyIHBsYXllciA9IHRoaXM7XG4vLyAgICAgLy8gc2hvdWxkIHJ1biBzcmMgZnVuY3Rpb24gZmlyc3Qgc28gdGhlIHBsYXllciBjYW4gbWFrZSBzdXJlIHdoaWNoIHRlY2ggaXQgY2FuIHVzZVxuLy8gICAgIHBsYXllci5zcmMoc291cmNlKTtcbi8vICAgICAvLyBUT0RPOiB0ZXN0IGN1cnJlbnRUaW1lIGF2YWxpYmlsaXR5XG4vLyAgICAgcGxheWVyLmN1cnJlbnRUaW1lKDApO1xuLy8gICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4vLyAgICAgY29uc29sZS5sb2cocGxheWVyLmN1cnJlbnRUeXBlXyk7XG4vLyAgICAgY29uc29sZS5sb2cocGxheWVyLnRlY2hOYW1lXyk7XG4vLyAgICAgaWYgKHBsYXllci50ZWNoTmFtZV8gIT0gJ0h0bWw1Jykge1xuLy8gICAgICAgcGxheWVyLnBsYXllcl8uYmlnUGxheUJ1dHRvbi5oaWRlKCk7XG4vLyAgICAgICBwbGF5ZXIuY29udHJvbEJhci5oaWRlKCk7XG4vLyAgICAgfVxuLy9cbi8vICAgICBwbGF5ZXIucGxheSgpO1xuLy9cbi8vICAgfSlcbi8vIH1cblxuaW1wb3J0IHRvVGl0bGVDYXNlIGZyb20gJy4vdXRpbHMvdG8tdGl0bGUtY2FzZS5qcyc7XG5cbmNsYXNzIEdQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAoaWQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG5cbiAgaW5pdCAoKSB7XG4gICAgLy8gaW5pdCBmbGFzaCBvcHRpb25zXG4gICAgdGhpcy5pbml0Rmxhc2hPcHRpb25zKClcbiAgICBsZXQgcGxheWVyID0gdmlkZW9qcyh0aGlzLmlkLCB0aGlzLm9wdGlvbnMpO1xuICAgIHBsYXllci5yZWFkeSgoKT0+IHtcbiAgICAgIC8vIHNob3VsZCBydW4gc3JjIGZ1bmN0aW9uIGZpcnN0IHNvIHRoZSBwbGF5ZXIgY2FuIG1ha2Ugc3VyZSB3aGljaCB0ZWNoIGl0IGNhbiB1c2VcbiAgICAgIHBsYXllci5zcmModGhpcy5zb3VyY2UpO1xuICAgICAgLy8gVE9ETzogdGVzdCBjdXJyZW50VGltZSBhdmFsaWJpbGl0eVxuICAgICAgcGxheWVyLmN1cnJlbnRUaW1lKDApO1xuICAgICAgbGV0IHRlY2hOYW1lXyA9IHBsYXllci50ZWNoTmFtZV87XG4gICAgICBpZih0ZWNoTmFtZV8gIT0gJ0h0bWw1Jykge1xuICAgICAgICBwbGF5ZXIucGxheWVyXy5iaWdQbGF5QnV0dG9uLmhpZGUoKTtcbiAgICAgICAgcGxheWVyLmNvbnRyb2xCYXIuaGlkZSgpO1xuICAgICAgICB0aGlzLmluaXRGbGFzaE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHBsYXllcik7XG4gIH1cblxuICBpbml0Rmxhc2hPcHRpb25zICgpIHtcbiAgICB2aWRlb2pzLm9wdGlvbnMuZmxhc2guc3dmID0gXCIuL1RhblZvZFBsYXllci5zd2ZcIjtcbiAgICB2aWRlb2pzLm9wdGlvbnMuZmxhc2guZmxhc2hWYXJzID0ge1xuICAgICAgJ2F1dG9zdGFydCc6ICd0cnVlJyxcbiAgICAgICdyZXBvcnRwbGF5dGltZSc6ICcxJyxcbiAgICAgICdpc3ZyJzogdGhpcy5zb3VyY2UuaXN2cixcbiAgICAgIC8vIFRPRE86IHdoYXQgaXMgdmlkZW9pZFxuICAgICAgJ3ZpZGVvaWQnOiAnZGJkZjRhYzNiZWQ4NGY0NGE5YmFkZTE5NDQzMmY4ZGUnLFxuICAgICAgJ2ZpbGUnOiB0aGlzLnNvdXJjZS5zcmNcbiAgICB9O1xuICB9XG5cbiAgaWRlbnRpZnlUZWNoICgpIHtcblxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdQbGF5ZXI7XG4iLCIvKipcbiAqIEBmaWxlIHRvLXRpdGxlLWNhc2UuanNcbiAqXG4gKiBVcHBlcmNhc2UgdGhlIGZpcnN0IGxldHRlciBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSAge1N0cmluZ30gc3RyaW5nIFN0cmluZyB0byBiZSB1cHBlcmNhc2VkXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAcHJpdmF0ZVxuICogQG1ldGhvZCB0b1RpdGxlQ2FzZVxuICovXG5mdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHJpbmcpe1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB0b1RpdGxlQ2FzZTtcbiJdfQ==
