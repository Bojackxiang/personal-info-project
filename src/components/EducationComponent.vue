<template>
  <content-section v-if="educations" title="Education">
    <v-layout v-for="(education, i) in educations" :key="i">
      <v-flex md3 >
        <span class="year-text"
          >{{ education.from }} - {{ education.to }}
        </span>
      </v-flex>
      <v-flex sm9 xs12 class="test">
          <strong v-if="education.title">
            <span class="title-text">{{ education.title }}</span>
          </strong>
          <div v-if="education.subtitles.length > 0">
            <span
              class="title-sub-text"
              v-for="subtitle in education.subtitles"
              :key="subtitle"
            >
              {{ subtitle }}
            </span>
          </div>
      </v-flex>
      <Spacer :height="'5rem'" />
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
          from: "2017",
          to: "2019",
          title: "University of New South Wales (AUS)",
          subtitles: [`Master's Information Technology`],
        },
        {
          from: "2017",
          to: "2019",
          title: "University of Arizona (US)",
          subtitles: [
            `Bachelor's Applied Mathmatics`,
            `Bachelor's Computer Science`,
          ],
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
  font-size: 1.2rem;
}

.title-text {
  font-size: 1.2rem;
}

.title-sub-text {
  font-size: 1rem;
  margin: 0.5rem 2rem;
  display: block;
}
</style>