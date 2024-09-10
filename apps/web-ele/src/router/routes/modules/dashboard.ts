import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:layout-dashboard',
      order: -1,
      title: $t('page.setting.title'),
    },
    name: 'Setting',
    path: '/',
    children: [
      {
        name: 'Field',
        path: '/field',
        component: () => import('#/views/setting/field/index.vue'),
        meta: {
          icon: 'lucide:area-chart',
          title: $t('page.setting.field'),
        },
      },
      {
        name: 'Analytics',
        path: '/analytics',
        component: () => import('#/views/dashboard/analytics/index.vue'),
        meta: {
          affixTab: true,
          icon: 'lucide:area-chart',
          title: $t('page.dashboard.analytics'),
        },
      },
      {
        name: 'Workspace',
        path: '/workspace',
        component: () => import('#/views/dashboard/workspace/index.vue'),
        meta: {
          title: $t('page.dashboard.workspace'),
        },
      },
    ],
  },
];

export default routes;
