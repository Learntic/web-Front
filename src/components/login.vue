<template>
  <div class="body">
    <div class="login">
      <b-form @submit.prevent="loginUsuario">
        <b-form-group id="input-group-1" label="Username:" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="user"
            required
            placeholder="Ingresa tu Username"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Tu contraseña:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="password"
            required
            placeholder="Ingresa una contraseña"
            type="password"
          ></b-form-input>
        </b-form-group>

        <b-button block pill type="submit" class="loginButton"> Ingresa </b-button>
      </b-form>
    
    </div>
  </div>
</template>

<script>
import { SIGN_IN } from "../graphql/queries";
export default {
  name: "LoginComponente",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    loginUsuario: async function() {
      await this.$apollo
        .query({
          query: SIGN_IN,
          variables: {
            username: this.user,
            password: this.password,
          },
        })
        .then((res) => {
          console.log(res.data.signIn);
          this.$store.dispatch("login", res.data.signIn);
        });
    },
  },
};
</script>

<style scoped>
.body {
  margin: 0;
  height: 100vh;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.login {
  display: flex;
  padding: 30px;
  border: 1px solid #233a4d;
  border-radius: 5px;
  background-color: white;
}
.loginButton{
    background-color: #233a4d;
}
</style>
