<template>
  <swiper
    class="swipe"
    ref="banner"
    :showPagination="true"
    :spaceBetween="10"
    slidesPerView="auto"
    :loop="true"
    :autoplay="true"
    :disableOnInteraction="false"
  >
    <div v-for="(item,index) of banner" :key="index" slot="swiper-con">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
      </a>
    </div>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper
  }
};
</script>

<style scoped>
.swipe {
  position: relative;
  width: 100%;
  height: 388px;
}
.swipe img {
  width: 100%;
}
</style>