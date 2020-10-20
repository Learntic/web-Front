import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import courseView from "../views/Course.vue";
import myCourseView from "../views/MyCourse.vue";
import UnityView from "../views/Unity.vue";
import TopicsView from "../views/TopicsView.vue";

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
        path: "/unity",
        name: "unity",
        component: UnityView
    },
    {
        path: "/course/topic/:id",
        name: "TopicView",
        component: TopicsView
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
        //Ruta para ver todo un curso
        path: '/mycourse/:id',
        name: 'myCourseView',
        component: myCourseView
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;