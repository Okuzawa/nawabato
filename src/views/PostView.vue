<template>
  <div class="post">
    <HelloWorld msg="ぽすと"/>
    <card-list />
    <button class="btn btn-primary">bootstrap-btn</button>
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