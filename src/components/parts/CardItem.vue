<template>
  <div class="CardItem">
    <button v-if="id != 0" class="card-item btn btn-outline-secondary"
      :class="{ active: select.select, disabled: isDisabled, gaming: isSp }" @click="OnClick();$emit('clickEvent');">
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
    <div v-if="isPass" class = "isPass">
      <h1>パス</h1>
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
    isPass:Boolean,
    isSp:Boolean,
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
    }
  },
  // watch: {
  //   isSp: function(newVal) {
  //     this.sp = newVal
  //     console.log(this.sp)
  //   }
  // },
  mounted() {
    if (this.id == 0) return;
    this.enabled = this.isActiv.enabled;
    if (this.select.select != this.isSelect) this.isSelect = this.select.select;
  },
  methods: {
    OnClick: function () {
      if (!this.enabled) return;
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
.gaming {
  background: linear-gradient(to right, rgba(255, 0, 255, 0.5), rgba(255, 255, 0, 0.5), rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5)) 0% center/200%;
  animation: gaming 2s linear infinite;
  }
@keyframes gaming {
  100% { background-position-x: 200%; }
}
.card-item {
  width: 90px;
  height: 150px;
  h1{
    width: 90px;
    height: 150px;
    background-color:#686868;
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
.isPass{
  pointer-events: none;
  z-index: 1;
  position: fixed;
  margin-top: -150px;
  width: 90px;
  height: 150px;
  background-color: rgba(228, 228, 228, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  h1{
    color: #000000;
  }
}
.btn {
  border-radius: 2px;
}
</style>
