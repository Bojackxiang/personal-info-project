<template>
  <div v-if="educations" title="" class="wrapper">
    <el-row>
      <el-col :span="24">
        <span class="title"> Education </span>
      </el-col>
    </el-row>

    <el-row
      class="content"
      v-for="(education, index) in educations"
      :key="index"
      type="flex"
    >
      <el-col :span="6" :xs="4">
        <span class="education-year">
          {{ education.from }} - {{ education.to }}
        </span>
      </el-col>

      <el-col :span="18">
        <span class="education-title"> {{education.title}} </span>
        <span
          class="education-subtitle"
          v-for="(subtitle, index) in education.subtitles"
          :key="`${subtitle}-${index}`"
        >
        {{ subtitle }} 
        </span>
      </el-col>
    </el-row>

  </div>
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
.wrapper {
  padding: 0rem 1.3rem;
  background-color: #fff;
  .title {
    display: inline-block;
    padding: 0.5rem 0rem;
    border-bottom: 2px #bfbfbf solid;
  }
  .content {
    padding: 0.5rem 0.8rem;
    .education-year {
      font-size: 1.2rem;
    }
    .education-title{
      font-size: 1.2rem;
      display: block;
      font-weight: bold;
    }
    .education-subtitle {
      display: block;
      font-size: 1rem;
    }
  }
}
</style>