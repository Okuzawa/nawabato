<template>
  <div class="home">
<<<<<<< HEAD
    <HelloWorld2 msg="ログイン画面" />
    <label>ユーザー名</label>
    <input type="text" placeholder="名前を入力" />
    <div>
      <input type="radio" v-model="joinType" value="1" />新しく部屋を作る
      <input type="radio" v-model="joinType" value="2" />友達の部屋に入る
    </div>
    <div>
      <button class="btn btn-outline-secondary" v-if="joinType == 1">
        <p>登録</p>
      </button>
      <button class="btn btn-outline-secondary" v-if="joinType == 2">
        <p>ログイン</p>
      </button>

      <button class="btn btn-outline-secondary">
        <p>登録情報を削除</p>
      </button>
    </div>
    <p>登録情報にはユーザー名とデッキ情報だけが保存されるよ</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import HelloWorld2 from "@/components/HelloWorld2.vue";

const joinType = ref(1);
=======
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="てすとだよ"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
>>>>>>> parent of 2f007c3 (vue3要素を追加)
</script>
<style>
.home button {
  background-color: #b1e9ee;
  width: 150px;
  height: 30px;
}
</style>