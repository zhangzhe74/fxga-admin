import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:clipboard-list-outline',
      keepAlive: true,
      order: 1000,
      title: $t('cases.title'),
    },
    name: 'Cases',
    path: '/cases',
    redirect: '/cases/list',
    children: [
      {
        meta: {
          title: $t('cases.list'),
        },
        name: 'CasesList',
        path: '/cases/list',
        component: () => import('#/views/cases/list/index.vue'),
      },
      {
        meta: {
          title: $t('cases.register'),
        },
        name: 'CasesRegister',
        path: '/cases/register',
        component: () => import('#/views/cases/register/index.vue'),
      },
      {
        meta: {
          title: $t('cases.mine'),
        },
        name: 'CasesMine',
        path: '/cases/mine',
        component: () => import('#/views/cases/mine/index.vue'),
      },
    ],
  },
];

export default routes;
