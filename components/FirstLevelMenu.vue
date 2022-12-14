<template>
  <div class="bg-gray-100 dark:bg-base min-h-screen flex flex-col relative">
    <!-- Overlay -->
    <div ref="overlay" class="sm:hidden hidden bg-gray-800 opacity-50 w-full min-h-screen absolute z-10"></div>

    <!-- Header -->
    <header class="bg-white relative shadow sm:hidden z-10">
      <div class="container flex justify-between items-center py-4">
        <img src="/img/icon-light.svg" class="h-4" alt="bitinflow">

        <div class="flex items-center space-x-4">
          <nuxt-link v-for="link in secondaryMenu" :key="link.name" :to="link.to">
            <i :class="link.icon" class="icon"/> {{ link.name }}
          </nuxt-link>

          <nuxt-link class="inline-block flex" to="/">
            <img class="h-8 w-8 rounded-full" alt="profile" src="/img/avatar.jpg"/>
          </nuxt-link>

          <button @click="toggleMenu" class="focus-within:outline-none pl-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Sidenav with Content -->
    <div class="flex flex-grow">
      <!-- Sidenav -->
      <nav ref="sidebar"
           class="flex h-screen flex-col w-36 bg-base-800 dark:border-r dark:border-base text-gray-100 shadow sm:relative
           absolute inset-y-0 transform -translate-x-full sm:translate-x-0 transition transition-transform z-20">
        <!-- logo -->
        <div class="flex-none bg-primary-500 h-16 sm:h-20 py-3 sm:py-6 text-white flex flex-initial justify-center">
          <button @click="toggleDarkMode">
            <img src="/img/icon-light.svg" class="h-8 w-auto" alt="Logo">
          </button>
        </div>

        <div class="flex-auto flex flex-col overflow-y-auto py-6 space-y-6">
          <!-- nav -->
          <nav class="primary flex flex-grow flex-col space-y-4 px-6">
            <slot name="top"/>
          </nav>

          <nav class="flex flex-initial flex-col space-y-4 px-6">
            <slot name="bottom"/>
          </nav>
        </div>
        <div class="flex-none"></div>
      </nav>

      <!-- Content -->
      <main class="flex flex-1">
        <slot/>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstLevelMenu",
  data() {
    return {
      primaryMenu: [
        {name: 'Home', icon: 'fal fa-home', to: '/', exact: true},
        {name: 'Buckets', icon: 'fal fa-bucket', to: '/buckets', exact: false},
        {name: 'Domains', icon: 'fal fa-globe', to: '/domains', exact: false},
        {name: 'Spaces', icon: 'fal fa-meteor', to: '/spaces', exact: false},
        {name: 'Zones', icon: 'fal fa-list-ul', to: '/zones', exact: false},
      ],
      secondaryMenu: [
        {name: 'Logout', icon: 'fal fa-sign-out', to: '/logout'},
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.$refs.overlay.classList.toggle('hidden');
      this.$refs.sidebar.classList.toggle('-translate-x-full');
    },
    closeMenu() {
      this.$refs.overlay.classList.add('hidden');
      this.$refs.sidebar.classList.add('-translate-x-full');
    },
    toggleDarkMode() {
      document.body.classList.toggle('dark')
    }
  },
};
</script>

<style scoped>
.nuxt-link-active {
  background: #00BFA5;
}

.nuxt-link-active:hover {
  background: #004F44;
}
</style>
