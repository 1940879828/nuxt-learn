<template>
  <div class="app-input">
    <el-input v-bind="$attrs" ref="inputRef">
      <template v-for="(_,name) in $slots" #[name]="slotData">
        <slot :name="name" v-bind="slotData || {}"></slot>
      </template>
    </el-input>
  </div>
</template>

<script setup lang="ts">
import {ElInput} from "element-plus/es/components/input";

// 1. 通过组件实例类型提取 props
type ElInputInstance = InstanceType<typeof ElInput>
type ElInputProps = ElInputInstance['$props']

// 2. 手动声明允许的 props（绕过泛型限制）
defineProps({
  // 关键属性手动声明
  // 其他需要类型提示的属性...
})

// 3. 属性合并逻辑
const attrs = useAttrs()
const mergedAttrs = computed(() => ({
  ...attrs,
  // 可在此添加默认值
  placeholder: attrs.placeholder || '请输入'
}))

const inputRef = ref<InstanceType<typeof ElInput>>()

defineExpose({ inputRef })

// 禁止属性继承到根元素
defineOptions({
  inheritAttrs: false
})
</script>

<style scoped>
.app-input {
  transition: .3s;
}

.app-input:hover,
.app-input:focus-within {
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2));
}
</style>