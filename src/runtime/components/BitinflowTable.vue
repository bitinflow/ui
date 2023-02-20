<template>
  <template v-if="loading">
    <div
      v-for="i in 3"
      :key="i"
      class="bg-white text-black dark:bg-base-700 rounded-lg h-16 animate-pulse"
    />
  </template>

  <div
    v-else-if="items.length === 0"
    class="bg-white dark:bg-base-700 rounded-lg px-4 py-16 text-xl text-center text-black dark:text-white"
  >
    <i class="fas fa-ghost mr-2 text-5xl opacity-70"/>
    <div>
      No resources found
    </div>
    <div class="text-xs mt-2 opacity-70">
      <template v-if="hasCreateListener">
        Click on the
        <span class="font-bold"><i class="far fa-plus"/> Create Resource</span>
        button below to create your first resource.
      </template>
      <template v-else>
        You don't have any resources yet.
      </template>
    </div>

    <div v-if="hasCreateListener">
      <bitinflow-button
        color="light"
        variant="outline"
        class="mt-8"
        size="sm"
        icon="fa-plus"
        @click="$emit('create')"
      >
        Create Resource
      </bitinflow-button>
    </div>
  </div>

  <div
    v-else
    class="text-black dark:text-white"
  >
    <div class="flex gap-4 py-2">
      <div>
        <bitinflow-table-checkbox
          :model-value="selectedItems.length === items.length"
          @update:model-value="selectAll"
        />
      </div>
      <div
        class="flex-auto px-6 pr-[7rem]"
        :class="gridClass"
      >
        <template
          v-for="key in keys"
          :key="key"
        >
          <div class="opacity-80">
            {{ columns[key].label }}
          </div>
        </template>
      </div>
    </div>
    <div class="grid gap-4">
      <bitinflow-table-row
        v-for="item in items"
        :key="item.id"
        :item="item"
        :options="options"
        :selected="checkedItems[item.id]"
        :grid-class="gridClass"
        @update:selected="select(item)"
        @click="click(item)"
      >
        <slot
          name="row"
          :item="item"
          :keys="keys"
        />
      </bitinflow-table-row>
    </div>
  </div>

  <div
    v-if="selectedItems.length && options.length"
    class="fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-[100]"
  >
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="rounded-lg bg-base-800 p-2 shadow-lg sm:p-3">
        <div class="flex justify-between gap-3">
          <div class="self-center text-white text-xl ml-4">
            {{ selectedItems.length }} items selected
          </div>
          <div class="flex gap-3">
            <template
              v-for="option in options"
              :key="option.label"
            >
              <bitinflow-table-floating-action
                :icon="option.icon"
                :destructive="option.destructive"
                @click="clickOption(option)"
              >
                {{ option.label }}
              </bitinflow-table-floating-action>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BitinflowTableRow from "../../../dist/runtime/components/BitinflowTableRow.vue";
import BitinflowTableCheckbox from "./BitinflowTableCheckbox.vue";
import BitinflowTableFloatingAction from "./BitinflowTableFloatingAction.vue";

export default {
  name: "BitinflowTable",
  components: {BitinflowTableFloatingAction, BitinflowTableCheckbox, BitinflowTableRow},

  props: {
    options: {
      type: Object,
      default: () => ({})
    },
    columns: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      keys: Object.keys(this.columns),
      checkedItems: {}
    }
  },

  computed: {
    gridClass() {
      return `grid grid-cols-${this.keys.length} gap-4`;
    },
    hasCreateListener() {
      return this.$attrs && this.$attrs.onCreate;
    },
    selectedItems() {
      return this.items.filter(item => this.checkedItems[item.id]);
    }
  },

  mounted() {
    this.items.forEach(item => {
      // throw warning if id is not present
      if (!item.id) {
        console.warn(`BitinflowTable: item does not have an id`, item);
      }
      this.checkedItems[item.id] = false;
    });
  },

  methods: {
    title(value) {
      //  "humanized" by converting kebab-case, snake_case, and camelCase to individual words and capitalizes each word.
      return value.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ').toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
    },
    selectAll(checked) {
      this.items.forEach(item => {
        this.checkedItems[item.id] = checked;
      });
    },
    select(item) {
      this.checkedItems[item.id] = !this.checkedItems[item.id];
    },
    click(item) {
      this.$emit('click', item);
    },
    clickOption(option) {
      option.action(this.selectedItems)
      this.selectAll(false)
    }
  }
}
</script>
