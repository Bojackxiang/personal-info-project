<template>
  <content-section v-if="certifications" title="Certification" class="wrapper">
    <v-layout v-for="(certification, index) in certifications" :key="index">
      <v-flex md3 xs2 sm3>
        <span class="certification-name-text">
          {{ certification.platformName }}
        </span>
      </v-flex>
      <div>
        <span class="certification-title-text">
          {{ certification.title }}
        </span>
      </div>
      <Spacer :height="'5rem'" />
    </v-layout>
  </content-section>
</template>

<script>
import ContentSection from "@/views/dark-template/content/Section";
import Spacer from "./Utils/Spacer.vue";
export default {
  name: "CertificationComponent",
  components: { ContentSection, Spacer },
  data() {
    return {
      certifications: [
        {
          platformName: "AWS",
          title: "AWS Certified Solution Architect - Associate",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
}
.progress {
  margin-top: 0.1rem;
}

.certification-name-text {
  font-size: 1.2rem;
}

.certification-title-text {
  font-size: 1.2rem;
  font-weight: bold;
}


</style>