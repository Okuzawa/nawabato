import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoading: true,
    user_id: 0,
    currentDeck: 0,
    db_deck_list: [],
    blocks: [],
    cardList: []
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
    createUserData: function (state) {
      if (localStorage.getItem("user_id") == null) {
        console.log("新規作成")
        let userId = Math.floor(Math.random() * 899999+100000);
        state.user_id = userId;
        localStorage.setItem("user_id", userId)
        
        let deckList = [];
        deckList.push({name: "スターターデッキ", deck: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]});
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
