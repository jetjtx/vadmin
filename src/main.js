import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import directives from '@/directives'


import './assets/main.css'

const app = createApp(App)

app.use(router)
directives(app)

app.mount('#app')
