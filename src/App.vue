<template>
  <v-app>
    <dark-template-container />
    <message-box/>
  </v-app>
</template>

<script>
import MessageBox from './components/MessageBox.vue';
// import config  from './config/config';
import DarkTemplateContainer from "./views/dark-template/Container.vue";


export default {
  name: "App",
  components: { DarkTemplateContainer, MessageBox },
  data() {
      return {

      }
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
  position: relative;
  padding: 0;
  margin: 0;
  font-size: 10px;
  color: #444347;
}
</style>
