<template>
  <div class="topics">
    <h1>Temario</h1>
    <b-card v-for="item in topics" :key="item.id" class="cardsAllTopics">
      <div v-if="loggedIn">
        <router-link :to="{ name: 'TopicView', params: { id: item.topic_id } }"  :event="clickable ? 'click' : ''">
          <b-card-title>
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
import { COURSE_TOPICS, COURSES_USER } from "../graphql/queries";
import { authComputed, getCurrentUser } from "../store/helpers";

export default {
  name: "topic",
  data() {
    return {
      topics: [],
      currentCourse: parseInt(this.$route.params.id),
      userCourses: [],
      currentUser: "",
      clickable: false
    };
  },
  computed: {
    ...authComputed,
  },
  created() {
    this.currentUser = getCurrentUser() 
    this.allTopics();
    this.getUserCourses();
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
    getUserCourses: async function() {
      await this.$apollo
        .query({
          query: COURSES_USER,
          variables:{
            username: this.currentUser.username,
          }
        })
        .then((res) => {
          this.userCourses = res.data.coursesByUserId.map((course) => {return course.course_id});
          this.clickable = this.userCourses.includes(this.currentCourse)
        }).catch((err)=>{
          console.log(err);
        });
    },
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
