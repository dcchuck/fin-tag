!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(e,n){function t(e,n,t){return e.addEventListener?(e.addEventListener(n,t),{remove:function(){e.removeEventListener(n,t)}}):(e.attachEvent(n,t),{remove:function(){e.detachEvent(n,t)}})}function o(e,n){var t=document.createElement("iframe");return t.src=n,t.id="hiddenIframe",t.style.display="none",e.appendChild(t),t}function r(e,n,r){10===i()?function(e,n,t){var r=setTimeout(n,1e3);window.addEventListener("blur",function(){clearTimeout(r),t()});var i=document.querySelector("#hiddenIframe");i||(i=o(document.body,"about:blank"));try{i.contentWindow.location.href=e}catch(e){n(),clearTimeout(r)}}(e,n,r):9===i()||11===i()?function(e,n,r){var i=setTimeout(function(){n(),c.remove()},1e3),a=document.querySelector("#hiddenIframe");a||(a=o(document.body,"about:blank"));var c=t(window,"blur",function(){clearTimeout(i),c.remove(),r()});a.contentWindow.location.href=e}(e,n,r):function(e,n,t){var o=window.open("","","width=0,height=0");o.document.write("<iframe src='"+e+"'></iframe>"),setTimeout(function(){try{o.location.href,o.setTimeout("window.close()",1e3),t()}catch(e){o.close(),n()}},1e3)}(e,n,r)}function i(){var e=-1;if("Microsoft Internet Explorer"===navigator.appName){var n=navigator.userAgent;null!=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(n)&&(e=parseFloat(RegExp.$1))}else if("Netscape"===navigator.appName){n=navigator.userAgent;null!=new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})").exec(n)&&(e=parseFloat(RegExp.$1))}return e}e.exports=function(e,n,i){function a(){n&&n()}function c(){i&&i()}if(navigator.msLaunchUri)!function(e,n,t){navigator.msLaunchUri(e,t,n)}(e,n,i);else{var u={isOpera:f=!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,isFirefox:"undefined"!=typeof InstallTrigger,isSafari:Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,isChrome:!!window.chrome&&!f,isIE:!!document.documentMode};u.isFirefox?function(e,n,t){var r=document.querySelector("#hiddenIframe");r||(r=o(document.body,"about:blank"));try{r.contentWindow.location.href=e,t()}catch(e){"NS_ERROR_UNKNOWN_PROTOCOL"==e.name&&n()}}(e,a,c):u.isChrome?function(e,n,o){for(var r=setTimeout(function(){n(),a.remove()},1e3),i=window;i!=i.parent;)i=i.parent;var a=t(i,"blur",function(){clearTimeout(r),a.remove(),o()});window.location=e}(e,a,c):u.isIE&&r(e,a,c)}var f}},function(e,n,t){const o=t(0),r=Array.from(document.getElementsByClassName("fin")),i=Array.from(document.getElementsByClassName("fins")),a=r.concat(i);for(let e=0;e<a.length;e++)a[e].onclick=(e=>{const n=e.target.href;o(n,()=>{window.location=n.replace(/^.{3}/g,"http")}),e.preventDefault?e.preventDefault():e.returnValue=!1})}]);