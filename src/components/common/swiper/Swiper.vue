<template>
  <div class="swiper">
    <div class="swiper-container" ref="container">
      <div class="swiper-wrapper" ref="wrapper">
        <!-- 通过slot传入内容 -->
        <slot name="swiper-con"></slot>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

export default {
  name: "swiper",
  props: {
    // 显示分页器
    showPagination: {
      type: Boolean,
      default: false
    },
    // 显示slide数量
    // 可选值: 数字 或 'auto'
    slidesPerView: {
      type: [Number, String],
      default: 1
    },
    // slide间隔
    spaceBetween: {
      type: Number,
      default: 0
    },
    // 循环
    loop: {
      type: Boolean,
      default: true
    },
    // 自动居中
    centeredSlides: {
      type: Boolean,
      default: true
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: false
    },
    // 时间间隔
    delay: {
      type: Number,
      default: 3000
    },
    // 用户操作后, 是否禁止自动播放
    disableOnInteraction: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    this.create();
  },
  beforeDestroy() {
    this.destroy();
  },
  methods: {
    create() {
      // 如果已经有swiper实例了,就先销毁
      this.destroy();
      // 轮播内容的class必须为swiper-slide
      const slides = this.$refs.wrapper.children;
      Array.from(slides).forEach(el => {
        el.classList.add("swiper-slide");
      });
      // swiper参数
      const param = {
        slidesPerView: this.slidesPerView,
        spaceBetween: this.spaceBetween,
        loop: this.loop,
        centeredSlides: this.centeredSlides,
        pagination: {}
      };
      // 自动播放
      if (this.autoplay) {
        param.autoplay = {
          delay: this.delay,
          disableOnInteraction: this.disableOnInteraction
        };
      }
      // 显示分页器
      if (this.showPagination) {
        param.pagination = {
          el: this.$refs.pagination
        };
      }
      // 创建swiper
      this.swiper = new Swiper(this.$refs.container, param);
    },
    destroy() {
      // 销毁swiper
      if (this.swiper) {
        this.swiper.destroy();
        this.swiper = null;
      }
    },
    update() {
      // 更新swiper
      // 这个方法就是create的别名
      this.create();

      // swiper的文档说update方法用于更新swiper
      // 但试了下更新slide后再调用update方法,并没有什么效果
      // 只好先销毁swiper,然后重新创建

      //   if (this.swiper) {
      //     this.swiper.update()
      //   }
    }
  }
};
</script>

<style scoped>
.swiper-pagination {
  width:148px;
  height:43px;
  position: absolute;
  top: 342px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>