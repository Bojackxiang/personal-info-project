<template>
  <div class="wrapper" v-if="workExperiences.length > 0">
    <el-row>
      <el-col :span="24">
        <span class="title"> Experience </span>
      </el-col>
    </el-row>

    <el-row
      :type="'flex'"
      justify="'space-between'"
      class="content"
      v-for="experience in workExperiences"
      :key="experience.company"
    >
      <el-col class="role">
        <span class="role-title">{{experience.title}}</span>
        <span class="role-company">{{experience.company}}</span>
      </el-col>
      <el-col class="date">
        <i>[{{experience.startDate}}] - [{{experience.endDate}}]</i>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "ExperienceComponent",
  data() {
    return {
      workExperiences: [
        {
          company: "Q-83, Sydney, Australia",
          title: "Full stack Developer",
          startDate: "2015-5",
          endDate: "2016-1",
          duties: [],
        },
        {
          company: "Company name",
          title: "software engineer",
          startDate: "2015-5",
          endDate: "2016-1",
          duties: [],
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
  margin-top: 1rem;
  .title {
    display: inline-block;
    padding: 0.5rem 0rem;
    border-bottom: 2px #bfbfbf solid;
  }
  .content {
    margin: 1.5rem 0rem;
    .role {
      font-size: 1.2rem;
      .role-title {
        display: block;
        font-weight: bold;
      }
      .role-company {
        display: block;
      }
    }
    .date {
      text-align: right;
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
}
</style>