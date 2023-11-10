import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import 'echarts-wordcloud';
import router from '../router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).mount('#app')
