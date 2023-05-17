import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../view/HomePage.vue';
import MarketPage from '../view/MarketPage.vue';
import SolarPage from '../view/SolarPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/market',
        name: 'Market',
        component: MarketPage
    },
    {
        path: '/solar',
        name: 'Solar',
        component: SolarPage
    },
]

const router = createRouter({
    history: createWebHistory('/temt-energy-app/'),//process.env.BASE_URL
    routes
})

export default router