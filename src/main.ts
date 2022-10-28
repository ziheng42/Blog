import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/commen.css'

createApp(App).use(router).use(ElementPlus).mount('#app')
