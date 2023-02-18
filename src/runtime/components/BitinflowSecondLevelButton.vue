<template>
  <bitinflow-button
    class="flex items-center gap-2 w-full"
    @click="$emit('click')"
  >
    <i :class="['fal', icon]" />
    <slot />
  </bitinflow-button>
</template>

<script>
import BitinflowButton from "./BitinflowButton.vue";

export default {
  name: "BitinflowSecondLevelLink",
  components: {BitinflowButton},
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    }
  },
  emits: ['click']
}
</script>
