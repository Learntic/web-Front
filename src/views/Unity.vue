<template>
  <div>
    <h1 id="text"> Bienvenido a la evaluación </h1>
    <p> Esperamos hayas podido acoplar los conceptos que expusimos durante las secciones y puedas reflejar tu aprendizaje con esta corta prueba. ¡Adelante!</p>
    <unity
      :src="unityConfig[$route.params.id-1].unitySrc"
      :unityLoader="unityConfig[$route.params.id-1].unityLoader"
      :width="1000"
      :height="600"
      ref="unityInstance"
    ></unity>
  </div>
</template>

<script>
import unity from "vue-unity-webgl";
import { getCurrentUser } from "../store/helpers";

export default {
  components: {
    unity,
  },
  data() {
    return {
      unityConfig : [
        {
          unitySrc: "/InternetApp/Build/InternetApp.json",
          unityLoader: "/InternetApp/Build/UnityLoader.js",
        },
        {
          unitySrc: "/AppsDrop/Build/AppsDrop.json",
          unityLoader: "/AppsDrop/Build/UnityLoader.js",
        }
      ],
      currentUser: ""
    };
  },
  methods: {
    unityHandler: async function() {
      console.log(this.currentUser.username)
      this.$refs.unityInstance.gameInstance.SendMessage("User", "setUsername", this.currentUser.username)
    }
  },
  created() {
    this.currentUser = getCurrentUser();
    setTimeout(() => {this.unityHandler()}, 10000)
    this.unityHandler();
  }
};
</script>

<style>
#unity-container {
  margin: auto !important;
}

#text {
  margin-top: 2%;
}
</style>
