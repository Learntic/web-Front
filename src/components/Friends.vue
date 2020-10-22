<template>
  <div>
    <h3>Mis amigos</h3>
    <b-card v-for="item in friends" :key="item.uid" class="card">
      <div class="row">
        <div id="card-title" class="col-md-8">
          <img src="@/assets/learntic.png" style="width:100%" />
          <b-card-title id="title">
            {{ item.username }}
          </b-card-title>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { GET_FRIENDS } from "../graphql/queries";
import { UPDATE_USER } from "../graphql/mutations";
import {EventBus} from "../event-bus"

export default {
  name: "Friends",
  data() {
    return {
      friends: [],
      currentUser: ""
    };
  },
  methods: {
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
          this.friends = res.data.myFriends;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
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
    this.getFriends();
    EventBus.$on('addFriend', (friend) => {
      this.friends.push(friend)
    })
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: auto;
}

img {
  border-radius: 50%;
  width: 65px !important;
  margin-right: 25px;
}

#card-title {
    display: flex;
    margin: auto;
}

#title {
    margin: auto !important;
}

h3 {
  margin: 40px 0 25px;
}
</style>