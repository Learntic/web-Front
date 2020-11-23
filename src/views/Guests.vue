<template>
  <div>
    <div class="row">
      <div class="col-md-12">
    <Guests></Guests>
      </div>
    </div>
  </div>
</template>

<script>
import Guests from "@/components/GuestsComponent.vue";

export default {
  name: "guestsView",
  components: {
    Guests
  }
};
</script>

<style></style>
