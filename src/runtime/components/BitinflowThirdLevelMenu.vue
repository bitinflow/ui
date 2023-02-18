<template>
  <div class="flex-1 dark:border-l dark:border-base shadow text-black dark:text-white">
    <div class="bg-white border-b dark:bg-base-600 dark:border-base">
      <div class="container mx-auto px-4 lg:px-16 py-10">
        <div class="text-3xl font-semibold">
          <slot name="title" />
        </div>
      </div>
    </div>

    <nav class="bg-white dark:bg-base-700 py-4">
      <div class="container mx-auto px-4 lg:px-16">
        <div class="hidden xl:block space-x-4">
          <bitinflow-button-link
            v-for="item in thirdLevelLinks"
            :key="item.name"
            :to="resolve(item.to)"
          >
            <i
              :class="['far', item.icon]"
              class="icon"
            /> {{ item.name }}
          </bitinflow-button-link>
        </div>

        <div class="flex flex-col xl:hidden">
          <select
            v-model="link"
            class="bg-white dark:bg-base-700 outline-none"
            @change="onChange"
          >
            <option
              v-for="item in thirdLevelLinks"
              :key="item.name"
              :value="resolve(item.to)"
              :selected="link === item.to"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState} from "pinia";
import {useMenuStore} from "../stores/menu";
import BitinflowButtonLink from "./BitinflowButtonLink.vue";

export default {
  name: "BitinflowThirdLevelMenu",
  components: {BitinflowButtonLink},
  data() {
    return {
      link: this.$route.path
    }
  },
  computed: {
    ...mapState(useMenuStore, ['thirdLevelLinks', 'thirdLevelProps'])
  },
  methods: {
    onChange(event) {
      this.link = event.target.value
      this.$router.push(event.target.value)
    },
    resolve(to) {
      // replace all :params with the actual values
      return to.replace(/:([^/]+)/g, (_, param) => this.thirdLevelProps[param])
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
