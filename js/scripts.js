!function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],o=n.length,i=window.console=window.console||{};o--;)e=n[o],i[e]||(i[e]=t)}(),function(e,t,n){"use strict";var o=e("body"),i="1px"===o.css("padding-bottom"),r="1px"!==o.css("margin-bottom"),a="1px"===o.css("margin-bottom");e(t).resize(function(){i="1px"===o.css("padding-bottom"),r="1px"!==o.css("margin-bottom"),a="1px"===o.css("margin-bottom")}),function(){for(var e=0,n=["ms","moz","webkit","o"],o=0;o<n.length&&!t.requestAnimationFrame;++o)t.requestAnimationFrame=t[n[o]+"RequestAnimationFrame"],t.cancelAnimationFrame=t[n[o]+"CancelAnimationFrame"]||t[n[o]+"CancelRequestAnimationFrame"];t.requestAnimationFrame||(t.requestAnimationFrame=function(n,o){var i=(new Date).getTime(),r=Math.max(0,16-(i-e)),a=t.setTimeout(function(){n(i+r)},r);return e=i+r,a}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(e){clearTimeout(e)})}();var c=function(){var t=r?".js--screen-desktop":".js--screen";e("#js--fullpage").fullpage({verticalCentered:!1,sectionSelector:t,scrollingSpeed:700})};c();var s,l=e(t).width(),u=function(){s=e(t).width(),l>=1080&&1080>s&&(e.fn.fullpage.destroy("all"),c(),l=s),1080>l&&s>=1080&&(e.fn.fullpage.destroy("all"),c(),l=s)};e(t).on("resize",function(){requestAnimationFrame(u)}),e(".js--page-nav").on("touchstart click",function(t){t.stopPropagation(),t.preventDefault();var n=e(this).attr("data-target");e.fn.fullpage.moveTo(n)});var m=function(e,o){if(r){var i,a;"twitter"===o?(i=540,a=380):(i=555,a=607),t.open(e,null,"toolbar=no,menubar=no,width="+i+",height="+a)}else n.location.href=e},p=function(e){var t,n="https://surveillance.mozilla.org/action",o="201366196887512",i="https://surveillance.mozilla.org/img/content/facebook-panel-2.png",r="https://surveillance.mozilla.org/close-window/",a="Strong %23encryption keeps us safe. Support a secure Internet. @FBI",c="Strong %23encryption keeps us safe. Support a secure Internet. FBI";if("twitter"===e)t="http://twitter.com/intent/tweet?&text="+a+"&url="+n;else{if("facebook"!==e)return;t="https://www.facebook.com/dialog/share?app_id="+o+"&display=popup&href="+n+"&redirect_uri="+r+"&picture="+i+"&description="+c}m(t,e)};e(".js--share").on("click",function(t){t.preventDefault();var n=e(this).attr("data-type");p(n)})}(window.jQuery,window,document);