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
const Card= (resolve:any)=>
  (require as any).ensure([],()=>resolve(require('@/views/Card/Card'),'Card')
)

const Receive = (resolve:any)=>
  (require as any).ensure([],()=>resolve(require('@/views/Card/Receive/Card'),'Receive'))

const New = (resolve:any)=>
  (require as any).ensure([],()=>resolve(require('@/views/New/New'),'New'))


const Library = (resolve: any)=>
  (require as any).ensure([],()=>resolve(require('@/views/New/Library/Library'),'Library'))


const NewHabit = (resolve: any)=>
  (require as any).ensure([],resolve(require('@/views/New/Habit/Habit'),'Habit'))

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
      component: UpdateLog,
    },
    {
      path: '/card',
      name: '卡片管理',
      component: Card,
      children:[
        {
          path: 'receive',
          name: '今日卡片',
          component: Receive
        }
      ]
    },
    {
      path: '/new',
      name: '新建习惯',
      component: New,
      children:[
        {
          path:'library',
          name: '习惯库',
          component: Library,
        },
        {
          path: 'habit',
          name:'习惯',
          component: NewHabit,
        }
      ]
    }
  ]
})