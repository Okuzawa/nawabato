(function(){"use strict";var t={7780:function(t,e,s){var c=s(9963),n=s(6252),o=s(3577),a=s(2262),i=(s(7658),s(3907)),A=(0,i.MT)({state:{isLoading:!0,currentDeck:0,db_deck_list:[],blocks:[],cardList:[]},getters:{getBlockSrc:t=>e=>t.blocks[e],getCardList:t=>e=>t.cardList[e]},mutations:{addBlockSrc(t,{src:e}){t.blocks.push(e)},addCardList(t,{data:e}){t.cardList.push({id:e.id,name:e.name,count:e.count,cost:e.cost,map:JSON.parse("["+e.map+"]")})},createUserData:function(t){if(null==localStorage.getItem("userData")){console.log("新規作成"),localStorage.setItem("userData","true");let e=[];e.push({name:"スターターデッキ",deck:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]}),e.push({name:"デッキ1",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),e.push({name:"デッキ2",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),e.push({name:"デッキ3",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),e.push({name:"デッキ4",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),e.push({name:"デッキ5",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});let s=JSON.stringify(e);localStorage.setItem("tb_deck",s),t.db_deck_list=JSON.parse(s)}else{console.log("データ取得");let e=localStorage.getItem("tb_deck");t.db_deck_list=JSON.parse(e)}},SaveDeck(t,{name:e,deck:s}){t.db_deck_list[t.currentDeck].deck=s,t.db_deck_list[t.currentDeck].name=e;let c=JSON.stringify(t.db_deck_list);localStorage.setItem("tb_deck",c)}},actions:{addCardListAsync:function(t){const e="https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";fetch(e).then((function(t){return t.json()})).then((function(e){for(let s in e)t.commit("addCardList",{data:e[s]})})).then((function(){t.state.isLoading=!1,console.log("done")}))}}}),l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRF////nJychYaIkwAAACJJREFUeJxjYBgkgPE/ChgVGBUYFRgVGBUYFRgVoIHAIAEAZOcaq2ZoT28AAAAASUVORK5CYII=",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF//93///f///L//95//8d//91//8t///j///Z//8h//9H//9B//8f//8p//9R//9N//8v//9l//9j//8x//877OwAiIgAkpIAiooA6OgA//89lJQApqYAlpYAWlyBpAAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF/813//Pf/+zL/855/60d/811/7It//Xj//HZ/64h/7xH/7pB/60f/7Ep/79R/75N/7Mv/8dl/8Zj/7Qx/7c77JYAiFYAkl0AilgA6JMA/7g9lF4ApmkAll8AOftDJwAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC";const u={class:"deckList"},k={class:"list"},m=["onClick"];function p(t,e,s,c,a,i){const A=(0,n.up)("Deck");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("h4",null,(0,o.zw)(this.$store.state.db_deck_list[this.$store.state.currentDeck].name)+" マス合計："+(0,o.zw)(a.totalCount),1),(0,n._)("div",k,[(0,n._)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.$store.state.db_deck_list,((t,e,s)=>((0,n.wg)(),(0,n.iD)("div",{class:"name",key:s},[(0,n._)("ul",{class:"btn btn-outline-secondary",onClick:t=>i.selectDeck(e)},[(0,n._)("p",null,(0,o.zw)(t.name),1)],8,m)])))),128))]),(0,n.Wm)(A,{deck:a.myDeck},null,8,["deck"])])])}const h={class:"CardItem"},g={ref:"cardCanvas"},f={class:"name"},v={class:"count"},b=(0,n._)("p",{class:"sp"},"消費SP",-1),D={class:"cost"};function w(t,e,s,c,a,i){return(0,n.wg)(),(0,n.iD)("div",h,[(0,n._)("button",{class:(0,o.C_)(["card-item btn btn-outline-secondary",{active:a.isSelect}]),onClick:e[0]||(e[0]=e=>{i.OnClick(),t.$emit("clickEvent")})},[(0,n._)("canvas",g,null,512),(0,n._)("p",f,(0,o.zw)(s.name),1),(0,n._)("div",v,[(0,n._)("p",null,(0,o.zw)(s.count),1)]),(0,n._)("div",null,[b,(0,n._)("p",D,(0,o.zw)(s.cost),1)])],2)])}var _={name:"CardItem",props:{id:Number,name:String,count:Number,cost:Number,map:Array,block:String,sp_block:String,isActiv:{default:!0},select:{default:!1},clickEvent:Function},data(){return{enabled:!0,isSelect:!1}},mounted(){this.ctx=this.$refs.cardCanvas.getContext("2d"),this.imageDraw(this.map),0!=this.id&&(this.enabled=this.isActiv.enabled,this.select.select!=this.isSelect&&(this.isSelect=this.select.select))},watch:{map:function(){this.imageDraw(this.map)}},methods:{imageDraw:function(t){let e=0;for(let s=0;s<8;s++)for(let c=0;c<8;c++){let n=new Image;switch(t[e]){case 0:n.src=this.$store.state.blocks[0];break;case 1:n.src=this.block;break;case 2:n.src=this.sp_block;break;default:break}n.onload=()=>{this.ctx.drawImage(n,36*c+6,18*s+3,36,18)},e++}},OnClick:function(){this.enabled&&(this.isSelect?this.isSelect=!1:this.isSelect=!0)}}},y=s(3744);const C=(0,y.Z)(_,[["render",w]]);var I=C;const S={class:"container"};var B={__name:"Deck",props:{deck:Array},setup(t){const e=t;return(t,s)=>((0,n.wg)(),(0,n.iD)("div",S,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.deck,((t,e,s)=>((0,n.wg)(),(0,n.iD)("div",{key:s},[(0,n.Wm)(I,{id:t.id,name:t.name,count:t.count,cost:t.cost,map:t.map,block:(0,a.SU)(A).state.blocks[1],sp_block:(0,a.SU)(A).state.blocks[2],enabled:!1},null,8,["id","name","count","cost","map","block","sp_block"])])))),128))]))}};const L=(0,y.Z)(B,[["__scopeId","data-v-43acd81e"]]);var O=L,N={name:"CardListView",components:{Deck:O},props:{},data(){return{totalCount:0,myDeck:[]}},methods:{loadDeck:function(){this.myDeck.splice(0);let t=this.$store.state.db_deck_list[this.$store.state.currentDeck].deck;t.forEach((t=>this.myDeck.push(this.$store.getters.getCardList(t)))),this.totalCount=this.getTotalCount(this.myDeck)},selectDeck:function(t){this.$store.state.currentDeck=t,this.loadDeck()},getTotalCount:function(t){let e=0;return t.forEach((t=>{e+=t.count})),e}},created(){this.loadDeck()}};const P=(0,y.Z)(N,[["render",p],["__scopeId","data-v-447a96a6"]]);var E=P;const F=t=>((0,n.dD)("data-v-6f5f8028"),t=t(),(0,n.Cn)(),t),x={class:"post"},Q=F((()=>(0,n._)("label",null,"デッキ名",-1))),z={class:"edit"},J={key:0},R={key:1};function U(t,e,s,a,i,A){const l=(0,n.up)("DeckInfo"),r=(0,n.up)("CardList");return(0,n.wg)(),(0,n.iD)("div",x,[(0,n._)("div",null,[Q,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>i.deckName=t)},null,512),[[c.nr,i.deckName]])]),(0,n._)("div",z,[(0,n._)("h4",null,"マス合計:"+(0,o.zw)(i.totalCount),1),1==i.editType?((0,n.wg)(),(0,n.iD)("div",J,[(0,n.Wm)(l,{deck:A.loadDeck,onPick:A.pickUp,class:"deck-list"},null,8,["deck","onPick"]),(0,n._)("button",{type:"button",class:"btn btn-success",onClick:e[1]||(e[1]=(...t)=>A.saveDeck&&A.saveDeck(...t))},"保存")])):(0,n.kq)("",!0),2==i.editType?((0,n.wg)(),(0,n.iD)("div",R,[(0,n.Wm)(r,{myDeck:i.myDeck,class:"card-list",onChange:A.changeCard},null,8,["myDeck","onChange"]),(0,n._)("button",{type:"button",class:"btn btn-secondary",onClick:e[2]||(e[2]=t=>i.editType=1)},"キャンセル")])):(0,n.kq)("",!0)])])}const $={class:"container"};function j(t,e,s,c,o,a){const i=(0,n.up)("CardItem");return(0,n.wg)(),(0,n.iD)("div",$,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.$store.state.cardList,((t,e,s)=>((0,n.wg)(),(0,n.iD)("div",{key:s},[(0,n.Wm)(i,{id:t.id,name:t.name,count:t.count,cost:t.cost,map:t.map,block:this.$store.state.blocks[1],sp_block:this.$store.state.blocks[2],onClick:e=>a.change(t.id),select:{select:-1!=this.myDeck.indexOf(t)},isActiv:{enabled:-1==this.myDeck.indexOf(t)}},null,8,["id","name","count","cost","map","block","sp_block","onClick","select","isActiv"])])))),128))])}var K={name:"CardListView",components:{CardItem:I},props:{myDeck:Array},data(){return{}},methods:{change:function(t){this.$emit("change",t)}}};const T=(0,y.Z)(K,[["render",j],["__scopeId","data-v-9b482f92"]]);var Z=T;const Y={class:"container"};function G(t,e,s,c,o,a){const i=(0,n.up)("CardItem");return(0,n.wg)(),(0,n.iD)("div",Y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.cardList,((t,e,s)=>((0,n.wg)(),(0,n.iD)("div",{key:s},[(0,n.Wm)(i,{id:t.id,name:t.name,count:t.count,cost:t.cost,map:t.map,block:this.$store.state.blocks[1],sp_block:this.$store.state.blocks[2],onClick:t=>a.pickCard(e)},null,8,["id","name","count","cost","map","block","sp_block","onClick"])])))),128))])}var H={name:"CardListView",components:{CardItem:I},props:{deck:Array},data(){return{cardList:[]}},mounted(){this.loadDeck(this.deck)},methods:{loadDeck:function(t){this.cardList=t},pickCard:function(t){this.$emit("pick",t)}}};const M=(0,y.Z)(H,[["render",G],["__scopeId","data-v-7a85e656"]]);var V=M,q={components:{CardList:Z,DeckInfo:V},props:{clickEvent:Function},data(){return{selectIndex:0,totalCount:0,myDeck:[],deckName:"",editType:1}},methods:{getTotalCount:function(t){let e=0;return t.forEach((t=>{e+=t.count})),e},pickUp:function(t){this.selectIndex=t,this.editType=2},changeCard:function(t){let e=this.$store.getters.getCardList(t);0!=t&&-1!=this.myDeck.indexOf(e)||(this.myDeck[this.selectIndex]=e,this.editType=1,this.totalCount=this.getTotalCount(this.myDeck))},saveDeck:function(){this.clickEvent();let t=[];this.myDeck.forEach((e=>{t.push(e.id)})),this.$store.commit("SaveDeck",{name:this.deckName,deck:t})}},computed:{loadDeck:{get:function(){return this.myDeck},set:function(t){this.myDeck.push(this.$store.getters.getCardList(t))}}},mounted:function(){this.$store.state.db_deck_list[this.$store.state.currentDeck].deck.forEach((t=>{this.loadDeck=t})),this.deckName=this.$store.state.db_deck_list[this.$store.state.currentDeck].name,this.totalCount=this.getTotalCount(this.myDeck)}};const W=(0,y.Z)(q,[["render",U],["__scopeId","data-v-6f5f8028"]]);var X=W;const tt=(0,n._)("h1",null,"ナワバトラー",-1),et={id:"overlay"},st={id:"content"},ct={class:"modal-header"},nt={key:0,class:"modal-title"},ot={key:1,class:"modal-title"},at={class:"modal-body"},it={key:0},At=(0,n._)("p",null,"読み込み中",-1),lt=[At],rt={key:1,id:"top-list"},dt={class:"modal-footer"},ut=(0,n._)("p",null,"編集へ",-1),kt=[ut],mt=(0,n._)("p",null,"デッキ一覧へ",-1),pt=[mt];var ht={__name:"App",setup(t){function e(){A.commit("addBlockSrc",{src:l}),A.commit("addBlockSrc",{src:r}),A.commit("addBlockSrc",{src:d}),A.dispatch("addCardListAsync"),A.commit("createUserData"),console.log("db:",A.state.db_deck_list)}e();const s=(0,a.iH)(0),i=(0,a.iH)(!1),u=()=>{s.value=1,i.value=!0,console.log("open")},k=()=>{s.value=0,i.value=!1};return(t,e)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[tt,(0,n._)("label",null,"選択中のデッキ ： "+(0,o.zw)((0,a.SU)(A).state.db_deck_list[(0,a.SU)(A).state.currentDeck].name),1),(0,n._)("button",{onClick:u},"デッキ変更"),(0,n.wy)((0,n._)("div",et,[(0,n._)("div",st,[(0,n._)("div",ct,[1==s.value?((0,n.wg)(),(0,n.iD)("h5",nt,"デッキ一覧")):(0,n.kq)("",!0),2==s.value?((0,n.wg)(),(0,n.iD)("h5",ot,"デッキ編集")):(0,n.kq)("",!0),(0,n._)("button",{type:"button",class:"btn-close",onClick:k})]),(0,n._)("div",at,[(0,a.SU)(A).state.isLoading?((0,n.wg)(),(0,n.iD)("div",it,lt)):((0,n.wg)(),(0,n.iD)("div",rt,[1==s.value?((0,n.wg)(),(0,n.j4)(E,{key:0})):(0,n.kq)("",!0),2==s.value?((0,n.wg)(),(0,n.j4)(X,{key:1,clickEvent:u})):(0,n.kq)("",!0)]))]),(0,n._)("div",dt,[1==s.value?((0,n.wg)(),(0,n.iD)("button",{key:0,type:"button",class:"btn btn-primary transitionBtn",onClick:e[0]||(e[0]=t=>s.value=2)},kt)):(0,n.kq)("",!0),2==s.value?((0,n.wg)(),(0,n.iD)("button",{key:1,type:"button",class:"btn btn-primary transitionBtn",onClick:e[1]||(e[1]=t=>s.value=1)},pt)):(0,n.kq)("",!0)])])],512),[[c.F8,i.value]])],64))}};const gt=ht;var ft=gt;(0,c.ri)(ft).use(A).mount("#app")}},e={};function s(c){var n=e[c];if(void 0!==n)return n.exports;var o=e[c]={exports:{}};return t[c](o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,c,n,o){if(!c){var a=1/0;for(r=0;r<t.length;r++){c=t[r][0],n=t[r][1],o=t[r][2];for(var i=!0,A=0;A<c.length;A++)(!1&o||a>=o)&&Object.keys(s.O).every((function(t){return s.O[t](c[A])}))?c.splice(A--,1):(i=!1,o<a&&(a=o));if(i){t.splice(r--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var r=t.length;r>0&&t[r-1][2]>o;r--)t[r]=t[r-1];t[r]=[c,n,o]}}(),function(){s.d=function(t,e){for(var c in e)s.o(e,c)&&!s.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:e[c]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,c){var n,o,a=c[0],i=c[1],A=c[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in i)s.o(i,n)&&(s.m[n]=i[n]);if(A)var r=A(s)}for(e&&e(c);l<a.length;l++)o=a[l],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(r)},c=self["webpackChunktest_project"]=self["webpackChunktest_project"]||[];c.forEach(e.bind(null,0)),c.push=e.bind(null,c.push.bind(c))}();var c=s.O(void 0,[998],(function(){return s(7780)}));c=s.O(c)})();
//# sourceMappingURL=app.f6440824.js.map