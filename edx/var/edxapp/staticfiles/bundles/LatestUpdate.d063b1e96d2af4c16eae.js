!function(e,n){for(var t in n)e[t]=n[t]}(window,webpackJsonp([37],{"./openedx/features/course_experience/static/course_experience/js/LatestUpdate.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e){function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,"LatestUpdate",function(){return o});var i=t("./common/static/js/vendor/jquery.cookie.js"),o=(t.n(i),function n(t){s(this,n),"hide"===e.cookie("update-message")&&e(t.messageContainer).hide(),e(t.dismissButton).click(function(){e.cookie("update-message","hide",{expires:1}),e(t.messageContainer).hide()})})}.call(n,t(0))}},["./openedx/features/course_experience/static/course_experience/js/LatestUpdate.js"]));