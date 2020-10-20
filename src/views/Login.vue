<template>
  <div id="login">
    <div class="row">
      <div class="col-md-6">
        <RegisterComponente></RegisterComponente>
      </div>
      <div class="col-md-6">
        <LoginComponente></LoginComponente>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginComponente from "@/components/login.vue";
import RegisterComponente from "@/components/register.vue";

export default {
  name: "Login",
  components: {
    LoginComponente,
    RegisterComponente,
  },
  beforeCreate(){
    if (localStorage.getItem("user")){
      this.$router.push( {name: 'Home'} )
    }
  }
};
</script>

<style scoped>
#login {
  /*background: linear-gradient(to right, #0f2027, #203a43, #2c5364);*/
  /*background: linear-gradient(to right, #ee9ca7, #ffdde1);*/
  /*background: linear-gradient(to right, #2193b0, #6dd5ed);*/
  background: linear-gradient(to left, #42DF90, #149e8e);
}
</style>
