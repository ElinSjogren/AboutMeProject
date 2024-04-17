import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import { createApp } from 'vue'
import Layout from './Layout/Layout.vue'
import Vue from 'vue'
import excel from 'vue-excel-export'
 
Vue.use(excel)

const app = createApp(Layout);



app.use(router);
app.use(createPinia());
app.mount('#app');
