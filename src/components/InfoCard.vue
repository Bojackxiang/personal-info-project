<template>
  <div class="card-wrapper">
    <div class="title-wrapper">
      <span class="title-name">{{ title | uppercase() }}</span>
    </div>
    <div class="card-body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "info-card",
  props: {
    title: {
      type: String,
      required: true,
      default: "Title",
    },
  },
};
</script>

<style lang="scss" scoped>
.card-wrapper {
  .title-wrapper {
    display: inline-block;
    border-bottom: 4px solid #e0e0e0;
    padding: 0 2rem 0 0;
    .title-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }
  .card-body{
    padding: 1rem 0;
  }
}
</style>