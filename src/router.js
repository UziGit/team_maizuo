import Vue from 'vue';
import Router from 'vue-router';

//引入这个home的一级路由
import Home from './views/home/index.vue';
//引入home路由下的二级路由
import Center from './views/home/center.vue';
import Cinemas from './views/home/cinemas.vue';
import Films from './views/home/films.vue';

//引入其他的一级路由
import City from './views/city/index.vue';
import FilmInfo from './views/film/index.vue';
import Login from './views/login/index.vue';
import Money from './views/money/index.vue';

Vue.use(Router)

let router =  new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path:'center',
          component:Center
        },
        {
          path:'cinemas',
          component:Cinemas
        },
        {
          path:'films',
          component:Films
        },
        {
          path:'',
          redirect:'/films'
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path:'/film/:id',
      component:FilmInfo
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/money',
      component:Money
    }
  ]
})

export default router;