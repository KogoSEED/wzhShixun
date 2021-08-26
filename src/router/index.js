import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "about" */ '../pages/index'),
  },
  {
    path: '/category',
    name: 'category',
    component: () => import(/* webpackChunkName: "about" */ '../pages/category'),
  },
  {
    path: '/shopCart',
    name: 'shopCart',
    component: () => import(/* webpackChunkName: "about" */ '../pages/shopCart'),
  },
  {
    path: '/goods/:id',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "about" */ '../views/goods/index'),
    props: true,
    children: [{
      //子路由只需要写子路由即可, 不要在前面加上父路由, 而且不能加/, 如果加上/会被识别为父路由
      path: 'detail',
      name: 'detail',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/detail'),
      props: true
    },{
      path: 'spec',
      name: 'spec',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/spec'),
      props: true
    },{
      path: 'service',
      name: 'service',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/service'),
      props: true
    },{
      path: 'comments',
      name: 'comments',
      component: () => import(/* webpackChunkName: "about" */ '../views/goods/comments'),
      props: true
    }]
  },

]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

//to: 即将要进入的路由对象
//from: 正要离开的路由对象
// router.beforeEach((to, from, next) => {
//   // ...
// })

export default router
