import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import * as wasm from '../pkg'
console.log(wasm)
export { wasm }

const app = createApp(App)
app.mount('#app')
