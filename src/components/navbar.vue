<template>
  <b-navbar toggleable="lg" type="dark" class="navbarLearntic">
    <div v-if="loggedIn">
      <sideBar></sideBar>
    </div>
      <b-navbar-brand href="/" class="learntic">
        Learntic
      </b-navbar-brand>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div v-if="!loggedIn">
          <b-button href="/login" class="loginButton ml-3"> Inicia sesión </b-button>
          <b-button href="/signUp" variant="light" class="registerButton ml-3"> Regístrate </b-button>
        </div>
        <div v-else>
          <b-button class="logoutButton">Cierra Sesión</b-button>
        </div>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { authComputed } from "../store/helpers";
import sideBar from "@/components/sidebar.vue"
export default {
  name: "Navbar",
  components:{
    sideBar
  },
  computed: {
    ...authComputed,
  },
  methods: {
  },
};
</script>

<style scoped>
.navbarLearntic {
  font-family: 'Lobster', cursive;
  border-style: none;
  background: #233a4d;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}
.loginButton{
  background: #ff5f6d;
  border-style: none;
}
.registerButton{
  background: #ffffff;
  border-style: solid;
  border-color: #ffc371;
  border-width: 2px;
}
.logoutButton{
  background: #55B59B;
  border-style: none;
}
.logoutButton:hover{
  background: #49917e;
  border-style: none;
}
.perfilButton{
  background: #ffffff;
  border-style: solid;
  border-color: #ffc371;
  border-width: 2px;
}
</style>
