import { createApp } from 'vue'
import App from './App'
import router from "@/router/router"
import components from '@/components'
import componentsUI from '@/components/UI'
import store from '@/store'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

componentsUI.forEach(componentUI => {
    app.component(componentUI.name, componentUI)
})

app
    .use(store)
    .use(router)
    .mount('#app')