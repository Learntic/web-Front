<template>
  <div>
    <div class="row">
      <div class="col-md-7">
    <h1>Curso {{ $route.params.id }}</h1>
    <topics></topics>
    <h1> Opiniones </h1>
    <allFeedbacks></allFeedbacks>
      </div>
    </div>
  </div>
</template>

<script>
import topics from "@/components/topics.vue"
import allFeedbacks from "@/components/allFeedbacks.vue"
export default {
  name: "courseView",
  components: {
    topics,
    allFeedbacks
  }
};
</script>

<style></style>
