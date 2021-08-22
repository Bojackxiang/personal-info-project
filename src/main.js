import Vue from 'vue'
import helper from '@/plugins/helper'
import ElementUI from 'element-ui'
import App from '@/App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios'
import configs from './config/config'
import '@/plugins/vuetify'
import '@/components'
import './plugins/Filters'
import 'element-ui/lib/theme-chalk/index.css';


axios.defaults.baseURL = configs.baseUrl
console.log('baser url', configs.baseUrl)

axios.defaults.timeout = 8000;
axios.interceptors.response.use(function (response) {
  return response.data
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(helper)
Vue.use(ElementUI);

new Vue({ render: (h) => h(App), render: h => h(App) }).$mount('#app')
