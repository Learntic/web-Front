
<template>
  <div class="achievement">
    <h3 class="title">Tus Logros</h3>
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
      userAchievements: [],
      currentUser: {}
    };
  },
  methods: {
    getUserAchievements: function() {
      this.$apollo
        .query({
		  query: ACHIEVEMENTS_BY_USERNAMES,
		  variables: {
			username: this.currentUser.username
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
    if (localStorage.getItem("user")) {
      try {
        this.currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    this.getUserAchievements();
  }
};
</script>

<style>
.title {
  font-family: "Roboto", sans-serif;
}
.achievement{
  margin-top: 10%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>