<template>
  <swiper>
        <swiper-item v-for="(item,index) in banners" :key="index">
            <a :href="item.link">
                <img :src="item.image" @load="imgload"/>
            </a>
        </swiper-item>
    </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name:"HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    },
    
  },
  data(){
      return{ 
        isload:false 
      }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imgload(){  
      if(!this.isload){
        this.$emit("imgload")
        this.isload=true
      }
    }
  }
}
</script>

<style>

</style>