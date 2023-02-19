<template>
  <div
    class="bg-white dark:bg-base-700 border-2 rounded p-4 relative"
    :class="[selected ? 'border-primary-500' : 'dark:border-base-600']"
  >
    <div class="absolute top-[-.6rem] left-[-.6rem] flex bg-primary-500 rounded">
      <div
        v-if="selected"
        class="w-4 h-4 flex justify-center"
      >
        <i class="fas fa-check text-white text-xs text-primary-500 self-center" />
      </div>
    </div>
    <a
      class="after:absolute after:inset-0"
      href="#"
      @click.prevent="click"
    />
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BitinflowSelectBox",

  props: {
    selected: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:selected'],

  methods: {
    click() {
      this.$emit('update:selected', !this.selected);
    }
  }
}
</script>
