<template>
  <div id="xiangqing">
    <nav-bar class="xaing-nav-bar" ref="nav" @dian="tiao"/>
    <scroll class="xiang-scroll" @scroll="scroll" :probe-type="3" ref="scroll">
      <xiang-switer :imglist='imgliat'/>
      <deta-base-info :goods='goods'/>
      <deta-shop-info :shop='shop'/>
      <deta-goods-info :detail-info="detailInfo" @imgload='imgload'/>
      <detail-param-info ref="a" :paramInfo="paraminfo"/>
      <detail-comment-info ref="b" :commentInfo='comminfo'/>
      <goodss ref="c" :list="list"/>
    </scroll>
    <detail-bottom-bar @addcart='addcart'/>
    <back-top @click.native="backTop" v-show="isshow"/>
  </div>
</template>

<script>
import NavBar from './xinavbar/XiNavBar'
import XiangSwiter from './xiangswiter/xiangSwiter'
import DetaBaseInfo from './xinavbar/DetailBaseInfo'
import DetaShopInfo from './xinavbar/DetailShopInfo'
import scroll from 'components/common/scroll/Scroll'
import DetaGoodsInfo from './xinavbar/DetailGoodsInfo'
import DetailParamInfo from './xinavbar/DetailParamInfo'
import DetailCommentInfo from './xinavbar/DetailCommentInfo'
import Goodss from 'components/content/goods/Goods'
import DetailBottomBar from './xinavbar/DetailBottomBar'
import {backTopMixin} from 'common/mixin'
import {getXingqingdata,Goods,Shop,GoodsParam,getRecommend} from 'network/xiangq'
export default {
name:'XiangQing',
data(){
  return{
    id:null,
    imgliat:[],
    goods:{},
    shop:{},
    detailInfo:{},
    paraminfo:{},
    comminfo:{},
    list:[],
    tiaoindex:[0,1000,2000,3000],
    currentindex:0,
    // isshow:false
  }
},
mixins:[backTopMixin],
created(){
this.id=this.$route.params.id
getXingqingdata(this.id).then(res=>{
  console.log(res);
  let data=res.result
  this.imgliat=data.itemInfo.topImages
  this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
  this.shop=new Shop(data.shopInfo),
  this.detailInfo=data.detailInfo,
  this.paraminfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
  if(data.rate.cRate !==0){
    this.comminfo = data.rate.list[0]
  }
})
getRecommend().then(res =>{
  console.log(res);
  this.list=res.data.list
})
},
components:{
  NavBar,
  XiangSwiter,
  DetaBaseInfo,
  DetaShopInfo,
  scroll,
  DetaGoodsInfo,
  DetailParamInfo,
  DetailCommentInfo,
  Goodss,
  DetailBottomBar,
  // BackTop
},
methods:{
  imgload(){
    console.log("aaaa");
    this.$refs.scroll.refresh()
    this.tiaoindex=[]
    this.tiaoindex.push(0)
    this.tiaoindex.push(this.$refs.a.$el.offsetTop-44)
    this.tiaoindex.push(this.$refs.b.$el.offsetTop-44)
    this.tiaoindex.push(this.$refs.c.$el.offsetTop-44)
    console.log(this.tiaoindex);
  },
  tiao(index){
    console.log(index);
    this.$refs.scroll.scrollTo(0,-this.tiaoindex[index],300)
  },
  scroll(top){
    // console.log(top.y);
    let positiony=-top.y
    let length = this.tiaoindex.length
    this.listenShow(top)
    // this.isshow = -(top.y)>640
    for(let i = 0;i < length;i++){
      if(this.currentindex !==i && ((i <length-1 && positiony >= this.tiaoindex[i] && positiony < this.tiaoindex[i+1]) || (i === length - 1 && positiony >= this.tiaoindex[i]))){
        this.currentindex = i;
        // console.log(this.currentindex);
        this.$refs.nav.isitem = this.currentindex
      }
    }
  },
  addcart(){
     // 1.创建对象
        const obj = {}
        // 2.对象信息
        obj.iid = this.id;
        obj.imgURL = this.imgliat[0];
        obj.title = this.goods.title;
        obj.desc = this.goods.desc;
        obj.newPrice = this.goods.nowPrice;
        // 3.添加到Store中
        console.log(obj);
        
        this.$store.dispatch('addCart', obj).then(res => {
          console.log(res,this,this.$toast);
          this.$toast.show(res,2000)
        })
  }
}
}
</script>

<style scoped>
#xiangqing{
  position: relative;
  z-index: 11;
  background: #fff;
  height: 100vh;
}
.xiang-scroll{
  height: calc(100% - 44px - 58px);
}
.xaing-nav-bar{
  position: relative;
  z-index: 12;
  background: #fff;
}
</style>