import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Seasonings from '../views/Seasonings.vue'
import Recipes from '../views/Recipes.vue'
import HerbalOil from '../views/HerbalOil.vue'
import OurStory from '../views/OurStory.vue'
import CatalogueView from '../views/CatalogueView.vue'
import Spices from '../views/Spices.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/product/seasonings',
    name: 'seasonings',
    component: Seasonings
  },
  
  {
    path: '/product/spices',
    name: 'Spices',
    component: Spices
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: Recipes
  },
  {
    path: '/product/herbal-oils',
    name: 'herbal-oils',
    component: HerbalOil
  },
  {
    path: '/story',
    name: 'story',
    component: OurStory
  },
  {
    path: '/catalogue',
    name: 'CatalogueView',
    component: CatalogueView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
  routes
})

export default router
