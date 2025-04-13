<template>
  <div>

  </div>
</template>

<script setup lang="ts">
// 处理Nuxt服务端渲染时问题 重定义500页面
defineProps({
  error: Object
})

throw createError({statusCode: 404, message:"404"})
</script>

<style scoped>
</style>