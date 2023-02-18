<template>
  <nuxt-link
    class="truncate text-black dark:text-white hover:bg-zinc-100 dark:bg-base-700 dark:hover:bg-base-600 dark:text-white rounded-lg px-4 py-2"
    :to="to"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  name: "BitinflowButton",

  props: {
    to: {
      type: String,
      required: true
    }
  },

  emits: ['click'],

  methods: {
    click() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>

</style>
