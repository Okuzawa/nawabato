<template>
  <div class="CardItem">
    <button v-if="id != 0" class="card-item btn btn-outline-secondary"
      :class="{ active: isSelect,disabled: isDisabled }" @click="OnClick();$emit('clickEvent');">
      <BlockTable BlockTable :contents="cardMap" class="cardMap"/>
      <p class="name">{{ name }}</p>
      <div class="count">
        <p>{{ count }}</p>
      </div>
      <div>
        <p class="sp">消費SP</p>
        <p class="cost">{{ cost }}</p>
      </div>
    </button>
    <div v-else class="card-item">
      <h1>⊕</h1>
    </div>
  </div>
</template>

<script>
import BlockTable from "@/components/parts/BlockTable.vue";
import utils from "@/utils";

export default {
  name: "CardItem",
  components: {
    BlockTable,
  },
  props: {
    id: Number,
    name: String,
    count: Number,
    cost: Number,
    map: Array,
    block: String,
    sp_block: String,

    isActiv: { default: true },
    isDisabled: { default: false },
    select: { default: false },
    clickEvent: Function,
  },
  data() {
    return {
      enabled: true,
      isSelect: false,
    };
  },
  computed: {
    cardMap: {
      get: function () {
        return utils.splitArray(this.map,8);
      },
    },
  },
  // watch: {
  //   isSelect: function(newVal, oldVal) {
  //     console.log(newVal, oldVal)
  //   }
  // },
  mounted() {
    if (this.id == 0) return;
    this.enabled = this.isActiv.enabled;
    if (this.select.select != this.isSelect) this.isSelect = this.select.select;
  },
  methods: {
    OnClick: function () {
      console.log(this.name)
      if (!this.enabled) return;
      console.log(this.enabled)
      if (this.isSelect) this.isSelect = false;
      else this.isSelect = true;
    },
  },
};
</script>

<style lang="scss">
.CardItem{
  background-color: #eeffeb;
}
.card-item {
  width: 90px;
  height: 150px;
  h1{
    width: 90px;
    height: 150px;
    background-color:#686868;
    border: solid 3px #adadad;
    color: #adadad;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cardMap {
    transform: scale(0.3);
    margin: -85px -95px;
  }
  .name {
    font-size: 0.5em;
    line-height: 1;
  }
  .count {
    margin: 1px;
    font-size: 1.5em;
  }
  .sp {
    font-size: 0.3em;
  }
  .cost {
    font-size: 1em;
  }
  div {
    display: inline-block;
    vertical-align: top;
    line-height: 0.1;
    margin: -10px 0px;
  }
}
.btn {
  border-radius: 2px;
}
</style>
