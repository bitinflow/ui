<!-- eslint-disable vue/require-explicit-emits -->
<template>
  <nav
    class="w-64 bg-white text-black shadow dark:bg-base-700 dark:text-white dark:border-base-900 dark:border-l flex flex-col overflow-y-auto h-screen absolute sm:relative transform -translate-x-full sm:translate-x-0 pt-10 pb-4 px-4 space-y-2"
  >
    <span class="font-semibold px-4">
      <slot name="title" />
    </span>
    <div class="flex flex-col gap-2 justify-between flex-1">
      <div class="flex flex-col gap-2">
        <slot />

        <template v-if="loading">
          <div
            v-for="i in 3"
            :key="i"
            class="bg-zinc-100 dark:bg-base-600 rounded-lg px-4 py-2 h-10 animate-pulse"
          />
        </template>
        <div v-else-if="empty" class="bg-zinc-100 dark:bg-base-600 rounded-lg px-4 py-16 text-xl opacity-50 text-center">
          <i class="fas fa-ghost mr-2 text-5xl opacity-70" />
          <div>
            No resources found
          </div>
          <div class="text-xs mt-2 opacity-70">
            <template v-if="hasCreateListener">
              Click on the <span class="font-bold"><i class="far fa-plus" /> Create Resource</span> button below to create your first resource.
            </template>
            <template v-else>
              You don't have any resources yet.
            </template>
          </div>
        </div>
      </div>
      <div v-if="hasCreateListener">
        <bitinflow-second-level-button
          class="bg-zinc-100 hover:bg-zinc-200 dark:bg-base-500 dark:hover:bg-base-600"
          icon="fa-plus"
          @click="$emit('create')"
        >
          Create Resource
        </bitinflow-second-level-button>
      </div>
    </div>
  </nav>
</template>

<script>
import BitinflowSecondLevelButton from "./BitinflowSecondLevelButton.vue";

export default {
  name: "BitinflowSecondLevelMenu",
  components: {BitinflowSecondLevelButton},

  props: {
    items: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [
        {name: 'Test', href: 'Test'}
      ]
    },
    loading: {
      type: Boolean,
      default: false
    },
    empty: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    hasCreateListener() {
      return this.$attrs && this.$attrs.onCreate;
    }
  },
}
</script>

<style scoped>
.nuxt-link-active {
  background: #f3f3f3;
}

.dark .nuxt-link-active {
  background: #464649;
}
</style>
