<template>
  <div class="post">
    <HelloWorld msg="ぽすと"/>
    <div class="wrap"><card-list/></div>
  </div>
</template>

<script>
import CardList from '@/components/CardList.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    CardList,
    HelloWorld
  }
}
</script>

<style>
.wrap {
  margin-top: -150px;
  margin-left: 100px;
  transform: scale(0.5, 0.5);
}
</style>