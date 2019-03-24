import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';


export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      name:'today',
      component:Home,
      meta:{main:true}
    }
  ]
})