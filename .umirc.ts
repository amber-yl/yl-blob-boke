import { resolve } from 'path';
import { defineConfig } from 'umi';
import routes from './config/router'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    type: 'hash'
  },
  title: 'yl博客',
  hash: true,
  dll: false,
  dva: {
    skipModelValidate: true,
    immer: true,
    hmr: false
  },
  routes: routes,
  targets: {
    chrome: 60,
  },
  mfsu: {},
  define: {
    API_PREFIX: '/api',
  },
  alias: {
    '@': resolve(__dirname, './src/')
  },
  fastRefresh: {},
  cssLoader: {
    localsConvention: 'camelCase'
  },
  lessLoader: {
    javascriptEnabled: true
  },
  // 按需加载
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'lodash',
        libraryDirectory: '',
        camel2DashComponentName: false
      },
      'lodash'
    ]
  ]
});
