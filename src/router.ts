import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home/Home.vue'
import Habit from './views/Habit/Habit.vue';
import Setting from './views/Setting/Setting.vue'

const Login = (resolve:any)=>
  (require as any).ensure([],()=>resolve(require('@/views/Login/Login'),'Login')
)
const Feedback = (resolve:any)=>
  (require as any).ensure([],()=>resolve(require('@/views/Feedback/Feedback'),'Feedback')
)
const UpdateLog = (resolve:any)=>
  (require as any).ensure([],()=>resolve(require('@/views/UpdateLog/UpdateLog'),'UpdateLog')
)



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'today',
      component: Home,
      meta: { main: true },
    },
    {
      path:'/habit',
      name: 'habit',
      component:Habit,
      meta:{main: true},
    },
    {
      path:'/setting',
      name:'设置',
      component: Setting,
      meta:{main: true}
    },
    {
      path:'/login',
      name:'登录',
      component: Login,
    },
    {
      path: '/feedback',
      name: '反馈',
      component: Feedback,
    },
    {
      path: '/update',
      name: '更新日志',
      component: UpdateLog
    }
  ]
})