<template>
  <div class="post">
    <HelloWorld msg="ぽすと"/>
    <div class="item"><CardList/></div>
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
</style>