import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/:id',
    name: 'detail',
    component: () => import(/* webpackChunkName: "Detail" */ '../views/CountryDetail.vue'),
    props: (route) => {
      return {
        id: route.params.id
      }
    }
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
