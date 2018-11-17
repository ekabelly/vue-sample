import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { store } from './store/store';
import Spinner from './components/spinner.vue';
import Registration from './components/registration.vue';
import Registrations from './components/registrations.vue';

Vue.component('app-spinner', Spinner);
Vue.component('app-registration', Registration);
Vue.component('app-registrations', Registrations);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
