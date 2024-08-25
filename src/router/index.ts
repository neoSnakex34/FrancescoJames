import { createMemoryHistory, createWebHistory, createRouter } from "vue-router"

const routes = [
    { path: '/', component: () => import('../views/About.vue') },
    { path: '/skills', component: () => import('../views/Skills.vue') },
]

const router = createRouter({
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
})

export default router