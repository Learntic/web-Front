<template>
  <div>
    <div class="row">
      <div class="col-md-7">
    <topics></topics>
    <allFeedbacks></allFeedbacks>
      </div>
    </div>
  </div>
</template>

<script>
import topics from "@/components/topics.vue"
import allFeedbacks from "@/components/allFeedbacks.vue"
export default {
  name: "myCourseView",
  components: {
    topics,
    allFeedbacks
  },
  beforeCreate() {
    if( !localStorage.getItem("user") ){
        this.$router.push( {name: 'Login'} )
      }
  },
};
</script>

<style></style>
