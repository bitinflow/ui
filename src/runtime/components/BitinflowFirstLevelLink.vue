<template>
  <a class="hover:bg-primary-500 rounded-lg text-center text-xs py-4 flex flex-col space-y-2" href="#">
    <i :class="['fal text-xl', icon]"></i>
    <span>
      <slot />
    </span>
  </a>
</template>

<script>
export default {
  name: "BitinflowFirstLevelLink",
  props: {
    icon: {
      type: String,
      default: 'fa-arrow-up-right-from-square'
    }
  }
}
</script>
