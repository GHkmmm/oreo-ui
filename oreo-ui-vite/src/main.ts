import './lib/oreo.scss'
import './index.css'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue';

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component("Markdown", Markdown)
