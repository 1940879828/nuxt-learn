// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  //初始化样式
  // css:["@/assets/css/base.scss"],
  vite:{
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/base.scss" as *;',
        }
      }
    }
  },
  modules: [
    '@element-plus/nuxt'
  ],
  $development:{
    runtimeConfig:{
      public:{
        // 服务端和客户端都能获取到
        baseUrl: 'https://jsonplaceholder.typicode.com',
      }
    }
  },
  $production:{
    runtimeConfig:{
      public:{
        // 服务端和客户端都能获取到
        baseUrl: 'http://127.0.0.1:8000/',
      }
    }
  },
  // 运行时全局变量
  runtimeConfig:{
    // 服务端运行时可以获取到
    count: 1,

    public:{
      // 服务端和客户端都能获取到
    }
  }
})
