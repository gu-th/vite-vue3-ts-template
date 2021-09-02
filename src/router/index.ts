import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

/**
 * @Author       : guth
 * @Date         : 2021-08-30 16:58:39
 * @LastEditors  : guth
 * @LastEditTime : 2021-08-30 16:58:39
 * @FilePath     : \nav-ui\src\router\index.js
 * @Description  : 路由
 */
const home = () => import('../views/home.vue');

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'home',
    component: home,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router