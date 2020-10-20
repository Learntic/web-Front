<template>
  <div class="allCourses">
    <h3>{{mensaje}}</h3>
    <b-card v-for="item in courses" :key="item.id" class="cardsAllCourses">
      <router-link :to="{ name: 'courseView', params: { id: item.course_id } }">
            <b-card-title> {{ item.course_name }} </b-card-title>
          </router-link>
      <div class="row">
        <div class="col-md-8">
          <b-card-text>
            {{ item.course_description }}
          </b-card-text>
        </div>
        <div class="col-md-4">
          <b-button
            class="inscriptionButton"
            block
            v-on:click="inscriptionCourse(item.course_id)"
          >
            Inscríbete
          </b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { NOT_COURSES_BY_USER_ID } from "../graphql/queries";
import {EventBus} from "../event-bus"
import { COURSE_INSCRIPTION } from "../graphql/mutations";
export default {
  name: "NotMyCourses",
  data() {
    return {
      courses: [],
      currentUser: ""
    };
  },
  props:{
    mensaje: String
  },
  created() {
      if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.notCoursesbyUserId();
  },
  methods: {
    notCoursesbyUserId: async function() {
      await this.$apollo
        .query({
          query: NOT_COURSES_BY_USER_ID,
          variables: {
            id: this.currentUser.username
          },
        })
        .then((res) => {
          this.courses = res.data.coursesByNotUserId;
        }). catch((err)=>{
          console.log(err);
        });
    },
    inscriptionCourse: async function(idCurrentCourse){
        await this.$apollo
        .mutate({
            mutation: COURSE_INSCRIPTION,
            variables: {
            username: this.currentUser.username,
            idCourse: idCurrentCourse,
          }
        }).then((res) => {
          EventBus.$emit('courseAdd', this.courses[idCurrentCourse-1]);
          this.courses = this.courses.filter((course)=>
            course.course_id != idCurrentCourse);
        }).catch((err)=>{
          console.log(err);
        });
    }
  },
};
</script>

<style scoped>
.inscriptionButton {
  background: #233a4d;
}
.allCourses{
  margin-top: 5%;
  margin-bottom: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.cardsAllCourses{
  text-align: left;
  margin-left: 10%;
  margin-top: 1%;
  border-color: #66A5FC;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
