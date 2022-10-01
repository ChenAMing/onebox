<script lang="ts" setup>
import { LibInput } from '@/lib'
import { reactive } from 'vue'

const user = reactive({
  act: '',
  pwd: '',
})
</script>

<template>
  <div
    class="h=20 flex w-[400px] flex-col flex-nowrap border border-slate-300 bg-[#f3f3f3] p-10">
    <LibInput v-model:modelValue="user.act" />

    <span class="h-8"></span>

    <LibInput v-model:modelValue="user.pwd" />

    <span class="h-8"></span>

    <button type="button" class="h-10 rounded-md bg-[#0067c0] text-white">登录</button>
  </div>
</template>
