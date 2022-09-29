<script lang="ts" setup>
import { LibInput } from '@/lib'
import { reactive } from 'vue'

const user = reactive({
  act: '',
  pwd: '',
})
</script>

<template>
  <div class="h=20 flex flex-col flex-nowrap border border-slate-300 p-10 w-[400px] bg-[#f3f3f3]">
    <LibInput v-model:modelValue="user.act" />

    <span class="h-8"></span>

    <LibInput v-model:modelValue="user.pwd" />

    <span class="h-8"></span>

    <button type="button" class="bg-[#0067c0] text-white h-10 rounded-md">登录</button>
  </div>
</template>
