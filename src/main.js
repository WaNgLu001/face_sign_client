import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import './assets/golbal.css'
import './utils/vant'
// import './utils/element'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from "echarts";
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://xxx:xxx:xx:xx/'
Vue.use(ElementUI);
Vue.prototype.$axios = axios
Vue.use(axios)
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')