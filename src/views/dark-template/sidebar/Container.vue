<template>
  <v-card color="grey darken-3 wrapper" dark>
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          <span class="light-blue--text text--lighten-3">
            {{ name.firstName }}
            {{ name.lastName }}
          </span>
        </h1>
        <span class="title-name"> A Full-Stack Developer </span>
      </div>
      <div>
        <info-card :title="'Contact'">
          <div class="contact-email">
            <img class="email-logo" src="/img/email.svg" />
            <a class="email" :href="'mailto:alex.developer@gmail.com'"
              >alex.developer@gmail.com</a
            >
          </div>
          <div class="contact-email">
            <img class="phone-logo" src="/img/phone.svg" />
            <a class="email" :href="'mailto:alex.developer@gmail.com'"
              >0424310042</a
            >
          </div>
        </info-card>
        <info-card :title="`tech stack`">
          <!-- backend  -->
          <!-- Body  -->
          <div class="tech-stack-title">
            <span>Backend </span>
          </div>
          <div class="tech-stack-body">
            <el-button
              class="tech-stack-btn"
              type="info"
              round
              v-for="(tech, index) in backend"
              :key="`${tech}-${index}`"
            >
              {{ tech }}
            </el-button>
          </div>
          <!-- front end  -->
          <!-- Body  -->
          <div class="tech-stack-title">
            <span>Frontend </span>
          </div>
          <div class="tech-stack-body">
            <el-button
              class="tech-stack-btn"
              type="info"
              round
              v-for="(tech, index) in frontend"
              :key="`${tech}-${index}`"
            >
              {{ tech }}
            </el-button>
          </div>
          <!-- devlops  -->
          <!-- Body  -->
          <div class="tech-stack-title">
            <span>DevOps </span>
          </div>
          <div class="tech-stack-body">
            <el-button
              class="tech-stack-btn"
              type="info"
              round
              v-for="(tech, index) in devops"
              :key="`${tech}-${index}`"
            >
              {{ tech }}
            </el-button>
          </div>
        </info-card>
        <info-card :title="'Message'">
          <div class="message-box">
            <mesasge-box/>
          </div>
        </info-card>
        
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import MesasgeBox from '../../../components/MesasgeBox.vue';
import Avatar from "../../../views/dark-template/sidebar/Avatar";
import SidebarSection from "../../../views/dark-template/sidebar/Section";


export default {
  name: "Sidebar",
  components: { SidebarSection, Avatar, MesasgeBox },
  data() {
    return {
      name: {
        firstName: "Alex",
        lastName: "Xiang",
      },
      backend: [
        "Nodejs",
        "GraphQL Server",
        "Express",
        "Jest",
        "TDD",
        "BDD",
        "Javascript",
        "Typescript",
      ],
      frontend: [
        "React",
        "Redux",
        "React Router",
        "Webpack",
        "CSS Modules",
        "SASS",
        "ESLint",
        "Vue",
        "Vuex",
        "Vue-Router",
        "Vuex-Router-sync",
      ],
      devops: [
        "Google Cloud Platform (GCP)",
        "Amazon Web Service (AWS)",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "TreavisCI",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  background: #2e2e2e;
}
.wrapper {
  .contact-email {
    display: flex;
    align-items: center;
    .email {
      display: inline-block;
      font-size: 1.1rem;
      margin-top: 0.2rem;
      margin-left: 0.5rem;
      color: white;
      text-decoration: none;;
    }
  }
  .email-logo {
    width: 2rem;
    height: 2rem;
  }
  .phone-logo {
    width: 1.6rem;
    height: 1.6rem;
    margin: 1rem 0.3rem;
  }
  .title-name {
    font-size: 1rem;
  }
  .tech-stack-btn {
    padding: 0.2rem 0.6rem;
    margin: 0.6rem;
    min-width: 5rem;
  }
  .tech-stack-title {
    margin: 0.5rem;
    font-size: 1.2rem;
  }
  .tech-stack-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0;
  }
  .message-box{

  }
}
</style>
