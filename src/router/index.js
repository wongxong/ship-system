import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/signin')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
});

const Signin_Path = '/signin';
const White_List = [ Signin_Path ];

router.beforeEach((to, from, next) => {
  if(getToken()) {
    if(to.path === Signin_Path) {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if(White_List.some(d => d === to.path)) {
      next();
    } else {
      next({ path: `/signin?redirect_url=${ to.path }` });
    }
  }
});

export default router;


function getToken() {
  return window.sessionStorage.getItem('admin-auth');
}