import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import BasicLayout from '@/layout/BasicLayout'

const routes = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/view/home'),
        meta: {
          title: '首页'
        }
      }, {
        path: '/user',
        name: 'user',
        component: () => import('./view/user'),
        meta: {
          title: '会员中心'
        }
      },
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./view/cart'),
    meta: {
      title: '购物车'
    }
  },
  {
    name: 'goods',
    component: () => import('./view/goods'),
    meta: {
      title: '商品详情'
    }
  }
];

// add route path
routes.forEach(route => {
  route.path = route.path || '/' + (route.name || '');
});

const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};
