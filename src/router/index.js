import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>import('../views/Home/Home')
const Manage =() =>import('../views/Manage/Manage')
const NewBlog =() =>import('../views/NewBlog/NewBlog')
const Contact =() =>import('../views/Contact/Contact')

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component:Home
    },
    {
        path:'/manage',
        component:Manage
    },
    {
        path:'/newblog',
        component:NewBlog
    },
    {
        path:'/contact',
        component:Contact
    },
]

const router = new VueRouter({
    mode:'history',
    routes,
})

export default router