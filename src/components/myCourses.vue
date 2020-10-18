<template>
  <div>
    <h3>Mis cursos</h3>
    <b-card v-for="item in courses" :key="item.id" class="card">
      <b-card-title>
        {{ item.course_name }}
      </b-card-title>
      <div class="row">
        <div class="col-md-8">
          <b-card-text>
            {{ item.course_description }}
          </b-card-text>
        </div>
        <div class="col-md-4">
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { COURSES_USER } from "../graphql/queries";
export default {
  name: "myCourses",
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
    this.myCourses();
  },
  methods: {
    myCourses: async function() {
        console.log(typeof(this.currentUser.username));
      await this.$apollo
        .query({
          query: COURSES_USER,
          variables:{
            username: this.currentUser.username
          }
        })
        .then((res) => {
          console.log(res.data.inscriptionByUserId);
          this.courses= res.data.inscriptionByUserId;
        });
    },
  },
};
</script>

<style scoped>
.inscriptionButton {
  background: #323232;
}
</style>
