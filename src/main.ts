import Vue from 'vue';
import FastClick from 'fastclick'; //解决iso点击300ms延迟
import VueIconFont from 'vue-icon-font-pro'; //Iconfont图标库
import vueEventCalendar from 'vue-event-calendar-pro'; //vue的简单日历事件
import VueLazyComponent from "@xunlei/vue-lazy-component"; //vue组件懒加载
import VueSkeletonLoading from 'vue-skeleton-loading';

import 'normalize.css';
import 'vue2-animate/dist/vue2-animate.min.css';//动画库
import 'vue-event-calendar-pro/dist/style.css';

import App from './App.vue';
import './registerServiceWorker';
import '@/assets/iconfont.js';
import router from './router';
import store from './store'

if('addEventListener' in document){
  document.addEventListener(
    'DOMContentLoaded',function(){
      (FastClick as any).attach(document.body)
    },false
  );
}

Vue.use(VueIconFont);
Vue.use(vueEventCalendar),{locale:'zh',weekStartOn:1};
Vue.use(VueLazyComponent);
Vue.use(VueSkeletonLoading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h)=>h(App),
}).$mount('#app');