import { createRouter, createWebHistory } from 'vue-router';

// 路由懒加载，优化访问性能
const routes = [
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    // 首页
    name: 'homePage',
    path: '/homepage',
    component: () => import('@/pages/homePage.vue')
  },
  {
    // 学习天地
    name: 'learningWorld',
    path: '/learningWorld',
    component: () => import('@/pages/learningWorld.vue')
  },
  {
    // 专业介绍
    name: 'professionalIntroduction',
    path: '/professionalIntroduction',
    component: () => import('@/pages/professionalIntroduction.vue')
  },
  {
    // 大学生活
    name: 'universityLife',
    path: '/universityLife',
    component: () => import('@/pages/universityLife.vue')
  },
  {
    // 登录页面
    name: 'sign',
    path: '/sign',
    component: () => import('@/pages/sign.vue')
  },
  {
    // 问帖展示
    name: 'askPostShow',
    path: '/askPostShow',
    component: () => import('@/pages/askPostShow.vue')
  },
  {
    // 文章展示
    name: 'articleShow',
    path: '/articleShow',
    component: () => import('@/pages/articleShow.vue')
  },
  {
    // 用户个人中心
    name: 'user',
    path: '/user',
    component: () => import('@/pages/user.vue')
  },
  {
    // 问贴编辑发布
    name: 'askPostEdit',
    path: '/askPostEdit',
    component: () => import('@/pages/askPostEdit.vue')
  },
  {
    // 文章编辑发布
    name: 'articleEdit',
    path: '/articleEdit',
    component: () => import('@/pages/articleEdit.vue')
  },
  {
    // 墙
    name: 'wall',
    path: '/wall',
    component: () => import('@/pages/wall.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
