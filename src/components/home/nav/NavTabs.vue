<script lang="ts" setup>
import {
  IconFile,
  IconLog,
  IconStarred,
  IconShare,
  IconRecycled,
  IconSettings,
} from '@/icons/nav'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

type Tabs = 'file' | 'log' | 'starred' | 'share' | 'recycled' | 'settings'

const tabs = [
  { text: '全部文件', router: 'file', icon: IconFile },
  { text: '上传记录', router: 'log', icon: IconLog },
  { text: '星标文件', router: 'starred', icon: IconStarred },
  { text: '我的分享', router: 'share', icon: IconShare },
  { text: '回收站', router: 'recycled', icon: IconRecycled },
  { text: '设置', router: 'settings', icon: IconSettings },
]

function switchTab(routeName: Tabs) {
  router.push(routeName)
}

const widgetClass = computed(() => {
  switch (route.name) {
    case 'file':
      return 'top-[12px]'
    case 'log':
      return 'top-[56px]'
    case 'starred':
      return 'top-[100px]'
    case 'share':
      return 'top-[144px]'
    case 'recycled':
      return 'top-[188px]'
    case 'settings':
      return 'top-[232px]'
  }
})
</script>

<template>
  <div class="relative p-2">
    <span
      class="absolute left-3 inline-block h-[32px] w-1 rounded-full bg-[#0067c0] transition-all"
      :class="widgetClass">
    </span>

    <span
      v-for="(tab, index) in tabs"
      :key="index"
      class="mb-1 flex h-10 cursor-pointer flex-row flex-nowrap items-center rounded pl-4 hover:bg-gray-100"
      :class="route.name === tab.router ? 'bg-gray-100 text-[#0067c0]  hover:bg-gray-100' : null"
      @click="switchTab(tab.router as Tabs)">
      <component
        :is="tab.icon"
        :solid="route.name === tab.router"
        :class="route.name === tab.router ? 'fill-[#0067c0]' : null">
      </component>
      <span class="ml-6 flex-grow text-sm">
        {{ tab.text }}
      </span>
    </span>
  </div>
</template>
