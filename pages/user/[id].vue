<template>
  <div>
    user:{{route.params.id}}
    <p>123</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log("route.params",route.params.id)
</script>

<style scoped>

</style>