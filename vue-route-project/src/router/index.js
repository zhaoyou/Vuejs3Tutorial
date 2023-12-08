import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
const User = {
    template: '<div><h3>user {{$route.params.id}}</h3></div>'
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/user/:id',
        name: 'User',
        component: User
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes: routes
})


export default router