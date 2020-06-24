import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import axios from 'axios'
import Default from './layouts/Default'
import NoSidebar from './layouts/NoSidebar'


require('@/store/subscriber')

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'
Vue.config.productionTip = false

Vue.component('default-layout', Default)
Vue.component('no-sidebar-layout', NoSidebar)

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
  }).$mount('#app')
})


