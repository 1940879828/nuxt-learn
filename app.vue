<script setup lang="ts">
const name = ref("hello")
console.log("111")
const config = useRuntimeConfig()
if (import.meta.server) {
  console.log("server...")
} else {
  console.log("client")
}
</script>

<template>
  <header>
    <ul>
      <li>
        <NuxtLink to="/">首页</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">关于</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">登录</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user/aa">我的</NuxtLink>
      </li>
    </ul>
  </header>
  <main>
    <NuxtPage></NuxtPage>
  </main>
  <footer>
    footer
  </footer>
</template>

<style scoped lang="scss">
p {
  color:  $myColor;
}
header, footer {
  border: 3px solid $myColor;
}
</style>