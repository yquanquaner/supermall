<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div v-if="banner.length>0">
      <swiper class="swipe" ref="banner" :showPagination="true" :spaceBetween="10" slidesPerView="auto" :loop="true" :autoplay="true" :disableOnInteraction="false">
        <div v-for="(item,index) of banner" :key="index" slot="swiper-con">
          <a :href="item.link">
            <img :src="item.image" :alt="item.title" />
          </a>
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
  },

  data() {
    return {
      banner: [],
      dkeyword: [],
      keywords: [],
      recommend: []
    };
  },

  mounted() {

  },

  created() {
    /* 1.请求多个数据 */
    getHomeMultidata()
      .then(res => {
        console.log("created -> res", res.data.data);
        this.banner = res.data.data.banner.list;
        this.dkeyword = res.data.data.dKeyword;
        this.keywords = res.data.data.keywords;
        this.recommend = res.data.data.recommend.list;
        console.log("请求完毕");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
.home_nav {
  font-size: 38px;
  background-color: var(--color-tint);
  color: #fff;
}
.swipe {
  position: relative;
  width: 100%;
  height: 388px;
}
.swipe img {
  width: 100%;
}

</style>