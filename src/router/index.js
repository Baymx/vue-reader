import Vue from 'vue'
import Router from 'vue-router'
import  Home from './../views/Home.vue'
import  search from './../views/search.vue'
import  bookdetail from  './../views/BookDetail.vue'
import  category from './../views/Category.vue'
import  reader from './../views/Reader.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { keepAlive: true }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: { keepAlive: true }
    },
    {
      path: '/bookdetail/:id',
      name: 'bookdetail',
      component: bookdetail,
      meta: { keepAlive: true }
    },
    {
      path: '/category',
      name: 'category',
      component: category,
      meta: { keepAlive: true }
    },
    {
      path: '/reader/:id',
      name: 'reader',
      component: reader,
      meta: { keepAlive: true }
    }
  ]
})
