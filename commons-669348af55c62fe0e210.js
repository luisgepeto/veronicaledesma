(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n("q1tI"),o=r(a),i=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function f(){l=e(u.map((function(e){return e.props}))),p.canUseDOM?t(l):n&&(l=n(l))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){u.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),f()},c.render=function(){return o.createElement(r,this.props)},a}(a.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",s),p}}},"9Dj+":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("TJpk"),i=n.n(o),c=n("Wbzz");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,c=l(e,["color","size"]);return a.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("circle",{cx:"12",cy:"12",r:"5"}),a.a.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),a.a.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),a.a.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),a.a.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),a.a.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),a.a.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),a.a.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),a.a.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))}));u.displayName="Sun";var f=u;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,c=d(e,["color","size"]);return a.a.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))}));m.displayName="Moon";var T=m,h=n("WXus"),E=function(e){var t=e.data,n=e.active,r=e.liClassName;return a.a.createElement("li",{className:r+" "+(n?"active":"")},a.a.createElement(c.a,{to:t.url,title:t.name,className:"text-color-2 focus:text-primary"},a.a.createElement("span",null,t.name)))},y=function(e){var t=e.name,n=e.className,r=void 0===n?"":n,o=e.liClassName,i=void 0===o?"":o,s=(e.current,e.withThemeSwitch),l=void 0===s||s,u=e.currentTheme,f=e.switchTheme,p=e.themes,d=Object(c.c)("1139857438").site.siteMetadata.navLinks.map((function(e,n){return a.a.createElement(E,{key:"navigation-"+t+"-"+n,data:e,active:!1,liClassName:i})}));if(l){var m=p.map((function(e,n){var r=n!==p.length-1?n+1:0;return a.a.createElement("button",{className:"text-color-2 transition-transform duration-200 transform top-0 left-0 "+(n===u?"scale-100":"scale-0 absolute"),title:"Switch to "+p[r].label,key:t+"-theme-switch-btn-"+e.name,onClick:f},e.icon)}));d.push(a.a.createElement("li",{className:"theme-switcher",key:t+"-theme-switcher relative"},m))}return a.a.createElement("ul",{className:r},d)};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=Object(r.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,o=e.size,i=void 0===o?24:o,c=v(e,["color","size"]);return a.a.createElement("svg",b({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),a.a.createElement("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),a.a.createElement("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),a.a.createElement("line",{x1:"3",y1:"18",x2:"21",y2:"18"}))}));g.displayName="Menu";var A=g,S=n("rePB"),w=n("dI71");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(S.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _=function(e){function t(t){var n;if((n=e.call(this,t)||this).touchStart=function(e){var t={touchX:e.touches[0].pageX,lastTouch:e.touches[0].pageX,touchTime:(new Date).getTime()};!n.state.sidebarOpen&&t.touchX<n.settings.sensitivity?(t.opening=!0,t.touchDown=!0):n.state.sidebarOpen&&(t.opening=!1,t.touchDown=!0),n.setState(t)},n.touchMove=function(e){if(n.state.touchDown)if(n.state.opening){n.sidebarParent.current.style.transitionDuration="0s",n.sidebarOverlay.current.style.transitionDuration="0s";var t=e.touches[0].pageX/(.7*n.state.screenWidth)*100;t=Math.min(100,t),n.changeSidebarState(100===t?"open":0===t?"close":"",{progress:t,lastTouch:e.touches[0].pageX,sidebarOpen:100===t||0!==t&&n.state.progress})}else{var r=n.state.touchX-e.touches[0].pageX;if(r>0){n.sidebarParent.current.style.transitionDuration="0s",n.sidebarOverlay.current.style.transitionDuration="0s";var a=100-Math.min(100,r/2);n.changeSidebarState(100===a?"open":0===a?"close":"",{progress:a,lastTouch:e.touches[0].pageX,sidebarOpen:100===a||0!==a&&n.state.progress})}}},n.touchEnd=function(e){if(n.state.touchDown&&(n.state.progress>80?n.openSidebar():n.closeSidebar(),n.setState({touchDown:!1})),n.state.lastTouch>n.state.touchX){var t=(new Date).getTime()-n.state.touchTime;(n.state.lastTouch-n.state.touchX)/t>.6&&n.openSidebar()}},n.changeSidebarState=function(e,t){void 0===t&&(t={}),"open"===e?(n.setState(P({progress:100,sidebarOpen:!0},t)),n.props.onChange&&n.props.onChange(!0)):"close"===e?(n.setState(P({progress:0,sidebarOpen:!1},t)),n.props.onChange&&n.props.onChange(!1)):n.setState(t)},n.openSidebar=function(){var e=100-n.state.progress;n.sidebarParent.current.style.transitionDuration=e/500+"s",n.sidebarOverlay.current.style.transitionDuration=e/500+"s",n.changeSidebarState("open")},n.closeSidebar=function(){var e=n.state.progress;n.sidebarParent.current.style.transitionDuration=e/250+"s",n.sidebarOverlay.current.style.transitionDuration=e/250+"s",n.changeSidebarState("close")},n.resizeWindow=function(){n.setState({screenWidth:window.screen.availWidth})},n.state={touchDown:!1,sidebarOpen:!1,progress:0,touchX:0,touchTime:0,lastTouch:0,transitionTime:0},n.sidebarParent=a.a.createRef(),n.sidebarOverlay=a.a.createRef(),n.open=!1,n.settings={sensitivity:50,overlayColor:"#000",sidebarWidth:"70%",swipeDistance:40},n.props.settings)for(var r in n.props.settings)n.props.settings.hasOwnProperty(r)&&n.settings.hasOwnProperty(r)&&(n.settings[r]=n.props.settings[r]);return n}Object(w.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("touchstart",this.touchStart),window.addEventListener("touchend",this.touchEnd),window.addEventListener("touchmove",this.touchMove),window.addEventListener("resize",this.resizeWindow),this.setState({screenWidth:window.screen.availWidth})},n.componentDidUpdate=function(){this.props.open?this.state.sidebarOpen||this.openSidebar():!1===this.props.open&&this.state.sidebarOpen&&this.closeSidebar(),this.open=this.props.open},n.componentWillUnmount=function(){window.removeEventListener("touchstart",this.touchStart),window.removeEventListener("touchend",this.touchEnd),window.removeEventListener("touchmove",this.touchMove),window.removeEventListener("resize",this.resizeWindow)},n.render=function(){var e=this;return a.a.createElement("div",{className:"r-swipe-sidebar-container",style:{position:"absolute"}},a.a.createElement("div",{className:"r-swipe-sidebar",ref:this.sidebarParent,style:{position:"fixed",left:this.state.progress-100+"%",width:this.settings.sidebarWidth,height:"100%",top:0,zIndex:9999,transitionProperty:"left",transitionDuration:this.state.transitionTime+"s",transitionTimingFunction:"linear",transform:"translate3d(0,0,0)"}},this.props.children),a.a.createElement("div",{className:"r-swipe-sidebar-overlay",ref:this.sidebarOverlay,role:"button",tabIndex:-1,style:{position:"fixed",top:0,bottom:0,left:0===this.state.progress?"-100%":"0%",width:"100%",height:"100%",background:"#000",zIndex:9998,transitionProperty:"opacity",transitionDuration:"0s",opacity:""+this.state.progress/200},onClick:this.closeSidebar,onKeyPress:function(t){27===t.which&&e.closeSidebar()}}))},t}(a.a.Component),M=function(e){var t=e.navPlaceholder,n=e.location,o=e.currentTheme,i=e.switchTheme,s=e.themes,l=e.allowThemeSwitch,u=void 0===l||l,f=(e.front,n),p=Object(c.c)("1946588481"),d=Object(r.useRef)(null),m=Object(r.useState)(!1),T=m[0],E=m[1],b=Object(r.useState)(0),v=b[0],g=b[1],S=Object(r.useState)(!1),w=S[0],O=S[1];return Object(r.useEffect)((function(){var e=function(){document.documentElement.scrollTop>50&&!T?E(!0):document.documentElement.scrollTop<=50&&T&&E(!1)};return window.addEventListener("scroll",e),g(d.current.getBoundingClientRect().height),function(){window.removeEventListener("scroll",e)}}),[T]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"duration-300 transition-all flex justify-center lg:justify-between items-center z-20 fixed w-full nav "+(T?"scrolled bg-bg p-4":"p-5"),ref:d},a.a.createElement("button",{className:"absolute text-primary outline-0 lg:hidden",style:{transform:"translateY(-50%)",top:"50%",left:"10px"},onClick:function(){O(!0)}},a.a.createElement(A,null)),a.a.createElement(_,{open:w,onChange:O},a.a.createElement("div",{className:"bg-bg h-full flex flex-col justify-center relative"},a.a.createElement("div",{className:"absolute top-0 my-4 text-center w-full"},a.a.createElement(c.a,{to:"/",title:p.site.siteMetadata.title,className:"inline-block"},a.a.createElement(h.b,{className:"duration-300 transition-all "+(T?"w-6":"w-8")}))),a.a.createElement("div",{className:"text-center"},a.a.createElement(y,{name:"sidebar-nav",current:f,currentTheme:o,switchTheme:i,themes:s,withThemeSwitch:u,liClassName:"block my-2"})))),a.a.createElement(c.a,{to:"/",title:p.site.siteMetadata.title},a.a.createElement(h.b,{className:"duration-300 transition-all "+(T?"w-6":"w-8")})),a.a.createElement("div",{className:"hidden lg:block"},a.a.createElement(y,{name:"navbar",className:"nav-links flex",current:f,currentTheme:o,switchTheme:i,themes:s,withThemeSwitch:u})),a.a.createElement("div",{className:"absolute line h-px left-0 bottom-0 bg-gradient-primary"})),t&&a.a.createElement("div",{style:{height:v+"px"}}))},N=function(){var e=Object(c.c)("2213455283"),t=e.site.siteMetadata.footerLinks.map((function(e,t){return a.a.createElement(R,{data:e,key:"footer-n-l-"+t})}));return a.a.createElement("footer",{className:"footer bg-bgalt py-12"},a.a.createElement("div",{className:"container mx-auto text-center"},a.a.createElement("div",{className:"flex justify-center my-3 mb-6"},a.a.createElement(c.a,{to:"/",title:e.site.siteMetadata.title},a.a.createElement(h.b,{className:"w-12"}))),a.a.createElement("div",{className:"text-color-2 my-3 footer-links animated-link-parent"},a.a.createElement(y,{className:"flex items-center justify-center flex-wrap",withThemeSwitch:!1})),a.a.createElement("div",{className:"text-color-2 my-3"},a.a.createElement("ul",null,t)),a.a.createElement("p",{className:"text-color-default text-lg"},"Copyright © ",e.site.siteMetadata.title," ",(new Date).getFullYear())))},R=function(e){var t=e.data;return a.a.createElement("li",{className:"inline-block mx-3 animated-link-parent"},a.a.createElement(c.a,{to:t.url,title:t.name},a.a.createElement("span",null,t.name)))};function C(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,s=e.image,l=Object(c.c)("2418326273").site,u=t||l.siteMetadata.description,f=s||l.siteMetadata.ogImage,p=i.replace(/^\w/,(function(e){return e.toUpperCase()}));return a.a.createElement(o.Helmet,{htmlAttributes:{lang:n},title:p,titleTemplate:p===l.siteMetadata.title?p:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:i},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:u},{property:"og:image",content:f}].concat(r)})}C.defaultProps={lang:"en",meta:[],description:""};var I=C,j=(n("spug"),function(e){var t=e.onChange;return a.a.createElement("div",{className:"fixed bottom-0 left-0 w-full bg-bgalt border-t-2 border-primary p-4 flex flex-wrap items-center justify-between z-50"},a.a.createElement("div",{className:"flex"},a.a.createElement("p",{className:"text-color-default mr-2"},"This website uses cookies to ensure you get the best experience on our website."),a.a.createElement(c.a,{to:"/privacy-policy",className:"text-color-2"},"Privacy policy")),a.a.createElement("button",{className:"px-3 py-1 rounded bg-bgalt border-2 border-secondary text-color-default hover:border-primary duration-200 transition-all",onClick:t},"Accept"))}),x=(t.a=function(e){var t=e.children,n=e.front,o=e.seo,i=e.navPlaceholder,s=void 0===i||i,l=e.location,u=Object(c.c)("3067102388"),p=[{name:"theme-light",label:"Light Theme",icon:a.a.createElement(f,null)},{name:"theme-dark",label:"Dark Theme",icon:a.a.createElement(T,null)}],d=u.site.siteMetadata.darkmode,m=(u.site.siteMetadata.cookiePolicy,Object(r.useState)(d?1:0)),h=m[0],E=m[1],y=Object(r.useState)(!1),b=y[0],v=y[1];Object(r.useEffect)((function(){if(localStorage.getItem("theme")){var e=Number(localStorage.getItem("theme"));E(e)}localStorage.getItem("cookie-accept")&&v(!0)}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(x,{data:u}),a.a.createElement(I,o),a.a.createElement("div",{className:"wrapper "+p[h].name},a.a.createElement("div",{className:"text-color-default bg-bg"},a.a.createElement(M,{front:n,navPlaceholder:s,location:l,currentTheme:h,switchTheme:function(){var e=h!==p.length-1?h+1:0;E(e),localStorage.setItem("theme",""+e)},themes:p,allowThemeSwitch:u.site.siteMetadata.switchTheme}),t,a.a.createElement(N,null)),u.site.siteMetadata.cookiePolicy&&!b&&a.a.createElement(j,{onChange:function(e){e.preventDefault(),localStorage.setItem("cookie-accept","1"),v(!0)}})))},function(e){var t=e.data;return a.a.createElement(i.a,null,a.a.createElement("link",{rel:"icon",href:t.site.siteMetadata.icon,type:"image/png"}),a.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Raleway:500,800&display=swap",rel:"stylesheet"}))})},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var l=o[s];if(!c(l))return!1;var u=e[l],f=t[l];if(!1===(a=n?n.call(r,u,f,l):void 0)||void 0===a&&u!==f)return!1}return!0}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=f(n("q1tI")),i=f(n("17x9")),c=f(n("8+s/")),s=f(n("bmMU")),l=n("v1p5"),u=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var T,h,E,y=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),b=(T=y,E=h=function(e){function t(){return d(this,t),m(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=p(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(T,a)},a(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(o.default.Component),h.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=T.peek,h.rewind=function(){var e=T.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);b.renderStatic=b.rewind,t.Helmet=b,t.default=b},WXus:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=function(e){var t=e.className,n=void 0===t?"logo":t,r=Object(o.c)("2083862410");return a.a.createElement("img",{src:r.site.siteMetadata.logo,alt:r.site.siteMetadata.title+" - logo",className:n})},c=function(e){return e.to?e.to.startsWith("/")?a.a.createElement(o.a,e,e.children):a.a.createElement("a",{href:e.to},e.children):a.a.createElement("button",e)}},bmMU:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,l,u=r(t),f=r(n);if(u&&f){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,T=n instanceof RegExp;if(m!=T)return!1;if(m&&T)return t.toString()==n.toString();var h=a(t);if((s=h.length)!==a(n).length)return!1;for(c=s;0!=c--;)if(!o.call(n,h[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(l=h[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},spug:function(e,t,n){},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=s(n("q1tI")),i=s(n("YVoz")),c=n("hFT/");function s(e){return e&&e.__esModule?e:{default:e}}var l,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},T=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var s=o[i],l=s.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),s=0;s<o.length;s++){var l=o[s],u=(0,i.default)({},a[l],r[l]);a[l]=u}return e}),[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){E(e)}),0)}),y=function(e){return clearTimeout(e)},b="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},A=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,a),O(p,d);var m={baseTag:_(c.TAG_NAMES.BASE,n),linkTags:_(c.TAG_NAMES.LINK,o),metaTags:_(c.TAG_NAMES.META,i),noscriptTags:_(c.TAG_NAMES.NOSCRIPT,s),scriptTags:_(c.TAG_NAMES.SCRIPT,u),styleTags:_(c.TAG_NAMES.STYLE,f)},T={},h={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,r=t.oldTags;n.length&&(T[e]=n),r.length&&(h[e]=m[e].oldTags)})),t&&t(),l(e,T,h)},w=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=w(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),s=0;s<i.length;s++){var l=i[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===a.indexOf(l)&&a.push(l);var f=o.indexOf(l);-1!==f&&o.splice(f,1)}for(var p=o.length-1;p>=0;p--)n.removeAttribute(o[p]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},_=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},R=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=N(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=M(n),o=w(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+u(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return N(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){A&&v(A),e.defer?A=b((function(){S(e,(function(){A=null}))})):(S(e),A=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:R(c.TAG_NAMES.BASE,t,r),bodyAttributes:R(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:R(c.ATTRIBUTE_NAMES.HTML,a,r),link:R(c.TAG_NAMES.LINK,o,r),meta:R(c.TAG_NAMES.META,i,r),noscript:R(c.TAG_NAMES.NOSCRIPT,s,r),script:R(c.TAG_NAMES.SCRIPT,l,r),style:R(c.TAG_NAMES.STYLE,u,r),title:R(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:T(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:T(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:T(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:T(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:T(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=b,t.warn=g}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-669348af55c62fe0e210.js.map