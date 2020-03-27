<template>
  <div class="div">
    <scroll class="scroll" ref="scroll">
      <cart-item v-for="(item,index) in cartlist" :key="index" :item="item"/>
    </scroll>
  </div>
</template>

<script>
import scroll from 'components/common/scroll/Scroll'
import cartItem from './cartItem'
import {mapGetters} from 'vuex'
export default {
  name:'scrollCart',
  components:{
    scroll,
    cartItem
  },
  computed:{
    ...mapGetters(['cartlist'])
  },
  activated(){
    this.$refs.scroll.refresh()
  },
}
</script>

<style scoped>
.div{
  height: calc(100vh - 137px);     
}
.scroll{
  height: 100%;
  overflow: hidden;
}
</style>