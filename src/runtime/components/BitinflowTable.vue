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
    <i class="fas fa-ghost mr-2 text-5xl opacity-70" />
    <div>
      No resources found
    </div>
    <div class="text-xs mt-2 opacity-70">
      <template v-if="hasCreateListener">
        Click on the
        <span class="font-bold"><i class="far fa-plus" /> Create Resource</span>
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
          v-model="checkedAll"
          @update:model-value="toggleAll"
        />
      </div>
      <div
        class="flex-auto px-6"
        :class="gridClass"
      >
        <template
          v-for="key in keys"
          :key="key"
        >
          <div class="opacity-80">{{ columns[key].label }}</div>
        </template>
      </div>
    </div>
    <div class="grid gap-4">
      <bitinflow-table-row
        v-for="item in items"
        :key="item.id"
        :grid-class="gridClass"
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
</template>

<script>
import BitinflowTableRow from "../../../dist/runtime/components/BitinflowTableRow.vue";
import BitinflowTableCheckbox from "./BitinflowTableCheckbox.vue";

export default {
  name: "BitinflowTable",
  components: {BitinflowTableCheckbox, BitinflowTableRow},

  props: {
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
      checkedAll: false,
    }
  },

  computed: {
    gridClass() {
      return `grid grid-cols-${this.keys.length} gap-4`;
    },
    hasCreateListener() {
      return this.$attrs && this.$attrs.onCreate;
    }
  },

  methods: {
    title(value) {
      //  "humanized" by converting kebab-case, snake_case, and camelCase to individual words and capitalizes each word.
      return value.replace(/([A-Z])/g, ' $1').replace(/[-_]/g, ' ').toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    },
    toggleAll(checked) {
      console.log('toggleAll', checked)
    },
    click(item) {
      this.$emit('click', item);
    }
  }
}
</script>
