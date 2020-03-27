<template>
  <div>
    <pro-nav-bar />
    <div class="proflex">
      <left-hand :titledata="titledata" @control="control"/>
      <right-hand :maitKey="maitKey" :miniWallkey="miniWallkeys" @itemcon="itemcon" />
    </div>
  </div>
</template>
<script>
import ProNavBar from "./dirn/ProNavBar"
import LeftHand from "./dirn/LeftHand"
import RightHand from "./dirn/RightHand"
import {getLeftData,getProRight,getProRight2 } from 'network/profile'
export default {
  name: "ProFile",
  data(){
    return {
        titledata:[],
        maitKey:[],
        miniWallkeys:[],
        miniWallkey:null,
        type:'pop',
        goods:['pop','new','sell']
    }
  },
  //注册组件
  components: {
    ProNavBar,
    LeftHand,
    RightHand
  },
  created(){
    new Promise((a,b)=>{
        getLeftData().then(res =>{
        this.titledata=res.data.category.list
        let e={maitKey:res.data.category.list[0].maitKey,miniWallkey:res.data.category.list[0].miniWallkey}
        a(e)
        })
    }).then(res=>{
        this.miniWallkey=res.miniWallkey
        this.getProRight(res.maitKey)
        this.getProRight2(res.miniWallkey,this.type)
    }) 
  },
  methods: {
    control(index){
    //   console.log(index);
    //   this.maitKey=index
      this.getProRight(index.maitKey)
      // this.getProRight2(index.miniWallkey,this.type)
    },
    getProRight(maitKey){
      getProRight(maitKey).then(res =>{
          this.maitKey=res.data.list  
      })
    },
    getProRight2(miniWallkey,type){
      getProRight2(miniWallkey,type).then(res =>{
        console.log(miniWallkey,type,res);
        this.miniWallkeys=res
      })
    },
    itemcon(index){
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
      this.getProRight2(this.miniWallkey,this.type) 
      // console.log(this.miniWallkeys);
       
    },
  },
  computed:{}
};
</script>
<style scoped>
.proflex{
    display: flex;
}
</style>