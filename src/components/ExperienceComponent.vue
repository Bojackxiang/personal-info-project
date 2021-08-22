<template>
  <div class="wrapper" v-if="workExperiences.length > 0">
    <el-row>
      <el-col :span="24">
        <span class="title"> Experience </span>
      </el-col>
    </el-row>

    <el-row
      class="content"
      v-for="experience in workExperiences"
      :key="experience.company"
    >
      <el-col class="role" :span="12">
        <span class="role-title">{{ experience.title }}</span>
        <span class="role-company"
          ><i>{{ experience.company }}</i></span
        >
      </el-col>
      <el-col class="date" :span="12">
        <i>[{{ experience.startDate }}] - [{{ experience.endDate }}]</i>
      </el-col>
      <el-col :span="24" v-if="experience.duties.length > 0">
        <span
          v-for="(duty, index) in experience.duties"
          :key="`${duty}-${index}`"
          class="experience-duty"
        >
          <span class="dot">•</span> {{ duty }}
        </span>
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
          startDate: "2019-01",
          endDate: "2021-06",
          duties: [
            "BUilding a Native App Kitly, and releasing on App Store and Google Store.",
            "Delivering compatible UI on mobile, and implementing in-APP Purchase ",
            "Delivering TypeScript and Functional components in React and Ract Native ",
            "Working with RESTFUL and GraphQL based server-side rendering application ",
            "Perforred testing through BDD and TDD by Enzyme by Jest, Enzyme ",
            "Setting up projects on the through Docker, and deploy on Kubernetes on EKS",
            "Implemented CI/CD by CodePipeline (AWS) and monitoring on CloudWatch.",
            "Implemented Sub/Pub on RabbitMQ, SQS(AWS), and Lambda Trigger",
          ],
        },
        {
          company: "RentBetter, Sydney, Australia",
          title: "Software Engineer",
          startDate: "2018-07",
          endDate: "2019-01",
          duties: [
            "Built server-side rendering web application by using Nextjs and KOA",
            "Implement Authentication thgouth OAuth and Social Media Platforms",
            "Delivered mobile responsive UI and implemented unit tests (BDD and TDD).",
            "Deployed react applications through CI/CD by using Jenkins and Docker",
            "Established a real-time transaction monitoring dashboard with Angular",
            "Collected real-time data and generated reports by web crawler and Flask ",
            "Tracked teamwork by Jira and documented code on Confluence"
          ],
        },
        {
          company: "University of South Wales State",
          title: "Full Stack Engineer (Contract)",
          startDate: "2017-07",
          endDate: "2018-06",
          duties: [
            "Built server-side rendering web application by using Nextjs and KOA",
            "Implement Authentication thgouth OAuth and Social Media Platforms",
            "Delivered mobile responsive UI and implemented unit tests (BDD and TDD).",
            "Deployed react applications through CI/CD by using Jenkins and Docker",
            "Established a real-time transaction monitoring dashboard with Angular",
            "Collected real-time data and generated reports by web crawler and Flask ",
            "Tracked teamwork by Jira and documented code on Confluence"
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
        font-weight: bold;
      }
    }
    .date {
      text-align: right;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .experience-duty {
      font-size: 1.1rem;
      margin: 0.5rem 0rem;
      display: block;
      .dot {
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
}
</style>