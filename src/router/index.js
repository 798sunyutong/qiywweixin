import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import liebiaoye from '@/pages/memeda/liebiaoye'
import xiangqingye from '@/pages/memeda/xiangqingye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/liebiaoye',
      name: 'liebiaoye',
      component: liebiaoye,
      meta:{
        title:'列表'
      }
    },
    {
      path: '/xiangqingye',
      name: 'xiangqingye',
      component: xiangqingye,
      meta:{
        title:'详情'
      }
    }
  ]
})
