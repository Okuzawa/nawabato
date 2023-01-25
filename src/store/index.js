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
    isLoading: true,
    user_id: 0,
    currentDeck: 0,
    db_deck_list: [],
    blocks: [],
    cardList: [],
    roomsRef: null,
  },
  getters: {
    getBlockSrc: (state) => (index) => {
      return state.blocks[index];
    },
    getCardList: (state) => (index) => {
      return state.cardList[index];
    }
  },
  mutations: {
    addBlockSrc(state, { src }) {
      state.blocks.push(src);
    },
    addCardList(state, { data }) {
      state.cardList.push({ id: data.id, name: data.name, count: data.count, cost: data.cost, map: JSON.parse("[" + data.map + "]") });
    },
    createUserData(state) {
      if (localStorage.getItem("user_id") == null) {
        console.log("新規作成")
        let userId = Math.floor(Math.random() * 899999+100000);
        state.user_id = userId;
        localStorage.setItem("user_id", userId)
        
        let deckList = [];
        deckList.push({name: "スターターデッキ", deck: [6,34,159,13,45,137,22,52,141,28,55,103,40,56,92]});
        deckList.push({name: "デッキ1", deck: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
        deckList.push({name: "デッキ2", deck: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
        deckList.push({name: "デッキ3", deck: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
        deckList.push({name: "デッキ4", deck: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
        deckList.push({name: "デッキ5", deck: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]});
        state.db_deck_list = deckList;
        let json = JSON.stringify(deckList);
        localStorage.setItem('tb_deck', json);
      }
      else {
        console.log("データ取得")

        let json = localStorage.getItem('tb_deck');
        state.db_deck_list = JSON.parse(json);
        json = localStorage.getItem('user_id');
        state.user_id = JSON.parse(json);
      }
    },
    SaveDeck(state,{name,deck}) {
      state.db_deck_list[state.currentDeck].deck = deck;
      state.db_deck_list[state.currentDeck].name = name;
      let json = JSON.stringify(state.db_deck_list);
      localStorage.setItem('tb_deck', json);
    },
    initFirestore(state) {
      
      state.roomsRef = db.collection("rooms");
    },
    loadBufRoomId () {
      let json = localStorage.getItem("buf_room_id");
      let bufRoomId = JSON.parse(json);
      console.log("buf_room_id",bufRoomId);
      if (bufRoomId == null){
        console.log("途中退出した部屋はありません")
      }
      else{
        firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
        db.collection("rooms").doc(String(bufRoomId)).delete();
        console.log("途中退出した部屋があったため、退出処理をしました")
        localStorage.removeItem("buf_room_id");
      }
    }
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
          for (let i in json) {
            context.commit("addCardList", { data: json[i] })
          }
        })
        .then(function () {
          context.state.isLoading = false;
          console.log("done")
        });
    }
  }
})
