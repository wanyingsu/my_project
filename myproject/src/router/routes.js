import Home from '../pages/home/Home.vue'
import Classify from '../pages/classify/Classify.vue'
import Discover from '../pages/discover/Discover.vue'
import ShopCart from '../pages/shopCart/ShopCart.vue'
import Personal from '../pages/personal/Personal.vue'


export default [
  {
   path:'/home',
   component:Home
  },
  {
    path:'/classify',
    component:Classify
   },
   {
    path:'/discover',
    component:Discover
   },
   {
    path:'/shopCart',
    component:ShopCart
   },
   {
    path:'/personal',
    component:Personal
   },
]