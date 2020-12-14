import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import router from "./router";
import store from "./store";
import { IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import VueApollo from "vue-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import dotenv from 'dotenv';

dotenv.config()

Vue.use(BootstrapVue);

Vue.use(VueApollo);
// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: process.env.VUE_APP_PROXY_URI
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache
});

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    apolloProvider,
    render: h => h(App)
}).$mount("#app");