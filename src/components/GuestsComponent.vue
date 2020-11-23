<template>
<div class="body">
<div class="cards">
  <b-card v-for="item in guests" :key="item.id" class="card">
      <b-card-title> {{item.nombre}} </b-card-title>
      <b-card-subtitle> {{item.apellido }}</b-card-subtitle>
  </b-card>
  </div>
</div>
</template>

<script>
import { ALL_GUESTS } from "../graphql/queries";
export default {
    name: "Guests",
    data() {
    return {
      guests: [],
    };
  },
  methods: {
   getGuests: function() {
      this.$apollo
        .query({
          query: ALL_GUESTS,
        })
        .then(res => {
          this.guests = res.data.allGuests;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }   
  },
  created() {
    this.getGuests();
  }
}

</script>

<style scoped>
.body {
  margin: 30px;
  height: auto;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.cards {
  display: flex;
  overflow-x: scroll;
}
.card {
  color: #063869;
  background-color: white;
  border-radius: 1rem;
  max-width: 9rem;
  padding: 0.5rem;
}
</style>