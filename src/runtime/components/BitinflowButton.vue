<template>
  <button
    class="truncate rounded-lg px-4 py-2 border-2 border-transparent"
    :class="computedClass"
    @click="click"
  >
    <slot v-if="!loading" />
    <template v-else>
      <i class="fas fa-spinner fa-spin" />
    </template>
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
    loading: {
      type: Boolean,
      default: false
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
      return `button-text-${this.size} ${this.color}-${this.variant} ${this.disabled ? 'disabled' : ''} ${this.loading ? 'loading' : ''}`
    },
  },

  methods: {
    click() {
      if (this.disabled || this.loading) return;
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.disabled {
  @apply opacity-50 cursor-not-allowed;
}
.loading {
  @apply opacity-50 cursor-not-allowed;
}
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
  @apply bg-primary-600 hover:bg-primary-400 dark:bg-primary-500 dark:hover:bg-primary-400 text-black dark:text-white;
}

.base-solid {
  @apply bg-white hover:bg-zinc-100 dark:bg-base-700 dark:hover:bg-base-600 text-black dark:text-white;
}

.danger-solid {
  @apply bg-rose-600 hover:bg-rose-400 dark:bg-rose-500 dark:hover:bg-rose-400 text-black dark:text-white;
}

.warning-solid {
  @apply bg-amber-600 hover:bg-amber-400 dark:bg-amber-500 dark:hover:bg-amber-400 text-black dark:text-white;
}

.primary-outline {
  @apply border-primary-500 hover:bg-primary-500 dark:hover:bg-primary-500 dark:border-primary-500 dark:hover:border-primary-500 text-primary-500 hover:text-white;
}

.warning-outline {
  @apply border-amber-500 hover:bg-amber-500 dark:hover:bg-amber-500 dark:border-amber-500 dark:hover:border-amber-500 text-amber-500 hover:text-white;
}

.base-outline {
  @apply border-zinc-200 hover:bg-zinc-200 dark:hover:bg-base-700 dark:border-base-500 dark:hover:border-base-500 text-black dark:text-white;
}

.danger-outline {
  @apply border-rose-500 hover:bg-rose-500 dark:hover:bg-rose-500 dark:border-rose-500 dark:hover:border-rose-500 text-rose-500 hover:text-white;
}
</style>
