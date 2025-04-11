import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'mdi:map',
      keepAlive: true,
      order: 1000,
      title: $t('store.title'),
    },
    name: 'Stores',
    path: '/stores',
    component: () => import('#/views/stores/index.vue'),
  },
];

export default routes;
