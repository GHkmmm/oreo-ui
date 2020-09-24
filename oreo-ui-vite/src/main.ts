import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './index.scss'
import router from './router/index';

const app = createApp(App)
app.use(router)
app.mount('#app')
