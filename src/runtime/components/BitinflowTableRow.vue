<template>
  <div class="flex gap-4">
    <div class="self-center">
      <bitinflow-table-checkbox
        :model-value="selected"
        @update:model-value="select"
      />
    </div>
    <div class="flex-auto relative">
      <div
        class="bg-white border-2 text-black dark:bg-base-700 dark:text-white rounded shadow"
        :class="selected ? 'border-primary-500' : 'border-transparent'"
      >
        <div class="flex gap-3">
          <div class="flex relative w-full">
            <a
              class="after:absolute after:inset-0 z-0"
              href="#"
              @click.prevent="click"
            />
            <div
              :class="gridClass"
              class="items-center flex-1 px-6 py-4"
            >
              <slot/>
            </div>
          </div>
          <div class="w-20 h-18 flex justify-center items-center">
            <div class="w-1/2 h-11">
              <bitinflow-dropdown>
                <template #menu>
                  <template
                    v-for="option in options"
                    :key="option.name"
                  >
                    <bitinflow-dropdown-item
                      :destructive="option.destructive"
                      @click="option.action([item])"
                    >
                      <i :class="['fal mr-2', option.icon ? option.icon : 'fa-play']"/>
                      {{ option.label }}
                    </bitinflow-dropdown-item>
                  </template>
                </template>
              </bitinflow-dropdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BitinflowTableCheckbox from "./BitinflowTableCheckbox.vue";
import BitinflowDropdown from "./BitinflowDropdown.vue";
import BitinflowDropdownItem from "./BitinflowDropdownItem.vue";

export default {
  name: "BitinflowTableRow",
  components: {BitinflowDropdownItem, BitinflowDropdown, BitinflowTableCheckbox},

  props: {
    gridClass: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: true
    },
    options: {
      type: Array,
      default: () => []
    },
    item: {
      type: Object,
      required: true
    }
  },

  emits: ['click', 'update:selected'],

  methods: {
    select(value) {
      this.$emit('update:selected', !value);
    },
    click() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.circle {
  border-radius: 100%;
}
</style>
