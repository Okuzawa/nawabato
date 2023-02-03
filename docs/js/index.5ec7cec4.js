(function(){"use strict";var e={6990:function(e,t,a){var s=a(9963),n=a(6252),o=a(2262),A=(a(7658),a(3907)),c=a(4866);a(6947),a(9418);function l(e){let t=0;return e.forEach((e=>t+=e.count)),t}function r(e,t){let a=new Array(e);for(let s=0;s<e;s++)a[s]=new Array(t).fill(null);return a}function i(e,t){for(var a=[],s=0;s<e.length;s+=t)a.push(e.slice(s,s+t));return a}function d(e){const t=[...e];for(let a=t.length-1;a>0;a--){let e=Math.floor(Math.random()*(a+1));[t[a],t[e]]=[t[e],t[a]]}return t}function u(e,t){let a=[];for(let s=0;s<t;s++){a[s]=[];for(let n=0;n<t;n++)a[s][n]=e[n][t-s-1]}return a}function m(e,t,a,s){for(let n=0;n<3;n++)for(let o=0;o<3;o++)if(e.some((e=>e==s[t-1+n][a-1+o])))return!0;return!1}var p={getTotalCount:l,create2DArray:r,splitArray:i,shuffleArray:d,rotateArray:u,serchAround:m};const k={apiKey:"AIzaSyArEFrBMUMDHAYTjFJ2HhsHb__zIPYMfLc",authDomain:"turf-war-ebf17.firebaseapp.com",projectId:"turf-war-ebf17",storageBucket:"turf-war-ebf17.appspot.com",messagingSenderId:"1096461103992",appId:"1:1096461103992:web:57b6f83644c9882d8d8e8d"};c.Z.initializeApp(k);const g=c.Z.firestore();var v=(0,A.MT)({state:{stageSideLength:34,gameMainPhase:0,isLoading:!0,userId:0,currentDeck:0,tb_deckList:[],blocks:[],ms_card:[],ms_stage:[],currentStage:1,stageObj:Object,roomsDocRef:null,roomId:0,enemyIndex:0,users:[],myUserObj:Object,enemyUserObj:Object},getters:{getBlockSrc:e=>t=>e.blocks[t],findCardById:e=>t=>e.ms_card.find((e=>e.id==t)),findCardsById:(e,t)=>e=>e.map((e=>t.findCardById(e)))},mutations:{setStageObj(e,{obj:t}){if(e.stageObj=t,"blue"==e.myUserObj.userColor){let a=p.splitArray(t.map,e.stageSideLength);a=p.rotateArray(a,e.stageSideLength),a=p.rotateArray(a,e.stageSideLength),e.stageObj.map=a.flat()}},addBlockSrc(e,{src:t}){e.blocks.push(t)},addCardList(e,{data:t}){e.ms_card.push({id:t.id,name:t.name,count:t.count,cost:t.cost,map:JSON.parse("["+t.map+"]")})},addStageList(e,{data:t}){e.ms_stage.push({id:t.id,name:t.name,map:JSON.parse("["+t.map+"]")})},createUserData(e){if(null==localStorage.getItem("user_id")){console.log("新規作成"),e.userId=Math.floor(899999*Math.random()+1e5),localStorage.setItem("user_id",e.userId);let t=[];t.push({name:"スターターデッキ",deck:[6,34,159,13,45,137,22,52,141,28,55,103,40,56,92]}),t.push({name:"デッキ1",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ2",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ3",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ4",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),t.push({name:"デッキ5",deck:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}),e.tb_deckList=t,localStorage.setItem("tb_deck",JSON.stringify(t))}else console.log("データ取得"),e.tb_deckList=JSON.parse(localStorage.getItem("tb_deck")),e.userId=JSON.parse(localStorage.getItem("user_id"))},saveDeck(e,{name:t,deck:a}){e.tb_deckList[e.currentDeck].deck=a,e.tb_deckList[e.currentDeck].name=t,localStorage.setItem("tb_deck",JSON.stringify(e.tb_deckList))},createServer(e,{roomId:t}){e.roomDocRef=g.collection("rooms").doc(String(t))},eraseBufRoom(e){let t=JSON.parse(localStorage.getItem("buf_room_id"));null==t?console.log("途中退出した部屋はありません"):(g.collection("rooms").doc(String(t)).delete(),console.log("途中退出した部屋があったため、退出処理をしました"),localStorage.removeItem("buf_room_id")),e.gameMainPhase=0}},actions:{addCardListAsync:function(e){const t="https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";fetch(t).then((function(e){return e.json()})).then((function(t){for(let a in t)e.commit("addCardList",{data:t[a]})})).then((()=>e.state.isLoading=!1))},addStageListAsync:function(e){const t="https://script.google.com/macros/s/AKfycbxBYBbh3y1smCeFL_CPnIs1lHDUWjOXhQFejZmdnByn4jlvVJhH7L0RCIwj4VEhJQXn/exec";fetch(t).then((function(e){return e.json()})).then((function(t){for(let a in t)e.commit("addStageList",{data:t[a]})})).then((()=>e.state.stageObj=e.state.ms_stage[1]))}}}),f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAZQTFRF////nJychYaIkwAAACJJREFUeJxjYBgkgPE/ChgVGBUYFRgVGBUYFRgVoIHAIAEAZOcaq2ZoT28AAAAASUVORK5CYII=",b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF//93///f///L//95//8d//91//8t///j///Z//8h//9H//9B//8f//8p//9R//9N//8v//9l//9j//8x//877OwAiIgAkpIAiooA6OgA//89lJQApqYAlpYAWlyBpAAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRF/813//Pf/+zL/855/60d/811/7It//Xj//HZ/64h/7xH/7pB/60f/7Ep/79R/75N/7Mv/8dl/8Zj/7Qx/7c77JYAiFYAkl0AilgA6JMA/7g9lF4ApmkAll8AOftDJwAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",S=a.p+"img/orange_fire_block.0cc1af4a.png",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRFd3f/39//y8v/eXn/HR3/dXX/LS3/4+P/2dn/ISH/R0f/QUH/Hx//KSn/UVH/TU3/Ly//ZWX/Y2P/MTH/Ozv/AADsAACIAACSAACKAADoPT3/AACUAACmAACWazDxowAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRFd///3///y///ef//Hf//df//Lf//4///2f//If//R///Qf//H///Kf//Uf//Tf//L///Zf//Y///Mf//O///AOzsAIiIAJKSAIqKAOjoPf//AJSUAKamAJaWpW5T3AAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",_=a.p+"img/sky_fire_block.603aca15.png",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpQTFRFu7u77+/v5eXlvLy8jo6Ourq6lpaW8fHx7OzskJCQo6OjoKCgj4+PlJSUqKiopqaml5eXsrKysbGxmJiYnZ2ddnZ2RERESUlJRUVFdHR0np6eSkpKU1NTS0tLyFvLQwAAARNJREFUeJztzsdxAzEQBdG/Igka0VvZ/NMU1wNg1d4wo0N3Av2k6s2xaqb5wlFQzeYKjoLnPyj4Cep/DfASNP8G4CNo/y3AQ9D9O4C9oP/3AGvB8B8AtoLxPwIsBdE/AtgJ4n8MsBIk/wRgI0j/KcBCkP0zwFOwXBVtmf1zQFhv3ou22YZpwG5/KNp+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx3wPF0LtrpMg243u6Pon18fk0Brrfvn8L9ZgIZ/18Esv7nApn/M4Hs/6lADv9EII9/LJDLPxLI5z8K5PQfBPL69wK5/TuB/P6tQI7/RiDPfy34A/EMSQ/PQDqBAAAAAElFTkSuQmCC",C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAAQMAAAD58POIAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAZSURBVHicY2AYBaNgFIyCUTAKRsEooC8AAAiAAAFVtmT4AAAAAElFTkSuQmCC",I=a(3577);const B={class:"board-table"},U=["src","onClick"];function O(e,t,a,s,o,A){return(0,n.wg)(),(0,n.iD)("table",B,[(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.board,((e,t,a)=>((0,n.wg)(),(0,n.iD)("tr",{key:a},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e,((e,a,s)=>((0,n.wg)(),(0,n.iD)("td",{class:(0,I.C_)("block-type-"+e),key:s},[(0,n._)("img",{src:this.$store.getters.getBlockSrc(e),width:"30",height:"30",onClick:e=>A.pickTable(t*this.$store.state.stageSideLength+a)},null,8,U)],2)))),128))])))),128))])])}var L={name:"BlockTable",props:{contents:Array,selectCard:Array},methods:{update(e){this.board=e},pickTable(e){this.$emit("pick",this.cardMap,e,-3,-3)}},computed:{board:{get:function(){return this.contents}},cardMap:{get:function(){return this.selectCard}}}},P=a(3744);const j=(0,P.Z)(L,[["render",O]]);var F=j;const N={class:"users"},z={class:"card border-secondary",style:{"max-width":"15rem"}},Q={class:"card-header"},R={class:"card-body text-secondary"},x={class:"card-title"},H={class:"card-text"},E={key:0,class:"dropdown"},M={class:"btn btn-secondary btn-sm dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","aria-expanded":"false"},K={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"},J=["onClick"],T=(0,n._)("p",null,"|部屋番号|",-1),Z={key:0},G={class:"card border-secondary",style:{"max-width":"15rem"}},Y={class:"card-header"},V={class:"card-body text-secondary"},q={class:"card-title"},W={class:"card-text"},$={key:1},X=(0,n._)("p",null,"対戦相手がいません",-1),ee=[X];var te={__name:"LobbyView",setup(e){const t=()=>{let e=v.state.users;v.state.roomDocRef.onSnapshot((t=>{e.length=0;let s=t.get("users");null!=s?(v.commit("setStageObj",{obj:t.get("stage")}),s.forEach((t=>e.push(t))),v.state.myUserObj=s[1-v.state.enemyIndex],2==e.length&&(v.state.enemyUserObj=s[v.state.enemyIndex],a("準備OK"))):v.commit("eraseBufRoom")}))};t();const a=e=>{v.state.users.every((t=>t.userStatus==e))&&(v.state.gameMainPhase=2)},s=()=>{"準備中"==v.state.myUserObj.userStatus?A("準備OK"):"準備OK"==v.state.myUserObj.userStatus&&A("準備中")},A=e=>{v.state.roomDocRef.get().then((t=>{let a=t.get("users");a.forEach((t=>{t.userId==v.state.userId&&(t.userStatus=e)})),v.state.roomDocRef.update({users:a})}))},c=e=>{v.state.currentStage=e,v.state.stageObj=v.state.ms_stage[v.state.currentStage],v.state.roomDocRef.update({stage:v.state.stageObj})};return(e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",N,[(0,n._)("div",z,[(0,n._)("div",Q,(0,I.zw)((0,o.SU)(v).state.myUserObj.userColor),1),(0,n._)("div",R,[(0,n._)("h5",x,(0,I.zw)((0,o.SU)(v).state.myUserObj.userName),1),(0,n._)("p",H,(0,I.zw)((0,o.SU)(v).state.myUserObj.userStatus),1),"yellow"==(0,o.SU)(v).state.myUserObj.userColor?((0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("button",M,(0,I.zw)((0,o.SU)(v).state.stageObj.name),1),(0,n._)("ul",K,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(v).state.ms_stage,((e,t,a)=>((0,n.wg)(),(0,n.iD)("li",{key:a},[(0,n._)("a",{class:"dropdown-item",onClick:e=>c(t)},(0,I.zw)(e.name),9,J)])))),128))])])):(0,n.kq)("",!0)])]),(0,n._)("div",null,[T,(0,n._)("h3",null,(0,I.zw)((0,o.SU)(v).state.roomId),1)]),2==(0,o.SU)(v).state.users.length?((0,n.wg)(),(0,n.iD)("div",Z,[(0,n._)("div",G,[(0,n._)("div",Y,(0,I.zw)((0,o.SU)(v).state.enemyUserObj.userColor),1),(0,n._)("div",V,[(0,n._)("h5",q,(0,I.zw)((0,o.SU)(v).state.enemyUserObj.userName),1),(0,n._)("p",W,(0,I.zw)((0,o.SU)(v).state.enemyUserObj.userStatus),1)])])])):((0,n.wg)(),(0,n.iD)("div",$,ee))]),(0,n._)("div",null,[(0,n._)("p",null,(0,I.zw)((0,o.SU)(v).state.stageObj.name),1),(0,n.Wm)(F,{class:"stagePreview pointerNone",contents:(0,o.SU)(p).splitArray((0,o.SU)(v).state.stageObj.map,(0,o.SU)(v).state.stageSideLength)},null,8,["contents"])]),(0,n._)("button",{onClick:s},(0,I.zw)((0,o.SU)(v).state.myUserObj.userStatus),1),(0,n._)("button",{onClick:t[0]||(t[0]=e=>(0,o.SU)(v).commit("eraseBufRoom"))},"退出")],64))}};const ae=te;var se=ae;const ne={class:"home"},oe={key:0},Ae={key:1},ce={style:{color:"red"}};var le={__name:"HomeView",setup(e){const t=(0,o.iH)(1),a=(0,o.iH)(""),A=(0,o.iH)(""),c=(0,o.iH)(""),l=()=>{if(a.value="",""==A.value)return void(a.value="名前を入力してください");c.value=i(),v.state.myUserObj={userId:v.state.userId,userName:A.value,userStatus:"準備中",userColor:"yellow"};const e={users:[v.state.myUserObj]};v.commit("createServer",{roomId:c.value}),v.state.roomDocRef.set(e),v.state.stageObj=v.state.ms_stage[v.state.currentStage],v.state.roomDocRef.update({stage:v.state.stageObj}),v.state.enemyIndex=1,d()},r=()=>{a.value="",""!=A.value?""!=c.value?(v.commit("createServer",{roomId:c.value}),v.state.enemyIndex=0,v.state.roomDocRef.get().then((e=>{if(e.exists){let t=e.get("users");2>t.length?(v.state.myUserObj={userId:v.state.userId,userName:A.value,userStatus:"準備中",userColor:"blue"},t.push(v.state.myUserObj),v.state.roomDocRef.update({users:t}),d()):a.value="その部屋は満室です"}else a.value="その部屋は存在しません"}))):a.value="部屋番号を入力してください":a.value="名前を入力してください"},i=()=>{const e=Math.floor(89999*Math.random()+1e4);return e},d=()=>{v.state.gameMainPhase=1,v.state.roomId=c.value,localStorage.setItem("buf_room_id",JSON.stringify(c.value))};return(e,o)=>((0,n.wg)(),(0,n.iD)("div",ne,[(0,n._)("div",null,[(0,n.Uk)(" 名前: "),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>A.value=e),type:"text",placeholder:"名前を入力"},null,512),[[s.nr,A.value]])]),(0,n.wy)((0,n._)("input",{type:"radio","onUpdate:modelValue":o[1]||(o[1]=e=>t.value=e),value:"1"},null,512),[[s.G2,t.value]]),(0,n.Uk)("新しく部屋を作る "),(0,n.wy)((0,n._)("input",{type:"radio","onUpdate:modelValue":o[2]||(o[2]=e=>t.value=e),value:"2"},null,512),[[s.G2,t.value]]),(0,n.Uk)("友達の部屋に入る "),1==t.value?((0,n.wg)(),(0,n.iD)("div",oe,[(0,n._)("input",{type:"button",value:"部屋を作る",onClick:l})])):(0,n.kq)("",!0),2==t.value?((0,n.wg)(),(0,n.iD)("div",Ae,[(0,n.Uk)(" 部屋番号: "),(0,n.wy)((0,n._)("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>c.value=e),type:"text"},null,512),[[s.nr,c.value]]),(0,n._)("input",{type:"button",value:"入室",onClick:r})])):(0,n.kq)("",!0),(0,n._)("div",ce,(0,I.zw)(a.value),1)]))}};const re=le;var ie=re;const de={class:"deckList"},ue={class:"deList"},me=["onClick"];function pe(e,t,a,s,o,A){const c=(0,n.up)("Deck");return(0,n.wg)(),(0,n.iD)("div",de,[(0,n._)("h4",null,(0,I.zw)(this.$store.state.tb_deckList[this.$store.state.currentDeck].name)+" マス合計："+(0,I.zw)(o.totalCount),1),(0,n._)("div",ue,[(0,n._)("div",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.$store.state.tb_deckList,((e,t,a)=>((0,n.wg)(),(0,n.iD)("div",{class:"deName",key:a},[(0,n._)("button",{class:"btn btn-outline-secondary",onClick:e=>A.selectDeck(t)},[(0,n._)("p",null,(0,I.zw)(e.name),1)],8,me)])))),128))]),(0,n.Wm)(c,{deck:o.myDeck},null,8,["deck"])])])}const ke={class:"CardItem"},ge={class:"name"},ve={class:"count"},fe=(0,n._)("p",{class:"sp"},"消費SP",-1),be={class:"cost"};function ye(e,t,a,s,o,A){const c=(0,n.up)("BlockTable");return(0,n.wg)(),(0,n.iD)("div",ke,[(0,n._)("button",{class:(0,I.C_)(["card-item btn btn-outline-secondary",{active:o.isSelect,disabled:a.isDisabled}]),onClick:t[0]||(t[0]=t=>{A.OnClick(),e.$emit("clickEvent")})},[(0,n.Wm)(c,{BlockTable:"",contents:A.cardMap,class:"cardMap"},null,8,["contents"]),(0,n._)("p",ge,(0,I.zw)(a.name),1),(0,n._)("div",ve,[(0,n._)("p",null,(0,I.zw)(a.count),1)]),(0,n._)("div",null,[fe,(0,n._)("p",be,(0,I.zw)(a.cost),1)])],2)])}var Se={name:"CardItem",components:{BlockTable:F},props:{id:Number,name:String,count:Number,cost:Number,map:Array,block:String,sp_block:String,isActiv:{default:!0},isDisabled:{default:!1},select:{default:!1},clickEvent:Function},data(){return{enabled:!0,isSelect:!1}},computed:{cardMap:{get:function(){return p.splitArray(this.map,8)}}},mounted(){0!=this.id&&(this.enabled=this.isActiv.enabled,this.select.select!=this.isSelect&&(this.isSelect=this.select.select))},methods:{OnClick:function(){this.enabled&&(console.log(this.enabled),this.isSelect?this.isSelect=!1:this.isSelect=!0)}}};const we=(0,P.Z)(Se,[["render",ye]]);var he=we;const _e={class:"container"};var De={__name:"Deck",props:{deck:Array},setup(e){const t=e;return(e,a)=>((0,n.wg)(),(0,n.iD)("div",_e,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.deck,((e,t,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a},[(0,n.Wm)(he,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:(0,o.SU)(v).getters.getBlockSrc(1),sp_block:(0,o.SU)(v).getters.getBlockSrc(2),isDisabled:{disabled:!1}},null,8,["id","name","count","cost","map","block","sp_block"])])))),128))]))}};const Ce=(0,P.Z)(De,[["__scopeId","data-v-7fe80f08"]]);var Ie=Ce,Be={name:"CardListView",components:{Deck:Ie},data(){return{totalCount:0,myDeck:[]}},methods:{loadDeck:function(){let e=this.$store.state.tb_deckList[this.$store.state.currentDeck].deck;this.myDeck=this.$store.getters.findCardsById(e),this.totalCount=p.getTotalCount(this.myDeck)},selectDeck:function(e){this.$store.state.currentDeck=e,this.loadDeck()}},created(){this.loadDeck()}};const Ue=(0,P.Z)(Be,[["render",pe],["__scopeId","data-v-69b9f09e"]]);var Oe=Ue;const Le=e=>((0,n.dD)("data-v-64918167"),e=e(),(0,n.Cn)(),e),Pe={class:"post"},je=Le((()=>(0,n._)("label",null,"デッキ名",-1))),Fe={class:"edit"},Ne={key:0},ze={key:1};function Qe(e,t,a,o,A,c){const l=(0,n.up)("DeckInfo"),r=(0,n.up)("CardList");return(0,n.wg)(),(0,n.iD)("div",Pe,[(0,n._)("div",null,[je,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>A.deckName=e)},null,512),[[s.nr,A.deckName]])]),(0,n._)("div",Fe,[(0,n._)("h4",null,"マス合計:"+(0,I.zw)(A.totalCount),1),1==A.editType?((0,n.wg)(),(0,n.iD)("div",Ne,[(0,n.Wm)(l,{deck:A.myDeck,onPick:c.pickUp,class:"deck-list"},null,8,["deck","onPick"]),(0,n._)("button",{type:"button",class:"btn btn-success",onClick:t[1]||(t[1]=(...e)=>c.saveDeck&&c.saveDeck(...e))},"保存")])):(0,n.kq)("",!0),2==A.editType?((0,n.wg)(),(0,n.iD)("div",ze,[(0,n.Wm)(r,{myDeck:A.myDeck,class:"card-list",onChange:c.changeCard},null,8,["myDeck","onChange"]),(0,n._)("button",{type:"button",class:"btn btn-secondary",onClick:t[2]||(t[2]=e=>A.editType=1)},"キャンセル")])):(0,n.kq)("",!0)])])}const Re={class:"container"};function xe(e,t,a,s,o,A){const c=(0,n.up)("CardItem");return(0,n.wg)(),(0,n.iD)("div",Re,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(this.$store.state.ms_card,((e,t,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a},[(0,n.Wm)(c,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:this.$store.getters.getBlockSrc(1),sp_block:this.$store.getters.getBlockSrc(2),onClick:t=>A.change(e.id),select:{select:-1!=this.myDeck.indexOf(e)}},null,8,["id","name","count","cost","map","block","sp_block","onClick","select"])])))),128))])}var He={name:"CardListView",components:{CardItem:he},props:{myDeck:Array},methods:{change:function(e){this.$emit("change",e)}}};const Ee=(0,P.Z)(He,[["render",xe],["__scopeId","data-v-41876ec1"]]);var Me=Ee;const Ke={class:"container"};function Je(e,t,a,s,o,A){const c=(0,n.up)("CardItem");return(0,n.wg)(),(0,n.iD)("div",Ke,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.deck,((e,t,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a},[(0,n.Wm)(c,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:this.$store.state.blocks[1],sp_block:this.$store.state.blocks[2],onClick:e=>A.pickCard(t)},null,8,["id","name","count","cost","map","block","sp_block","onClick"])])))),128))])}var Te={name:"CardListView",components:{CardItem:he},props:{deck:Array},methods:{pickCard:function(e){this.$emit("pick",e)}}};const Ze=(0,P.Z)(Te,[["render",Je],["__scopeId","data-v-710352fb"]]);var Ge=Ze,Ye={components:{CardList:Me,DeckInfo:Ge},props:{clickEvent:Function},data(){return{selectIndex:0,totalCount:0,myDeck:[],deckName:"",editType:1}},methods:{pickUp:function(e){this.selectIndex=e,this.editType=2},changeCard:function(e){let t=this.$store.getters.findCardById(e);0!=e&&-1!=this.myDeck.indexOf(t)||(this.myDeck[this.selectIndex]=t,this.editType=1,this.totalCount=p.getTotalCount(this.myDeck))},loadDeck:function(){let e=this.$store.state.tb_deckList[this.$store.state.currentDeck].deck;this.myDeck=this.$store.getters.findCardsById(e),this.totalCount=p.getTotalCount(this.myDeck)},saveDeck:function(){this.clickEvent();let e=[];this.myDeck.forEach((t=>{e.push(t.id)})),this.$store.commit("saveDeck",{name:this.deckName,deck:e})}},created(){this.loadDeck(),this.deckName=this.$store.state.tb_deckList[this.$store.state.currentDeck].name}};const Ve=(0,P.Z)(Ye,[["render",Qe],["__scopeId","data-v-64918167"]]);var qe=Ve;const We=e=>((0,n.dD)("data-v-ff5f3356"),e=e(),(0,n.Cn)(),e),$e={id:"overlay"},Xe={id:"content"},et={class:"modal-header"},tt={key:0,class:"modal-title"},at={key:1,class:"modal-title"},st={class:"modal-body"},nt={key:0},ot=We((()=>(0,n._)("p",null,"読み込み中",-1))),At=[ot],ct={key:1,id:"top-list"},lt={class:"modal-footer"},rt=We((()=>(0,n._)("p",null,"編集へ",-1))),it=[rt],dt=We((()=>(0,n._)("p",null,"デッキ一覧へ",-1))),ut=[dt];var mt={__name:"DeckManagerView",setup(e){const t=(0,o.iH)(0),a=(0,o.iH)(!1),A=()=>{t.value=1,a.value=!0},c=()=>{t.value=0,a.value=!1},l=()=>{localStorage.removeItem("user_id"),localStorage.removeItem("tb_deck")};return(e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("label",null,"選択中のデッキ ： "+(0,I.zw)((0,o.SU)(v).state.tb_deckList[(0,o.SU)(v).state.currentDeck].name),1),(0,n._)("button",{onClick:A},"デッキ変更"),(0,n._)("button",{onClick:l},"データ削除"),(0,n.wy)((0,n._)("div",$e,[(0,n._)("div",Xe,[(0,n._)("div",et,[1==t.value?((0,n.wg)(),(0,n.iD)("h5",tt,"デッキ一覧")):(0,n.kq)("",!0),2==t.value?((0,n.wg)(),(0,n.iD)("h5",at,"デッキ編集")):(0,n.kq)("",!0),(0,n._)("button",{type:"button",class:"btn-close",onClick:c})]),(0,n._)("div",st,[(0,o.SU)(v).state.isLoading?((0,n.wg)(),(0,n.iD)("div",nt,At)):((0,n.wg)(),(0,n.iD)("div",ct,[1==t.value?((0,n.wg)(),(0,n.j4)(Oe,{key:0})):(0,n.kq)("",!0),2==t.value?((0,n.wg)(),(0,n.j4)(qe,{key:1,clickEvent:A})):(0,n.kq)("",!0)]))]),(0,n._)("div",lt,[1==t.value?((0,n.wg)(),(0,n.iD)("button",{key:0,type:"button",class:"btn btn-primary transitionBtn",onClick:r[0]||(r[0]=e=>t.value=2)},it)):(0,n.kq)("",!0),2==t.value?((0,n.wg)(),(0,n.iD)("button",{key:1,type:"button",class:"btn btn-primary transitionBtn",onClick:r[1]||(r[1]=e=>t.value=1)},ut)):(0,n.kq)("",!0)])])],512),[[s.F8,a.value]])],64))}};const pt=(0,P.Z)(mt,[["__scopeId","data-v-ff5f3356"]]);var kt=pt;const gt=e=>((0,n.dD)("data-v-06eac2c3"),e=e(),(0,n.Cn)(),e),vt={class:"deckSelect"},ft={id:"overlay"},bt={id:"content"},yt=gt((()=>(0,n._)("h5",{class:"modal-title"},"デッキ一覧",-1))),St={class:"modal-body"},wt={key:0},ht=gt((()=>(0,n._)("p",null,"読み込み中",-1))),_t=[ht],Dt={key:1,id:"top-list"};var Ct={__name:"DeckSelectView",setup(e){const t=(0,o.iH)(!1),a=()=>{t.value=!0},A=()=>{t.value=!1};return(e,c)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",vt,[(0,n._)("label",null,"選択中のデッキ ： "+(0,I.zw)((0,o.SU)(v).state.tb_deckList[(0,o.SU)(v).state.currentDeck].name),1),(0,n._)("button",{onClick:a},"デッキ変更")]),(0,n.wy)((0,n._)("div",ft,[(0,n._)("div",bt,[(0,n._)("div",{class:"modal-header"},[yt,(0,n._)("button",{type:"button",class:"btn-close",onClick:A})]),(0,n._)("div",St,[(0,o.SU)(v).state.isLoading?((0,n.wg)(),(0,n.iD)("div",wt,_t)):((0,n.wg)(),(0,n.iD)("div",Dt,[(0,n.Wm)(Oe)]))])])],512),[[s.F8,t.value]])],64))}};const It=(0,P.Z)(Ct,[["__scopeId","data-v-06eac2c3"]]);var Bt=It;const Ut=e=>((0,n.dD)("data-v-b905703c"),e=e(),(0,n.Cn)(),e),Ot={id:"overlay"},Lt={id:"content"},Pt={class:"modal-body"},jt={id:"top-list"},Ft={class:"container"},Nt=Ut((()=>(0,n._)("p",null,"閉じる",-1))),zt=[Nt];var Qt={__name:"GameDeck",props:{deck:Array},setup(e){const t=e,a=(0,o.iH)(!1),A=()=>{a.value=!0},c=()=>{a.value=!1};return(e,l)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("button",{onClick:A},"デッキ確認"),(0,n.wy)((0,n._)("div",Ot,[(0,n._)("div",Lt,[(0,n._)("div",Pt,[(0,n._)("div",jt,[(0,n._)("div",Ft,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.deck,((e,t,a)=>((0,n.wg)(),(0,n.iD)("div",{key:a},[(0,n.Wm)(he,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:(0,o.SU)(v).getters.getBlockSrc(1),sp_block:(0,o.SU)(v).getters.getBlockSrc(2),isDisabled:{disabled:!1}},null,8,["id","name","count","cost","map","block","sp_block"])])))),128))])])]),(0,n._)("div",{class:"modal-footer"},[(0,n._)("button",{type:"button",class:"btn btn-light transitionBtn",onClick:c},zt)])])],512),[[s.F8,a.value]])],64))}};const Rt=(0,P.Z)(Qt,[["__scopeId","data-v-b905703c"]]);var xt=Rt;const Ht={class:"container"};var Et={__name:"GameHand",props:{deck:Array},emits:["pick"],setup(e,{expose:t,emit:a}){const A=e;let c=(0,o.iH)([]),l=(0,o.iH)(0);const r=(e=0,t=4)=>{c.value.push(A.deck[e]),t--,e++,t>0&&setTimeout((()=>r(e,t)),500)},i=e=>{l.value=e,a("pick",e)};return t({firestDrawCard:r}),(e,t)=>((0,n.wg)(),(0,n.iD)("div",Ht,[(0,n.Wm)(s.W3,null,{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,o.SU)(c),((e,t)=>((0,n.wg)(),(0,n.iD)("div",{key:e.id},[(0,n.Wm)(he,{id:e.id,name:e.name,count:e.count,cost:e.cost,map:e.map,block:(0,o.SU)(v).state.blocks[1],sp_block:(0,o.SU)(v).state.blocks[2],onClick:e=>i(t)},null,8,["id","name","count","cost","map","block","sp_block","onClick"])])))),128))])),_:1})]))}};const Mt=(0,P.Z)(Et,[["__scopeId","data-v-13bcffaf"]]);var Kt=Mt;const Jt={key:0},Tt={key:1,class:"gamehand"},Zt={class:"container"},Gt={class:"stage"},Yt={class:"playerData"};var Vt={__name:"GameView",setup(e){const t=(0,o.iH)();let a=(0,o.iH)(1),s=(0,o.iH)(v.state.stageObj.map),A=(0,o.iH)(v.state.ms_stage[0].map),c=(0,o.iH)(v.state.ms_card[1]),l=(0,o.iH)(!0),r=(0,o.iH)(798),i=(0,o.iH)([]),d=(0,o.iH)([]),u=(0,o.iH)(!1);const m=b();function k(){g(),y()}function g(){let e=v.state.tb_deckList[v.state.currentDeck].deck;if(i.value=v.getters.findCardsById(e),"blue"==v.state.myUserObj.userColor){let e=f(i.value);i.value=e}}function f(e){return e.map((e=>{let t=e.map.map((e=>0!=e?e+1:e));return{...e,map:t}}))}function b(){return"blue"==v.state.myUserObj.userColor?{normal:2,sp:4}:{normal:1,sp:3}}function y(){let e=[];for(let t=0;t<4;t++)e.push(i.value[t]);d.value=e}function S(e){c.value=d.value[e],h(p.splitArray(c.value.map,8),r.value,-3,-3)}function w(){l.value&&(s.value=A.value.map(((e,t)=>8==e?s.value[t]:A.value[t])),a.value++)}function h(e,t,a=0,n=0){let o=p.splitArray(v.state.ms_stage[0].map,v.state.stageSideLength);r.value=t;let c=t+a+n*v.state.stageSideLength;const i=Math.floor(c/v.state.stageSideLength),d=c%v.state.stageSideLength;for(let s=0;s<8;s++)for(let t=0;t<8;t++)0!=e[s][t]&&(o[s+i][t+d]=e[s][t]);A.value=o.flat();const u=p.splitArray(s.value,v.state.stageSideLength);l.value=_(e,i,d,u)}function _(e,t,a,s){let n=[];for(let o=0;o<8;o++)for(let A=0;A<8;A++)if(0!=e[o][A])if(u.value){if(s[o+t][A+a]>2)return!1;n.push(p.serchAround([m.sp],o+t,A+a,s))}else{if(s[o+t][A+a]>0)return!1;n.push(p.serchAround([m.normal,m.sp],o+t,A+a,s))}return n.some((e=>e))}function D(){let e=p.rotateArray(p.splitArray(c.value.map,8),8);c.value.map=e.flat(),h(p.splitArray(c.value.map,8),r.value,-3,-3)}return k(),(0,n.bv)((()=>{t.value.firestDrawCard()})),(e,r)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,o.SU)(a)>0?((0,n.wg)(),(0,n.iD)("div",Jt,[(0,n._)("h2",null,"残り"+(0,I.zw)(13-(0,o.SU)(a))+"ターン",1)])):(0,n.kq)("",!0),(0,o.SU)(a)>-1?((0,n.wg)(),(0,n.iD)("div",Tt,[null!=(0,o.SU)(d)?((0,n.wg)(),(0,n.j4)(Kt,{key:0,ref_key:"useHand",ref:t,deck:(0,o.SU)(d),onPick:S},null,8,["deck"])):(0,n.kq)("",!0),(0,n._)("button",{onClick:D},"回転"),(0,n._)("button",{onClick:w},"マージ"),(0,n._)("button",{onClick:r[0]||(r[0]=e=>(0,o.dq)(u)?u.value=!(0,o.SU)(u):u=!(0,o.SU)(u))},"スペシャル"+(0,I.zw)((0,o.SU)(u)?"OFF":"ON"),1),(0,n.Wm)(xt,{deck:(0,o.SU)(i)},null,8,["deck"])])):(0,n.kq)("",!0),(0,n._)("div",Zt,[(0,n._)("div",Gt,[(0,n._)("div",null,[(0,n.Wm)(F,{class:"viewStage",contents:(0,o.SU)(p).splitArray((0,o.SU)(s),(0,o.SU)(v).state.stageSideLength)},null,8,["contents"]),(0,n.Wm)(F,{class:(0,I.C_)(["virtualStage",{gray:!(0,o.SU)(l)}]),contents:(0,o.SU)(p).splitArray((0,o.SU)(A),(0,o.SU)(v).state.stageSideLength),selectCard:(0,o.SU)(p).splitArray((0,o.SU)(c).map,8),onPick:h},null,8,["class","contents","selectCard"])])]),(0,n._)("div",Yt,[(0,n.Wm)(he,{id:(0,o.SU)(v).getters.findCardById(0).id,name:(0,o.SU)(v).getters.findCardById(0).name,count:(0,o.SU)(v).getters.findCardById(0).count,cost:(0,o.SU)(v).getters.findCardById(0).cost,map:(0,o.SU)(v).getters.findCardById(0).map,block:(0,o.SU)(v).getters.getBlockSrc(1),sp_block:(0,o.SU)(v).getters.getBlockSrc(2)},null,8,["id","name","count","cost","map","block","sp_block"]),(0,n.Wm)(he,{id:(0,o.SU)(v).getters.findCardById(0).id,name:(0,o.SU)(v).getters.findCardById(0).name,count:(0,o.SU)(v).getters.findCardById(0).count,cost:(0,o.SU)(v).getters.findCardById(0).cost,map:(0,o.SU)(v).getters.findCardById(0).map,block:(0,o.SU)(v).getters.getBlockSrc(1),sp_block:(0,o.SU)(v).getters.getBlockSrc(2)},null,8,["id","name","count","cost","map","block","sp_block"])])])],64))}};const qt=Vt;var Wt=qt;const $t={key:0},Xt=(0,n._)("h2",null,"ナワバトラー",-1),ea={key:1},ta=(0,n._)("h2",null,"ロビー",-1),aa={key:2};var sa={__name:"App",setup(e){function t(){v.commit("addBlockSrc",{src:f}),v.commit("addBlockSrc",{src:b}),v.commit("addBlockSrc",{src:w}),v.commit("addBlockSrc",{src:y}),v.commit("addBlockSrc",{src:h}),v.commit("addBlockSrc",{src:S}),v.commit("addBlockSrc",{src:_}),v.commit("addBlockSrc",{src:D}),v.commit("addBlockSrc",{src:C}),v.dispatch("addCardListAsync"),v.dispatch("addStageListAsync"),v.commit("createUserData"),v.commit("eraseBufRoom")}return t(),(e,t)=>0==(0,o.SU)(v).state.gameMainPhase?((0,n.wg)(),(0,n.iD)("div",$t,[Xt,(0,n._)("button",{onClick:t[0]||(t[0]=e=>(0,o.SU)(v).state.gameMainPhase=2)},"debug"),(0,n.Wm)(ie),(0,n.Wm)(kt)])):1==(0,o.SU)(v).state.gameMainPhase?((0,n.wg)(),(0,n.iD)("div",ea,[ta,(0,n.Wm)(se),(0,n.Wm)(Bt)])):2==(0,o.SU)(v).state.gameMainPhase?((0,n.wg)(),(0,n.iD)("div",aa,[(0,n.Wm)(Wt)])):(0,n.kq)("",!0)}};const na=sa;var oa=na;a(8702);(0,s.ri)(oa).use(v).mount("#app")}},t={};function a(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,n,o){if(!s){var A=1/0;for(i=0;i<e.length;i++){s=e[i][0],n=e[i][1],o=e[i][2];for(var c=!0,l=0;l<s.length;l++)(!1&o||A>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(c=!1,o<A&&(A=o));if(c){e.splice(i--,1);var r=n();void 0!==r&&(t=r)}}return t}o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[s,n,o]}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={826:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var n,o,A=s[0],c=s[1],l=s[2],r=0;if(A.some((function(t){return 0!==e[t]}))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(l)var i=l(a)}for(t&&t(s);r<A.length;r++)o=A[r],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(i)},s=self["webpackChunknawabato"]=self["webpackChunknawabato"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6990)}));s=a.O(s)})();
//# sourceMappingURL=index.5ec7cec4.js.map