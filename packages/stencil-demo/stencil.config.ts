import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { vueOutputTarget, ComponentModelConfig } from '@stencil/vue-output-target';

const vueComponentModels: ComponentModelConfig[] = [
  {
    elements: ['my-component'],
    event: 'click',
    targetAttr: 'value'
  }
]

export const config: Config = {
  namespace: 'stencil-demo',
  taskQueue: 'async',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'stencil-demo',
      proxiesFile: '../stencil-demo-react/src/components.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    vueOutputTarget({
      componentCorePackage: 'stencil-demo',
      proxiesFile: '../stencil-demo-vue/src/proxies.ts',
      componentModels: vueComponentModels,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
