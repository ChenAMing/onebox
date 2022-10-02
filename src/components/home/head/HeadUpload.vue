<script lang="ts" setup>
import { LibButton } from '@/lib'
import { IconUpload } from '@/icons/head'
</script>

<template>
  <LibButton @click="" className="text-white bg-slate-700 shadow-md shadow-slate-400 mr-2">
    <template #icon>
      <IconUpload />
    </template>
    <template #text>上传</template>
  </LibButton>
</template>
