import Vue from 'vue'
import VueRouter from 'vue-router'
import CateGory from '../views/category/CateGory.vue'
import Cart from '../views/cart/Cart.vue'
import My from '../views/my/My.vue'
import ProFile from '../views/profile/ProFile.vue'
Vue.use(VueRouter)
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
 
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// }
const routes = [
  {
    path:'',
    redirect:'/cateGory'
  },
  {
    path: '/cateGory',
    name: 'CateGory',
    meta:{
      title:"首页"
    },
    component: CateGory,
  },
  {
    path: '/cart',
    name: 'Cart',
    meta:{
      title:"购物车"
    },
    component: Cart,
  },
  {
    path: '/my',
    name: 'My',
    meta:{
      title:"我的"
    },
    component: My,
  },
  {
    path: '/proFile',
    name: 'ProFile',
    meta:{
      title:"更多"
    },
    component: ProFile,
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  document.title=to.matched[0].meta.title  
  next();
})
export default router