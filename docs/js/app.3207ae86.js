(function(){"use strict";var t={7730:function(t,e,n){var o=n(9963),s=n(6252),c=n(3577),A=n(2262),a=(n(7658),n(3907)),r=n(9520),i=(0,a.MT)({state:{isLoading:!0,currentDeck:1,db:null,blocks:[],cardList:[],deckList:[{name:"スターターデッキ",deck:[1,2,3,4,5,6,7]},{name:"temp",deck:[0,0,0,0,0,0,0]},{name:"temp",deck:[0,0,0,0,0,0,0]},{name:"temp",deck:[0,0,0,0,0,0,0]},{name:"temp",deck:[0,0,0,0,0,0,0]},{name:"temp",deck:[0,0,0,0,0,0,0]}]},getters:{getBlockSrc:t=>e=>t.blocks[e],getCardList:t=>e=>t.cardList[e]},mutations:{addBlockSrc(t,{src:e}){t.blocks.push(e)},addCardList(t,{data:e}){t.cardList.push({id:e.id,name:e.name,count:e.count,cost:e.cost,map:JSON.parse("["+e.map+"]")})},DB_CONNECTION:(t,e)=>t.db=e},actions:{addCardListAsync:function(t){const e="https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";fetch(e).then((function(t){return t.json()})).then((function(e){for(let n in e)t.commit("addCardList",{data:e[n]})})).then((function(){t.state.isLoading=!1,console.log("done")}))},createUserData:function(t){const e=new r.ZP("user_db");e.version(1).stores({user:"++user_id, name",deck:"++deck_id, name, deck_list"}),t.commit("DB_CONNECTION",{payload:e})}}}),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRF////nJychYaIkwAAACJJREFUeJxjYBgkgPE/ChgVGBUYFRgVGBUYFRgVoIHAIAEAZOcaq2ZoT28AAAAASUVORK5CYII=",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF//93///f///L//95//8d//91//8t///j///Z//8h//9H//9B//8f//8p//9R//9N//8v//9l//9j//8x//877OwAiIgAkpIAiooA6OgA//89lJQApqYAlpYAWlyBpAAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF/813//Pf/+zL/855/60d/811/7It//Xj//HZ/64h/7xH/7pB/60f/7Ep/79R/75N/7Mv/8dl/8Zj/7Qx/7c77JYAiFYAkl0AilgA6JMA/7g9lF4ApmkAll8AOftDJwAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC";const k={class:"deckList"},p={class:"list"},m=["onClick"];function g(t,e,n,o,A,a){const r=(0,s.up)("Deck");return(0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("div",p,[(0,s._)("div",null,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.$store.state.deckList,((t,e,n)=>((0,s.wg)(),(0,s.iD)("div",{class:"name",key:n},[(0,s._)("ul",{class:"btn btn-outline-secondary",onClick:t=>a.selectDeck(e)},[(0,s._)("p",null,(0,c.zw)(t.name),1)],8,m)])))),128))]),(0,s.Wm)(r,{deck:A.myDeck},null,8,["deck"])])])}const v={class:"CardItem"},f={ref:"cardCanvas"},h={class:"name"},w={class:"count"},b=(0,s._)("p",{class:"sp"},"消費SP",-1),D={class:"cost"};function _(t,e,n,o,A,a){return(0,s.wg)(),(0,s.iD)("div",v,[(0,s._)("button",{class:"card-item btn btn-outline-secondary",onClick:e[0]||(e[0]=(...t)=>a.select&&a.select(...t))},[(0,s._)("canvas",f,null,512),(0,s._)("p",h,(0,c.zw)(n.name),1),(0,s._)("div",w,[(0,s._)("p",null,(0,c.zw)(n.count),1)]),(0,s._)("div",null,[b,(0,s._)("p",D,(0,c.zw)(n.cost),1)])])])}var C={name:"CardItem",props:{id:Number,name:String,count:Number,cost:Number,map:Array,block:String,sp_block:String},data(){return{isSelect:!1}},mounted(){this.ctx=this.$refs.cardCanvas.getContext("2d"),this.imageDraw(this.map)},methods:{imageDraw:function(t){let e=0;for(let n=0;n<8;n++)for(let o=0;o<8;o++){let s=new Image;switch(t[e]){case 0:s.src=this.$store.state.blocks[0];break;case 1:s.src=this.block;break;case 2:s.src=this.sp_block;break;default:break}s.onload=()=>{this.ctx.drawImage(s,36*o+6,18*n+3,36,18)},e++}},select:function(){console.log(this.id,this.name)}}},y=n(3744);const I=(0,y.Z)(C,[["render",_]]);var B=I;const L={class:"container"};var F={__name:"Deck",props:{deck:Array},setup(t){const e=t;return(t,n)=>((0,s.wg)(),(0,s.iD)("div",L,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.deck,((t,e,n)=>((0,s.wg)(),(0,s.iD)("div",{key:n},[(0,s.Wm)(B,{id:t.id,name:t.name,count:t.count,cost:t.cost,map:t.map,block:this.$store.state.blocks[1],sp_block:this.$store.state.blocks[2]},null,8,["id","name","count","cost","map","block","sp_block"])])))),128))]))}};const O=(0,y.Z)(F,[["__scopeId","data-v-a42a7578"]]);var P=O,N={name:"CardListView",components:{Deck:P},props:{},data(){return{myDeck:[]}},methods:{loadDeck:function(){this.myDeck.splice(0);let t=this.$store.state.deckList[this.$store.state.currentDeck].deck;t.forEach((t=>this.myDeck.push(this.$store.getters.getCardList(t)))),console.log(this.myDeck)},selectDeck:function(t){this.$store.state.currentDeck=t,this.loadDeck()}},created(){this.loadDeck()}};const S=(0,y.Z)(N,[["render",g],["__scopeId","data-v-0630826f"]]);var E=S;const Q={class:"post"},x=(0,s._)("div",null,[(0,s._)("label",null,"デッキ名"),(0,s._)("input",{type:"text"}),(0,s._)("button",null,"保存")],-1);function z(t,e,n,o,c,A){const a=(0,s.up)("Button"),r=(0,s.up)("DeckInfo"),i=(0,s.up)("HelloWorld"),l=(0,s.up)("CardList");return(0,s.wg)(),(0,s.iD)("div",Q,[(0,s.Wm)(a,{onClickEvent:A.hoge},null,8,["onClickEvent"]),x,(0,s.Wm)(r,{deck:A.loadDeck},null,8,["deck"]),(0,s.Wm)(i,{msg:"カード一覧"}),(0,s.Wm)(l)])}const R={class:"container"};function Z(t,e,n,o,c,A){const a=(0,s.up)("CardItem");return(0,s.wg)(),(0,s.iD)("div",R,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(this.$store.state.cardList,((t,e,n)=>((0,s.wg)(),(0,s.iD)("div",{key:n},[(0,s.Wm)(a,{id:t.id,name:t.name,count:t.count,cost:t.cost,map:t.map,block:this.$store.state.blocks[1],sp_block:this.$store.state.blocks[2]},null,8,["id","name","count","cost","map","block","sp_block"])])))),128))])}var j={name:"CardListView",components:{CardItem:B},data(){return{}},methods:{}};const K=(0,y.Z)(j,[["render",Z],["__scopeId","data-v-f0885af8"]]);var J=K;const H={class:"container"};function $(t,e,n,o,c,A){const a=(0,s.up)("CardItem");return(0,s.wg)(),(0,s.iD)("div",H,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(c.cardList,((t,e,n)=>((0,s.wg)(),(0,s.iD)("div",{key:n},[(0,s.Wm)(a,{name:t.name,count:t.count,cost:t.cost,map:t.map,block:this.$store.state.blocks[1],sp_block:this.$store.state.blocks[2]},null,8,["name","count","cost","map","block","sp_block"])])))),128))])}var M={name:"CardListView",components:{CardItem:B},props:{deck:Array},data(){return{cardList:[]}},mounted(){this.loadDeck(this.deck)},methods:{loadDeck:function(t){this.cardList=t}}};const Y=(0,y.Z)(M,[["render",$],["__scopeId","data-v-5663cc5b"]]);var G=Y;const U={class:"hello"};function V(t,e,n,o,A,a){return(0,s.wg)(),(0,s.iD)("div",U,[(0,s._)("h1",null,(0,c.zw)(n.msg),1)])}var T={name:"HelloWorld",props:{msg:String}};const W=(0,y.Z)(T,[["render",V],["__scopeId","data-v-7904a567"]]);var q=W;const X={class:"hogeButton"},tt=(0,s._)("p",null,"hoge",-1),et=[tt];function nt(t,e,n,o,c,A){return(0,s.wg)(),(0,s.iD)("div",X,[(0,s._)("button",{class:"temp",onClick:e[0]||(e[0]=e=>{A.onFocus(),t.$emit("clickEvent")})},et)])}var ot={name:"hogeButton",props:{clickEvent:Function},data(){return{focus:this.onFocus}},mounted(){},methods:{onFocus:function(){console.log("フォーカスイン")},onBlur:function(){console.log("フォーカスアウト")},onChange:function(){console.log("値変更")}}};const st=(0,y.Z)(ot,[["render",nt]]);var ct=st,At={components:{HelloWorld:q,CardList:J,DeckInfo:G,Button:ct},props:{},data(){return{myDeck:[],cardList:[]}},methods:{hoge:function(){this.cardList.push(0),this.loadDeck=0}},computed:{loadDeck:{get:function(){return this.myDeck},set:function(t){this.myDeck.push(this.$store.state.cardList[t])}}}};const at=(0,y.Z)(At,[["render",z]]);var rt=at;const it=(0,s._)("h1",null,"ナワバトラー",-1),lt={id:"overlay"},dt={id:"content"},ut=(0,s._)("h5",{class:"modal-title"},"Modal title",-1),kt={class:"modal-body"},pt=(0,s._)("p",null,"Modal body text goes here.",-1),mt={key:0},gt=(0,s._)("p",null,"読み込み中",-1),vt=[gt],ft={key:1},ht={class:"modal-footer"};var wt={__name:"App",setup(t){function e(){i.commit("addBlockSrc",{src:l}),i.commit("addBlockSrc",{src:d}),i.commit("addBlockSrc",{src:u}),i.dispatch("addCardListAsync"),null==i.state.db&&i.dispatch("createUserData")}e();const n=(0,A.iH)(1),a=(0,A.iH)(!1),r=()=>{console.log(i.state.currentDeck),a.value=!0},k=()=>{console.log("close"),a.value=!1};return(t,e)=>((0,s.wg)(),(0,s.iD)(s.HY,null,[it,(0,s._)("label",null,"選択中のデッキ ： "+(0,c.zw)(this.$store.state.deckList[this.$store.state.currentDeck].name),1),(0,s._)("button",{onClick:r},"デッキ変更"),(0,s.wy)((0,s._)("div",lt,[(0,s._)("div",dt,[(0,s._)("div",{class:"modal-header"},[ut,(0,s._)("button",{type:"button",class:"btn-close",onClick:k})]),(0,s._)("div",kt,[pt,this.$store.state.isLoading?((0,s.wg)(),(0,s.iD)("div",mt,vt)):((0,s.wg)(),(0,s.iD)("div",ft,[1==n.value?((0,s.wg)(),(0,s.j4)(E,{key:0})):(0,s.kq)("",!0),2==n.value?((0,s.wg)(),(0,s.j4)(rt,{key:1})):(0,s.kq)("",!0)]))]),(0,s._)("div",ht,[(0,s._)("button",{type:"button",class:"btn btn-secondary",onClick:e[0]||(e[0]=t=>n.value=1)}," Close "),(0,s._)("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=t=>n.value=2)}," Save changes ")])])],512),[[o.F8,a.value]])],64))}};const bt=wt;var Dt=bt;(0,o.ri)(Dt).use(i).mount("#app")}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var c=e[o]={exports:{}};return t[o](c,c.exports,n),c.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,c){if(!o){var A=1/0;for(l=0;l<t.length;l++){o=t[l][0],s=t[l][1],c=t[l][2];for(var a=!0,r=0;r<o.length;r++)(!1&c||A>=c)&&Object.keys(n.O).every((function(t){return n.O[t](o[r])}))?o.splice(r--,1):(a=!1,c<A&&(A=c));if(a){t.splice(l--,1);var i=s();void 0!==i&&(e=i)}}return e}c=c||0;for(var l=t.length;l>0&&t[l-1][2]>c;l--)t[l]=t[l-1];t[l]=[o,s,c]}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,c,A=o[0],a=o[1],r=o[2],i=0;if(A.some((function(e){return 0!==t[e]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(r)var l=r(n)}for(e&&e(o);i<A.length;i++)c=A[i],n.o(t,c)&&t[c]&&t[c][0](),t[c]=0;return n.O(l)},o=self["webpackChunktest_project"]=self["webpackChunktest_project"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7730)}));o=n.O(o)})();
//# sourceMappingURL=app.3207ae86.js.map