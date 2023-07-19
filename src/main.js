import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import axios from 'axios'
import 'element-plus/dist/index.css'
import './assets/main.css'

// 配置，允许跨域携带cookie
axios.defaults.withCredentials = true

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
