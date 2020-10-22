import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import ViewSign from '../components/ViewSign.vue'
import look from '../components/look.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    component: ViewSign
  },
  {
    path: '/look',
    component: look
  }
]

const router = new VueRouter({
  routes
})

export default router