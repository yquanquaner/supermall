<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/MainTabBar/MainTabBar";
export default {
  name: "app",
  components: {
    MainTabBar
  },
  mounted(){
    // document.body.addEventListener("touchmove",function(e){
    //   e.preventDefault();
    // },{passive:false});
  }
};
</script>
<style lang="scss">
@import "assets/css/base.css";

.swiper-pagination-bullet {
  width: 20px !important;
  height: 20px !important;
  margin-left: 10px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #ff5500 !important;
}
h2 {
  font-size: 38px;
}
</style>
