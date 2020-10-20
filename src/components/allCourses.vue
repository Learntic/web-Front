<template>
  <div class="body">
    <h3>Nuestros Cursos</h3>
    <div class="cards mx-1 mb-5">
    <b-card v-for="item in allCourses" :key="item.id" class="card">
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
import { ALL_COURSES } from "../graphql/queries";
export default {
  name: "AllCourses",
  data() {
    return {
      allCourses: [],
    };
  },
  created() {
    this.getAllCourses();
  },
  methods: {
    getAllCourses: async function() {
      await this.$apollo
        .query({
          query: ALL_COURSES,
        })
        .then((res) => {
          this.allCourses= res.data.allCourses;
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
  margin-top: 5%;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  padding-right: 8%;
}
.card {
  border-color: #66A5FC;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  margin-top: 1rem;
  width: 95% ;
  margin-left: 5%;
}
.card:not(:last-child):hover,
.card:not(:last-child):focus-within {
  transform: translateX(-1rem);
}
</style>
