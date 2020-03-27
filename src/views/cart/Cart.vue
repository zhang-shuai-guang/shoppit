<template>
  <div>
    <nav-bar/>
    <scroll/>
    <bottom-bar/>
  </div>
</template>
<script>
import navBar from './childcart/cartNavBar'
import scroll from './childcart/scrollCart'
import BottomBar from './childcart/BottomBar'
export default {
  name:'Cart',
  components:{
    navBar,
    scroll,
    BottomBar
  }
}
</script>
<style scoped>

</style>