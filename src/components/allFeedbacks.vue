<template>
  <div class="allFeedBacks">
    <h1> Opiniones </h1>
    <b-card v-for="item in feedbacks" :key="item.id" class="cardsFeedback">
      <div class="row">
        <div class="col-md-10">
          <b-card-title>
            <strong> {{ item.id_usuario }} </strong>
          </b-card-title>
          <b-card-text>
            {{ item.opinion }}
          </b-card-text>
        </div>
        <div class="col-md-2">
          <b-card-title><strong>Nota</strong></b-card-title>
          <b-card-text>
            {{ item.nota }}
          </b-card-text>
        </div>
      </div>
    </b-card>
    <div v-if="loggedIn">
    <CreateFeedback></CreateFeedback>
    </div>
  </div>
</template>

<script>
import { authComputed } from "../store/helpers";
import { FEEDBACKS_COURSE } from "../graphql/queries";
import CreateFeedback from "@/components/createFeedback.vue";
import {EventBus} from "../event-bus"
export default {
  name: "feedbacksByCourse",
  data() {
    return {
      feedbacks: [],
      currentCourse: parseInt(this.$route.params.id),
    };
  },
  components: {
    CreateFeedback,
  },
  computed: {
    ...authComputed,
  },
  created() {
    this.feedbacksByCourse();
    EventBus.$on('addFeedback', (value) => {
      this.feedbacks.push(value);
    })
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    feedbacksByCourse: async function() {
      await this.$apollo
        .query({
          query: FEEDBACKS_COURSE,
          variables: {
            idCourse: this.currentCourse,
          },
        })
        .then((res) => {
          this.feedbacks = res.data.feedbackByCourse;
        });
    },
  },
};
</script>

<style scoped>
.allFeedBacks{
    margin-top: 5%;
}
.cardsFeedback {
  border: none;
  text-align: left;
  border-bottom: 1px solid #66A5FC;
  margin-left: 10%;
}
</style>
