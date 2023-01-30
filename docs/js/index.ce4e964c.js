(function(){"use strict";var e={4792:function(e,t,A){var s=A(9963),a=A(6252),n=A(2262),o=(A(7658),A(3907)),c=A(4866);A(6947),A(9418);const r={apiKey:"AIzaSyArEFrBMUMDHAYTjFJ2HhsHb__zIPYMfLc",authDomain:"turf-war-ebf17.firebaseapp.com",projectId:"turf-war-ebf17",storageBucket:"turf-war-ebf17.appspot.com",messagingSenderId:"1096461103992",appId:"1:1096461103992:web:57b6f83644c9882d8d8e8d"};c.Z.initializeApp(r);const i=c.Z.firestore();var l=(0,o.MT)({state:{stageSideLength:30,gameMainPhase:0,isLoading:!0,userId:0,currentDeck:0,tb_deckList:[],blocks:[],ms_card:[],ms_stage:[],currentStage:1,stageObj:Object,roomsDocRef:null,roomId:0,enemyIndex:0,users:[],myUserObj:Object,enemyUserObj:Object},getters:{getBlockSrc:e=>t=>e.blocks[t],findCardById:e=>t=>e.ms_card.find((e=>e.id==t)),findCardsById:(e,t)=>e=>e.map((e=>t.findCardById(e)))},mutations:{addBlockSrc(e,{src:t}){e.blocks.push(t)},addCardList(e,{data:t}){e.ms_card.push({id:t.id,name:t.name,count:t.count,cost:t.cost,map:JSON.parse("["+t.map+"]")})},addStageList(e,{data:t}){e.ms_stage.push({id:t.id,name:t.name,map:JSON.parse("["+t.map+"]")})},createUserData(e){if(null==localStorage.getItem("user_id")){console.log("新規作成"),e.userId=Math.floor(899999*Math.random()+1e5),localStorage.setItem("user_id",e.userId);let t=[];t.push({name:"スターターデッキ",deck:[6,34,159,13,45,137,22,52,141,28,55,103,40,56,92]}),t.push({name:"デッキ1",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ2",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ3",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ4",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ5",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),e.tb_deckList=t,localStorage.setItem("tb_deck",JSON.stringify(t))}else console.log("データ取得"),e.tb_deckList=JSON.parse(localStorage.getItem("tb_deck")),e.userId=JSON.parse(localStorage.getItem("user_id"))},saveDeck(e,{name:t,deck:A}){e.tb_deckList[e.currentDeck].deck=A,e.tb_deckList[e.currentDeck].name=t,localStorage.setItem("tb_deck",JSON.stringify(e.tb_deckList))},createServer(e,{roomId:t}){e.roomDocRef=i.collection("rooms").doc(String(t))},eraseBufRoom(e){let t=JSON.parse(localStorage.getItem("buf_room_id"));null==t?console.log("途中退出した部屋はありません"):(i.collection("rooms").doc(String(t)).delete(),console.log("途中退出した部屋があったため、退出処理をしました"),localStorage.removeItem("buf_room_id")),e.gameMainPhase=0}},actions:{addCardListAsync:function(e){const t="https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";fetch(t).then((function(e){return e.json()})).then((function(t){for(let A in t)e.commit("addCardList",{data:t[A]})})).then((()=>e.state.isLoading=!1))},addStageListAsync:function(e){const t="https://script.google.com/macros/s/AKfycbxBYBbh3y1smCeFL_CPnIs1lHDUWjOXhQFejZmdnByn4jlvVJhH7L0RCIwj4VEhJQXn/exec";fetch(t).then((function(e){return e.json()})).then((function(t){for(let A in t)e.commit("addStageList",{data:t[A]})})).then((()=>e.state.stageObj=e.state.ms_stage[0]))}}}),d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRF////nJychYaIkwAAACJJREFUeJxjYBgkgPE/ChgVGBUYFRgVGBUYFRgVoIHAIAEAZOcaq2ZoT28AAAAASUVORK5CYII=",u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF//93///f///L//95//8d//91//8t///j///Z//8h//9H//9B//8f//8p//9R//9N//8v//9l//9j//8x//877OwAiIgAkpIAiooA6OgA//89lJQApqYAlpYAWlyBpAAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF/813//Pf/+zL/855/60d/811/7It//Xj//HZ/64h/7xH/7pB/60f/7Ep/79R/75N/7Mv/8dl/8Zj/7Qx/7c77JYAiFYAkl0AilgA6JMA/7g9lF4ApmkAll8AOftDJwAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",k=A.p+"img/orange_fire_block.0cc1af4a.png",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRFd///3///y///ef//Hf//df//Lf//4///2f//If//R///Qf//H///Kf//Uf//Tf//L///Zf//Y///Mf//O///AOzsAIiIAJKSAIqKAOjoPf//AJSUAKamAJaWpW5T3AAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRFd3f/39//y8v/eXn/HR3/dXX/LS3/4+P/2dn/ISH/R0f/QUH/Hx//KSn/UVH/TU3/Ly//ZWX/Y2P/MTH/Ozv/AADsAACIAACSAACKAADoPT3/AACUAACmAACWazDxowAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",v=A.p+"img/blue_fire_block.2213d678.png",f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRFu7u77+/v5eXlvLy8jo6Ourq6lpaW8fHx7OzskJCQo6OjoKCgj4+PlJSUqKiopqaml5eXsrKysbGxmJiYnZ2ddnZ2RERESUlJRUVFdHR0np6eSkpKU1NTS0tLyFvLQwAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAZSURBVHicY2AYBaNgFIyCUTAKRsEooC8AAAiAAAFVtmT4AAAAAElFTkSuQmCC",w=A(3577);const b={class:"board-table"},y=["src","onClick"];function S(e,t,A,s,n,o){return(0,a.wg)(),(0,a.iD)("table",b,[(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.board,((e,t,A)=>((0,a.wg)(),(0,a.iD)("tr",{key:A},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e,((e,A,s)=>((0,a.wg)(),(0,a.iD)("td",{class:(0,w.C_)("block-type-"+e),key:s},[(0,a._)("img",{src:this.$store.getters.getBlockSrc(e),width:"30",height:"30",onClick:e=>o.pickTable(t*this.$store.state.stageSideLength+A)},null,8,y)],2)))),128))])))),128))])])}var D={name:"BlockTable",props:{contents:Array,selectCard:Array},methods:{update(e){this.board=e},pickTable(e){console.log("pick",e),this.$emit("pick",this.cardMap,e)}},computed:{board:{get:function(){return this.contents}},cardMap:{get:function(){return this.selectCard}}}},_=A(3744);const I=(0,_.Z)(D,[["render",S]]);var C=I;function B(e){let t=0;return e.forEach((e=>t+=e.count)),t}function P(e,t){let A=new Array(e);for(let s=0;s<e;s++)A[s]=new Array(t).fill(null);return A}function O(e,t){for(var A=[],s=0;s<e.length;s+=t)A.push(e.slice(s,s+t));return A}var U={getTotalCount:B,create2DArray:P,splitArray:O};const L={class:"users"},F={class:"card border-secondary",style:{"max-width":"15rem"}},N={class:"card-header"},Q={class:"card-body text-secondary"},R={class:"card-title"},x={class:"card-text"},z=(0,a._)("p",null,"部屋番号",-1),j={key:0},E={class:"card border-secondary",style:{"max-width":"15rem"}},K={class:"card-header"},M={class:"card-body text-secondary"},J={class:"card-title"},H={class:"card-text"},T={key:1},Z=(0,a._)("p",null,"対戦相手がいません",-1),G=[Z],V={class:"list"},Y=["onClick"];var q={__name:"LobbyView",setup(e){const t=()=>{let e=l.state.users;l.state.roomDocRef.onSnapshot((t=>{e.length=0;let s=t.get("users");null!=s?(l.state.stageObj=t.get("stage"),s.forEach((t=>e.push(t))),l.state.myUserObj=s[1-l.state.enemyIndex],2==e.length&&(l.state.enemyUserObj=s[l.state.enemyIndex],A("準備OK"))):l.commit("eraseBufRoom")}))};t();const A=e=>{l.state.users.every((t=>t.userStatus==e))&&(l.state.gameMainPhase=2)},s=()=>{"準備中"==l.state.myUserObj.userStatus?o("準備OK"):"準備OK"==l.state.myUserObj.userStatus&&o("準備中")},o=e=>{l.state.roomDocRef.get().then((t=>{let A=t.get("users");A.forEach((t=>{t.userId==l.state.userId&&(t.userStatus=e)})),l.state.roomDocRef.update({users:A})}))},c=e=>{l.state.currentStage=e,l.state.stageObj=l.state.ms_stage[l.state.currentStage],l.state.roomDocRef.update({stage:l.state.stageObj})};return(e,t)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",L,[(0,a._)("div",F,[(0,a._)("div",N,(0,w.zw)((0,n.SU)(l).state.myUserObj.userPrivilege),1),(0,a._)("div",Q,[(0,a._)("h5",R,(0,w.zw)((0,n.SU)(l).state.myUserObj.userName),1),(0,a._)("p",x,(0,w.zw)((0,n.SU)(l).state.myUserObj.userStatus),1)])]),(0,a._)("div",null,[z,(0,a._)("h3",null,(0,w.zw)((0,n.SU)(l).state.roomId),1)]),2==(0,n.SU)(l).state.users.length?((0,a.wg)(),(0,a.iD)("div",j,[(0,a._)("div",E,[(0,a._)("div",K,(0,w.zw)((0,n.SU)(l).state.enemyUserObj.userPrivilege),1),(0,a._)("div",M,[(0,a._)("h5",J,(0,w.zw)((0,n.SU)(l).state.enemyUserObj.userName),1),(0,a._)("p",H,(0,w.zw)((0,n.SU)(l).state.enemyUserObj.userStatus),1)])])])):((0,a.wg)(),(0,a.iD)("div",T,G))]),(0,a._)("div",V,[(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,n.SU)(l).state.ms_stage,((e,t,A)=>((0,a.wg)(),(0,a.iD)("div",{class:"name",key:A},[(0,a._)("button",{class:"btn btn-outline-secondary",onClick:e=>c(t)},[(0,a._)("p",null,(0,w.zw)(e.name),1)],8,Y)])))),128))]),(0,a.Wm)(C,{class:"stagePreview",contents:(0,n.SU)(U).splitArray((0,n.SU)(l).state.stageObj.map,(0,n.SU)(l).state.stageSideLength)},null,8,["contents"])]),(0,a._)("button",{onClick:s},(0,w.zw)((0,n.SU)(l).state.myUserObj.userStatus),1),(0,a._)("button",{onClick:t[0]||(t[0]=e=>(0,n.SU)(l).commit("eraseBufRoom"))},"退出")],64))}};const $=q;var X=$;const W={key:0},ee={key:1},te={style:{color:"red"}};var Ae={__name:"HomeView",setup(e){const t=(0,n.iH)(1),A=(0,n.iH)(""),o=(0,n.iH)(""),c=(0,n.iH)(""),r=(0,n.iH)(""),i=(0,n.iH)(""),d=()=>{if(A.value="",""==o.value)return void(A.value="名前を入力してください");c.value=m(),r.value="準備中",i.value="owner";const e={users:[{userId:l.state.userId,userName:o.value,userStatus:r.value,userPrivilege:i.value}]};l.commit("createServer",{roomId:c.value}),l.state.roomDocRef.set(e),l.state.stageObj=l.state.ms_stage[l.state.currentStage],l.state.roomDocRef.update({stage:l.state.stageObj}),l.state.enemyIndex=1,k()},u=()=>{A.value="",""!=o.value?""!=c.value?(l.commit("createServer",{roomId:c.value}),l.state.enemyIndex=0,l.state.roomDocRef.get().then((e=>{if(e.exists){let t=e.get("users");2>t.length?(r.value="準備中",i.value="guest",t.push({userId:l.state.userId,userName:o.value,userStatus:r.value,userPrivilege:i.value}),l.state.roomDocRef.update({users:t}),k()):A.value="その部屋は満室です"}else A.value="その部屋は存在しません"}))):A.value="部屋番号を入力してください":A.value="名前を入力してください"},m=()=>{const e=Math.floor(89999*Math.random()+1e4);return e},k=()=>{l.state.gameMainPhase=1,l.state.roomId=c.value,localStorage.setItem("buf_room_id",JSON.stringify(c.value))};return(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",null,[(0,a.Uk)(" 名前: "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e),type:"text",placeholder:"名前を入力"},null,512),[[s.nr,o.value]])]),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":n[1]||(n[1]=e=>t.value=e),value:"1"},null,512),[[s.G2,t.value]]),(0,a.Uk)("新しく部屋を作る "),(0,a.wy)((0,a._)("input",{type:"radio","onUpdate:modelValue":n[2]||(n[2]=e=>t.value=e),value:"2"},null,512),[[s.G2,t.value]]),(0,a.Uk)("友達の部屋に入る "),1==t.value?((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("input",{type:"button",value:"部屋を作る",onClick:d})])):(0,a.kq)("",!0),2==t.value?((0,a.wg)(),(0,a.iD)("div",ee,[(0,a.Uk)(" 部屋番号: "),(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":n[3]||(n[3]=e=>c.value=e),type:"text"},null,512),[[s.nr,c.value]]),(0,a._)("input",{type:"button",value:"入室",onClick:u})])):(0,a.kq)("",!0),(0,a._)("div",te,(0,w.zw)(A.value),1)],64))}};const se=Ae;var ae=se;const ne={class:"deckList"},oe={class:"deList"},ce=["onClick"];function re(e,t,A,s,n,o){const c=(0,a.up)("Deck");return(0,a.wg)(),(0,a.iD)("div",ne,[(0,a._)("h4",null,(0,w.zw)(this.$store.state.tb_deckList[this.$store.state.currentDeck].name)+" マス合計："+(0,w.zw)(n.totalCount),1),(0,a._)("div",oe,[(0,a._)("div",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.$store.state.tb_deckList,((e,t,A)=>((0,a.wg)(),(0,a.iD)("div",{class:"deName",key:A},[(0,a._)("button",{class:"btn btn-outline-secondary",onClick:e=>o.selectDeck(t)},[(0,a._)("p",null,(0,w.zw)(e.name),1)],8,ce)])))),128))]),(0,a.Wm)(c,{deck:n.myDeck},null,8,["deck"])])])}const ie={class:"CardItem"},le={class:"name"},de={class:"count"},ue=(0,a._)("p",{class:"sp"},"消費SP",-1),me={class:"cost"};function ke(e,t,A,s,n,o){const c=(0,a.up)("BlockTable");return(0,a.wg)(),(0,a.iD)("div",ie,[(0,a._)("button",{class:(0,w.C_)(["card-item btn btn-outline-secondary",{active:n.isSelect,disabled:A.isDisabled}]),onClick:t[0]||(t[0]=t=>{o.OnClick(),e.$emit("clickEvent")})},[(0,a.Wm)(c,{BlockTable:"",contents:o.cardMap,class:"cardMap"},null,8,["contents"]),(0,a._)("p",le,(0,w.zw)(A.name),1),(0,a._)("div",de,[(0,a._)("p",null,(0,w.zw)(A.count),1)]),(0,a._)("div",null,[ue,(0,a._)("p",me,(0,w.zw)(A.cost),1)])],2)])}var ge={name:"CardItem",components:{BlockTable:C},props:{id:Number,name:String,count:Number,cost:Number,map:Array,block:String,sp_block:String,isActiv:{default:!0},isDisabled:{default:!1},select:{default:!1},clickEvent:Function},data(){return{enabled:!0,isSelect:!1}},computed:{cardMap:{get:function(){return U.splitArray(this.map,8)}}},mounted(){0!=this.id&&(this.enabled=this.isActiv.enabled,this.select.select!=this.isSelect&&(this.isSelect=this.select.select))},methods:{OnClick:function(){this.enabled&&(this.isSelect?this.isSelect=!1:this.isSelect=!0)}}};const pe=(0,_.Z)(ge,[["render",ke]]);var ve=pe;const fe={class:"container"};var he={__name:"Deck",props:{deck:Array},setup(e){const t=e;return(e,A)=>((0,a.wg)(),(0,a.iD)("div",fe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.deck,((e,t,A)=>((0,a.wg)(),(0,a.iD)("div",{key:A},[(0,a.Wm)(ve,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:(0,n.SU)(l).getters.getBlockSrc(1),sp_block:(0,n.SU)(l).getters.getBlockSrc(2),isDisabled:{disabled:!1}},null,8,["id","name","count","cost","map","block","sp_block"])])))),128))]))}};const we=(0,_.Z)(he,[["__scopeId","data-v-7fe80f08"]]);var be=we,ye={name:"CardListView",components:{Deck:be},data(){return{totalCount:0,myDeck:[]}},methods:{loadDeck:function(){let e=this.$store.state.tb_deckList[this.$store.state.currentDeck].deck;this.myDeck=this.$store.getters.findCardsById(e),this.totalCount=U.getTotalCount(this.myDeck)},selectDeck:function(e){this.$store.state.currentDeck=e,this.loadDeck()}},created(){this.loadDeck()}};const Se=(0,_.Z)(ye,[["render",re],["__scopeId","data-v-69b9f09e"]]);var De=Se;const _e=e=>((0,a.dD)("data-v-64918167"),e=e(),(0,a.Cn)(),e),Ie={class:"post"},Ce=_e((()=>(0,a._)("label",null,"デッキ名",-1))),Be={class:"edit"},Pe={key:0},Oe={key:1};function Ue(e,t,A,n,o,c){const r=(0,a.up)("DeckInfo"),i=(0,a.up)("CardList");return(0,a.wg)(),(0,a.iD)("div",Ie,[(0,a._)("div",null,[Ce,(0,a.wy)((0,a._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>o.deckName=e)},null,512),[[s.nr,o.deckName]])]),(0,a._)("div",Be,[(0,a._)("h4",null,"マス合計:"+(0,w.zw)(o.totalCount),1),1==o.editType?((0,a.wg)(),(0,a.iD)("div",Pe,[(0,a.Wm)(r,{deck:o.myDeck,onPick:c.pickUp,class:"deck-list"},null,8,["deck","onPick"]),(0,a._)("button",{type:"button",class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>c.saveDeck&&c.saveDeck(...e))},"保存")])):(0,a.kq)("",!0),2==o.editType?((0,a.wg)(),(0,a.iD)("div",Oe,[(0,a.Wm)(i,{myDeck:o.myDeck,class:"card-list",onChange:c.changeCard},null,8,["myDeck","onChange"]),(0,a._)("button",{type:"button",class:"btn btn-secondary",onClick:t[2]||(t[2]=e=>o.editType=1)},"キャンセル")])):(0,a.kq)("",!0)])])}const Le={class:"container"};function Fe(e,t,A,s,n,o){const c=(0,a.up)("CardItem");return(0,a.wg)(),(0,a.iD)("div",Le,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(this.$store.state.ms_card,((e,t,A)=>((0,a.wg)(),(0,a.iD)("div",{key:A},[(0,a.Wm)(c,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:this.$store.getters.getBlockSrc(1),sp_block:this.$store.getters.getBlockSrc(2),onClick:t=>o.change(e.id),select:{select:-1!=this.myDeck.indexOf(e)},isActiv:{enabled:-1==this.myDeck.indexOf(e)}},null,8,["id","name","count","cost","map","block","sp_block","onClick","select","isActiv"])])))),128))])}var Ne={name:"CardListView",components:{CardItem:ve},props:{myDeck:Array},methods:{change:function(e){this.$emit("change",e)}}};const Qe=(0,_.Z)(Ne,[["render",Fe],["__scopeId","data-v-7e9e74e2"]]);var Re=Qe;const xe={class:"container"};function ze(e,t,A,s,n,o){const c=(0,a.up)("CardItem");return(0,a.wg)(),(0,a.iD)("div",xe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(A.deck,((e,t,A)=>((0,a.wg)(),(0,a.iD)("div",{key:A},[(0,a.Wm)(c,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:this.$store.state.blocks[1],sp_block:this.$store.state.blocks[2],onClick:e=>o.pickCard(t)},null,8,["id","name","count","cost","map","block","sp_block","onClick"])])))),128))])}var je={name:"CardListView",components:{CardItem:ve},props:{deck:Array},methods:{pickCard:function(e){this.$emit("pick",e)}}};const Ee=(0,_.Z)(je,[["render",ze],["__scopeId","data-v-710352fb"]]);var Ke=Ee,Me={components:{CardList:Re,DeckInfo:Ke},props:{clickEvent:Function},data(){return{selectIndex:0,totalCount:0,myDeck:[],deckName:"",editType:1}},methods:{pickUp:function(e){this.selectIndex=e,this.editType=2},changeCard:function(e){let t=this.$store.getters.findCardById(e);0!=e&&-1!=this.myDeck.indexOf(t)||(this.myDeck[this.selectIndex]=t,this.editType=1,this.totalCount=U.getTotalCount(this.myDeck))},loadDeck:function(){let e=this.$store.state.tb_deckList[this.$store.state.currentDeck].deck;this.myDeck=this.$store.getters.findCardsById(e),this.totalCount=U.getTotalCount(this.myDeck)},saveDeck:function(){this.clickEvent();let e=[];this.myDeck.forEach((t=>{e.push(t.id)})),this.$store.commit("saveDeck",{name:this.deckName,deck:e})}},created(){this.loadDeck(),this.deckName=this.$store.state.tb_deckList[this.$store.state.currentDeck].name}};const Je=(0,_.Z)(Me,[["render",Ue],["__scopeId","data-v-64918167"]]);var He=Je;const Te=e=>((0,a.dD)("data-v-ff5f3356"),e=e(),(0,a.Cn)(),e),Ze={id:"overlay"},Ge={id:"content"},Ve={class:"modal-header"},Ye={key:0,class:"modal-title"},qe={key:1,class:"modal-title"},$e={class:"modal-body"},Xe={key:0},We=Te((()=>(0,a._)("p",null,"読み込み中",-1))),et=[We],tt={key:1,id:"top-list"},At={class:"modal-footer"},st=Te((()=>(0,a._)("p",null,"編集へ",-1))),at=[st],nt=Te((()=>(0,a._)("p",null,"デッキ一覧へ",-1))),ot=[nt];var ct={__name:"DeckManagerView",setup(e){const t=(0,n.iH)(0),A=(0,n.iH)(!1),o=()=>{t.value=1,A.value=!0},c=()=>{t.value=0,A.value=!1},r=()=>{localStorage.removeItem("user_id"),localStorage.removeItem("tb_deck")};return(e,i)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("label",null,"選択中のデッキ ： "+(0,w.zw)((0,n.SU)(l).state.tb_deckList[(0,n.SU)(l).state.currentDeck].name),1),(0,a._)("button",{onClick:o},"デッキ変更"),(0,a._)("button",{onClick:r},"データ削除"),(0,a.wy)((0,a._)("div",Ze,[(0,a._)("div",Ge,[(0,a._)("div",Ve,[1==t.value?((0,a.wg)(),(0,a.iD)("h5",Ye,"デッキ一覧")):(0,a.kq)("",!0),2==t.value?((0,a.wg)(),(0,a.iD)("h5",qe,"デッキ編集")):(0,a.kq)("",!0),(0,a._)("button",{type:"button",class:"btn-close",onClick:c})]),(0,a._)("div",$e,[(0,n.SU)(l).state.isLoading?((0,a.wg)(),(0,a.iD)("div",Xe,et)):((0,a.wg)(),(0,a.iD)("div",tt,[1==t.value?((0,a.wg)(),(0,a.j4)(De,{key:0})):(0,a.kq)("",!0),2==t.value?((0,a.wg)(),(0,a.j4)(He,{key:1,clickEvent:o})):(0,a.kq)("",!0)]))]),(0,a._)("div",At,[1==t.value?((0,a.wg)(),(0,a.iD)("button",{key:0,type:"button",class:"btn btn-primary transitionBtn",onClick:i[0]||(i[0]=e=>t.value=2)},at)):(0,a.kq)("",!0),2==t.value?((0,a.wg)(),(0,a.iD)("button",{key:1,type:"button",class:"btn btn-primary transitionBtn",onClick:i[1]||(i[1]=e=>t.value=1)},ot)):(0,a.kq)("",!0)])])],512),[[s.F8,A.value]])],64))}};const rt=(0,_.Z)(ct,[["__scopeId","data-v-ff5f3356"]]);var it=rt;const lt={key:0},dt=(0,a._)("h1",null,"ナワバトラー",-1),ut={key:1},mt=(0,a._)("h1",null,"ロビー",-1),kt={key:2},gt=(0,a._)("h1",null,"ゲーム画面",-1),pt=[gt];var vt={__name:"App",setup(e){function t(){l.commit("addBlockSrc",{src:d}),l.commit("addBlockSrc",{src:u}),l.commit("addBlockSrc",{src:m}),l.commit("addBlockSrc",{src:k}),l.commit("addBlockSrc",{src:g}),l.commit("addBlockSrc",{src:p}),l.commit("addBlockSrc",{src:v}),l.commit("addBlockSrc",{src:f}),l.commit("addBlockSrc",{src:h}),l.dispatch("addCardListAsync"),l.dispatch("addStageListAsync"),l.commit("createUserData"),l.commit("eraseBufRoom")}return t(),(e,t)=>0==(0,n.SU)(l).state.gameMainPhase?((0,a.wg)(),(0,a.iD)("div",lt,[dt,(0,a.Wm)(ae),(0,a.Wm)(it)])):1==(0,n.SU)(l).state.gameMainPhase?((0,a.wg)(),(0,a.iD)("div",ut,[mt,(0,a.Wm)(X)])):2==(0,n.SU)(l).state.gameMainPhase?((0,a.wg)(),(0,a.iD)("div",kt,pt)):(0,a.kq)("",!0)}};const ft=vt;var ht=ft;(0,s.ri)(ht).use(l).mount("#app")}},t={};function A(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,A),n.exports}A.m=e,function(){var e=[];A.O=function(t,s,a,n){if(!s){var o=1/0;for(l=0;l<e.length;l++){s=e[l][0],a=e[l][1],n=e[l][2];for(var c=!0,r=0;r<s.length;r++)(!1&n||o>=n)&&Object.keys(A.O).every((function(e){return A.O[e](s[r])}))?s.splice(r--,1):(c=!1,n<o&&(o=n));if(c){e.splice(l--,1);var i=a();void 0!==i&&(t=i)}}return t}n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[s,a,n]}}(),function(){A.d=function(e,t){for(var s in t)A.o(t,s)&&!A.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){A.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){A.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){A.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){A.p=""}(),function(){var e={826:0};A.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,o=s[0],c=s[1],r=s[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(a in c)A.o(c,a)&&(A.m[a]=c[a]);if(r)var l=r(A)}for(t&&t(s);i<o.length;i++)n=o[i],A.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return A.O(l)},s=self["webpackChunknawabato"]=self["webpackChunknawabato"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=A.O(void 0,[998],(function(){return A(4792)}));s=A.O(s)})();
//# sourceMappingURL=index.ce4e964c.js.map