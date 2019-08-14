import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  vuetify,
  router,
  render: (h) => h(App),
}).$mount('#app');
