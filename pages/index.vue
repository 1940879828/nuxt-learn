<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <AppInput ref="appInputRef" v-model="text" placeholder="地址">
      <template #prepend>
        <el-select placeholder="Select" style="width:115px">
          <el-option label="Restaurant" value="1"/>
          <el-option label="Order No." value=""/>
          <el-option label="Tel" value="3"/>
        </el-select>
      </template>
      <template #append>
        <el-button :icon="ElIconSearch"></el-button>
      </template>
    </AppInput>
    <el-button @click="focusInput">聚焦输入框</el-button>
    <div v-if="status==='pending'">
      loading......
    </div>
    <el-button @click="()=>refresh">重新获取</el-button>
  </div>
  <hr>
  <h3>todo</h3>
  <p>userId:{{data?.userId}}</p>
  <p>title:{{data?.title}}</p>
</template>
<script setup lang="ts">
import AppInput from "~/components/AppInput.vue";
import type {ElInput} from "element-plus/es/components/input";

const text = ref('')
const data = ref({})

const appInputRef = ref<{
  inputRef: typeof ElInput | undefined
}>()

const focusInput = () => {
  console.log(appInputRef.value?.inputRef)
  appInputRef.value?.inputRef?.focus()
}

console.log(add(1,2))

// let res = await useAsyncData('test',()=>{
//   // 只会在服务端执行一次
//   return $fetch('https://jsonplaceholder.typicode.com/todos/1')
// })

// useFetch 语法糖
const res = await api.get('/todos/1')
data.value = res
// refresh 在服务端运行时只会执行一次 用来刷新token
// status在第一次时一直是success 因为在服务端获取到数据再渲染的页面
watchEffect(()=>{
  console.log("测试接口",res)
})
</script>