<template>
  <swiper class="xiangs">
        <swiper-item v-for="(item,index) in imglist" :key="index">
          <img :src="item"/>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name:"HomeSwiper",
  props:{
    imglist:{
      type:Array,
      default(){
        return []
      }
    },
    
  },
  data(){
      return{ 
      }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
  }
}
</script>

<style scoped>
.xiangs{
  height: 300px;
  overflow: hidden;
}
</style>