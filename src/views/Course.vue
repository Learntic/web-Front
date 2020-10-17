<template>
  <div>
    <h1>Curso {{ $route.params.id }}</h1>
    <topics></topics>
  </div>
</template>

<script>
import topics from "@/components/topics.vue"
export default {
  name: "courseView",
  components: {
    topics
  }
};
</script>

<style></style>
