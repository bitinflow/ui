<template>
  <bitinflow-button-link
    class="flex items-center gap-2"
    :to="to"
  >
    <i :class="['fal', icon]" />
    <slot />
  </bitinflow-button-link>
</template>

<script>
import BitinflowButtonLink from "./BitinflowButtonLink.vue";

export default {
  name: "BitinflowSecondLevelLink",
  components: {BitinflowButtonLink},
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>
