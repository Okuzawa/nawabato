<template>
  <div id="app">
    <div v-if="roomStatus == '準備中'">
      <div class="users" >
        <h5>部屋番号:{{ roomId }}</h5>
        <ul v-for="(value, key, index) in usersList" v-bind:key="index">
          {{value.userName}}:{{value.userStatus}}
        </ul>
      </div>
      <button @click="writeStatus('準備OK')">準備OK</button>
      <button @click="exitRoom">退出</button>
    </div>
    <div v-else-if="roomStatus == '準備OK'">
      ゲーム
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
import "firebase/compat/auth";
import "firebase/compat/firestore";

let roomsDocRef;
let userId;

export default {
  data: () => ({
    userName: "",
    joinType: 1,
    roomId: "",
    roomStatus: "",
    message: "",

    usersList: [],
    enemyIndex: 1,
    enemyName: "",
  }),
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
      let status = "準備中";
      const data = {
        users: [{ userId: userId, userName: userName, userStatus: status }],
      };
      roomsDocRef = this.$store.state.roomsRef.doc(String(roomId));
      roomsDocRef.set(data);
      this.loadRoomData();
      this.roomStatus = '準備中';
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
      roomsDocRef = this.$store.state.roomsRef.doc(String(roomId));
      let status = "準備中";
      this.enemyIndex = 0;
      roomsDocRef.get().then((doc) => {
        if (doc.exists) {
          let users = doc.get("users");
          if (2 > users.length) {
            users.push({ userId: userId, userName: userName, userStatus: status });
            roomsDocRef.update({ users });
            this.loadRoomData();
            this.roomStatus = '準備中';
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
      let json = JSON.stringify(this.roomId);
      localStorage.setItem("buf_room_id", json);

      let usersList = this.usersList;
      roomsDocRef.onSnapshot((doc) => {
        usersList.length = 0;
        // let source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, " data: ", doc.data());

        let users = doc.get("users");
        if(users != null){
            users.forEach((item) => {
              usersList.push(item);
            });
        }
        if(usersList.length == 0){ this.exitRoom() }
        else if(usersList.length == 2){
          this.setRoomStatus('準備OK');
        }
      });
    },
    exitRoom() {
      roomsDocRef.delete();
      this.roomStatus = "";
      localStorage.removeItem("buf_room_id");
      console.log("exit")
    },
    setRoomStatus(status) {
      if( this.usersList.every(userData=>userData.userStatus == status ) ){
        this.roomStatus = status
        }
    },
    writeStatus(status) {
      roomsDocRef.get().then((doc) => {
        if (doc.exists) {
          let users = doc.get("users");
          users.forEach((userData)=>{
            if(userData.userId == userId){ userData.userStatus = status; }
          });
          roomsDocRef.update({ users });
        } else {
          console.log("存在しない")
        }
      });
    }
  },
};
</script>

<style lang="scss">
.home button {
  background-color: #e2fbfd;
  width: 150px;
  height: 30px;
}
</style>