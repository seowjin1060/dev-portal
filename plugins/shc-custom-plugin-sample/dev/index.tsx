import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { shcCustomPluginSamplePlugin, ShcCustomPluginSamplePage } from '../src/plugin';

createDevApp()
  .registerPlugin(shcCustomPluginSamplePlugin)
  .addPage({
    element: <ShcCustomPluginSamplePage />,
    title: 'Root Page',
    path: '/shc-custom-plugin-sample'
  })
  .render();
