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
        CLEAR_USER_DATA(state) {
            state.user = null;
            localStorage.removeItem('user');
        },
    },
    actions: {
        login({ commit }, credentials) {
            console.log(credentials);
            commit("SET_USER_DATA", credentials);
        },
        logout({ commit }) {
            commit('CLEAR_USER_DATA');
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