<template>
  <div class="flex justify-between items-center">
    <div class="text-2xl dark:text-white">
      <slot />
    </div>

    <div>
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
export default {
  name: "BitinflowHeader",
}
</script>
