import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import OperaView from "../views/OperaView.vue"
import NewsComponent from '../components/News.vue'
/* ------------------------------------------------- */
import NotFoundView from "../views/NotFoundView.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/about",
            name: "about",
            component: AboutView
        },
        {
            path: "/opera",
            name: "opera",
            component: OperaView
        },
        {
            path: "/newscomponent",
            name: "newscomponent",
            component: NewsComponent
        },
       /*  {
            path: "/news/:id",
            name: "news",
            component: News
        }, */
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFoundView
        }
    ]
})

export default router