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

const sortBy = [
  { text: 'A-Z', fn: '' },
  { text: '日期', fn: '' },
  { text: '扩展名', fn: '' },
]
</script>

<template>
  <!-- TODO 增加分类 -->
  <!-- <RouterView v-if="false" /> -->
  <LibFileList
    :head="head"
    :data="dir.listOfCurrentDir"
    :sortBy="sortBy"
    v-model:modelValue="checked" />
</template>
