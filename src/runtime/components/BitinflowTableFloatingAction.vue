<template>
  <button
    class="bg-base-700 hover:bg-base-600 rounded-lg text-center p-2 text-white w-32 text-xs grid"
    :class="{ 'bg-red-500 hover:bg-red-400': destructive }"
  >
    <i :class="`fal text-xl ${icon}`" />
    <slot />
  </button>
</template>

<script>
export default {
  name: "BitinflowTableFloatingAction",

  props: {
    icon: {
      type: String,
      default: 'fa-play'
    },
    destructive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>

</style>
