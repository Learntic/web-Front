<template>
  <div>
    <b-card v-for="item in topics" :key="item.id" class="card">
      <b-card-title> {{ item.topic_name }} </b-card-title>
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
            entero: this.$route.params.id
          }
        })
        .then((res) => {
          console.log(res.data);
        });
    },
  }
};
</script>

<style></style>
