import{l as i}from"./preact.module.ac6080a5.js";var v,r,p,V,H=0,T=[],m=[],F=i.__b,g=i.__r,A=i.diffed,q=i.__c,U=i.unmount;function N(n,t){i.__h&&i.__h(r,n,H||t),H=0;var _=r.__H||(r.__H={__:[],__h:[]});return n>=_.__.length&&_.__.push({__V:m}),_.__[n]}function P(n){return H=1,k(W,n)}function k(n,t,_){var o=N(v++,2);if(o.t=n,!o.__c&&(o.__=[_?_(t):W(void 0,t),function(c){var e=o.__N?o.__N[0]:o.__[0],f=o.t(e,c);e!==f&&(o.__N=[f,o.__[1]],o.__c.setState({}))}],o.__c=r,!r.u)){var a=function(c,e,f){if(!o.__c.__H)return!0;var l=o.__c.__H.__.filter(function(u){return u.__c});if(l.every(function(u){return!u.__N}))return!h||h.call(this,c,e,f);var y=!1;return l.forEach(function(u){if(u.__N){var j=u.__[0];u.__=u.__N,u.__N=void 0,j!==u.__[0]&&(y=!0)}}),!(!y&&o.__c.props===c)&&(!h||h.call(this,c,e,f))};r.u=!0;var h=r.shouldComponentUpdate,E=r.componentWillUpdate;r.componentWillUpdate=function(c,e,f){if(this.__e){var l=h;h=void 0,a(c,e,f),h=l}E&&E.call(this,c,e,f)},r.shouldComponentUpdate=a}return o.__N||o.__}function S(n,t){var _=N(v++,3);!i.__s&&C(_.__H,t)&&(_.__=n,_.i=t,r.__H.__h.push(_))}function $(n){return H=5,w(function(){return{current:n}},[])}function w(n,t){var _=N(v++,7);return C(_.__H,t)?(_.__V=n(),_.i=t,_.__h=n,_.__V):_.__}function x(){for(var n;n=T.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(s),n.__H.__h.forEach(d),n.__H.__h=[]}catch(t){n.__H.__h=[],i.__e(t,n.__v)}}i.__b=function(n){r=null,F&&F(n)},i.__r=function(n){g&&g(n),v=0;var t=(r=n.__c).__H;t&&(p===r?(t.__h=[],r.__h=[],t.__.forEach(function(_){_.__N&&(_.__=_.__N),_.__V=m,_.__N=_.i=void 0})):(t.__h.forEach(s),t.__h.forEach(d),t.__h=[],v=0)),p=r},i.diffed=function(n){A&&A(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(T.push(t)!==1&&V===i.requestAnimationFrame||((V=i.requestAnimationFrame)||z)(x)),t.__H.__.forEach(function(_){_.i&&(_.__H=_.i),_.__V!==m&&(_.__=_.__V),_.i=void 0,_.__V=m})),p=r=null},i.__c=function(n,t){t.some(function(_){try{_.__h.forEach(s),_.__h=_.__h.filter(function(o){return!o.__||d(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],i.__e(o,_.__v)}}),q&&q(n,t)},i.unmount=function(n){U&&U(n);var t,_=n.__c;_&&_.__H&&(_.__H.__.forEach(function(o){try{s(o)}catch(a){t=a}}),_.__H=void 0,t&&i.__e(t,_.__v))};var b=typeof requestAnimationFrame=="function";function z(n){var t,_=function(){clearTimeout(o),b&&cancelAnimationFrame(t),setTimeout(n)},o=setTimeout(_,100);b&&(t=requestAnimationFrame(_))}function s(n){var t=r,_=n.__c;typeof _=="function"&&(n.__c=void 0,_()),r=t}function d(n){var t=r;n.__c=n.__(),r=t}function C(n,t){return!n||n.length!==t.length||t.some(function(_,o){return _!==n[o]})}function W(n,t){return typeof t=="function"?t(n):t}export{w as F,$ as _,P as h,S as p};
