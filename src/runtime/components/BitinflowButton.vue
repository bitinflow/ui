<template>
  <a
    href="#"
    class="truncate text-black dark:text-white hover:bg-zinc-100 dark:bg-base-700 dark:hover:bg-base-600 dark:text-white rounded-lg px-4 py-2"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: "BitinflowButton",
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
