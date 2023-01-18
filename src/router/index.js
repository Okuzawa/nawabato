import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/nawabato',
    name: 'title',
    //component: HomeView
    component: () => import(/* webpackChunkName: "title" */ '../views/TitleView.vue')
  },
  {
    path: '/home',
    name: 'home',
    //component: HomeView
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/deck-list',
    name: 'deck-list',
    component: () => import(/* webpackChunkName: "deck-list" */ '../views/DeckListView.vue')
  },
  {
    path: '/deck-edit',
    name: 'deck-edit',
    component: () => import(/* webpackChunkName: "deck-edit" */ '../views/DeckEditView.vue'),
    props: route => ({id: route.params.deckID}),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
