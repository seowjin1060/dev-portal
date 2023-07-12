import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const shcCustomPluginSamplePlugin = createPlugin({
  id: 'shc-custom-plugin-sample',
  routes: {
    root: rootRouteRef,
  },
});

export const ShcCustomPluginSamplePage = shcCustomPluginSamplePlugin.provide(
  createRoutableExtension({
    name: 'ShcCustomPluginSamplePage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
