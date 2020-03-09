<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/cateGory" >
        <img src="@/assets/img/tabbar/home.svg" alt slot="item-img1" />
        <img src="@/assets/img/tabbar/home_active.svg" alt slot="item-img2" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/proFile" >
        <img src="@/assets/img/tabbar/category.svg" alt slot="item-img1" />
        <img src="@/assets/img/tabbar/category_active.svg" alt slot="item-img2" />
        <div slot="item-text">更多</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" >
        <img src="@/assets/img/tabbar/cart.svg" alt slot="item-img1" />
        <img src="@/assets/img/tabbar/cart_active.svg" alt slot="item-img2" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my">
        <img src="@/assets/img/tabbar/profile.svg" alt slot="item-img1" />
        <img src="@/assets/img/tabbar/profile_active.svg" alt slot="item-img2" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
    TabBar,
    TabBarItem
  }
}
</script>