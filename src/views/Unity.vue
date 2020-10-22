<template>
  <div>
    <unity
      :src="unitySrc"
      :unityLoader="unityLoader"
      :width="1000"
      :height="600"
      ref="unityInstance"
    ></unity>
  </div>
</template>

<script>
import unity from "vue-unity-webgl";
export default {
  components: {
    unity,
  },
  data() {
    return {
      unitySrc: "/AppsDrop/Build/AppsDrop.json",
      unityLoader: "/AppsDrop/Build/UnityLoader.js",
      currentUser: ""
    };
  },
  methods: {
    unityHandler: async function() {
      this.$refs.unityInstance.gameInstance.SendMessage("User", "setUsername", this.currentUser.username)
    }
  },
  created() {
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    setTimeout(() => {this.unityHandler()}, 2500)
    this.unityHandler();
  }
};
</script>

<style></style>
