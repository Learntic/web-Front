<template>
  <div class="home">
    <div class="row">
      <div class="col-md-6">
          <MyFriends> </MyFriends>
      </div>
      <div class="col-md-6">
          <Users> </Users>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from "vuex";
import { authComputed } from "../store/helpers";
import MyFriends from "@/components/Friends.vue";
import Users from "@/components/Users.vue";

export default {
  name: "Friends",
  components: {
      MyFriends,
      Users
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
