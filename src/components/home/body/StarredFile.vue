<script lang="ts" setup>
import { LibFileList } from '@/lib'
import { ref } from 'vue';

const checked = ref<string[]>([])

    const head = [
  { key: 'name', text: '文件名' },
  { key: 'time', text: '创建时间' },
  { key: 'size', text: '大小' },
]
</script>

<template>
  <!-- <LibFileList v-model:modelValue='checked' :head="head" :data=""/> -->
</template>
