
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
          <div v-for="userAchievement in friendsAchievements" v-bind:key="userAchievement.username">
						
          	<tr v-for="achievement in userAchievement.achievements" v-bind:key="achievement.name">
            	<td class="title">{{ userAchievement.username }}</td>
            	<td class="title">{{ achievement.name }}</td>
            	<td class="title">{{ achievement.description }}</td>
          	</tr>
          </div>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { ACHIEVEMENTS_BY_USERNAMES} from "../graphql/queries"
import { FRIENDS_ACHIEVEMENTS} from "../graphql/queries"
import { GET_FRIENDS} from "../graphql/queries"
import {GET_USER} from "../graphql/queries"
import {UPDATE_USER} from "../graphql/mutations"
import { getCurrentUser } from "../store/helpers";

export default {
  data() {
    return {
      userAchievements: [],
      friends: [],
      user: {
      },
      currentUser: "",
      friendsAchievements :[],
    };
  },
  methods: {
    getUser: function() {
       this.$apollo.query({
          query: GET_USER,
          variables: {
            token: this.currentUser.token,
            uid: this.currentUser.uid
          },
          fetchPolicy: "no-cache"
      }).then(res => {
        this.user = res.data.getUser
				console.log(this.user.username);
				console.log(this.user.uid);
				console.log(this.currentUser);
      }).catch(err => {
        console.log(err);
      })
    },
    getFriendsAchievements: function() {
      this.$apollo
        .query({
		  query: FRIENDS_ACHIEVEMENTS,
		  variables: {
			usernames: this.friends,
		  },
          fetchPolicy: "no-cache"
        })
        .then(res => {
          this.userAchievements =res.data.GetAchievementsByUsernames;
        });
    },
    getFriends: function() {
      this.$apollo
        .query({
          query: GET_FRIENDS,
          variables: {
            uid: this.currentUser.uid,
            token: this.currentUser.token
          }
        })
        .then(res => {
					console.log(res.data.myFriends);
          var aux = res.data.myFriends;
          console.log(aux);
          for(var i in aux){
					console.log(i);
					this.friends.push(toString(aux[i].username));
           }
	  console.log(this.friends);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.currentUser = getCurrentUser()
    this.getUser();
		this.getFriends();
    this.friendsAchievements=this.getFriendsAchievements();
    console.log(this.friendsAchievements);
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
