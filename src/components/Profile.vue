<template>
  <div class="card">
    <img src="@/assets/learntic.png" alt="John" style="width:100%">
    <h1>{{this.user.fullname}}</h1>
    <p class="title">{{this.user.email}}</p>
    <p>{{this.user.username}}</p>
    <p><b-button id="edit-btn" @ok="editUser"  v-b-modal.my-modal>Edit</b-button></p>
    <div>
      <b-modal id="my-modal" ref="modal" title="Edit your info" @ok="editUser">
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Fullname" label-for="fullname-input" invalid-feedback="Name is required">
          <b-form-input id="fullname-input" v-model="user.fullname" required> </b-form-input>
        </b-form-group>
        <b-form-group label="Username" label-for="username-input" invalid-feedback="Name is required">
          <b-form-input id="username-input" v-model="user.username" default-value="hey" required> </b-form-input>
        </b-form-group>
        <b-form-group label="Email" label-for="email-input" invalid-feedback="Name is required">
          <b-form-input id="email-input" v-model="user.email" default-value="hey" required> </b-form-input>
        </b-form-group>
      </form>
    </b-modal>
    </div>
  </div>
  
</template>

<script>
import {GET_USER} from "../graphql/queries"
import {UPDATE_USER} from "../graphql/mutations"


export default {
  name: "Profile",
  props: {
    msg: String
  },
  data() {
    return {
      user: {
      },
      name: "Cristian",
      currentUser: ""
    }
  },
  methods: {
    getUser: function() {
      console.log("WHen they're playing")
      this.$apollo.query({
          query: GET_USER,
          variables: {
            token: this.currentUser.token
          }

      }).then(res => {
        this.user = res.data.getUser
      }).catch(err => {
        console.log(err)
      })
    },
    editUser() {
      this.$apollo.mutate({
          mutation: UPDATE_USER,
          variables: {
            fullname: this.user.fullname,
            username: this.user.username,
            email: this.user.email,
            token: this.currentUser.token
          }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
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
    this.getUser()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
}

.title {
  color: grey;
  font-size: 18px;
}

button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}

img {
  border-radius: 50%;
}

#edit-btn {
  background: #2F5D71;
}
</style>