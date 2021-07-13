<template>
  <div :style="{ height: upperSpace }"/>
</template>

<script>
export default {
  props: {
    height : String,
    default: "0rem"
  },
  data () {
    return {
      upperSpace: this.height,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
