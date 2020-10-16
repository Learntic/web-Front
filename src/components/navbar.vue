<template>
  <b-navbar class="navbarPetSuite">
      <sideBar></sideBar>
      <b-navbar-brand href="/" class="learntic">
        Learntic
      </b-navbar-brand>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div>
          <b-button href="/login" class="loginButton ml-3"> Inicia sesión </b-button>
          <b-button href="/signUp" variant="light" class="registerButton ml-3"> Regístrate </b-button>
        </div>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import sideBar from "@/components/sidebar.vue"
export default {
  name: "Navbar",
  components:{
    sideBar
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>
.learntic{
    text-emphasis-color: white;
}
.navbarPetSuite {
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
  background: #ff5f6d;
  border-style: none;
}
.perfilButton{
  background: #ffffff;
  border-style: solid;
  border-color: #ffc371;
  border-width: 2px;
}
</style>
