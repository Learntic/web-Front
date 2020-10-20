<template>
  <div class="allCourses">
    <h3>Todos los cursos</h3>
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
import { ALL_COURSES } from "../graphql/queries";
import {EventBus} from "../event-bus"
import { COURSE_INSCRIPTION } from "../graphql/mutations";
export default {
  name: "allCourses",
  data() {
    return {
      courses: [],
      currentUser: ""
    };
  },
  created() {
      if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.allCourses();
  },
  methods: {
    allCourses: async function() {
      await this.$apollo
        .query({
          query: ALL_COURSES,
        })
        .then((res) => {
          this.courses = res.data.allCourses
        }). catch((err)=>{
          console.log(err);
        });
        console.log(this.courses);
    },
    inscriptionCourse: async function(idCurrentCourse){
      let courseraro = this.courses[idCurrentCourse];
      console.log("Este es el curso raro",courseraro);
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
        console.log("Este es el id del curso",idCurrentCourse);
    }
  },
};
</script>

<style scoped>
.inscriptionButton {
  background: #233a4d;
}
.allCourses{
  margin-bottom: 10%;
}
.cardsAllCourses{
  text-align: left;
  margin-left: 10%;
  margin-top: 1%;
  border-color: #66A5FC;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
