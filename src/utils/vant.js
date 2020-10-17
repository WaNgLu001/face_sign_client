import Vue from 'vue'
import 'vant/lib/index.css'
import { NavBar, Tabbar, TabbarItem, Toast } from 'vant'
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Toast)
Vue.prototype.$Toast = Toast
