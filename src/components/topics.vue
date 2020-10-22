<template>
  <div class="topics">
    <h1>Temario</h1>
    <b-card v-for="item in topics" :key="item.id" class="cardsAllTopics">
      <div v-if="loggedIn">
        <router-link :to="{ name: 'TopicView', params: { id: item.topic_id } }">
          <b-card-title v-on:click="test(item.topic_url)">
            <strong> {{ item.topic_name }} </strong>
          </b-card-title>
        </router-link>
      </div>
      <div v-else>
          <b-card-title>
            <strong> {{ item.topic_name }} </strong>
          </b-card-title>
      </div>
      <b-card-text>
        {{ item.topic_description }}
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import { COURSE_TOPICS } from "../graphql/queries";
import { authComputed } from "../store/helpers";
import {EventBus} from "../event-bus";

export default {
  name: "topic",
  data() {
    return {
      topics: [],
      currentCourse: parseInt(this.$route.params.id),
    };
  },
  computed: {
    ...authComputed,
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
            idCourse: this.currentCourse,
          },
        })
        .then((res) => {
          this.topics = res.data.courseTopics;
        });
    },
    test: function(topic_url) {
      EventBus.$emit('sendTopicURL', topic_url);
      console.log(topic_url)
    }
  },
};
</script>

<style scoped>
.cardsAllTopics {
  text-align: left;
  margin-left: 10%;
  margin-top: 1%;
  border-color: #66a5fc;
}
.topics {
  margin-top: 5%;
}
</style>
