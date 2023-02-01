<template>
  <div class="users">
    <div class="card border-secondary" style="max-width: 15rem">
      <div class="card-header">{{ store.state.myUserObj.userPrivilege }}</div>
      <div class="card-body text-secondary">
        <h5 class="card-title">{{ store.state.myUserObj.userName }}</h5>
        <p class="card-text">{{ store.state.myUserObj.userStatus }}</p>
        <div class="dropdown" v-if="store.state.myUserObj.userPrivilege == 'yellow'">
          <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            {{store.state.stageObj.name}}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li v-for="(value, key, index) in store.state.ms_stage" :key="index"><a class="dropdown-item" @click="selectStage(key)">{{value.name}}</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div>
      <p>|部屋番号|</p>
      <h3>{{ store.state.roomId }}</h3>
    </div>

    <div v-if="store.state.users.length == 2">
      <div class="card border-secondary" style="max-width: 15rem">
        <div class="card-header">
          {{ store.state.enemyUserObj.userPrivilege }}
        </div>
        <div class="card-body text-secondary">
          <h5 class="card-title">
            {{ store.state.enemyUserObj.userName }}
          </h5>
          <p class="card-text">
            {{ store.state.enemyUserObj.userStatus }}
          </p>
        </div>
      </div>
    </div>
    <div v-else><p>対戦相手がいません</p></div>
  </div>
  <div>
    <p>{{ store.state.stageObj.name }}</p>
    <BlockTable class="stagePreview pointerNone" :contents=" utils.splitArray(store.state.stageObj.map, store.state.stageSideLength)"/>
  </div>
  <button @click="chageStatus">{{ store.state.myUserObj.userStatus }}</button>
  <button @click="store.commit('eraseBufRoom')">退出</button>
</template>

<script setup>
import store from "@/store";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import BlockTable from "@/components/parts/BlockTable.vue";
import utils from "@/utils";

const loadRoomData = () => {
  let usersList = store.state.users;
  store.state.roomDocRef.onSnapshot((doc) => {
    usersList.length = 0;
    // let source = doc.metadata.hasPendingWrites ? "Local" : "Server";
    // console.log(source, " data: ", doc.data());

    let users = doc.get("users");
    if (users == null) {
      store.commit("eraseBufRoom");
      return;
    }
    store.commit("setStageObj", { obj: doc.get("stage") });
    users.forEach((user) => usersList.push(user));
    store.state.myUserObj = users[1 - store.state.enemyIndex];
    if (usersList.length == 2) {
      store.state.enemyUserObj = users[store.state.enemyIndex];
      startGame("準備OK");
    }
  });
};

loadRoomData();

const startGame = (status) => {
  if (store.state.users.every((userData) => userData.userStatus == status)) {
    store.state.gameMainPhase = 2;
  }
};
const chageStatus = () => {
  if (store.state.myUserObj.userStatus == "準備中") {
    writeStatus("準備OK");
  } else if (store.state.myUserObj.userStatus == "準備OK") {
    writeStatus("準備中");
  }
};
const writeStatus = (status) => {
  store.state.roomDocRef.get().then((doc) => {
    let users = doc.get("users");
    users.forEach((userData) => {
      if (userData.userId == store.state.userId) userData.userStatus = status;
    });
    store.state.roomDocRef.update({ users });
  });
};

const selectStage = (index) => {
  store.state.currentStage = index;
  store.state.stageObj = store.state.ms_stage[store.state.currentStage];
  store.state.roomDocRef.update({ stage: store.state.stageObj });
};
</script>

<style lang="scss">
.users {
  display: flex;
  justify-content: center;
}
.dropdown{
  margin-top: -15px;
}
.stagePreview {
  display: flex;
  justify-content: center;
  transform: scale(0.45);
  margin-top: -370px;
  margin-bottom: -350px;
  padding: 0 10;
}
.pointerNone{
  pointer-events: none;
}
</style>