<template>
  <div class="goods">
    <img :src="goodsItem.show.img" :alt="goodsItem.title" />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">¥{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
 .goods {
    padding-bottom: 100px;
    position: relative;
    width:48%;
  }
  .goods img {
    width: 100%;
    border-radius: 10px;
  }

  .goods-info {
    font-size: 30px;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 10px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
    padding-left: 18px;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 30px;
    height: 30px;
    background: url("~assets/img/common/collect.svg") 0 0/30px 30px;
  }
</style>