import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './routes/index'

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })
Vue.use(VueRouter)

var router = new VueRouter()
router.map(routes)
router.start(App, 'app')
