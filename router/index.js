import {createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../src/pages/homepage.vue'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/statistics',
        component: () => import('../src/pages/display.vue'),
        meta: {
            title: '统计信息可视化'
        }
    },
    {
        path: '/com1',
        component: () => import('@/components/AllSitesPassengerOverTime.vue'),
        meta: {
            title: 'page1'
        }
    },
    {
        path: '/adminPortal',
        component: () => import('../src/pages/adminPortal.vue'),
        meta: {
            title: '管理员后台'
        }
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;