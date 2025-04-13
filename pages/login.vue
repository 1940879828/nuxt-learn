<template>
  <div>
    login
  </div>
</template>

<script setup lang="ts">
onMounted(()=>{
  const route = useRoute()
  if (route.query.code) {
    ElMessage.error(route.query.code+""+route.query.message)
  }
})
</script>

<style scoped>

</style>