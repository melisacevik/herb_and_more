import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import Seasonings from '../views/Seasonings.vue'
import Recipes from '../views/Recipes.vue'
import HerbalOil from '../views/HerbalOil.vue'
import OurStory from '../views/OurStory.vue'
import CatalogueView from '../views/CatalogueView.vue'
import Spices from '../views/Spices.vue'
import Herbs from '../views/Herbs.vue'
import LargePackages from '../views/LargePackages.vue'
import HerbalTeas from '../views/HerbalTeas.vue'

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
    path: '/product/herbs',
    name: 'Herbs',
    component: Herbs
  },
  {
    path: '/product/large-packages',
    name: 'LargePackages',
    component: LargePackages
  },
  {
    path: '/product/herbal-teas',
    name: 'HerbalTeas',
    component: HerbalTeas
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
