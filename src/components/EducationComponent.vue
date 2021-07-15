<template>
  <content-section v-if="educations" title="Education" :space="'2rem'">
    <v-layout v-for="(education, i) in educations" :key="i">
      <v-flex md4>
        <span class="year-text"
          >{{ education.from }} - {{ education.to }}
        </span>
      </v-flex>
      <v-flex md8>
        <strong v-if="education.title">
          <span class="title-text">{{ education.title }}</span>
        </strong>
        <div v-if="education.location">
          <span class="title-sub-text">{{ education.location }} </span>
        </div>
        <div v-if="education.description">
          {{ education.description }}
        </div>
      </v-flex>
      <Spacer :height="'4rem'" />
    </v-layout>
  </content-section>
</template>

<script>
import ContentSection from "@/views/dark-template/content/Section";
import Spacer from "./Utils/Spacer.vue";
export default {
  components: { ContentSection, Spacer },
  data() {
    return {
      educations: [
        {
          from: "2012",
          to: "2016",
          title: "Bachelor's Applied Mathmatics",
          location: "University of Arizona",
        },
        {
          from: "2012",
          to: "2016",
          title: "Bachelor's Computer Science",
          location: "University of Arizona",
        },
        {
          from: "2017",
          to: "2019",
          title: "Master's Information Technology",
          location: "University of New South Wales",
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