export default defineNuxtRouteMiddleware((to,from)=>{
    console.log("全局中间件",to.path,from.path)
    let passURL = ["/login","/about","/index","/","/myError"]
    if (!passURL.includes(to.path)){
        let token = ""
        if (import.meta.client) {
            let token = localStorage.getItem("token")
        }
        if (!token){
            return navigateTo({
                path: "/login",
                query: {
                    code: 401,
                    message: "没有token,请先登录"
                }
            })
        }
    }
})