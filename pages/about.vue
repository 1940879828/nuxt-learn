<template>
  <div>
    <h1>Welcome to the about</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>

<script lang="ts">
definePageMeta({
  middleware: ["my"]
})
</script>