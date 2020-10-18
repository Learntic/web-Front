<template>
  <div class="home">
    <Profile msg="This is the profile component" />
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";

export default {
  name: "TestProfile",
  components: {
    Profile
  }
};
</script>
