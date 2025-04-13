<template>
  <div>
    可选路由:{{route.params.kexuan}}
  </div>
</template>

<script setup lang="ts">
// http://localhost:3000/123/kexuan
const route = useRoute()
console.log(route.params)
</script>

<style scoped>

</style>