<template>
  <nuxt-link
    class="hover:bg-primary-500 rounded-lg text-center text-xs py-4 flex flex-col space-y-2"
    :class="calculateClasses"
    :to="to"
  >
    <i :class="['fal text-xl', icon]" />
    <span>
      <slot />
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: "BitinflowFirstLevelLink",
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    },
    to: {
      type: String,
      default: '/'
    }
  },
  computed: {
    calculateClasses: function () {
      return {
        'router-link-active': this.$route.path.includes(this.to) && this.to !== '/',
      }
    }
  }
}
</script>

<style scoped>
.router-link-active {
  @apply bg-primary-500 dark:bg-primary-500;
}
/*
.router-link-active:hover {
  @apply bg-primary-600 dark:bg-primary-400;
}
*/
</style>
