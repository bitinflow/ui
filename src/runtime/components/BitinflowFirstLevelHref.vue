<template>
  <a
    class="hover:bg-primary-500 rounded-lg text-center text-xs py-4 flex flex-col space-y-2"
    :class="calculateClasses"
    :href="href"
  >
    <i :class="['fal text-xl', icon]" />
    <span>
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  name: "BitinflowFirstLevelLink",
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    },
    href: {
      type: String,
      default: '/'
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    calculateClasses: function () {
      return {
        'router-link-active':
          this.exact
          ? document.location.href === this.href
          : document.location.href.includes(this.href) && this.href !== '/',
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
