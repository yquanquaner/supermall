<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" 
    :probe-type="3" 
    @scroll="contentscroll"
    :pull-up-load="true"
    @PullingUp="loadMore">
      <div v-if="banner.length>0">
        <home-swiper :banner="banner"></home-swiper>
      </div>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop"

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },

  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },

  mounted() {},
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  created() {
    /* 1.请求多个数据 */
    this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
    },

    backClick(){
      this.$refs.scroll.scrollTo(0,0);
    },
    contentscroll(position){
      if(position.y<(-1500)){
        this.isShowBackTop=true
      }else{
        this.isShowBackTop=false
      }
    },
    loadMore(){
      console.log("上拉加载更多")
      this.getHomeGoods(this.currentType);
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata() {
      getHomeMultidata()
        .then(res => {
          // console.log("created -> res", res.data.data);
          this.banner = res.data.data.banner.list;
          this.recommend = res.data.data.recommend.list;
          // console.log("请求完毕");
        })
        .catch(err => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then(res => {
          this.goods[type].list.push(...res.data.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 90px;
  height: 100vh;
  position: relative;
}
.home_nav {
  font-size: 38px;
  background-color: var(--color-tint);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 88px;
  z-index: 9;
}
/* .content{
  height: calc(100% - 210px);
  overflow: hidden;
  margin-top:89px;
} */
.content{
  overflow: hidden;
  position: absolute;
  top:90px;
  bottom:120px;
  left:0;
  right:0;
}
</style>