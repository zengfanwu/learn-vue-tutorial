// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

import store from './store'
import TimeEntries from './components/TimeEntries.vue'

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}, {
    path: '/time-entries',
    component: TimeEntries,
    children: [{
        path: 'log-time',
        component: resolve => require(['./components/LogTime.vue'], resolve)
    }]
}];

const router = new VueRouter({
    routes
});

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
