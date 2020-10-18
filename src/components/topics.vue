<template>
  <div>
    <b-card v-for="item in topics" :key="item.id" class="card">
      <b-card-title> {{ item.topic_name }} </b-card-title>
      <b-card-text>
      {{item.topic_description}}
    </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { COURSE_TOPICS } from "../graphql/queries";
export default {
  name: "topic",
  data() {
    return {
      topics: [],
      currentCourse: parseInt(this.$route.params.id)
    };
  },
  created() {
    this.allTopics();
  },
  methods: {
      allTopics: async function() {
      await this.$apollo
        .query({
          query: COURSE_TOPICS,
          variables: {
            idCourse: this.currentCourse
          }
        })
        .then((res) => {
          this.topics = res.data.courseTopics;
        });
    },
  }
};
</script>

<style></style>
