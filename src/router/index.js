import Vue from 'vue/dist/vue.js'
import Router from 'vue-router'
import MainPage from '../components/MainPage'
import Video_monitoring from '../components/Video_monitoring'
import Access_control from '../components/Access_control'
import Computer_networks from '../components/Computer_networks'
import Intercom from '../components/Intercom'
import Alarm from '../components/Alarm'

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
      component: Video_monitoring
    },
    {
      path: '/access_control',
      name: 'Access_control',
      component: Access_control
    },
    {
      path: '/computer_networks',
      name: 'Computer_networks',
      component: Computer_networks
    },
    {
      path: '/intercom',
      name: 'Intercom',
      component: Intercom
    },
    {
      path: '/alarm',
      name: 'Alarm',
      component: Alarm
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})