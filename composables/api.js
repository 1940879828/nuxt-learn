export const apiCore = (url, options) => {
  const config = useRuntimeConfig()

  return useFetch(url,  {
    baseURL: config.public.baseUrl,
    onRequest({options}) {
      let token = ""
      if (import.meta.client) {
        token = localStorage.getItem("token")
      }
      options.headers = {
        Authorization: token ? `Bearer ${token}` : undefined,
        ...options.headers,
      }
    },
    onResponse({response}) {
      const nuxtApp = useNuxtApp()
      if (response.status>=200 && response.status < 300) {
        if (response._data.code !== 200) {
          if (import.meta.client) {
            ElMessage.error(response._data.code+""+response._data.message)
            nuxtApp.runWithContext(()=>{
              navigateTo({
                path: "/myError",
                query: {
                  code: response._data.code,
                  message: response._data.message,
                }
              })
            })
          }
        }
      }
    },
    onRequestError({response}){
      const nuxtApp = useNuxtApp()
      if (import.meta.client ) {
        ElMessage.error(response._data.code+""+response._data.message)
      } else {
        nuxtApp.runWithContext(()=>{
          navigateTo({
            path: "/myError",
            query: {
              code: response._data.code,
              message: response._data.message,
            }
          })
        })
      }
    },
    ...options
  })
}

export const api = {
  get: (url, options) => {
    return new Promise((resolve, reject) => {
      apiCore(url, {
        method: 'GET',
        ...options
      }).then((res)=>{
        resolve(res.data.value)
      }).catch((err)=>{
        reject(err)
      })
    })
  }
}