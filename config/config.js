/*
 * @Description: lan
 * @Author: lan
 * @Date: 2019-08-28 10:01:58
 * @LastEditTime: 2019-10-25 13:56:36
 * @LastEditors: lan
 */
import defaultSettings from './defaultSettings'; // https://umijs.org/config/

import slash from 'slash2';
import router from './router.config';
import webpackPlugin from './plugin.config';
const { pwa, primaryColor } = defaultSettings; // preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。

const { ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION } = process.env;
const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';
const plugins = [
  [
    'umi-plugin-react',
    {
      antd: true,
      dva: {
        hmr: true,
      },
      locale: {
        // default false
        enable: true,
        // default zh-CN
        default: 'en-US',
        // default true, when it is true, will use `navigator.language` overwrite default
        baseNavigator: true,
      },
      dynamicImport: {
        loadingComponent: './components/PageLoading/index',
        webpackChunkName: true,
        level: 3,
      },
      pwa: pwa
        ? {
            workboxPluginMode: 'InjectManifest',
            workboxOptions: {
              importWorkboxFrom: 'local',
            },
          }
        : false, // default close dll, because issue https://github.com/ant-design/ant-design-pro/issues/4665
      // dll features https://webpack.js.org/plugins/dll-plugin/
      // dll: {
      //   include: ['dva', 'dva/router', 'dva/saga', 'dva/fetch'],
      //   exclude: ['@babel/runtime', 'netlify-lambda'],
      // },
    },
  ],
  [
    'umi-plugin-pro-block',
    {
      moveMock: false,
      moveService: false,
      modifyRequest: true,
      autoAddMenu: true,
    },
  ],
]; // 针对 preview.pro.ant.design 的 GA 统计代码

if (isAntDesignProPreview) {
  plugins.push([
    'umi-plugin-ga',
    {
      code: 'UA-72788897-6',
    },
  ]);
  plugins.push([
    'umi-plugin-pro',
    {
      serverUrl: 'https://ant-design-pro.netlify.com',
    },
  ]);
}

export default {
  plugins,
  block: {
    defaultGitUrl: 'https://github.com/ant-design/pro-blocks',
  },
  hash: true,
  targets: {
    ie: 11,
  },
  devtool: isAntDesignProPreview ? 'source-map' : false,
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: router,
  // routes: [
  //   {
  //     path: '/login',
  //     component: '../layouts/UserLayout',
  //     routes: [{ path: '/login', name: 'login', component: './User/Login' }],
  //   },
  //   {
  //     path: '/',
  //     component: '../layouts/BasicLayout',
  //     Routes: ['src/pages/Authorized'],
  //     authority: ['admin', 'user'],
  //     routes: [
  //       {
  //         path: '/',
  //         name: 'welcome',
  //         icon: 'database',
  //         component: './DataSource/DataSource',
  //       },
  //       {
  //         path: '/datapanel',
  //         name: 'datapanel',
  //         icon: 'environment',
  //         component: './DataPanel/DataPanel',
  //       },
  //       {
  //         path: '/usermanagement',
  //         name: 'usermanagement',
  //         icon: 'table',
  //         component: './UserManagement/UserManagement',
  //       },
  //       {
  //         path: '/emailconfig',
  //         name: 'emailconfig',
  //         icon: 'table',
  //         component: './EmailConfig/EmailConfig',
  //       },
  //       {
  //         path: '/systemparams',
  //         name: 'systemparams',
  //         icon: 'table',
  //         component: './SystemParams/SystemParams',
  //       },
  //       {
  //         path: '/sheet',
  //         name: 'sheet',
  //         icon: 'table',
  //         component: './Sheet/Sheet',
  //       },
  //       {
  //         path: '/dragboard',
  //         name: 'dragboard',
  //         icon: 'table',
  //         component: './Dragboard/Dragboard',
  //       },
  //       {
  //         path: '/monitor',
  //         name: 'monitor',
  //         icon: 'table',
  //         component: './Monitor/Monitor',
  //       },
  //       {
  //         path: '/rulesEngine',
  //         name: 'rulesEngine',
  //         icon: 'build',
  //         component: './RulesEngine/RulesEngine',
  //       },
  //       {
  //         path: '/templateSet',
  //         name: 'templateSet',
  //         icon: 'build',
  //         component: './TemplateSet/TemplateSet',
  //       },
  //       {
  //         path: '/approval',
  //         name: 'approval',
  //         icon: 'build',
  //         routes: [
  //           {
  //             path: '/approval/design',
  //             name: 'approvalDesign',
  //             component: './Approval/ApprovalDesign/ApprovalDesign',
  //           },
  //           {
  //             path: '/approval/set',
  //             name: 'approvalSet',
  //             component: './Approval/ApprovalSet/ApprovalSet',
  //           },
  //           {
  //             path: '/approval/check',
  //             name: 'approvalEheck',
  //             component: './Approval/ApprovalEheck/ApprovalEheck',
  //           },
  //         ],
  //       },
  //       {
  //         path: '/formItem',
  //         name: 'formItem',
  //         icon: 'build',
  //         component: './FormItem/FormItem',
  //       },
  //       {
  //         component: './Page404',
  //       },
  //     ],
  //   },
  //   {
  //     component: './Page404',
  //   },
  // ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'primary-color': primaryColor,
  },
  define: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION:
      ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION || '', // preview.pro.ant.design only do not use in your production ; preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
  },
  ignoreMomentLocale: true,
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  disableRedirectHoist: true,
  cssLoaderOptions: {
    modules: true,
    getLocalIdent: (context, _, localName) => {
      if (
        context.resourcePath.includes('node_modules') ||
        context.resourcePath.includes('ant.design.pro.less') ||
        context.resourcePath.includes('global.less')
      ) {
        return localName;
      }

      const match = context.resourcePath.match(/src(.*)/);

      if (match && match[1]) {
        const antdProPath = match[1].replace('.less', '');
        const arr = slash(antdProPath)
          .split('/')
          .map(a => a.replace(/([A-Z])/g, '-$1'))
          .map(a => a.toLowerCase());
        return `antd-pro${arr.join('-')}-${localName}`.replace(/--/g, '-');
      }

      return localName;
    },
  },
  manifest: {
    basePath: '/',
  },
  chainWebpack: webpackPlugin,
  proxy: {
    '/api': {
      target: 'http://10.201.62.184:7567/superlop/restv2/admin/', // 线上
      // target: 'http://10.60.69.42:9092/bct-api-admin/', // Mock数据
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      timeout: 10000,
    },
    '/upload': {
      target:
        'http://10.201.62.184:7567/superlop/rest/admin/v2.0/bayconnect.superlop.file_upload.json', // 线上
      // target: 'http://10.60.69.42:9092/bct-api-admin/', // Mock数据
      changeOrigin: true,
      pathRewrite: { '^/upload': '' },
      timeout: 10000,
    },
    '/download': {
      target:
        'http://10.201.62.184:7567/superlop/restv2/admin/v2.0/bayconnect.superlop.file_download_quick.json', // 线上
      // target: 'http://10.60.69.42:9092/bct-api-admin/', // Mock数据
      changeOrigin: true,
      pathRewrite: { '^/download': '' },
      timeout: 10000,
    },
  },
};
