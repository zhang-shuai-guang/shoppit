<template>
  <div>
    <nav-bar class="navbar1"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import {getHomeMultidata} from 'network/category'
export default {
  name:'CateGory',
  data(){
      return{
        banners:[],
        recommends:[]
      }
  },
  components:{
    NavBar,
    HomeSwiper
  },
  created(){
    getHomeMultidata().then(res => {
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;   
    })
  }
}
</script>
<style scoped>
.navbar1{
    background: var(--color-tint);
    color: #fff;
}
</style>