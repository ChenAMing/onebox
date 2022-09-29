<script lang="ts" setup>
import { inject } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = {
  file: '全部文件',
  log: '上传记录',
  starred: '星标文件',
  share: '我的分享',
  recycled: '回收站',
  settings: '设置',
}
</script>

<template>
  <span class="text-2xl">{{ tabs[route.name as keyof typeof tabs] }}</span>
</template>
