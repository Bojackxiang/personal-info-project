<template>
  <content-section
    title=""
    class="name-section"
  >
    <h1 class="name">
      {{ firstName | uppercase }}
    </h1>
    <h1 class="name">
      {{ lastName | uppercase }}
    </h1>
    <h4 class="title">
      {{ title | uppercase }}
    </h4>
  </content-section>
</template>

<script>
import Spacer from './Utils/Spacer.vue'
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'NameComponent',
  components: {
    Spacer,
    ContentSection,
  },
  data () {
    return {
      firstName: 'alex',
      lastName : 'xiang',
      title    : 'fullstack developer',
    }
  },
}
</script>

<style lang="scss" scoped>
.name-section {
  font-size: 2rem;
  .name {
    margin-top: 0rem;
    color: #444347;
    margin-top: -2rem;
  }
  .title {
    margin-top: -0.5rem;
    font-weight: 300;
  }
}
</style>
