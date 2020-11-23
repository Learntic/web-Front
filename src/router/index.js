import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import courseView from "../views/Course.vue";
import UnityView from "../views/Unity.vue";
import Friends from "../views/Friends.vue";
import TopicsView from "../views/TopicsView.vue";
import GuestsView from "../views/Guests.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/unity/:id",
        name: "Unity",
        component: UnityView
    },
    {
        path: "/course/topic/:id",
        name: "TopicView",
        component: TopicsView
    },
    {
        path: "/guests",
        name: "GuestsView",
        component: GuestsView
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        //Ruta para ver todo un curso
        path: '/course/:id',
        name: 'courseView',
        component: courseView
    },
    {
        path: "/friends",
        name: "Friends",
        component: Friends
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;