import React from 'react';
import type IRoute from './IRoute';

const routes: IRoute[] = [
  {
    path: '/',
    component: React.lazy(() => import('@/pages/Home')),
    title: '首页',
    exact: true,
  },
  {
    path: '/note/:id',
    component: React.lazy(() => import('@/pages/Note')),
    title: '笔记',
    exact: true,
  },
  {
    path: '/user',
    component: React.lazy(() => import('@/layouts/UserLayout')),
    title: '用户布局',
    routes: [
      {
        path: '/user/login',
        component: React.lazy(() => import('@/pages/User/Login')),
        title: '登录',
      },
      {
        path: '/user/register',
        component: React.lazy(() => import('@/pages/User/Register')),
        title: '注册',
      },
    ],
  },
  {
    path: '/admin',
    component: React.lazy(() => import('@/pages/Admin')),
    title: '管理',
  },
  {
    path: '/*',
    title: '找不到',
    component: React.lazy(() => import('@/pages/Error/NotFound')),
  },
];

export default routes;
