import { createApp } from 'vue'
import App from './App.vue'
import MonkkeyKarusel from './MonkkeyKarusel'

const app = createApp(App)
app.component('my-component', MonkkeyKarusel)
app.mount('#app')




