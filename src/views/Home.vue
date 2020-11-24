<template>
  <div class="home">
    <div class="row">
      <div class="col-md-7">
        <myCourses></myCourses>
        <NotMyCourses mensaje="Cursos que puedes inscribirte hoy"></NotMyCourses>
      </div>
      <div class="col-md-4">
        <Profile></Profile>
        <Achievements> </Achievements>
      </div>
      <Guests></Guests>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import { authComputed } from "../store/helpers";
import Profile from "@/components/Profile.vue";
import NotMyCourses from "@/components/NotMyCourses.vue";
import myCourses from "@/components/myCourses.vue";
import Achievements from "@/components/Achievements.vue";
import Guests from "@/components/Guests.vue";

export default {
  name: "Home",
  components: {
    NotMyCourses,
    myCourses,
    Profile,
    Achievements,
    Guests
  },
  computed: {
    ...authComputed,
  },
  methods:{    
  },
  beforeCreate(){
      if( !localStorage.getItem("user") ){
        this.$router.push( {name: 'Login'} )
      }
    },
};
</script>
