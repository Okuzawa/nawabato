<template>
  <div class="container">
    <div
      v-for="(value, key, index) in this.$store.state.ms_card" :key="index">
      <CardItem
        :id="value.id"
        :name="value.name"
        :count="value.count"
        :cost="value.cost"
        :map="value.map"
        :block="this.$store.getters.getBlockSrc(1)"
        :sp_block="this.$store.getters.getBlockSrc(2)"
        @click="change(value.id)"
        :select="{ select: -1 != this.myDeck.indexOf(value) ? true:false }"
      />
    </div>
  </div>
</template>

<script>
import CardItem from "@/components/parts/CardItem.vue";

export default {
  name: "CardListView",
  components: {
    CardItem,
  },
  props: {
    myDeck: Array,
  },
  methods: {
    change: function (id){
      this.$emit('change', id);
    }
  }
};
</script>

<style scoped>
.container {
  background-color: #eeffeb;
  width: 550px;
  height: 600px;
  border: solid 5px #260064;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  padding: 0px 0px;
}
.container::-webkit-scrollbar {
  display: none;
}
</style>
