<template>
  <button
    class="rounded-lg text-left rounded shadow p-2 px-4"
    :class="{
      'bg-red-500 dark:bg-red-500 hover:bg-red-400': destructive,
      'bg-zinc-200 dark:bg-base-700 hover:bg-zinc-300 dark:hover:bg-base-600': !destructive
    }"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BitinflowDropdownItem",

  props: {
    destructive: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click']
}
</script>
