import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import { toKebabCase } from '../modules/toKebabCase.js';
import store from '../store'

const findProductByBouquet = (route) => {
  const bouquet = route.params.bouquet;

  return {
    product: store.state.products.find(item => toKebabCase(item.title) === bouquet)
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('@/views/Shop.vue'),
  },
  {
    path: '/shop/:bouquet',
    name: 'About Bouquet',
    component: () => import('@/views/AboutBouquet.vue'),
    props: findProductByBouquet
  },
  {
    path: '/my-cart',
    name: 'My Cart',
    component: () => import('@/views/MyCard.vue'),
    children: [
      {
        path: 'delivery',
        name: 'Delivery',
        component: () => import('@/components/cart/Delivery.vue')
      },
      {
        path: 'order-confirmation',
        name: 'Order Confirmation',
        component: () => import('@/components/cart/ConfirmBlock.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'Delivery' || to.name === 'Order Confirmation') {
      return {
        el: 'h1',
        top: '10',
        behavior: 'smooth'
      }

    } else if (to.name === 'Home' && from.name === 'Order Confirmation') {
      return {
        top: 0
      }

    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
});

router.beforeEach((to, from) => {
  
  //SHOPPING CART
  if (from.name === 'Order Confirmation' && to.name === 'Delivery') {
    return true;

  } else if ((from.name !== 'My Cart' && to.name === 'Delivery') || 
    (from.name !== 'Delivery' && to.name === 'Order Confirmation')){
    return { name: 'My Cart' };
  }

})

export default router
