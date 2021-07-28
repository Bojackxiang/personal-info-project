<template>
  <v-app id="dark-template">
    <v-fade-transition mode="out-in" type="animation">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <div class="page-container">
              <v-flex sm12>
                <v-layout wrap>
                  <!-- right side col  -->
                  <v-flex md8>
                    <content-container class="fill-height" />
                  </v-flex>
                  <!-- left side col  -->
                  <v-flex md4>
                    <sidebar-container class="fill-height" />
                  </v-flex>
                </v-layout>
              </v-flex>
            </div>
          </v-layout>
        </v-container>
      </v-content>
    </v-fade-transition>
  </v-app>
</template>

<script>
import SidebarContainer from "../../views/dark-template/sidebar/Container.vue";
import ContentContainer from "./content/Container.vue";
import TimelinePrimary from "@/views/dark-template/timeline/Primary";
import TimelineEndless from "@/views/dark-template/timeline/Endless";
// import LeaderLine from 'leader-line'

export default {
  name: "DarkTemplateContainer",
  components: {
    TimelineEndless,
    TimelinePrimary,
    ContentContainer,
    SidebarContainer,
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    // const line = new LeaderLine(
    //   document.getElementById('to-timeline'),
    //   document.getElementById('timeline'),
    //   {
    //     size      : 2,
    //     color     : this.$vuetify.theme.primary,
    //     startLabel: LeaderLine.captionLabel('To the Journey ...'),
    //   }
    // )
  },
};
</script>

<style scoped>
#dark-template {
  height: 100%;
  background: url("/img/background.png");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.page-container {
  max-width: 900px;
}
</style>
