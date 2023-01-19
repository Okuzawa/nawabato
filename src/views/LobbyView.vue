<template>
  <div class="home">
    <HelloWorld2 msg="ホーム画面" />
    <label>ユーザー名</label>
    <input type="text" placeholder="名前を入力" />
    <div>
      <button class="btn btn-outline-secondary">
        <p>バトル</p>
      </button>
      <button class="btn btn-outline-secondary">
        <p>デッキリスト</p>
      </button>
    </div>
  </div>
</template>

<script setup>
import HelloWorld2 from "@/components/parts/HelloWorld2.vue";
</script>
<style>
.home button {
  background-color: #b1e9ee;
  width: 150px;
  height: 30px;
}
</style>