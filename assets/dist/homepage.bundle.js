!function(e){var t={};function l(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=t,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=6)}([function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";var n;n=jQuery,jQuery(document).ready((function(){n(document).scroll((function(){const e=n("#logo"),t=e.attr("src");n(document).scrollTop()>40?(n("#top-navbar").removeClass("initial-navbar"),n("#top-navbar").addClass("final-navbar shadow"),n("#navbar-toggler").removeClass("navbar-dark"),n("#navbar-toggler").addClass("navbar-light"),t.includes("assets/images/logo.png")||e.attr("src","assets/images/logo.png")):(n("#top-navbar").removeClass("final-navbar shadow"),n("#top-navbar").addClass("initial-navbar"),n("#navbar-toggler").removeClass("navbar-light"),n("#navbar-toggler").addClass("navbar-dark"),t.includes("assets/images/logo-inverted.png")||e.attr("src","assets/images/logo-inverted.png"))}))}))},,,function(e,t,l){l(7),l(8),l(9),l(10),l(11),l(12),l(13),l(14),l(0),l(1),l(2),e.exports=l(3)},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";var n;n=jQuery,jQuery(document).ready((function(){var e=!1,t=!1,l=!1;function i(){window.innerWidth<=425?(e=!0,t=!1,l=!1):window.innerWidth<=768?(e=!1,t=!0,l=!1):(e=!1,t=!1,l=!0)}if(i(),null!=document.getElementById("typing-carousel-data")){var d=document.getElementById("typing-carousel-data").children;if(0!=d.length){var a=[];Array.from(d).forEach(e=>{a.push(e.textContent)}),ityped.init("#ityped",{strings:a,startDelay:200,loop:!0})}}n("a").on("click",(function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;n("html, body").animate({scrollTop:n(t).offset().top},800,(function(){window.location.hash=t}))}}));var c=document.getElementsByClassName("horizontal-line");for(let e=0;e<c.length;e++)e%2?(c[e].children[0].children[0].classList.add("bottom-right"),c[e].children[2].children[0].classList.add("top-left")):(c[e].children[0].children[0].classList.add("top-right"),c[e].children[2].children[0].classList.add("bottom-left"));var s=document.getElementsByClassName("vertical-line");for(let e=0;e<s.length;e++)e%2&&s[e].classList.add("vertical-line-left-adjustment");function o(){if(!e){var t=document.getElementById("primary-skills");if(null!=t){var l=t.children,n=0;for(let e=0;e<l.length;e++)l[e].children[0].clientHeight>n&&(n=l[e].children[0].clientHeight);for(let e=0;e<l.length;e++)l[e].children[0].setAttribute("style","min-height: "+n+"px;")}}}o();var r=document.getElementById("project-filter-buttons");if(null!=r){var p=r.children;for(let e=0;e<p.length;e++)p[e].onclick=function(){m(p[e].id)}}var h=document.getElementById("project-card-holder");function m(){let e=document.getElementsByClassName("github-button-inactive");for(;e.length>0;)null!=e[0].classList&&e[0].classList.replace("github-button-inactive","github-button");renderGithubButton()}function u(){if(!e){let e=document.getElementById("recent-post-cards");if(null!=e){let t=e.children,l=0;for(let e=0;e<t.length;e++)t[e].children[1].clientHeight>l&&(l=t[e].children[1].clientHeight);for(let e=0;e<t.length;e++)t[e].children[1].setAttribute("style","min-height: "+l+"px;")}}}function g(e,t,l){let n=document.createElement("div");n.classList.add("col-lg-6","m-0","p-0"),n.appendChild(t[l].cloneNode(!0)),n.children[0].classList.add("img-type-1"),e.appendChild(n),l++;let i=document.createElement("div");i.classList.add("col-lg-3","m-0","p-0"),i.appendChild(t[l].cloneNode(!0)),i.children[0].classList.add("img-type-1"),e.appendChild(i),l++;let d=document.createElement("div");d.classList.add("col-lg-3","m-0","p-0"),d.appendChild(t[l].cloneNode(!0)),d.children[0].classList.add("img-type-2"),l++,d.appendChild(t[l].cloneNode(!0)),d.children[1].classList.add("img-type-2"),e.appendChild(d),l++}function f(e,t,l){let n=document.createElement("div");n.classList.add("col-lg-3","m-0","p-0"),n.appendChild(t[l].cloneNode(!0)),n.children[0].classList.add("img-type-2"),l++,n.appendChild(t[l].cloneNode(!0)),n.children[1].classList.add("img-type-2"),e.appendChild(n),l++;let i=document.createElement("div");i.classList.add("col-lg-3","m-0","p-0"),i.appendChild(t[l].cloneNode(!0)),i.children[0].classList.add("img-type-1"),e.appendChild(i),l++;let d=document.createElement("div");d.classList.add("col-lg-6","m-0","p-0"),d.appendChild(t[l].cloneNode(!0)),d.children[0].classList.add("img-type-1"),e.appendChild(d),l++}function v(e,t,l){console.log(l);let n=document.createElement("div");n.classList.add("col-lg-6","col-md-6","m-0","p-0"),n.appendChild(t[l].cloneNode(!0)),n.children[0].classList.add("img-type-1"),e.appendChild(n),l++;let i=document.createElement("div");i.classList.add("col-lg-3","col-md-3","m-0","p-0"),i.appendChild(t[l].cloneNode(!0)),i.children[0].classList.add("img-type-1"),e.appendChild(i),l++;let d=document.createElement("div");d.classList.add("col-lg-3","col-md-3","m-0","p-0"),d.appendChild(t[l].cloneNode(!0)),d.children[0].classList.add("img-type-1"),e.appendChild(d),l++}function y(e,t,l){let n=document.createElement("div");n.classList.add("col-lg-3","col-md-3","m-0","p-0"),n.appendChild(t[l].cloneNode(!0)),n.children[0].classList.add("img-type-1"),e.appendChild(n),l++;let i=document.createElement("div");i.classList.add("col-lg-3","col-md-3","m-0","p-0"),i.appendChild(t[l].cloneNode(!0)),i.children[0].classList.add("img-type-1"),e.appendChild(i),l++;let d=document.createElement("div");d.classList.add("col-lg-6","col-md-3","m-0","p-0"),d.appendChild(t[l].cloneNode(!0)),d.children[0].classList.add("img-type-1"),e.appendChild(d),l++}function L(e,t,l){let n=document.createElement("div");n.classList.add("col-lg-6","col-md-6","m-0","p-0"),n.appendChild(t[l].cloneNode(!0)),n.children[0].classList.add("img-type-1"),e.appendChild(n),l++;let i=document.createElement("div");i.classList.add("col-lg-6","col-md-6","m-0","p-0"),i.appendChild(t[l].cloneNode(!0)),i.children[0].classList.add("img-type-1"),e.appendChild(i),l++}function C(e,t,l){let n=document.createElement("div");n.classList.add("col-lg-6","col-md-6","m-0","p-0"),n.appendChild(t[l].cloneNode(!0)),n.children[0].classList.add("img-type-1"),e.appendChild(n),l++}function b(){let e=document.getElementById("gallery");if(null==e)return;e.innerHTML="";const n=document.getElementById("achievements-holder").children;let i=n.length,d=0,a=1;for(;d<i;)l?d+4<=i?(a%2?g(e,n,d):f(e,n,d),d+=4):d+3<=i?(a%2?v(e,n,d):y(e,n,d),d+=3):d+2<=i?(L(e,n,d),d+=2):(C(e,n,d),d++):t&&d+2<=i?(L(e,n,d),d+=2):(C(e,n,d),d++),a++;let c=document.getElementsByClassName("achievement-entry");i=c.length;for(let e=0;e<i;e++)c[e].onclick=function(){let e=document.getElementsByClassName("achievement-entry"),t=e.length;for(let l=0;l<t;l++)e[l].classList.toggle("hidden");this.classList.toggle("achievement-details"),this.classList.toggle("hidden"),this.parentElement.classList.toggle("col-lg-12"),this.parentElement.classList.toggle("col-md-12"),this.parentElement.classList.toggle("col-sm-12"),null!=this.children.caption&&this.children.caption.classList.toggle("hidden"),null!=this.children["enlarge-icon"]&&(this.children["enlarge-icon"].classList.toggle("fa-search-plus"),this.children["enlarge-icon"].classList.toggle("fa-times")),null!=this.children["achievement-title"]&&this.children["achievement-title"].classList.toggle("hidden")}}null!=h&&0!=h.children.length&&n(".filtr-projects").filterizr({layout:"sameWidth"}),u(),b(),window.onresize=function(){i(),o(),u(),b()},e&&n(".position").click((function(){let e=n(this).find(".responsabilities");e.is(":visible")?e.slideUp("slow"):e.slideDown("slow")}))}))}]);