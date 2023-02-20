<template>
  <div class="flex gap-4">
    <div class="self-center">
      <bitinflow-table-checkbox v-model="checked" />
    </div>
    <div class="flex-auto relative">
      <a
        class="after:absolute after:inset-0"
        href="#"
        @click.prevent="click"
      />
      <div
        class="bg-white border-2 text-black dark:bg-base-700 dark:text-white rounded shadow py-4 px-6"
        :class="checked ? 'border-primary-500' : 'border-transparent'"
      >
        <div :class="gridClass" class="items-center">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BitinflowTableCheckbox from "./BitinflowTableCheckbox.vue";

export default {
  name: "BitinflowTableRow",
  components: {BitinflowTableCheckbox},

  props: {
    gridClass: {
      type: String,
      required: true
    }
  },

  emits: ['click'],

  data() {
    return {
      checked: false
    }
  },

  methods: {
    click() {
      this.$emit('click');
    }
  }
}
</script>
