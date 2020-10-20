<template>
  <div class="home">
    <div class="row">
      <div class="col-md-7">
        <myCourses></myCourses>
        <allCourses></allCourses>
      </div>
      <div class="col-md-4">
        <Profile></Profile>
        <Achievements> </Achievements>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import { authComputed } from "../store/helpers";
import Profile from "@/components/Profile.vue";
import allCourses from "@/components/allCourses.vue";
import myCourses from "@/components/myCourses.vue";
import Achievements from "@/components/Achievements.vue";

export default {
  name: "Home",
  components: {
    allCourses,
    myCourses,
    Profile,
    Achievements
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
