import { createStore } from 'vuex'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArEFrBMUMDHAYTjFJ2HhsHb__zIPYMfLc",
  authDomain: "turf-war-ebf17.firebaseapp.com",
  projectId: "turf-war-ebf17",
  storageBucket: "turf-war-ebf17.appspot.com",
  messagingSenderId: "1096461103992",
  appId: "1:1096461103992:web:57b6f83644c9882d8d8e8d",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default createStore({
  state: {
    stageSideLength:34,
    gameMainPhase:0,

    isLoading: true,
    userId: 0,
    currentDeck: 0,
    tb_deckList: [],
    blocks: [],
    ms_card: [],
    ms_stage: [],

    currentStage: 1,
    stageObj: Object,

    roomsDocRef: null,
    roomId:0,
    enemyIndex:0,
    users: [],
    myUserObj:Object,
    enemyUserObj:Object,
  },
  getters: {
    getBlockSrc: (state) => (index) => {
      return state.blocks[index];
    },
    findCardById: (state) => (id) => {
      return state.ms_card.find(card => card.id == id)
    },
    findCardsById: (state, getters) => (cardIdList) => {
      return cardIdList.map(id => getters.findCardById(id) )
    },
  },
  mutations: {
    addBlockSrc(state, { src }) {
      state.blocks.push(src);
    },
    addCardList(state, { data }) {
      state.ms_card.push({ id: data.id, name: data.name, count: data.count, cost: data.cost, map: JSON.parse("[" + data.map + "]") });
    },
    addStageList(state, { data }) {
      state.ms_stage.push({ id: data.id, name: data.name, map: JSON.parse("[" + data.map + "]") });
    },
    createUserData(state) {
      if (localStorage.getItem("user_id") == null) {
        console.log("新規作成")
        state.userId = Math.floor(Math.random() * 899999 + 100000);
        localStorage.setItem("user_id", state.userId)

        let deckList = [];
        deckList.push({ name: "スターターデッキ", deck: [6, 34, 159, 13, 45, 137, 22, 52, 141, 28, 55, 103, 40, 56, 92] });
        deckList.push({ name: "デッキ1", deck: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
        deckList.push({ name: "デッキ2", deck: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
        deckList.push({ name: "デッキ3", deck: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
        deckList.push({ name: "デッキ4", deck: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
        deckList.push({ name: "デッキ5", deck: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] });
        state.tb_deckList = deckList;
        localStorage.setItem('tb_deck', JSON.stringify(deckList));
      }
      else {
        console.log("データ取得")
        state.tb_deckList = JSON.parse(localStorage.getItem('tb_deck'));
        state.userId = JSON.parse(localStorage.getItem('user_id'));
      }
    },
    saveDeck(state, { name, deck }) {
      state.tb_deckList[state.currentDeck].deck = deck;
      state.tb_deckList[state.currentDeck].name = name;
      localStorage.setItem('tb_deck', JSON.stringify(state.tb_deckList));
    },
    createServer(state,{roomId}) {
      state.roomDocRef = db.collection("rooms").doc(String(roomId));
    },
    eraseBufRoom(state) {
      let bufRoomId = JSON.parse(localStorage.getItem("buf_room_id"));
      if (bufRoomId == null) {
        console.log("途中退出した部屋はありません")
      }
      else {
        db.collection("rooms").doc(String(bufRoomId)).delete();
        console.log("途中退出した部屋があったため、退出処理をしました")
        localStorage.removeItem("buf_room_id");
      }
      state.gameMainPhase = 0;
    },
  },
  actions: {
    addCardListAsync: function (context) {
      const api_url =
        "https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";

      fetch(api_url)
        .then(function (fetch_data) {
          return fetch_data.json();
        })
        .then(function (json) {
          for (let i in json) {context.commit("addCardList", { data: json[i] })}
        })
        .then(()=>context.state.isLoading = false);
    },
    addStageListAsync: function (context) {
      const api_url =
        "https://script.google.com/macros/s/AKfycbxBYBbh3y1smCeFL_CPnIs1lHDUWjOXhQFejZmdnByn4jlvVJhH7L0RCIwj4VEhJQXn/exec";

      fetch(api_url)
        .then(function (fetch_data) {
          return fetch_data.json();
        })
        .then(function (json) {
          for (let i in json) {context.commit("addStageList", { data: json[i] })}
        })
        .then(()=>context.state.stageObj = context.state.ms_stage[1]);
    },
  }
})
