import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 引入路由所映射的组件
import Login from '@/views/Login.vue'
import Personal from '@/views/Personal.vue'
// 创建路由对象
let router = new VueRouter({
    // 配置路由
    routes:[
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        {
            name:'Personal',
            path:'/personal',
            component:Personal
        }
    ]
})

// 暴露
export default router