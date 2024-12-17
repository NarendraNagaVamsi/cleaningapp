import { createWebHistory,createRouter } from "vue-router";
import Plans from "./components/Pages/PlansComp.vue";
import Services from "./components/Pages/ServicesComp.vue";
import About from "./components/Pages/AboutComp.vue";
import LogIn from "./components/Pages/LogInComp.vue";
import MainComp from "./components/Pages/MainComp.vue";

const routes=[
 
  {
    path:'/',
    name: 'MainComp',
    component:MainComp
  },
  {
    path:'/plans',
    name: 'Plans',
    component:Plans
  },
  {
    path:'/services',
    name: 'Services',
    component:Services
  },{
    path:'/about',
    name: 'About',
    component:About
  },{
    path:'/login',
    name: 'Login',
    component:LogIn
  }
]
const router=createRouter({
  history:createWebHistory(),routes
})


export default router;