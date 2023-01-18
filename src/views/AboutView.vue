<template>
  <div class="about">
    <div id="app">
      <label>名前</label>
      <input type="text" v-model="userName" />
      <label>メッセージ</label>
      <input type="text" v-model="message" />
      <button @click="sendMessage">送信</button>
      <ul>
        <li v-for="(value, key, index) in messageList" v-bind:key="index">
          {{ value.user_name }}
          <span style="margin-left: 100px">{{ value.message }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
let messageRef;

export default {
  name: "app",
  data() {
    return {
      messageList: [],
      userName: "ユーザーA",
      message: "テストメッセージです",
    };
  },
  created: function () {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyArEFrBMUMDHAYTjFJ2HhsHb__zIPYMfLc",
      authDomain: "turf-war-ebf17.firebaseapp.com",
      projectId: "turf-war-ebf17",
      storageBucket: "turf-war-ebf17.appspot.com",
      messagingSenderId: "1096461103992",
      appId: "1:1096461103992:web:57b6f83644c9882d8d8e8d",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const db = firebase.firestore();
    messageRef = db.collection("chat_messages");

    let messageList = this.messageList;
    messageRef.orderBy("created", "desc").onSnapshot(function (qs) {
      messageList.length = 0;
      qs.forEach((result) => {
        messageList.push(result.data());
      });
    });
  },
  methods: {
    sendMessage: function () {
      messageRef.add({
        user_name: this.userName,
        message: this.message,
        created: new Date().getTime(),
      });
    },
  },
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
