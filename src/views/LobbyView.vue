<template>
  <div id="app">
    <div v-if="roomStatus == '準備中'">
      <div class="users">
        <div class="card border-secondary" style="max-width: 15rem">
          <div class="card-header">{{ userPrivilege }}</div>
          <div class="card-body text-secondary">
            <h5 class="card-title">{{ userName }}</h5>
            <p class="card-text">{{ userStatus }}</p>
          </div>
        </div>
        <div>
          <p>部屋番号</p>
          <h3>{{ roomId }}</h3>
        </div>
        <div v-if="this.$store.state.users.length == 2">
          <div class="card border-secondary" style="max-width: 15rem">
            <div class="card-header">{{ this.$store.state.users[enemyIndex].userPrivilege }}</div>
            <div class="card-body text-secondary">
              <h5 class="card-title">{{ this.$store.state.users[enemyIndex].userName }}</h5>
              <p class="card-text"> {{ this.$store.state.users[enemyIndex].userStatus }}</p>
            </div>
          </div>
        </div>
        <div v-else><p>対戦相手がいません</p></div>
      </div>
      <button @click="writeStatus('準備OK')">準備OK</button>
      <button @click="exitRoom">退出</button>
    </div>
    <div v-else-if="roomStatus == '準備OK'">
      ゲーム
      <button @click="exitRoom">退出</button>
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

export default {
  data: () => ({
    userName: "",
    userStatus: "",
    userPrivilege: "",

    joinType: 1,
    roomId: "00000",
    roomStatus: "",
    message: "",

    enemyIndex: 1,
  }),
  methods: {
    generateRoomId() {
      const id = Math.floor(Math.random() * 89999 + 10000);
      return id;
    },
    createRoom() {
      this.message = "";
      if (this.userName == "") {
        this.message = "名前を入力してください";
        return;
      }
      this.roomId = this.generateRoomId();
      this.userStatus = "準備中";
      this.userPrivilege = "owner";
      const data = {
        users: [
          {
            userId: this.$store.state.userId,
            userName: this.userName,
            userStatus: this.userStatus,
            userPrivilege: this.userPrivilege,
          },
        ],
      };
      this.$store.commit("createServer", { roomId: this.roomId });
      this.$store.state.roomDocRef.set(data);
      this.loadRoomData();
      this.roomStatus = "準備中";
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
      this.$store.commit("createServer", { roomId: this.roomId });
      this.enemyIndex = 0;
      this.$store.state.roomDocRef.get().then((doc) => {
        if (doc.exists) {
          let users = doc.get("users");
          if (2 > users.length) {
            this.userStatus = "準備中";
            this.userPrivilege = "guest";
            users.push({
              userId: this.$store.state.userId,
              userName: this.userName,
              userStatus: this.userStatus,
              userPrivilege: this.userPrivilege,
            });
            this.$store.state.roomDocRef.update({ users });
            this.loadRoomData();
            this.roomStatus = "準備中";
          } else {
            this.message = "その部屋は満室です";
          }
        } else {
          this.message = "その部屋は存在しません";
        }
      });
    },
    loadRoomData() {
      localStorage.setItem("buf_room_id", JSON.stringify(this.roomId));

      let usersList = this.$store.state.users;
      this.$store.state.roomDocRef.onSnapshot((doc) => {
        usersList.length = 0;
        // let source = doc.metadata.hasPendingWrites ? "Local" : "Server";
        // console.log(source, " data: ", doc.data());

        let users = doc.get("users");
        if (users != null) {
          users.forEach((user) => usersList.push(user));
        }
        if (usersList.length == 0) {
          this.exitRoom();
        } else if (usersList.length == 2) {
          this.$store.state.enemyId = users[this.enemyIndex].userId;
          console.log(this.$store.state.enemyId);
          this.setRoomStatus("準備OK");
        }
      });
    },
    exitRoom() {
      this.$store.state.roomDocRef.delete();
      this.roomStatus = "";
      localStorage.removeItem("buf_room_id");
      console.log("exit");
    },
    setRoomStatus(status) {
      if (
        this.$store.state.users.every(
          (userData) => userData.userStatus == status
        )
      ) {
        this.roomStatus = status;
      }
    },
    writeStatus(status) {
      this.userStatus = status;
      this.$store.state.roomDocRef.get().then((doc) => {
        let users = doc.get("users");
        users.forEach((userData) => {
          if (userData.userId == this.$store.state.userId) {
            userData.userStatus = status;
          }
        });
        this.$store.state.roomDocRef.update({ users });
      });
    },
  },
};
</script>

<style lang="scss">
.users {
  display: flex;
  justify-content: center;
}
</style>