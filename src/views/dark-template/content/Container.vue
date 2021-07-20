<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <!-- name component  -->
      <name-component />
      <education-component />
      <certification-component />
      <experience-component />
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "@/views/dark-template/content/Section";
import NameComponent from "../../../components/NameComponent.vue";
import Spacer from "../../../components/Utils/Spacer.vue";
import EducationComponentVue from "../../../components/EducationComponent.vue";
import CertificationComponent from "../../../components/CertificationComponent.vue";
import ExperienceComponentVue from "../../../components/ExperienceComponent.vue";

export default {
  name: "MainContent",
  components: {
    ContentSection,
    NameComponent,
    Spacer,
    EducationComponentVue,
    CertificationComponent,
    ExperienceComponentVue,
  },
  data: () => ({
    prouds: [
      {
        icon: "mdi-help-rhombus-outline",
        text: "Answered 10M+ questions!",
        source: "(Bytegate.ir post views)",
      },
      {
        icon: "mdi-library-music",
        text: "Made people enjoy and learn a new language for equivalent of 29+ years (older than myself!)",
        source: "(Bobet.ir and its channel downloads)",
      },
      {
        icon: "mdi-timer-sand",
        text: "Saved +110 days of time of students, writers and etc!",
        source: "(Delix.ir service usages)",
      },
      {
        icon: "mdi-account-multiple",
        text: "Tried to cover small part of 7 people expenses.",
        source: "(My awesome colleagues)",
      },
    ],
    skills: [
      {
        title: "PHP",
        icon: "mdi-language-php",
        value: 95,
      },
      {
        title: "JavaScript",
        icon: "mdi-language-javascript",
        value: 80,
      },
      {
        title: "Laravel Framework",
        icon: "mdi-laravel",
        value: 90,
      },
      {
        title: "Vue.js Framework",
        icon: "mdi-vuejs",
        value: 90,
      },
      { divider: true },
      {
        title: "Ubuntu Server",
        icon: "mdi-ubuntu",
        value: 70,
      },
      {
        title: "CentOS Server",
        icon: "mdi-linux",
        value: 47,
      },
      {
        title: "Web Application Security",
        icon: "mdi-shield-lock",
        value: 80,
      },
      {
        title: "Test Driven Development",
        icon: "mdi-test-tube",
        value: 26,
      },
      {
        title: "Continuous Integration / Continuous Delivery",
        icon: "mdi-truck-fast",
        value: 35,
      },
      {
        title: "Git",
        icon: "mdi-git",
        value: 67,
      },
      { divider: true },
      {
        title: "Hardware Development",
        icon: "mdi-chip",
        value: 29,
      },
      {
        title: "C/C++",
        icon: "mdi-language-cpp",
        value: 38,
      },
      { divider: true },
      {
        title: "Leadership",
        icon: "mdi-account-group",
        value: 68,
      },
      {
        title: "Content Marketing (+340 articles)",
        icon: "mdi-text",
        value: 96,
      },
    ],
  }),
};
</script>

<style scoped>
.card {
  background-color: #f4f4f6;
  color: #2f2f31;
}
.name-section {
  font-size: 2rem;
}
.name {
  margin-top: -2rem;
}

.title {
  border-bottom: 2px #bfbfbf solid;
}
.progress {
  margin-top: 0.1rem;
}

.year-text {
  font-size: 1rem;
}

.title-text {
  font-size: 1rem;
}

.title-sub-text {
  font-size: 1rem;
}
</style>
