import Vue from 'vue';
import VueRouter from 'vue-router'
import { BootstrapVue } from 'bootstrap-vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);
new Vue({
	render: (h) => h(App),
}).$mount('#app');
