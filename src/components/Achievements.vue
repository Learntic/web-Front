
<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
      rel="stylesheet"
    />
    <h1 class="title">Logros</h1>
    <div class="table-responsive text-nowrap">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="achievement in userAchievements" v-bind:key="achievement.name">
            <td class="title">{{ achievement.name }}</td>
            <td class="title">{{ achievement.description }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {ACHIEVEMENTS_BY_USERNAMES} from "../graphql/queries"

export default {
  data() {
    return {
      messages: ["hello", "vue", "js"],
      userAchievements: []
    };
  },
  methods: {
    testApollo: function() {
      this.$apollo
        .query({
		  query: ACHIEVEMENTS_BY_USERNAMES,
		  variables: {
			username: "Cristian"  
		  },
          fetchPolicy: "no-cache"
        })
        .then(res => {
          this.userAchievements =
            res.data.GetAchievementsByUsernames[0].achievements;
        });
    }
  },
  created() {
    this.testApollo();
  }
};
</script>

<style>
.title {
  font-family: "Roboto", sans-serif;
}
</style>

