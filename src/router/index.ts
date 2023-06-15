import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Iniciar',
    name: 'Iniciar',
    component: () => import(/* webpackChunkName: "about" */ '../views/PrincipalView.vue')  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/listarmarca',
    name: 'listarmarca',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/MarcaListaView.vue')
  },
  {
    path: '/Adicionar',
    name: 'Adicionar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Marca/AdicionarMarca.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
