<template>
  <v-card color="grey darken-3 wrapper" dark>
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          <span class="light-blue--text text--lighten-3">
            {{ sections.info.name.firstName }}
            {{ sections.info.name.lastName }}
          </span>
        </h1>
        <span class="title-name"> A Full-Stack Developer </span>
      </div>

      <div>
        <info-card :title="`tech stack`">
          <div class="tech-stack-title">
            <el-button class="tech-stack-btn" type="primary" plain 
              >Backend</el-button
            >
          </div>
          <div class="tech-stack-body">
            <el-button class="tech-stack-btn" type="primary" round
              >Nodejs</el-button
            >

            <el-button class="tech-stack-btn" type="primary" round
              >GraphQL Server
            </el-button>
            <el-button class="tech-stack-btn" type="primary" round
              >Express Server
            </el-button>
          </div>
        </info-card>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import InfoCard from "../../../components/InfoCard.vue";
import InfoCardVue from "../../../components/InfoCard.vue";
import Avatar from "../../../views/dark-template/sidebar/Avatar";
import SidebarSection from "../../../views/dark-template/sidebar/Section";

export default {
  name: "Sidebar",
  components: { SidebarSection, Avatar },
  data() {
    return {
      sections: {
        info: {
          name: {
            firstName: "Alex",
            lastName: "Xiang",
          },
          title: "INFO",
          items: [
            {
              name: "Email",
              icon: "mdi-email",
              text: "alex.developer1004@gmail.com",
            },
            // {
            //   name: "Website",
            //   icon: "mdi-web",
            //   text: "amirreza.in",
            // },
            // {
            //   name: "Birth Date",
            //   icon: "mdi-cake-variant",
            //   text: "Dec 7, 1996",
            // },
            {
              name: "Phone",
              icon: "mdi-map-marker",
              text: "Tabriz, Iran",
            },
          ],
        },
        socials: {
          title: "SOCIALS",
          items: [
            {
              icon: "mdi-github-circle",
              text: "github.com/AmirrezaNasiri",
              link: "https://github.com/AmirrezaNasiri",
            },
            {
              icon: "mdi-linkedin-box",
              text: "linkedin.com/in/amirreza-nasiri",
              link: "https://linkedin.com/in/amirreza-nasiri",
            },
            {
              icon: "mdi-twitter",
              text: "twitter.com/Amirreza_Nasiri",
              link: "https://twitter.com/Amirreza_Nasiri",
            },
            {
              icon: "mdi-instagram",
              text: "instagram.com/amirreza.n96",
              link: "https://instagram.com/amirreza.n96",
            },
          ],
        },
        hobbies: {
          title: "HOBBIES",
          items: [
            {
              icon: "mdi-bullseye",
              text: "Getting out of Safe Zone",
            },
            {
              icon: "mdi-biohazard",
              text: "Challenges",
            },
            {
              icon: "mdi-bike",
              text: "Cycling",
            },
            {
              icon: "mdi-image-filter-hdr",
              text: "Nature",
            },
            {
              icon: "mdi-auto-fix",
              text: "Hacking Stuffs",
            },
            {
              icon: "mdi-teach",
              text: "Teaching",
            },
            {
              icon: "mdi-karate",
              text: "Sports",
            },
            {
              icon: "mdi-music",
              text: "Music",
            },
            {
              icon: "mdi-account-group",
              text: "Leadership",
            },
            {
              icon: "mdi-book-open-page-variant",
              text: "Books",
            },
            {
              icon: "mdi-android-debug-bridge",
              text: "Tickling Bugs!",
            },
          ],
        },
        languages: {
          title: "LANGUAGES",
          items: [
            {
              text: "English",
              value: 70,
            },
            {
              text: "Turkish",
              value: 45,
            },
            {
              text: "Azeri",
              value: 100,
            },
            {
              text: "Persian",
              value: 100,
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  background: #2e2e2e;
}
.wrapper {
  .title-name {
    font-size: 1rem;
  }
  .tech-stack-btn {
    padding: 0.5rem;
    margin: 0.2rem;
  }
  .tech-stack-title {
  }
  .tech-stack-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0.5rem 0;
  }
}
</style>
