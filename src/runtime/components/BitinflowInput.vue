<template>
  <div>
    <div class="opacity-80 mb-1">
      {{ label }}
    </div>
    <input
      class="block w-full text-black dark:text-white border-2 border-zinc-200 dark:border-base-500 dark:border-base-500 focus:outline-none dark:bg-base-700 dark:text-white rounded-lg px-4 py-2"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      @change="change"
    >
  </div>
</template>

<script>
export default {
  name: "BitinflowInput",

  props: {
    modelValue: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },

  emits: ['update:modelValue'],

  methods: {
    change(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style scoped>

</style>
