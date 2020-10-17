<template>
  <div>
    <h3>Todos los cursos</h3>
    <b-card v-for="item in courses" :key="item.id" class="card">
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
          console.log(res.data.allCourses);
          this.courses = res.data.allCourses
        });
    },
    inscriptionCourse: async function(idCourse){
        await this.$apollo
        .mutate({
            mutation: COURSE_INSCRIPTION,
            variables: {
            id_usuario: this.currentUser.username,
            id_curso: idCourse,
          }
        }).then((res) => {
          console.log(res.data);
        });
    }
  },
};
</script>

<style scoped>
.inscriptionButton {
  background: #233a4d;
}
</style>
