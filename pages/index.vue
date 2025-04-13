<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
    <AppInput ref="appInputRef" v-model="data" placeholder="地址">
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
  </div>
</template>
<script setup lang="ts">
import AppInput from "~/components/AppInput.vue";
import type {ElInput} from "element-plus/es/components/input";

const data = ref('')

const appInputRef = ref<{
  inputRef: typeof ElInput | undefined
}>()

const focusInput = () => {
  console.log(appInputRef.value?.inputRef)
  appInputRef.value?.inputRef?.focus()
}
</script>