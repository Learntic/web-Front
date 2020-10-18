<template>
  <div class="home">
    <div class="row">
      <div class="col-md-7">
        <myCourses></myCourses>
        <allCourses></allCourses>
      </div>
      <div class="col-md-4">
        <HelloWorld></HelloWorld>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import { authComputed } from "../store/helpers";
import HelloWorld from "@/components/HelloWorld.vue";
import allCourses from "@/components/allCourses.vue";
import myCourses from "@/components/myCourses.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    allCourses,
    myCourses,
  },
  computed: {
    ...authComputed,
  },
  methods:{
    beforeCreate(){
      if( !localStorage.getItem("user") ){
        this.$router.push( {name: 'Login'} )
      }
    },
  }
};
</script>
