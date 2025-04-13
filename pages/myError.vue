<template>
  <div>
    error:
    <p></p>
  </div>
</template>

<script setup lang="ts">
onMounted(()=>{
  const route = useRoute()
  switch (route.query.code) {
    case "401":
      ElMessage.error("没有登录")
      localStorage.setItem("token","")
      // navigateTo("/login")
    case "501":
      ElMessage.error("未知错误"+route.query.message)
    default:
      ElMessage.error(route.query.code+""+route.query.message)
  }

})
</script>

<style scoped>

</style>