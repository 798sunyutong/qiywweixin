import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import liebiaoye from '@/pages/memeda/liebiaoye'
// import xiangqingye from '@/pages/memeda/xiangqingye'
import ReadyWarn from '@/pages/memeda/ReadyWarn'
import Huadong from '@/pages/muma/huadong'
import Test from '@/pages/muma/test'
import yuanyouwaishu1 from '@/pages/yuanyouwaishu/yuanyouwaishu1'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ReadyWarn',
      name: 'ReadyWarn',
      component: ReadyWarn,
      meta:{
        title:'万英'
      }
    },
      // {
      //   path: '/Huadong',
      //   name: 'huadong',
      //   component: Huadong
      // },
      {
        path: '/Test',
        name: 'test',
        component: Test
      },
      
    // {
    //   path: '/liebiaoye',
    //   name: 'liebiaoye',
    //   component: liebiaoye,
    //   meta:{
    //     title:'列表'
    //   }
    // },
    // {
    //   path: '/xiangqingye',
    //   name: 'xiangqingye',
    //   component: xiangqingye,
    //   meta:{
    //     title:'详情'
    //   }
    // }
    {
      path: '/yuanyouwaishu1',
      name: 'yuanyouwaishu1',
      component: yuanyouwaishu1,
      meta:{
        title:'万英'
      }
    },
  ]
})
