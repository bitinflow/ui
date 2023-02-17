import { defineNuxtModule, useLogger, createResolver, addPlugin, addImportsDir, addComponentsDir } from '@nuxt/kit';

const PACKAGE_NAME = "ui";
const module = defineNuxtModule({
  meta: {
    name: `@bitinflow/${PACKAGE_NAME}`,
    configKey: "ui"
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  setup(options, nuxt) {
    const logger = useLogger(PACKAGE_NAME);
    const resolver = createResolver(import.meta.url);
    addPlugin(resolver.resolve("./runtime/plugin"));
    const composables = resolver.resolve("./runtime/composables");
    addImportsDir(composables);
    const components = resolver.resolve("./runtime/components");
    addComponentsDir({
      path: components,
      watch: true
    }).then((r) => {
      console.log(r);
    });
    logger.success("@bitinflow/ui module loaded");
  }
});

export { module as default };
