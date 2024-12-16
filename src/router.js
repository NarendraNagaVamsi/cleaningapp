import { createWebHistory,createRouter } from "vue-router";
import Plans from "./components/Pages/PlansComp.vue";
import Services from "./components/Pages/ServicesComp.vue";
import About from "./components/Pages/AboutComp.vue";
import LogIn from "./components/Pages/LogInComp.vue";
const routes=[
 
  {
    path:'/plans',
    component:Plans
  },
  {
    path:'/services',
    component:Services
  },{
    path:'/about',
    component:About
  },{
    path:'/login',
    component:LogIn
  }
]
const router=createRouter({
  history:createWebHistory(),routes
})


export default router;