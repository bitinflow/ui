<template>
  <div class="relative w-full h-full flex">
    <div class="absolute">
      <bitinflow-button
        class="circle z-10 self-center"
        variant="solid"
        icon="fa-ellipsis-vertical mr-[2px] ml-[2px]"
        @click="open = !open"
      />
    </div>
    <div
      v-if="open"
      class="absolute top-12 right-8 z-10 pb-3"
    >
      <div class="rounded bg-zinc-100 dark:bg-base-800 p-3">
        <div class="grid gap-3 w-60">
          <slot name="menu" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BitinflowDropdown",

  data() {
    return {
      open: false,
      closeListener: () => {
        // is clicked outside the dropdown
        if (!this.$el.contains(event.target)) {
          this.close()
        }
      }
    }
  },

  mounted() {
    document.addEventListener('click', this.closeListener);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.closeListener);
  },

  methods: {
    close() {
      this.open = false
    }
  }
}
</script>

<style scoped>

</style>
