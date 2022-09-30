<script lang="ts" setup>
import { LibFileList } from '@/lib'
import { useDir } from '@/stores'
import { ref } from 'vue'

const dir = useDir()

const head = [
  { key: 'name', text: '文件名' },
  { key: 'time', text: '创建时间' },
  { key: 'size', text: '大小' },
]

const checked = ref([])
</script>

<template>
  <LibFileList :head="head" :data="dir.listOfCurrentDir" v-model:modelValue="checked" />
</template>
