import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:cellphone',
      keepAlive: true,
      order: 1000,
      title: $t('samples.title'),
    },
    name: 'Samples',
    path: '/samples',
    redirect: '/samples/list',
    children: [
      {
        meta: {
          title: $t('samples.list'),
        },
        name: 'CasesList',
        path: '/cases/list',
        component: () => import('#/views/cases/list/index.vue'),
      },
      {
        meta: {
          title: $t('samples.register'),
        },
        name: 'CasesRegister',
        path: '/cases/register',
        component: () => import('#/views/cases/register/index.vue'),
      },
    ],
  },
];

export default routes;
