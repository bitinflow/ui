export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@pinia/nuxt',
  ],
  ui: {},
  app: {
    head: {
      title: 'My App',
      link: [
        {rel: 'stylesheet', href: 'https://cdn.bitinflow.com/fontawesome/6.2.0/css/all.min.css'}
      ],
      script: [
        {src: 'https://cdn.tailwindcss.com'},
        {src: '/tailwind.js'}
      ],
      bodyAttrs: {
        class: 'bg-zinc-900'
      },
    },
  },
})
