import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {path:"/", component: ()=> import ('../views/home.vue')},
  {path:"/xizmatlar", component: ()=> import ('../views/xizmatlar.vue')},
  {path:"/biz_haqimizda", component: ()=> import ('../views/biz_haqimizda.vue')},
  {path:"/aloqa", component: ()=> import ('../views/aloqa.vue')},
  {path:"/portfolio", component: ()=> import ('../views/portfolio.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
