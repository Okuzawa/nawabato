<template>
  <div id="app">
    <div class="users" v-if="isJoined">
      <div>
        <h5>あなた</h5>
        <p>{{ userName }}さん</p>
      </div>
      <div>
        <p>部屋番号</p>
        <h5>{{ roomId }}</h5>
      </div>
      <div>
        <h5>対戦相手</h5>
        <p v-if="messageList.length == 2">{{ messageList[OpponentIndex].userName }}さん</p>
        <p v-else>まだいません</p>
      </div>
    </div>
    <div v-else>
      <div>
        名前: <input v-model="userName" type="text" placeholder="名前を入力" />
      </div>

      <input type="radio" v-model="joinType" value="1" />新しく部屋を作る
      <input type="radio" v-model="joinType" value="2" />友達の部屋に入る

      <div v-if="joinType == 1">
        <input type="button" value="部屋を作る" @click="createRoom" />
      </div>

      <div v-if="joinType == 2">
        部屋番号: <input v-model="roomId" type="text" />
        <input type="button" value="入室" @click="enterRoom" />
      </div>
    </div>
    <div style="color: red">
      {{ message }}
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

let roomsRef;
let roomsDocRef;
let userId;

export default {
  data: () => ({
    userName: "",
    joinType: 1,
    roomId: "",
    isJoined: false,
    message: "",

    messageList:[],
    OpponentIndex: 1,
    opponentName: "",
  }),
  created() {
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
    roomsRef = db.collection("rooms");
  },
  methods: {
    createRoom() {
      this.message = "";
      if (this.userName == "") {
        this.message = "名前を入力してください";
        return;
      }
      let roomId = this.generateRoomId();
      this.roomId = roomId;
      userId = this.$store.state.user_id;
      let userName = this.userName;
      const room = {
        users: [{ userId: userId, userName: userName }],
      };
      this.isJoined = true;
      
      roomsDocRef = roomsRef.doc(String(roomId));
      roomsDocRef.set(room);
      this.loadRoomData();
    },
    enterRoom() {
      this.message = "";
      if (this.userName == "") {
        this.message = "名前を入力してください";
        return;
      }
      if (this.roomId == "") {
        this.message = "部屋番号を入力してください";
        return;
      }
      let roomId = this.roomId;
      userId = this.$store.state.user_id;
      let userName = this.userName;
      roomsDocRef = roomsRef.doc(String(roomId));

      roomsDocRef.get().then((doc) => {
        if (doc.exists) {
          this.message = "";
          let users = doc.get("users");
          if (2 > users.length) {
            users.push({ userId: userId, userName: userName });
            roomsDocRef.update({ users });
            this.isJoined = true;
            this.loadRoomData();
            this.OpponentIndex = 0;
          } else {
            this.message = "その部屋は満室です";
          }
        } else {
          this.message = "その部屋は存在しません";
        }
      });
    },
    generateRoomId() {
      const id = Math.floor(Math.random() * 89999 + 10000);
      return id;
    },
    loadRoomData() {
      let messageList = this.messageList;
      roomsDocRef.onSnapshot(function (doc) {
        // let source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source," data: ",doc.data())
        messageList.length = 0;
        let users = doc.get("users");
        users.forEach(item => {
          messageList.push(item);
        });
      });
    },
  },
};
</script>

<style lang="scss">
.home button {
  background-color: #e2fbfd;
  width: 150px;
  height: 30px;
}
.users {
  display: flex;
  justify-content: center;
  div {
    margin: 10px;
  }
}
</style>