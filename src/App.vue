<template>
  <v-app>
    <dark-template-container />
  </v-app>
</template>

<script>
// import config  from './config/config';
import DarkTemplateContainer from "./views/dark-template/Container.vue";


export default {
  name: "App",
  components: { DarkTemplateContainer },
  data() {
    return {};
  },
  async mounted() {
  try {
      const url = `/health-check`
      console.log(url)
      // const response = await this.axios.get(url);
      // console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: #444347;
}
</style>
