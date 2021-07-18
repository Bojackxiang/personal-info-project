<template>
  <div v-if="certifications" class="wrapper">
    <el-row>
      <el-col :span="24">
        <span class="title"> Certification </span>
      </el-col>
    </el-row>
    <el-row
      class="content"
      v-for="(certification, index) in certifications"
      :key="index"
      type="flex"
    >
      <el-col :span="6" :xs="4">
        <span class="certification-name-text">
          {{ certification.platformName }}
        </span>
      </el-col>
      <el-col :span="18">
        <span class="certification-title-text">
          {{ certification.title }}
        </span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Spacer from "./Utils/Spacer.vue";
export default {
  name: "CertificationComponent",
  components: { Spacer },
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
.wrapper {
  padding: 0rem 1.3rem;
  background-color: #fff;
  .title {
    display: inline-block;
    padding: 0.5rem 0rem;
    border-bottom: 2px #bfbfbf solid;
  }
  .content {
    padding: 1rem 0.8rem;
    .certification-name-text {
      font-size: 1.2rem;
    }
    .certification-title-text {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
}
</style>