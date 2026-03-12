import {  lazy } from "react"



//Website Routes
const Home = lazy(() => import("../projects/website/modules/Home/components/Home"));



//Portal Routes
const Dashboard =lazy(()=>import('../projects/portal/modules/dashboard/components/Dashboard'))



const websitePublicRoutes = [
      {path:'/home',name:'home' ,component:Home }

]

const portalPublicRoutes = [
    { path: '/dashboard', name: 'dashboard', component: Dashboard ,layout:false}

]


export { websitePublicRoutes, portalPublicRoutes };