import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import Service from '../components/Video_monitoring'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainPage
    },
    {
      path: '/video_monitoring',
      name: 'Video_monitoring',
      component: Service
    }
  ]
})