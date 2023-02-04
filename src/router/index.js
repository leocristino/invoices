import {createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '', name: 'TheHome', component: () => import('../views/TheHome')},
    { path: '/teste', name: 'TheTeste', component: () => import('../views/TheTeste')} 
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router