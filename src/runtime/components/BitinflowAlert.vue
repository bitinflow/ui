<template>
  <div
    class="rounded shadow px-8 py-4"
    :class="`${color}-${variant}`"
  >
    <span
      v-if="title"
      class="font-bold"
    >{{ title }}:</span>
    <slot />
  </div>
</template>

<script>
export default {
  name: "BitinflowAlert",

  props: {
    color: {
      type: String,
      default: 'primary'
    },
    variant: {
      type: String,
      default: 'solid'
    },
    size: {
      type: String,
      default: 'md'
    },
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.primary-solid {
  @apply bg-primary-500 text-white;
}
.success-solid {
  @apply bg-teal-400 text-white;
}
.info-solid {
  @apply bg-blue-700 text-white;
}
.warning {
  @apply bg-yellow-700 text-white;
}
.danger {
  @apply bg-rose-700 text-white;
}
</style>
