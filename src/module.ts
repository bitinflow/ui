import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  useLogger,
  addImportsDir,
  addComponentsDir
} from '@nuxt/kit'

// Module options TypeScript inteface definition
export interface ModuleOptions {}

const PACKAGE_NAME = 'ui';

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: `@bitinflow/${PACKAGE_NAME}`,
    configKey: 'ui'
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup (options, nuxt) {
    const logger = useLogger(PACKAGE_NAME)
    const resolver = createResolver(import.meta.url)

    const composables = resolver.resolve('./runtime/composables')
    addImportsDir(composables)

    const components = resolver.resolve('./runtime/components');
    addComponentsDir({
      path: components,
      watch: true,
    }).then(r => {
      console.log(r)
    });

    logger.success('@bitinflow/ui module loaded')
  }
})
