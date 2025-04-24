import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:user-circle',
      keepAlive: true,
      order: 1000,
      title: $t('users.title'),
    },
    name: 'Users',
    path: '/users',
    redirect: '/users/list',
    children: [
      {
        meta: {
          title: $t('users.list'),
        },
        name: 'UsersList',
        path: '/users/list',
        component: () => import('#/views/users/list/index.vue'),
      },
      {
        meta: {
          title: $t('users.permission'),
        },
        name: 'UsersPermissions',
        path: '/users/permissions',
        component: () => import('#/views/users/permissions/index.vue'),
      },
    ],
  },
];

export default routes;
