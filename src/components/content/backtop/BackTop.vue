<template>
 <div class="back-top">
   <img src="~assets/img/common/top.png" alt="回到顶部">
 </div>
</template>

<script>
export default {
  name: 'BackTop',
  methods:{
  }
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right:20px;
  bottom:130px;
}
.back-top img{
  width:120px;
}
</style>