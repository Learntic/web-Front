<template>
  <div>
      <div id="content" v-html="source"> </div>
  </div>  
</template>

<script>
import axios from 'axios';
import {EventBus} from "../event-bus";


export default {
    name: "TopicsView",
    data() {
      return {
        source: "",
        urls: [
          "https://raw.githubusercontent.com/Learntic/course_topics/main/Navegando%20en%20internet/Redes%20sociales%20y%20correo%20electr%C3%B3nico.html",
          "https://raw.githubusercontent.com/Learntic/course_topics/main/Navegando%20en%20internet/B%C3%BAsqueda%20B%C3%A1sica%20de%20Im%C3%A1genes.html",
          "https://raw.githubusercontent.com/Learntic/course_topics/main/Usando%20Programas%20Basicos/Ofim%C3%A1tica%20B%C3%A1sica.html",
          "https://raw.githubusercontent.com/Learntic/course_topics/main/Usando%20Programas%20Basicos/Navegadores%2C%20Presentaciones%20y%20Reproductores%20de%20multimedia.html",
        ]
      }
    },
    created() {
      EventBus.$on('sendTopicURL', (topicURL) => {
        console.log(topicURL)

      })
      axios.get(this.urls[this.$route.params.id-1]).then(res => {
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
