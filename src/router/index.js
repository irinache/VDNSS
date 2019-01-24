import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import Contacts from '../components/Contacts'

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
      component: Contacts
    }
  ]
})