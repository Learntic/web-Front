<template>
  <div>
    <unity
      :src="unitySrc"
      :unityLoader="unityLoader"
      :width="1000"
      :height="600"
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
    };
  },
  created() {
  },
  methods: {
  },
};
</script>

<style></style>
