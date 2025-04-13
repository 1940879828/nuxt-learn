export default defineNuxtRouteMiddleware((to,from)=>{
    console.log("全局中间件",to.path,from.path)
})