<template>
  <div class="tab-ber-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activestyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor:{
      type: String,
      default: '#ff5777'
    }
  },
  data() {
    return {
      // isActive: true,
    };
  },
  methods:{
    itemClick(){
      this.$router.replace(this.path).catch(() =>{});
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activestyle(){
      return this.isActive ? {color:this.activeColor} : {}
    }
  }
};
</script>

<style scoped>
.tab-ber-item {
  flex: 1;
  text-align: center;
  height: 120px;
  font-size: 24px;
}
.tab-ber-item img {
  width: 50px;
  height: 50px;
  margin-top: 17px;
  vertical-align: middle;
}
</style>