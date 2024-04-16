import './assets/main.css'
import { createPinia } from 'pinia'
import router from './router'
import { createApp } from 'vue'
import Layout from './Layout/Layout.vue'


const app = createApp(Layout);



app.use(router);
app.use(createPinia());
app.mount('#app');
