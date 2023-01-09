import { createStore } from 'vuex'

export default createStore({
  state: {
    blocks: [],
    cardList: [],
  },
  getters: {
  },
  mutations: {
    addBlockSrc(state, { src }) {
      state.blocks.push(src);
    },
    addCardList(state, { data }) {
      state.cardList.push({ name: data.name, count: data.count, cost: data.cost, map: JSON.parse("[" + data.map + "]") });
    },
  },
  actions: {
    addCardListAsync: function (context) {
      var api_url =
        "https://script.google.com/macros/s/AKfycbx1KFHoEykkjIe3Rn3LVo6_kLglJmK_KZE8uNbwfkgv3lrCQ6p3-JhFI2uADL8GcHdQ/exec";

      fetch(api_url)
        .then(function (fetch_data) {
          return fetch_data.json();
        })
        .then(function (json) {
          for (var i in json) {
            context.commit("addCardList",{data: json[i]})
          }
        });
    }
  },
  modules: {
  }
})
