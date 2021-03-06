import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@fortawesome/fontawesome-free/css/all.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  render: h => h(App),
}).$mount('#app');
