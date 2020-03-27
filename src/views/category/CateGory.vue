<template>
  <div id="home">
    <nav-bar class="navbar1"><div slot="center">购物街</div></nav-bar>
    <tab-control :list='["流行","新款","精品"]' 
                ref='tabcontrol2'
                @controlItem='controlItem'
                class="control1"
                v-show="iscontrol"
                />
    <b-scroll class="content" 
              ref="scroll" 
              :probe-type='3' 
              :pull-up-load='true'
              @scroll="scroll"
              @pulling='pulling'>
      <home-swiper :banners='banners' @imgload="imgload" />
      <home-xin :recommends='recommends'/>
      <FeatureView/>
      <tab-control :list='["流行","新款","精品"]' 
                    ref='tabcontrol1'
                    @controlItem='controlItem'/>
      <goods :list='showgood'/>
    </b-scroll>
    <back-top @click.native="backTop" v-show="isshow"/>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeXin from './childComps/HomeXin'
import FeatureView from './childComps/FeatureView'
import TabControl from 'components/content/tabcontrol/TabControl'
import Goods from 'components/content/goods/Goods'
import BScroll from 'components/common/scroll/Scroll'
import {backTopMixin} from 'common/mixin'

import {getHomeMultidata,getHomeGoods} from 'network/category'
import {debounce} from 'common/debounce'
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
        type:'pop',
        isshow:false,
        controltop:0,
        iscontrol:false,
        savey:0,
      }
  },
  mixins:[backTopMixin],
  components:{
    NavBar,
    HomeSwiper,
    HomeXin,
    FeatureView,
    TabControl,
    Goods,
    BScroll,
  },
  created(){
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
    
  },
  mounted(){
    let refresh=debounce(this.$refs.scroll.refresh,60)
    this.$bus.$on('itemImgLoad',()=>{
      refresh()
    })
  },
  computed:{
    showgood(){
      return this.goods[this.type].list
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.savey,1)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.savey=this.$refs.scroll.getscrolly()
  },
  methods:{
    // 事件
    imgload(){
      this.controltop=this.$refs.tabcontrol1.$el.offsetTop
    },
    //种类选项卡
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
      this.$refs.tabcontrol1.indexa=index
      this.$refs.tabcontrol2.indexa=index
    },
    backclick(){//回到顶部
      this.$refs.scroll.scrollTo(0,0)
    },
    scroll(i){//显示隐藏按钮
      this.listenShow(i)
      this.iscontrol=-(i.y)>this.controltop
    },
    pulling(){
      this.getHomeGoods(this.type);
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
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page+=1
        this.$refs.scroll.finisPullUp()
      })
    }
  }
}
</script>
<style scoped>
.navbar1{
    background: var(--color-tint);
    color: #fff;
    z-index: 9;
}
#home{
  height: 100vh;
}
.control1{
  position: relative;
  z-index: 9;
}
.content{
  /* height:calc(100% - 93px); */
  position: absolute;
  top:44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
  /* height: 300px; */
}
</style>