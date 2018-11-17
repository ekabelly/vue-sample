import Vue from 'vue'
import Router from 'vue-router'

import Wrapper from '../components/wrapper.vue';
import Registration from '../components/registration.vue';
import Registrations from '../components/registrations.vue';

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'wrapper',
      component: Wrapper
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/registrations',
      name: 'registrations',
      component: Registrations
    }

  ]
})
