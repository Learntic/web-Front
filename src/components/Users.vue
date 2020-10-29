<template>
  <div>
    <h3>Usuarios por conocer</h3>
    <b-card v-for="item in users" :key="item.uid" class="card">
      <div class="row">
        <div id="card-title" class="col-md-8">
          <img src="@/assets/learntic.png" style="width:100%" />
          <b-card-title id="title">
            {{ item.username }}
          </b-card-title>
        </div>
      </div>
      <div class="row">
        <div id="card-title" class="col-md-8">
          <b-button class="btn" v-on:click="addFriend(item.uid)">Agregar</b-button>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import { GET_NOT_MY_FRIENDS } from "../graphql/queries";
import { ADD_FRIEND } from "../graphql/mutations";
import {EventBus} from "../event-bus"
import { getCurrentUser } from "../store/helpers";

export default {
  name: "Friends",
  data() {
    return {
      users: [],
      currentUser: ""
    };
  },
  methods: {
    getAllUsers: function() {
      this.$apollo
        .query({
          query: GET_NOT_MY_FRIENDS,
          variables: {
            uid: this.currentUser.uid,
            token: this.currentUser.token
          },
          fetchPolicy: "no-cache"
        })
        .then(res => {
          this.users = res.data.notMyFriends;
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addFriend: function(uid) {
      this.$apollo
        .mutate({
          mutation: ADD_FRIEND,
          variables: {
            from: this.currentUser.uid,
            to: uid,
            token: this.currentUser.token
          },
        })
        .then(res => {
          let friend = this.users.filter(user => user.uid == uid)
          EventBus.$emit('addFriend', friend[0]);
          this.users = this.users.filter((user)=>
            user.uid != uid);
        })
        .catch(err => {
          console.log(err);
        });
      console.log(uid);
    }
  },
  created() {
    this.currentUser = getCurrentUser()
    this.getAllUsers();
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

button {
  margin: auto;
}

.btn {
  background: #233A4D;
}
</style>