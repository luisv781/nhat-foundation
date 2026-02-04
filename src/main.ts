import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HomeView from './Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from './About.vue'
import DonateView from './Donate.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/donate', component: DonateView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
