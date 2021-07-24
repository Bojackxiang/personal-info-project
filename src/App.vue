<template>
  <v-app>
    <dark-template-container />
  </v-app>
</template>

<script>
import DarkTemplateContainer from './views/dark-template/Container.vue'
import axios from 'axios'
export default {
  name      : 'App',
  components: { DarkTemplateContainer },
  data () {
    return {}
  },
  async mounted(){
    try {
    const response = await axios.get('http://localhost:3001/health-check')
    console.log(response)  
    } catch (error) {
      
    }
    
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: #444347;
}
</style>
