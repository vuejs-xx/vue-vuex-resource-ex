// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import Vuex from 'vuex';
// import { sync } from 'vuex-router-sync';

import App from './components/PostListPage';
import store from './vuex/store';

Vue.use(VueRouter);
Vue.use(VueResource);

// const App = { template: '<div>app</div>' };
const Other = { template: '<div>other</div>' };

const routes = [
  { path: '/', component: App },
  { path: '/other', component: Other },
];

const router = new VueRouter({
  routes,
});

// sync(store, router);

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app');
