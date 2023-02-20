<template>
  <div
    class="overflow-y-auto h-screen"
    :class="`${variant}`"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "BitinflowScreenScrollContainer",

  props: {
    variant: {
      type: String,
      default: 'light'
    }
  }
}
</script>

<style>
.light::-webkit-scrollbar-thumb {
  @apply bg-gray-200;
}
.light::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-200;
}
.dark .light::-webkit-scrollbar-thumb {
  @apply bg-base-800;
}
.dark .light::-webkit-scrollbar-thumb:hover {
  @apply bg-base-800;
}
</style>
