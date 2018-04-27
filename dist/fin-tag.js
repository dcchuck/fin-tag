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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./builder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./builder.js":
/*!********************!*\
  !*** ./builder.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const enableFinTags = __webpack_require__(/*! ./ */ \"./index.js\");\n\nenableFinTags();\n\n\n//# sourceURL=webpack:///./builder.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const customProtocolDetection = __webpack_require__(/*! custom-protocol-detection */ \"./node_modules/custom-protocol-detection/index.js\");\n\nfunction enableFinTags() {\n\tconst allTags = Array.from(document.querySelectorAll('a[data-manifest]'));\n\n\tfor (let i = 0; i < allTags.length; i++) {\n\t\tallTags[i].onclick  = (event) => {\n\t\t\tevent.preventDefault ? event.preventDefault() : event.returnValue = false;\n\t\t\tconst manifestUrl = event.target.dataset.manifest;\n\t\t\tcustomProtocolDetection(manifestUrl, () => {\n\t\t\t\twindow.location.href = event.target.href;\n\t\t\t}, () => {\n\t\t\t\tconsole.log('RVM Available - Application Launched!');\n\t\t\t});\n\t\t}\n\t}\n}\n\nmodule.exports = enableFinTags;\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/custom-protocol-detection/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/custom-protocol-detection/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _registerEvent(target, eventType, cb) {\r\n    if (target.addEventListener) {\r\n        target.addEventListener(eventType, cb);\r\n        return {\r\n            remove: function () {\r\n                target.removeEventListener(eventType, cb);\r\n            }\r\n        };\r\n    } else {\r\n        target.attachEvent(eventType, cb);\r\n        return {\r\n            remove: function () {\r\n                target.detachEvent(eventType, cb);\r\n            }\r\n        };\r\n    }\r\n}\r\n\r\nfunction _createHiddenIframe(target, uri) {\r\n    var iframe = document.createElement(\"iframe\");\r\n    iframe.src = uri;\r\n    iframe.id = \"hiddenIframe\";\r\n    iframe.style.display = \"none\";\r\n    target.appendChild(iframe);\r\n\r\n    return iframe;\r\n}\r\n\r\nfunction openUriWithHiddenFrame(uri, failCb, successCb) {\r\n\r\n    var timeout = setTimeout(function () {\r\n        failCb();\r\n        handler.remove();\r\n    }, 1000);\r\n\r\n    var iframe = document.querySelector(\"#hiddenIframe\");\r\n    if (!iframe) {\r\n        iframe = _createHiddenIframe(document.body, \"about:blank\");\r\n    }\r\n\r\n    var handler = _registerEvent(window, \"blur\", onBlur);\r\n\r\n    function onBlur() {\r\n        clearTimeout(timeout);\r\n        handler.remove();\r\n        successCb();\r\n    }\r\n\r\n    iframe.contentWindow.location.href = uri;\r\n}\r\n\r\nfunction openUriWithTimeoutHack(uri, failCb, successCb) {\r\n    \r\n    var timeout = setTimeout(function () {\r\n        failCb();\r\n        handler.remove();\r\n    }, 1000);\r\n\r\n    //handle page running in an iframe (blur must be registered with top level window)\r\n    var target = window;\r\n    while (target != target.parent) {\r\n        target = target.parent;\r\n    }\r\n\r\n    var handler = _registerEvent(target, \"blur\", onBlur);\r\n\r\n    function onBlur() {\r\n        clearTimeout(timeout);\r\n        handler.remove();\r\n        successCb();\r\n    }\r\n\r\n    window.location = uri;\r\n}\r\n\r\nfunction openUriUsingFirefox(uri, failCb, successCb) {\r\n    var iframe = document.querySelector(\"#hiddenIframe\");\r\n\r\n    if (!iframe) {\r\n        iframe = _createHiddenIframe(document.body, \"about:blank\");\r\n    }\r\n\r\n    try {\r\n        iframe.contentWindow.location.href = uri;\r\n        successCb();\r\n    } catch (e) {\r\n        if (e.name == \"NS_ERROR_UNKNOWN_PROTOCOL\") {\r\n            failCb();\r\n        }\r\n    }\r\n}\r\n\r\nfunction openUriUsingIEInOlderWindows(uri, failCb, successCb) {\r\n    if (getInternetExplorerVersion() === 10) {\r\n        openUriUsingIE10InWindows7(uri, failCb, successCb);\r\n    } else if (getInternetExplorerVersion() === 9 || getInternetExplorerVersion() === 11) {\r\n        openUriWithHiddenFrame(uri, failCb, successCb);\r\n    } else {\r\n        openUriInNewWindowHack(uri, failCb, successCb);\r\n    }\r\n}\r\n\r\nfunction openUriUsingIE10InWindows7(uri, failCb, successCb) {\r\n    var timeout = setTimeout(failCb, 1000);\r\n    window.addEventListener(\"blur\", function () {\r\n        clearTimeout(timeout);\r\n        successCb();\r\n    });\r\n\r\n    var iframe = document.querySelector(\"#hiddenIframe\");\r\n    if (!iframe) {\r\n        iframe = _createHiddenIframe(document.body, \"about:blank\");\r\n    }\r\n    try {\r\n        iframe.contentWindow.location.href = uri;\r\n    } catch (e) {\r\n        failCb();\r\n        clearTimeout(timeout);\r\n    }\r\n}\r\n\r\nfunction openUriInNewWindowHack(uri, failCb, successCb) {\r\n    var myWindow = window.open('', '', 'width=0,height=0');\r\n\r\n    myWindow.document.write(\"<iframe src='\" + uri + \"'></iframe>\");\r\n\r\n    setTimeout(function () {\r\n        try {\r\n            myWindow.location.href;\r\n            myWindow.setTimeout(\"window.close()\", 1000);\r\n            successCb();\r\n        } catch (e) {\r\n            myWindow.close();\r\n            failCb();\r\n        }\r\n    }, 1000);\r\n}\r\n\r\nfunction openUriWithMsLaunchUri(uri, failCb, successCb) {\r\n    navigator.msLaunchUri(uri,\r\n        successCb,\r\n        failCb\r\n    );\r\n}\r\n\r\nfunction checkBrowser() {\r\n    var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;\r\n    return {\r\n        isOpera   : isOpera,\r\n        isFirefox : typeof InstallTrigger !== 'undefined',\r\n        isSafari  : Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,\r\n        isChrome  : !!window.chrome && !isOpera,\r\n        isIE      : /*@cc_on!@*/false || !!document.documentMode // At least IE6\r\n    }\r\n}\r\n\r\nfunction getInternetExplorerVersion() {\r\n    var rv = -1;\r\n    if (navigator.appName === \"Microsoft Internet Explorer\") {\r\n        var ua = navigator.userAgent;\r\n        var re = new RegExp(\"MSIE ([0-9]{1,}[\\.0-9]{0,})\");\r\n        if (re.exec(ua) != null)\r\n            rv = parseFloat(RegExp.$1);\r\n    }\r\n    else if (navigator.appName === \"Netscape\") {\r\n        var ua = navigator.userAgent;\r\n        var re = new RegExp(\"Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})\");\r\n        if (re.exec(ua) != null) {\r\n            rv = parseFloat(RegExp.$1);\r\n        }\r\n    }\r\n    return rv;\r\n}\r\n\r\nmodule.exports = function(uri, failCb, successCb) {\r\n    function failCallback() {\r\n        failCb && failCb();\r\n    }\r\n\r\n    function successCallback() {\r\n        successCb && successCb();\r\n    }\r\n\r\n    if (navigator.msLaunchUri) { //for IE and Edge in Win 8 and Win 10\r\n        openUriWithMsLaunchUri(uri, failCb, successCb);\r\n    } else {\r\n        var browser = checkBrowser();\r\n\r\n        if (browser.isFirefox) {\r\n            openUriUsingFirefox(uri, failCallback, successCallback);\r\n        } else if (browser.isChrome) {\r\n            openUriWithTimeoutHack(uri, failCallback, successCallback);\r\n        } else if (browser.isIE) {\r\n            openUriUsingIEInOlderWindows(uri, failCallback, successCallback);\r\n        } else {\r\n            //not supported, implement please\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/custom-protocol-detection/index.js?");

/***/ })

/******/ });