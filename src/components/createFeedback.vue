<template>
  <div class="createFeedback">
    <h3>Deja tu opinion sobre el curso</h3>
    <b-form @submit.prevent="createFeedback">
      <div class="row">
        <div class="col-md-8">
          <b-form-group
            id="input-group-1"
            label="¿Qué opinas sobre este curso?:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="feedback.opinion"
              required
              placeholder="Tu opinión"
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-2">
          <b-form-group
            id="input-group-2"
            label="Calificación:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="feedback.score"
              required
              type="number"
              placeholder="Calificación"
              min= "0"
              max= "5"
            >
            </b-form-input>
          </b-form-group>
          </div>
          <div class="col-md-2">
            <b-button type="submit" class="formButton">Enviar</b-button>
          </div>
      </div>
    </b-form>
  </div>
</template>

<script>
import { CREATE_FEEDBACK } from "../graphql/mutations";
import {EventBus} from "../event-bus"
import { getCurrentUser } from "../store/helpers";


export default {
  name: "CreateFeedback",
  data() {
    return {
      currentUser: "",
      feedback: {
        opinion: "",
        score: "",
      },
      currentCourse: parseInt(this.$route.params.id),
    };
  },
  created() {
    this.currentUser = getCurrentUser()
  },
  methods: {
    createFeedback: async function (){
      await this.$apollo
        .mutate({
          mutation: CREATE_FEEDBACK,
          variables: {
            username: this.currentUser.username,
            idCourse: this.currentCourse,
            opinion: this.feedback.opinion,
            score: this.feedback.score,
            userToken: this.currentUser.token
          },
        })
        .then((res) => {
          EventBus.$emit('addFeedback',res.data.createFeedback);
        }).catch((err)=>{
          console.log("Esto es un error", err)
        });
    },
  },
};
</script>

<style scoped>
.createFeedback {
  margin-top: 5%;
  margin-left: 10%;
}
.formButton{
  background: #233a4d;
}
</style>
