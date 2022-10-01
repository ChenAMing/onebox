<script lang="ts" setup>
import { IconUpload } from '@/icons/head'
</script>

<template>
  <span
    class="mr-2 flex h-8 cursor-pointer flex-row items-center rounded-sm border-2 border-dashed border-gray-300 p-2 hover:bg-gray-100"
    @click="">
    <IconUpload />
    <span class="ml-4 select-none text-sm">上传</span>
  </span>
</template>
