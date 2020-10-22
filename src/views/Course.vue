<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <topics></topics>
        <router-link :to="{ name: 'Unity', params: { id: $route.params.id }}">
          <b-button class="btn" block v-on:click="goToUnity()">
              Ir a la evaluación
          </b-button>
        </router-link>
        <allFeedbacks></allFeedbacks>
      </div>
      <div class="col-md-5">
        <div v-if="!loggedIn">
          <AllCourses></AllCourses>
        </div>
        <div v-else>
          <NotMyCourses class="notMyCourses" mensaje="Hoy puedes aprender más"></NotMyCourses>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../store/helpers";
import topics from "@/components/topics.vue";
import AllCourses from "@/components/allCourses.vue";
import NotMyCourses from "@/components/NotMyCourses.vue";
import allFeedbacks from "@/components/allFeedbacks.vue";
export default {
  name: "courseView",
  components: {
    topics,
    allFeedbacks,
    NotMyCourses,
    AllCourses
  },
  computed: {
    ...authComputed,
  },
  methods: {
    goToUnity: function() {
      console.log("hey")
    }
  }
};
</script>

<style scoped>
.btn {
  background: #233a4d;
  margin-left: 5%;
  margin-top: 1%;
}

</style>
