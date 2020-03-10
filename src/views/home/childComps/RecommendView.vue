<template>
  <div class="recommend">
    <div v-for="(item,index) of recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 28px;
  padding:28px 0 20px;
  border-bottom: 6px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 160px;
  margin-bottom:8px;
}
</style>