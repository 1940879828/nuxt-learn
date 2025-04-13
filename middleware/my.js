export default defineNuxtRouteMiddleware((to,from)=>{
    console.log(to.path,from.path)
    if (to.path === '/about') {
        // 重定向
        // return navigateTo("/login")
        // 放行
        return true
        // 不放行 会404
        // return false
    }
})