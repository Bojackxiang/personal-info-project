<template>
  <v-app>
    <dark-template-container />
  </v-app>
</template>

<script>
import DarkTemplateContainer from './views/dark-template/Container.vue'

export default {
  name      : 'App',
  components: { DarkTemplateContainer },
  data () {
    return {}
  },
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
