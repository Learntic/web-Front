<template>
  <div class="body">
    <h3>Mis cursos</h3>
    <div class="cards mx-5 mb-5">
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
      await this.$apollo
        .query({
          query: COURSES_USER,
          variables:{
            username: this.currentUser.username,
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
.body {
  margin-top: 3%;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.cards {
  display: flex;
  flex-wrap: wrap;
}
.card {
  color: #063869;
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 3px 3px 12px 2px rgba(black, 0.6);
  transition: 0.2s;
  margin-left: 1rem;
}
.card:not(:last-child):hover,
.card:not(:last-child):focus-within {
  transform: translateY(-1rem);
  ~.card {
    transform: translateX(2rem);
  }
}
</style>
