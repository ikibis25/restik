/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////             /////    /////
/////             /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
         /////    /////
         /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////
/////    /////    /////    /////

/**
 * ScrollReveal
 * ------------
 * Version : 3.3.4
 * Website : scrollrevealjs.org
 * Repo    : github.com/jlmakes/scrollreveal.js
 * Author  : Julian Lloyd (@jlmakes)
 */
(function(e){"use strict";function n(){var n=t["clientHeight"],r=e["innerHeight"];return n<r?r:n}function r(e){var t=0,n=0;do{if(!isNaN(e.offsetTop)){t+=e.offsetTop}if(!isNaN(e.offsetLeft)){n+=e.offsetLeft}}while(e=e.offsetParent);return{top:t,left:n}}function i(t,i){var s=e.pageYOffset,o=s+n(),u=t.offsetHeight,a=r(t).top,f=a+u,i=i||0;return a+u*i<=o&&f>=s}function s(e,t){for(var n in t){if(t.hasOwnProperty(n)){e[n]=t[n]}}return e}function o(e){this.options=s(this.defaults,e);this._init()}var t=e.document.documentElement;o.prototype={defaults:{axis:"y",distance:"25px",duration:"0.66s",delay:"0s",viewportFactor:.33},_init:function(){var n=this;this.elems=Array.prototype.slice.call(t.querySelectorAll("[data-scrollReveal]"));this.scrolled=false;this.elems.forEach(function(e,t){n.animate(e)});var r=function(){if(!n.scrolled){n.scrolled=true;setTimeout(function(){n._scrollPage()},60)}};var i=function(){function e(){n._scrollPage();n.resizeTimeout=null}if(n.resizeTimeout){clearTimeout(n.resizeTimeout)}n.resizeTimeout=setTimeout(e,200)};e.addEventListener("scroll",r,false);e.addEventListener("resize",i,false)},_scrollPage:function(){var e=this;this.elems.forEach(function(t,n){if(i(t,e.options.viewportFactor)){e.animate(t)}});this.scrolled=false},parseLanguage:function(e){function i(e){var t=[],n=["from","the","and","then","but"];e.forEach(function(e,r){if(n.indexOf(e)>-1){return}t.push(e)});return t}var t=e.getAttribute("data-scrollreveal").split(/[, ]+/),n,r={};t=i(t);t.forEach(function(e,i){switch(e){case"enter":n=t[i+1];if(n=="top"||n=="bottom"){r.axis="y"}if(n=="left"||n=="right"){r.axis="x"}return;case"after":r.delay=t[i+1];return;case"wait":r.delay=t[i+1];return;case"move":r.distance=t[i+1];return;case"over":r.duration=t[i+1];return;case"trigger":r.eventName=t[i+1];return;default:return}});if(n=="top"||n=="left"){if(!typeof r.distance=="undefined"){r.distance="-"+r.distance}else{r.distance="-"+this.options.distance}}return r},genCSS:function(e,t){var n=this.parseLanguage(e);var r=n.distance||this.options.distance,i=n.duration||this.options.duration,s=n.delay||this.options.delay,t=n.axis||this.options.axis;var o="-webkit-transition: all "+i+" ease "+s+";"+"-moz-transition: all "+i+" ease "+s+";"+"-o-transition: all "+i+" ease "+s+";"+"transition: all "+i+" ease "+s+";";var u="-webkit-transform: translate"+t+"("+r+");"+"-moz-transform: translate"+t+"("+r+");"+"transform: translate"+t+"("+r+");"+"opacity: 0;";var a="-webkit-transform: translate"+t+"(0);"+"-moz-transform: translate"+t+"(0);"+"transform: translate"+t+"(0);"+"opacity: 1;";return{transition:o,initial:u,target:a,totalDuration:(parseFloat(i)+parseFloat(s))*1e3}},animate:function(e){var t=this.genCSS(e);if(!e.getAttribute("data-sr-init")){e.setAttribute("style",t.initial);e.setAttribute("data-sr-init",true)}if(e.getAttribute("data-sr-complete")){return}if(i(e,this.options.viewportFactor)){e.setAttribute("style",t.target+t.transition);setTimeout(function(){e.removeAttribute("style");e.setAttribute("data-sr-complete",true)},t.totalDuration)}}};document.addEventListener("DOMContentLoaded",function(t){e.scrollReveal=new o})})(window)