<template>
  <div class="body">
    <h3>Mis cursos</h3>
    <div class="cards mx-1 mb-5">
    <b-card v-for="item in myCoursesad" :key="item.id" class="card">
      <router-link :to="{ name: 'courseView', params: { id: item.course_id } }">
      <b-card-title>
        {{ item.course_name }}
      </b-card-title>
      </router-link>
          <b-card-text>
            {{ item.course_description }}
          </b-card-text>
    </b-card>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../event-bus';
import { COURSES_USER } from "../graphql/queries";
import { getCurrentUser } from "../store/helpers";

export default {
  name: "myCourses",
  data() {
    return {
      myCoursesad: [],
      currentUser: ""
    };
  },
  created() {
    this.currentUser = getCurrentUser()
    this.myCourses();
    EventBus.$on('courseAdd', (value) => {
      this.myCoursesad.push(value);
    })
  },
  methods: {
    myCourses: async function() {
      await this.$apollo
        .query({
          query: COURSES_USER,
          variables:{
            username: this.currentUser.username,
          }
        })
        .then((res) => {
          this.myCoursesad= res.data.coursesByUserId ;
        }).catch((err)=>{
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.inscriptionButton {
  background: #323232;
}
.body {
  margin-left: 10%;
  margin-top: 3%;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  
}
.card {
  border-color: #66A5FC;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  margin-top: 1rem;
  width: 95% ;
}
.card:not(:last-child):hover,
.card:not(:last-child):focus-within {
  transform: translateX(1rem);
}
</style>
