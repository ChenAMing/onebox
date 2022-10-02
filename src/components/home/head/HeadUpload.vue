<script lang="ts" setup>
import { LibButton } from '@/lib'
import { IconUpload } from '@/icons/head'
</script>

<template>
  <LibButton
    @click=""
    className="text-black bg-transparent mr-2 border border-blue-600 shadow-sm shadow-blue-300">
    <template #icon>
      <IconUpload />
    </template>
    <template #text>上传</template>
  </LibButton>
</template>
