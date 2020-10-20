<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <topics></topics>
        <allFeedbacks></allFeedbacks>
      </div>
      <div class="col-md-4">
        <div v-if="!loggedIn">
          <AllCourses></AllCourses>
        </div>
        <div v-else>
          <NotMyCourses mensaje="Hoy puedes aprender más"></NotMyCourses>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../store/helpers";
import topics from "@/components/topics.vue";
import AllCourses from "@/components/AllCourses.vue";
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
};
</script>

<style></style>
