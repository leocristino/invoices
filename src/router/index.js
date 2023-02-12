import {createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'TheHome', component: () => import('../views/TheHome')},
    { path: '/register', name: 'TheRegister', component: () => import('../views/TheHome')}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router