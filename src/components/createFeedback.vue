<template>
<div class="createFeedback">
  <h3>Deja tu opinion sobre el curso</h3>
    <b-form @submit="onSubmit">
      <div class="row">
        <div class="col-md-10">
      <b-form-group
        id="input-group-1"
        label="¿Qué opinas sobre este curso?:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="opinion"
          required
          placeholder="Tu opinión"
        ></b-form-input>
      </b-form-group>
        </div>
        <div class="col-md-2">
      <b-form-group id="input-group-2" label="Tu calificación:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="score"
          required
          type="number"
          placeholder="Calificación"
        ></b-form-input>
      </b-form-group>
        <b-button type="submit" variant="primary">Enviar</b-button>
        </div>
      </div>
    </b-form>
</div>
</template>

<script>
import { CREATE_FEEDBACK } from "../graphql/mutations";
export default {
  name: "CreateFeedback",
  data() {
    return {
      currentUser: "",
      opinion: "",
      score: "",
      currentCourse: parseInt(this.$route.params.id)
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
  },
  methods: {
    createFeeadback: async function() {
      await this.$apollo
        .mutate({
          mutation: CREATE_FEEDBACK,
          variables: {
            username: this.currentUser.username,
            idCourse: this.currentCourse,
            opinion: this.opinion,
            score: this.score,
          }
        })
        .then((res) => {

        });
    },
  },
};
</script>

<style scoped>
.createFeedback{
  margin-top: 5%;
  margin-left: 10%;
}
</style>
