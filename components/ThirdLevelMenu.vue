<template>
  <div class="flex-1 dark:border-l dark:border-base shadow text-black dark:text-white">
    <div class="bg-white border-b dark:bg-base-600 dark:border-base">
      <div class="container mx-auto px-4 lg:px-16 py-10">
        <div class="text-3xl font-semibold">
          <slot name="title"/>
        </div>
      </div>
    </div>

    <nav class="bg-white dark:bg-base-700 py-4">
      <div class="container mx-auto px-4 lg:px-16">
        <div class="hidden xl:block space-x-4">
          <Button v-for="link in thirdLevelLinks">
            <i :class="['far', link.icon]" class="icon"></i> {{ link.name }}
          </Button>
        </div>

        <div class="flex flex-col xl:hidden">
          <select @change="onChange" v-model="link" class="bg-white">
            <option v-for="link in thirdLevelLinks" v-bind:key="link.name" :to="link.to" :value="link.to">
              {{ link.name }}
            </option>
          </select>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useMenuStore} from "../stores/menu.js";
import Button from "./Button.vue";

export default {
  name: "ThirdLevelMenu",
  components: {Button},
  data() {
    return {
      link: ''
    }
  },
  computed: {
    ...mapState(useMenuStore, ['thirdLevelLinks'])
  },
  methods: {
    onChange(event) {
      this.link = event.target.value
      this.$router.push(event.target.value)
    }
  }
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