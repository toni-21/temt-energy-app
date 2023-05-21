import { createMemoryHistory, createRouter } from "vue-router";

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
    // DEV BASE ROUTE: process.env.BASE_URL
    // PROD BASE ROUTE: '/temt-energy-app/' i.e github repo name
    history: createMemoryHistory('/temt-energy-app/'),
    routes
})

export default router