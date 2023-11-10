import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../src/pages/display.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/com1',
        component: () => import('@/components/AllSitesPassengerOverTime.vue'),
        meta: {
            title: 'page1'
        }
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;