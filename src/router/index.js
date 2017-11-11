import Vue from 'vue'
import Router from 'vue-router'
import MovieList from '../components/movielist'
import Ratting from '../components/ratting'
import MoviesDetail from '../components/moviesdetail'
import Mine from '../components/mine'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: HelloWorld
    // }
    {path:'/movies',component:MovieList},
    {path:'/ratting',component:Ratting},
    {path:'/detail',component:MoviesDetail},
    {path:'/mine',component:Mine}
  ]
})
