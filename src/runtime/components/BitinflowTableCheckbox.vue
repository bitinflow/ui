<template>
  <a
    class="w-4 h-4 flex justify-center rounded p-2 text-black dark:text-white border-2 border-zinc-200 dark:border-base-600 dark:bg-base-700 dark:text-white"
    href="#"
    @click.prevent="toggle"
  >
    <i
      v-if="modelValue"
      class="fas fa-check text-xs text-primary-500 self-center"
    />
  </a>
</template>

<script>
export default {
  name: "BitinflowTableCheckbox",

  props: {
    modelValue: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue'],

  methods: {
    toggle() {
      this.$emit('update:modelValue', !this.modelValue);
    }
  }
}
</script>

<style scoped>

</style>
