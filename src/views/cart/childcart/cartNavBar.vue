<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车（{{cartListLength}}）</div>
  </nav-bar>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
export default {
  name:'cartNavBar',
  components:{
    navBar
  },
  computed:{
      ...mapGetters(['cartListLength'])
    }
}
</script>

<style scoped>
.nav-bar{
  background: var(--color-tint);
  color: #fff;
}
</style>