<template>
  <div class="card">
    <img src="@/assets/learntic.png" alt="John" style="width:100%">
    <h1>{{this.user.fullname}}</h1>
    <p class="title">{{this.user.email}}</p>
    <p>{{this.user.username}}</p>
    <p><button id="edit-btn" v-on:click="editUser()">Edit</button></p>
  </div>
</template>

<script>
import {GET_USER} from "../graphql/queries"

export default {
  name: "Profile",
  props: {
    msg: String
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    getUser: function() {
      console.log("WHen they're playing")
      this.$apollo.query({
          query: GET_USER
      }).then(res => {
        this.user = res.data.getUser
      }).catch(err => {
        console.log(err)
      })
    },
    editUser() {
      console.log(this)
      this.$modal.show('dialog', {
        title: 'Information',
        text: 'Check out, I have a title 😎'
      })
    }
  },
  created() {
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