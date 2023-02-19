<template>
  <button
    class="truncate rounded-lg px-4 py-2 border-2 border-transparent"
    :class="computedClass"
    @click="click"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BitinflowButton",

  props: {
    size: {
      type: String,
      default: 'md'
    },
    color: {
      type: String,
      default: 'base'
    },
    variant: {
      type: String,
      default: 'solid'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  computed: {
    computedClass: function () {
      return `button-text-${this.size} ${this.color}-${this.variant}`
    },

    methods: {
      click() {
        this.$emit('click');
      }
    }
  }
}
</script>

<style scoped>
.button-text-sm {
  @apply text-sm;
}
.button-text-lg {
  @apply text-lg;
}
.button-text-xl {
  @apply text-xl;
}
.button-text-2xl {
  @apply text-2xl;
}
.button-text-3xl {
  @apply text-3xl;
}
.button-text-4xl {
  @apply text-4xl;
}
.button-text-5xl {
  @apply text-5xl;
}
.button-text-6xl {
  @apply text-6xl;
}
.primary-solid {
  @apply bg-primary-500 hover:bg-primary-400 dark:bg-primary-700 dark:hover:bg-primary-600 text-black dark:text-white;
}
.base-solid {
  @apply hover:bg-zinc-100 dark:bg-base-700 dark:hover:bg-base-600 text-black dark:text-white;
}
.danger-solid {
  @apply bg-rose-600 hover:bg-rose-400 dark:bg-rose-700 dark:hover:bg-rose-600 text-black dark:text-white;
}
.primary-outline {
  @apply border-primary-500 hover:bg-primary-500 dark:hover:bg-primary-600 dark:border-primary-700 dark:hover:border-primary-600 text-black dark:text-white;
}
.base-outline {
  @apply border-zinc-100 hover:bg-zinc-100 dark:hover:bg-base-600 dark:border-base-500 dark:hover:border-base-600 text-black dark:text-white;
}
.danger-outline {
  @apply border-rose-500 hover:bg-rose-500 dark:hover:bg-rose-600 dark:border-rose-700 dark:hover:border-rose-600 text-black dark:text-white;
}
</style>
