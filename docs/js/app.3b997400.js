(function(){"use strict";var e={2388:function(e,t,n){var A=n(9963),o=n(6252);const r=(0,o._)("h1",null,"ナワバトラー",-1),a=(0,o._)("a",{href:"/Lobby"},[(0,o._)("p",null,"ここはリンクになっています。")],-1),i=(0,o._)("button",{onclick:"location.href='/Lobby'"},"test",-1);function c(e,t,n,A,c,u){const s=(0,o.up)("router-link"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[r,(0,o._)("nav",null,[(0,o.Wm)(s,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Home")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(s,{to:"/Lobby"},{default:(0,o.w5)((()=>[(0,o.Uk)("ロビー")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(s,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("about")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(s,{to:"/deck-list"},{default:(0,o.w5)((()=>[(0,o.Uk)("デッキ一覧")])),_:1}),(0,o.Uk)(" | "),(0,o.Wm)(s,{to:"/deck-edit"},{default:(0,o.w5)((()=>[(0,o.Uk)("デッキ編集")])),_:1})]),a,i,(0,o.Wm)(l)],64)}var u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRF////nJychYaIkwAAACJJREFUeJxjYBgkgPE/ChgVGBUYFRgVGBUYFRgVoIHAIAEAZOcaq2ZoT28AAAAASUVORK5CYII=",s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF//93///f///L//95//8d//91//8t///j///Z//8h//9H//9B//8f//8p//9R//9N//8v//9l//9j//8x//877OwAiIgAkpIAiooA6OgA//89lJQApqYAlpYAWlyBpAAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF/813//Pf/+zL/855/60d/811/7It//Xj//HZ/64h/7xH/7pB/60f/7Ep/79R/75N/7Mv/8dl/8Zj/7Qx/7c77JYAiFYAkl0AilgA6JMA/7g9lF4ApmkAll8AOftDJwAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",d={created:function(){this.$store.commit("addBlockSrc",{src:u}),this.$store.commit("addBlockSrc",{src:s}),this.$store.commit("addBlockSrc",{src:l}),this.$store.dispatch("addCardListAsync"),console.log(this.$store.state.db),null==this.$store.state.db&&this.$store.dispatch("createUserData"),console.log(this.$store.state.db)}},f=n(3744);const p=(0,f.Z)(d,[["render",c]]);var m=p,h=n(2201),g=n(2262),b=n(2617);const k={class:"home"},v=(0,o._)("label",null,"ユーザー名",-1),w=(0,o._)("input",{type:"text",placeholder:"名前を入力"},null,-1),y={key:0,class:"btn btn-outline-secondary"},B=(0,o._)("p",null,"登録",-1),_=[B],C={key:1,class:"btn btn-outline-secondary"},I=(0,o._)("p",null,"ログイン",-1),O=[I],P=(0,o._)("button",{class:"btn btn-outline-secondary"},[(0,o._)("p",null,"登録情報を削除")],-1),L=(0,o._)("p",null,"登録情報にはユーザー名とデッキ情報だけが保存されるよ",-1);var N={__name:"HomeView",setup(e){const t=(0,g.iH)(1);return(e,n)=>((0,o.wg)(),(0,o.iD)("div",k,[(0,o.Wm)(b.Z,{msg:"ログイン画面"}),v,w,(0,o._)("div",null,[(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),value:"1"},null,512),[[A.G2,t.value]]),(0,o.Uk)("新しく部屋を作る "),(0,o.wy)((0,o._)("input",{type:"radio","onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),value:"2"},null,512),[[A.G2,t.value]]),(0,o.Uk)("友達の部屋に入る ")]),(0,o._)("div",null,[1==t.value?((0,o.wg)(),(0,o.iD)("button",y,_)):(0,o.kq)("",!0),2==t.value?((0,o.wg)(),(0,o.iD)("button",C,O)):(0,o.kq)("",!0),P]),L]))}};const E=N;var S=E;const F=[{path:"/",name:"home",component:S},{path:"/lobby",name:"lobby",component:()=>n.e(177).then(n.bind(n,7097))},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,9897))},{path:"/deck-list",name:"deck-list",component:()=>n.e(362).then(n.bind(n,7297))},{path:"/deck-edit",name:"deck-edit",component:()=>n.e(833).then(n.bind(n,8713)),props:e=>({id:e.params.deckID})}],D=(0,h.p7)({history:(0,h.PO)(""),routes:F});var U=D,Q=(n(7658),n(3907)),j=n(9520),x=(0,Q.MT)({state:{db:null,blocks:[],cardList:[],deckList:[{name:"スターターデッキ",deck:[1,2,3,4,5,6,7]},{name:"temp",deck:[]},{name:"temp",deck:[]},{name:"temp",deck:[]},{name:"temp",deck:[]},{name:"temp",deck:[]},{name:"temp",deck:[]},{name:"temp",deck:[]}]},getters:{getBlockSrc:e=>t=>e.blocks[t],getCardList:e=>t=>e.cardList[t]},mutations:{addBlockSrc(e,{src:t}){e.blocks.push(t)},addCardList(e,{data:t}){e.cardList.push({id:t.id,name:t.name,count:t.count,cost:t.cost,map:JSON.parse("["+t.map+"]")})},DB_CONNECTION:(e,t)=>e.db=t},actions:{addCardListAsync:function(e){const t="https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";fetch(t).then((function(e){return e.json()})).then((function(t){for(let n in t)e.commit("addCardList",{data:t[n]})}))},createUserData:function(e){const t=new j.ZP("user_db");t.version(1).stores({user:"++user_id, name",deck:"++deck_id, name, deck_list"}),e.commit("DB_CONNECTION",{payload:t})}}});(0,A.ri)(m).use(x).use(U).mount("#app")},2617:function(e,t,n){n.d(t,{Z:function(){return u}});var A=n(6252),o=n(3577);const r={class:"hello2"};var a={__name:"HelloWorld2",props:{msg:String},setup(e){const t=e;return(e,n)=>((0,A.wg)(),(0,A.iD)("div",r,[(0,A._)("h3",null,(0,o.zw)(t.msg),1)]))}},i=n(3744);const c=(0,i.Z)(a,[["__scopeId","data-v-4d6b024e"]]);var u=c}},t={};function n(A){var o=t[A];if(void 0!==o)return o.exports;var r=t[A]={exports:{}};return e[A](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,A,o,r){if(!A){var a=1/0;for(s=0;s<e.length;s++){A=e[s][0],o=e[s][1],r=e[s][2];for(var i=!0,c=0;c<A.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](A[c])}))?A.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(s--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var s=e.length;s>0&&e[s-1][2]>r;s--)e[s]=e[s-1];e[s]=[A,o,r]}}(),function(){n.d=function(e,t){for(var A in t)n.o(t,A)&&!n.o(e,A)&&Object.defineProperty(e,A,{enumerable:!0,get:t[A]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,A){return n.f[A](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+{177:"home",362:"deck-list",443:"about",833:"deck-edit"}[e]+"."+{177:"7b1be349",362:"a6b3bab8",443:"0258ce5a",833:"ecc172a2"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+{177:"home",362:"deck-list",443:"about",833:"deck-edit"}[e]+"."+{177:"05120de6",362:"685c9b5c",443:"ef87ae3c",833:"678f132f"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="test_project:";n.l=function(A,o,r,a){if(e[A])e[A].push(o);else{var i,c;if(void 0!==r)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var l=u[s];if(l.getAttribute("src")==A||l.getAttribute("data-webpack")==t+r){i=l;break}}i||(c=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=A),e[A]=[o];var d=function(t,n){i.onerror=i.onload=null,clearTimeout(f);var o=e[A];if(delete e[A],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),c&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,A,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(n){if(r.onerror=r.onload=null,"load"===n.type)A();else{var a=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=i,r.parentNode.removeChild(r),o(c)}};return r.onerror=r.onload=a,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),A=0;A<n.length;A++){var o=n[A],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var a=document.getElementsByTagName("style");for(A=0;A<a.length;A++){o=a[A],r=o.getAttribute("data-href");if(r===e||r===t)return o}},A=function(A){return new Promise((function(o,r){var a=n.miniCssF(A),i=n.p+a;if(t(a,i))return o();e(A,i,null,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={177:1,362:1,443:1,833:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=A(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,A){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)A.push(o[2]);else{var r=new Promise((function(n,A){o=e[t]=[n,A]}));A.push(o[2]=r);var a=n.p+n.u(t),i=new Error,c=function(A){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=A&&("load"===A.type?"missing":A.type),a=A&&A.target&&A.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",i.name="ChunkLoadError",i.type=r,i.request=a,o[1](i)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,A){var o,r,a=A[0],i=A[1],c=A[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(c)var s=c(n)}for(t&&t(A);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(s)},A=self["webpackChunktest_project"]=self["webpackChunktest_project"]||[];A.forEach(t.bind(null,0)),A.push=t.bind(null,A.push.bind(A))}();var A=n.O(void 0,[998],(function(){return n(2388)}));A=n.O(A)})();
//# sourceMappingURL=app.3b997400.js.map