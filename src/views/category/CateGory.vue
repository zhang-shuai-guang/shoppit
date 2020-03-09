<template>
  <div id="home">
    <nav-bar class="navbar1"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'/>
    <home-xin :recommends='recommends'/>
    <FeatureView/>
    <tab-control :list='["流行","新款","精品"]' class="tab-control" @controlItem='controlItem'/>
    <goods :list='showgood'/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeXin from './childComps/HomeXin'
import FeatureView from './childComps/FeatureView'
import TabControl from './childComps/TabControl'
import Goods from 'components/content/goods/Goods'

import {getHomeMultidata,getHomeGoods} from 'network/category'
export default {
  name:'CateGory',
  data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        type:'pop'
      }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeXin,
    FeatureView,
    TabControl,
    Goods
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed:{
    showgood(){
      return this.goods[this.type].list
    }
  },
  methods:{
    // 事件
    controlItem(index){
      switch(index){
        case 0:
          this.type='pop'
          break
        case 1:
          this.type='new'
          break
        case 2:
          this.type='sell'
          break
      }
    },

    // 网络请求
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;   
      })
    },
    getHomeGoods(type){ 
      const page = this.goods[type].page+1
      getHomeGoods(type,page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
      })
    }
  }
}
</script>
<style scoped>
.navbar1{
    background: var(--color-tint);
    color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
}
#home{
  padding-top: 44px;
}
.tab-control{
  position: sticky;
  position: -webkit-sticky;
  top:44px;
  z-index: 2;
}
</style>