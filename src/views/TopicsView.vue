<template>
  <div>
      <h1>{{ $route.params.id }}</h1>
      <div id="content" v-html="source"> </div>
  </div>  
</template>

<script>
import axios from 'axios';

export default {
    name: "TopicsView",
    data() {
      return {
        source: "../topics/LearnTic.html"
      }
    },
    created() {
      axios.get("https://raw.githubusercontent.com/chriss-m240/Testing/master/LearnTIC%20(2).html").then(res => {
        this.source = res.data.replace("max-width:758px;", "max-width:90%;")
      })
    }
}
</script>

<style scoped>
#content {
  text-align: initial;
}
.markdown-body {
  max-width: 90% !important;
}
</style>>
