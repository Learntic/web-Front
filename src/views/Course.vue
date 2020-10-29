<template>
  <div>
    <div class="row">
      <div class="col-md-7">
        <topics></topics>
        <router-link :to="{ name: 'Unity', params: { id: $route.params.id }}" :event="clickable ? 'click' : ''">
          <b-button class="btn" block>
              Ir a la evaluación
          </b-button>
        </router-link>
          <p id="msg" v-if="!clickable"> <b> Recuerda no estas registrado por tanto no puedes acceder a los contenidos del curso</b></p>
        <allFeedbacks></allFeedbacks>
      </div>
      <div class="col-md-5">
        <div v-if="!loggedIn">
          <AllCourses></AllCourses>
        </div>
        <div v-else>
          <NotMyCourses class="notMyCourses" mensaje="Hoy puedes aprender más"></NotMyCourses>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authComputed, isRegistered, getCurrentUser } from "../store/helpers";
import topics from "@/components/topics.vue";
import AllCourses from "@/components/allCourses.vue";
import NotMyCourses from "@/components/NotMyCourses.vue";
import allFeedbacks from "@/components/allFeedbacks.vue";

export default {
  name: "courseView",
  components: {
    topics,
    allFeedbacks,
    NotMyCourses,
    AllCourses
  },
  computed: {
    ...authComputed,
  },
  data() {
    return {
      clickable : false,
      currentUser: {}
    }
  },
  async created() {
    this.currentUser = getCurrentUser() 
    await isRegistered(this, this.currentUser.username, this.$route.params.id).then((res) => {
      this.clickable = res
    })
  }
};
</script>

<style scoped>
.btn {
  background: #233a4d;
  margin-left: 5%;
  margin-top: 1%;
}

#msg {
  margin-top: 2%;
  color: red;
}

</style>
