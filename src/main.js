import Vue from 'vue'
import helper from '@/plugins/helper'
import ElementUI from 'element-ui'
import App from '@/App.vue'
import '@/plugins/vuetify'
import '@/components'
import './plugins/Filters'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(helper)
Vue.use(ElementUI);

new Vue({ render: (h) => h(App) }).$mount('#app')
