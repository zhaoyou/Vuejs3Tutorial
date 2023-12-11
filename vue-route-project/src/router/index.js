import { createRouter, createWebHistory , createWebHashHistory} from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/Jobs.vue'
import JobDetail from '../views/JobDetail.vue'


const User = {
    template: '<div><h3>user {{$route.params.id}}</h3></div>'
}

const NotFound = {
    template: '<div><h3>Not Found :) </h3></div>'
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
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'JobDetail',
        component: JobDetail,
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(''),
    routes: routes
})


export default router