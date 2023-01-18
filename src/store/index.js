import { createStore } from 'vuex'
import Dexie from 'dexie';

export default createStore({
  state: {
    db: null,
    blocks: [],
    cardList: [],
    deckList: [
      { name: "スターターデッキ", deck: [1, 2, 3, 4, 5, 6, 7] },
      { name: "temp", deck: [] },
      { name: "temp", deck: [] },
      { name: "temp", deck: [] },
      { name: "temp", deck: [] },
      { name: "temp", deck: [] },
      { name: "temp", deck: [] },
      { name: "temp", deck: [] },
    ],
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
    DB_CONNECTION: (state, payload) => (state.db = payload),
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
        });
    },
    createUserData: function (context) {
      const db = new Dexie('user_db');
      db.version(1).stores({
        // ストア名: "キーをカンマ区切りで記入"
        user: "++user_id, name",
        deck: "++deck_id, name, deck_list",
      });
      context.commit("DB_CONNECTION", { payload: db })
    },
  }
})
