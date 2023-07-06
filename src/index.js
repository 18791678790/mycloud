/* eslint-disable vue/multi-word-component-names */
/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import { Icon } from '@iconify/vue2';
import Drawer from './components/Drawer';
import App from './App.vue';
import router from './router';
// import Dialog from './components/Dialog';
import Switch from './components/Switch';
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Icon', Icon);
Vue.use(Drawer);
// Vue.use(Dialog);
Vue.use(Switch);


const app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

// wiondow.app = app;
// console.log(app);

/*class V {
  static component(name, comp) {
    console.log(`注册${name}组件`);
  }
  static use(plugin) {
    console.log(this); // this -> V
    if (!plugin) return;
    if (typeof plugin.install === 'function') {
      plugin.install(this);
    }
    if (typeof plugin === 'function') {
      plugin(this);
    }
  }
}
V.use(function (A) {
  A.component('abc', {});
});
V.use({
  install(A) {
    A.component('abc', {});
  },
});
*/
