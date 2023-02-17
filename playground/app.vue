<template>
  <bitinflow-floating-banner />
  <bitinflow-first-level-menu>
    <template #top>
      <bitinflow-first-level-link icon="fa-home">
        Home
      </bitinflow-first-level-link>
      <bitinflow-first-level-link icon="fa-location-dot">
        Pull Zones
      </bitinflow-first-level-link>
      <bitinflow-first-level-link icon="fa-bucket">
        Buckets
      </bitinflow-first-level-link>
      <bitinflow-first-level-link icon="fa-meteor">
        Spaces
      </bitinflow-first-level-link>
      <bitinflow-first-level-link icon="fa-globe">
        Domains
      </bitinflow-first-level-link>
      <bitinflow-first-level-link icon="fa-list">
        Zones
      </bitinflow-first-level-link>
    </template>

    <template #bottom>
      <bitinflow-first-level-link icon="fa-wallet">
        Billing
      </bitinflow-first-level-link>
      <bitinflow-first-level-link icon="fa-fingerprint">
        Account
      </bitinflow-first-level-link>
      <bitinflow-first-level-link icon="fa-arrow-right-from-bracket">
        Logout
      </bitinflow-first-level-link>
    </template>

    <bitinflow-second-level-menu>
      <template #title>
        Domains
      </template>

      <bitinflow-second-level-link icon="fa-globe">
        example.com
      </bitinflow-second-level-link>
      <bitinflow-second-level-link icon="fa-globe">
        example.com
      </bitinflow-second-level-link>
      <bitinflow-second-level-link icon="fa-globe">
        example.com
      </bitinflow-second-level-link>
      <bitinflow-second-level-link icon="fa-globe">
        example.com
      </bitinflow-second-level-link>
    </bitinflow-second-level-menu>

    <bitinflow-flex-auto>
      <bitinflow-screen-scroll-container>
        <bitinflow-third-level-menu>
          <template #title>
            Test
          </template>
        </bitinflow-third-level-menu>
        <bitinflow-container>
          <bitinflow-hero-card>
            <div class="text-3xl">
              Yeet!
            </div>
          </bitinflow-hero-card>
          <bitinflow-card>
            <bitinflow-card-header>Test</bitinflow-card-header>
            <bitinflow-card-body>Test</bitinflow-card-body>
          </bitinflow-card>
          <bitinflow-card>
            <bitinflow-card-header>Test</bitinflow-card-header>
            <bitinflow-card-body>Test</bitinflow-card-body>
          </bitinflow-card>
        </bitinflow-container>
      </bitinflow-screen-scroll-container>
    </bitinflow-flex-auto>
  </bitinflow-first-level-menu>
</template>

<script>
import {useMenu} from "../src/runtime/composables";

export default {
  setup() {
    useMenu({
      thirdLevelLinks: [
        {
          name: 'Test',
          icon: 'fa-star',
          to: 'test'
        }
      ]
    })
  },

  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark')
    }
  }
}
</script>
