<template>
  <bitinflow-button-link
    class="flex items-center gap-2"
    :class="calculateClasses"
    :to="to"
  >
    <i :class="['fal', icon]" />
    <slot />
  </bitinflow-button-link>
</template>

<script>
import BitinflowButtonLink from "./BitinflowButtonLink.vue";

export default {
  name: "BitinflowSecondLevelLink",
  components: {BitinflowButtonLink},
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    },
    to: {
      type: String,
      required: true
    }
  },
  computed: {
    calculateClasses: function () {
      return {
        'router-link-active': this.$route.path.includes(this.to),
      }
    }
  }
}
</script>

<style scoped>
.router-link-active, .router-link-exact-active {
  @apply bg-primary-500 dark:bg-primary-500;
}
/*
.router-link-active:hover, .router-link-exact-active:hover {
  @apply bg-primary-600 dark:bg-primary-400;
}
*/
</style>

