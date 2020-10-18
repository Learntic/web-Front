import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        user: null,
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData;
            localStorage.setItem("user", JSON.stringify(userData));
        },
    },
    actions: {
        login({ commit }, credentials) {
            console.log(credentials);
            commit("SET_USER_DATA", credentials);
        },
    },
    modules: {},
    getters: {
        loggedIn(state) {
            return !!state.user;
        },
    },
    plugins: [createPersistedState()],
});