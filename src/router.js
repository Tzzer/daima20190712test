import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkActiveClass:'active',
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("./views/Login")
        },
        {
            path: "/",
            component: () => import("./views/Index"),
            children: [
                {
                    path: "",
                    redirect: "/home"
                },
                {
                    path: "/home",
                    name: "home",
                    component: () => import("./views/Home")
                },
                {
                    path: "/order",
                    name: "order",
                    component: () => import("./views/Order")
                },
                {
                    path: "/me",
                    name: "me",
                    component: () => import("./views/Me")
                },
                {
                    path: "/address",
                    name: "address",
                    component: () => import("./views/Address")
                },
                {
                    path: "/city",
                    name: "city",
                    component: () => import("./views/City")
                }
            ]
        },
        {
            path:"/search",
            name:"search",
            component:() =>import("./views/Search")
        },
        {
            path:'/shop',
            name:"shop",
            redirect:"/goods",
            component:() =>import('./views/Shops/Shop'),
            children:[
                {
                    path:"/goods",
                    name:"goods",
                    component:() =>import("./views/Shops/Goods")
                },
                {
                    path:"/seller",
                    name:"seller",
                    component:() =>import("./views/Shops/Seller")
                },
                {
                    path:"/comments",
                    name:"comments",
                    component:() =>import("./views/Shops/Comments")
                },
                
            ]
        }
    ]
})
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.ele_login ? true : false;
    if (to.path == "/login") {
        next();
    } else {
        isLogin ? next() : next("/login");
    }
});
export default router