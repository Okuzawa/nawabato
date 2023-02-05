<template>
  <div class="home">
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
  <div style="color: red">
    {{ message }}
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import store from "@/store";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const joinType = ref(1);
const message = ref("");
const userName = ref("");
const roomId = ref("");

const createRoom = () => {
  message.value = "";
      if (userName.value == "") {message.value = "名前を入力してください";return;}
      roomId.value = generateRoomId();
      store.state.myUserObj = {
        userId: store.state.userId,
        userName: userName.value,
        userStatus: "準備中",
        userColor:"yellow"
      }
      store.state.myActData = {
        turn: 0,
        type: "",
        card: [],
        virtualStage: [],
      }
      store.state.gameDatas = { [store.state.userId]: store.state.myActData }
      const data = {users: [store.state.myUserObj],};
      store.commit("createServer", { roomId: roomId.value });
      store.state.roomDocRef.set(data);
      store.state.stageObj = store.state.ms_stage[store.state.currentStage];
      store.state.roomDocRef.update({stage: store.state.stageObj});
      store.state.roomDocRef.update({gameDatas: store.state.gameDatas});
      store.state.enemyIndex = 1;
      initRoom();
}
const enterRoom = () => {
  message.value = "";
      if (userName.value == "") {message.value = "名前を入力してください";return;}
      if (roomId.value == "") {message.value = "部屋番号を入力してください";return;}
      store.commit("createServer", { roomId: roomId.value });
      store.state.enemyIndex = 0;
      store.state.roomDocRef.get().then((doc) => {
        if (doc.exists) {
          let users = doc.get("users");
          if (2 > users.length) {
            store.state.myUserObj = {
              userId: store.state.userId,
              userName: userName.value,
              userStatus: "準備中",
              userColor: "blue",
            }
            users.push(store.state.myUserObj);
            store.state.myActData = {
              turn: 0,
              type: "",
              cardId: [],
              virtualStage: [],
            }
            let gameDatas = doc.get("gameDatas");
            store.state.gameDatas = { ...gameDatas,[store.state.userId]: store.state.myActData }
            gameDatas = store.state.gameDatas
            store.state.roomDocRef.update({ users });
            store.state.roomDocRef.update({ gameDatas });
            initRoom();
          } 
          else message.value = "その部屋は満室です";
        } 
        else message.value = "その部屋は存在しません";
      });
}

const generateRoomId = () => {
  const id = Math.floor(Math.random() * 89999 + 10000);
  return id;
}

const initRoom = () =>{
  store.state.gameMainPhase = 1;
  store.state.roomId = roomId.value;
  localStorage.setItem("buf_room_id", JSON.stringify(roomId.value));
}
</script>

<style scoped lang="scss">
</style>
