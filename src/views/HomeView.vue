<template>
  <div id="app">
    <div v-if="isJoined">
      <div>{{ userName }} さん</div>
      部屋番号: {{ roomId }}
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
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data: () => ({
    userName: "",
    joinType: 1,
    roomId: "",
    isJoined: false,
    socket: io("http://localhost:3031"),
  }),
  created() {
    this.socket.on("connect", () => {
      console.log("connected");
    });
  },
  methods: {
    createRoom() {
      this.socket.emit("create", this.userName);
    },
  },
  mounted() {
    this.socket.on("updateRoom", (room) => {
      this.isJoined = true;
      this.roomId = room.id;
    });
  },
};
</script>

<style>
.home button {
  background-color: #e2fbfd;
  width: 150px;
  height: 30px;
}
</style>