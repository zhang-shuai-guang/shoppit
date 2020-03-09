<template>
  <div class="goods">
    <goods-item v-for="(item,index) in list" :key="index" :good-item="item"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name:'Goods',
  props:{
    list:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsItem
  }
}
</script>

<style scoped>
.goods{
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding:2px 2px 40px;
}

</style>