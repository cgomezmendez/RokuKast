/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/contentScript.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contentScript.ts":
/*!******************************!*\
  !*** ./src/contentScript.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var videos = [];
setInterval(function () {
  var iframes = Array.from(document.getElementsByTagName("iframe"));

  for (var _i = 0, iframes_1 = iframes; _i < iframes_1.length; _i++) {
    var iframe = iframes_1[_i];

    try {
      if (iframe.contentDocument || iframe.contentWindow.document) {
        var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
        var videoTags = Array.from(innerDoc.getElementsByTagName("video"));

        for (var _a = 0, videoTags_1 = videoTags; _a < videoTags_1.length; _a++) {
          var tag = videoTags_1[_a];
          var videoUrl = tag.src; // tslint:disable-next-line: no-console

          console.log("Video tag detected: " + videoUrl);

          if (videoUrl.indexOf("blob:") === -1) {
            // tslint:disable-next-line: no-console
            var video = {
              detectionMethod: "video tag",
              title: document.title.substring(0, document.title.length < 100 ? document.title.length : 99),
              url: videoUrl,
              timeStamp: 0
            };

            if (!!video.url && !!video.title) {
              chrome.runtime.sendMessage({
                type: "add-video",
                video: video
              });
            }
          }
        }
      } // tslint:disable-next-line: no-empty

    } catch (e) {}
  }
}, 5000);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLElBQU0sTUFBTSxHQUFhLEVBQXpCO0FBRUEsV0FBVyxDQUFDO0FBQ1YsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQU4sQ0FBVyxRQUFRLENBQUMsb0JBQVQsQ0FBOEIsUUFBOUIsQ0FBWCxDQUFoQjs7QUFDQSxPQUFxQiwrQkFBckIsRUFBcUIscUJBQXJCLEVBQXFCLElBQXJCLEVBQThCO0FBQXpCLFFBQU0sTUFBTSxnQkFBWjs7QUFDSCxRQUFJO0FBQ0YsVUFBSSxNQUFNLENBQUMsZUFBUCxJQUEwQixNQUFNLENBQUMsYUFBUCxDQUFxQixRQUFuRCxFQUE2RDtBQUMzRCxZQUFNLFFBQVEsR0FDWixNQUFNLENBQUMsZUFBUCxJQUEwQixNQUFNLENBQUMsYUFBUCxDQUFxQixRQURqRDtBQUVBLFlBQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFOLENBQVcsUUFBUSxDQUFDLG9CQUFULENBQThCLE9BQTlCLENBQVgsQ0FBbEI7O0FBQ0EsYUFBa0IsbUNBQWxCLEVBQWtCLHVCQUFsQixFQUFrQixJQUFsQixFQUE2QjtBQUF4QixjQUFNLEdBQUcsa0JBQVQ7QUFDSCxjQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBckIsQ0FEMkIsQ0FFM0I7O0FBQ0EsaUJBQU8sQ0FBQyxHQUFSLENBQVkseUJBQXVCLFFBQW5DOztBQUVBLGNBQUksUUFBUSxDQUFDLE9BQVQsQ0FBaUIsT0FBakIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQztBQUNBLGdCQUFNLEtBQUssR0FBVztBQUNwQiw2QkFBZSxFQUFFLFdBREc7QUFFcEIsbUJBQUssRUFBRSxRQUFRLENBQUMsS0FBVCxDQUFlLFNBQWYsQ0FDTCxDQURLLEVBRUwsUUFBUSxDQUFDLEtBQVQsQ0FBZSxNQUFmLEdBQXdCLEdBQXhCLEdBQThCLFFBQVEsQ0FBQyxLQUFULENBQWUsTUFBN0MsR0FBc0QsRUFGakQsQ0FGYTtBQU1wQixpQkFBRyxFQUFFLFFBTmU7QUFPcEIsdUJBQVMsRUFBRTtBQVBTLGFBQXRCOztBQVNBLGdCQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBUixJQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBM0IsRUFBa0M7QUFDaEMsb0JBQU0sQ0FBQyxPQUFQLENBQWUsV0FBZixDQUEyQjtBQUFFLG9CQUFJLEVBQUUsV0FBUjtBQUFxQixxQkFBSztBQUExQixlQUEzQjtBQUNEO0FBQ0Y7QUFDRjtBQUNGLE9BMUJDLENBMkJGOztBQUNELEtBNUJELENBNEJFLE9BQU8sQ0FBUCxFQUFVLENBQUU7QUFDZjtBQUNGLENBakNVLEVBaUNSLElBakNRLENBQVgsQyIsImZpbGUiOiJjb250ZW50U2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29udGVudFNjcmlwdC50c1wiKTtcbiIsImltcG9ydCB7IElWaWRlbyB9IGZyb20gXCIuL3ZpZGVvXCI7XG5jb25zdCB2aWRlb3M6IElWaWRlb1tdID0gW107XG5cbnNldEludGVydmFsKCgpID0+IHtcbiAgY29uc3QgaWZyYW1lcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpZnJhbWVcIikpO1xuICBmb3IgKGNvbnN0IGlmcmFtZSBvZiBpZnJhbWVzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpZnJhbWUuY29udGVudERvY3VtZW50IHx8IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGlubmVyRG9jID1cbiAgICAgICAgICBpZnJhbWUuY29udGVudERvY3VtZW50IHx8IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICAgICAgICBjb25zdCB2aWRlb1RhZ3MgPSBBcnJheS5mcm9tKGlubmVyRG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidmlkZW9cIikpO1xuICAgICAgICBmb3IgKGNvbnN0IHRhZyBvZiB2aWRlb1RhZ3MpIHtcbiAgICAgICAgICBjb25zdCB2aWRlb1VybCA9IHRhZy5zcmM7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5sb2coYFZpZGVvIHRhZyBkZXRlY3RlZDogJHt2aWRlb1VybH1gKTtcblxuICAgICAgICAgIGlmICh2aWRlb1VybC5pbmRleE9mKFwiYmxvYjpcIikgPT09IC0xKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWNvbnNvbGVcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvOiBJVmlkZW8gPSB7XG4gICAgICAgICAgICAgIGRldGVjdGlvbk1ldGhvZDogXCJ2aWRlbyB0YWdcIixcbiAgICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LnRpdGxlLnN1YnN0cmluZyhcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlLmxlbmd0aCA8IDEwMCA/IGRvY3VtZW50LnRpdGxlLmxlbmd0aCA6IDk5LFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICB1cmw6IHZpZGVvVXJsLFxuICAgICAgICAgICAgICB0aW1lU3RhbXA6IDAsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCEhdmlkZW8udXJsICYmICEhdmlkZW8udGl0bGUpIHtcbiAgICAgICAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImFkZC12aWRlb1wiLCB2aWRlbyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZW1wdHlcbiAgICB9IGNhdGNoIChlKSB7fVxuICB9XG59LCA1MDAwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=