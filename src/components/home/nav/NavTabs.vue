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
      return 'top-[16px]'
    case 'log':
      return 'top-[60px]'
    case 'starred':
      return 'top-[104px]'
    case 'share':
      return 'top-[148px]'
    case 'recycled':
      return 'top-[192px]'
    case 'settings':
      return 'top-[236px]'
  }
})
</script>

<template>
  <div class="relative p-3">
    <span
      class="absolute bg-[#0067c0] w-1 h-[32px] rounded-full z-10 left-4 transition-all"
      :class="widgetClass"
    ></span>
    <ul>
      <li
        v-for="(tab, index) in tabs"
        :key="index"
        class="cursor-pointer h-10 mb-1 flex flex-row items-center hover:bg-[#eaeaea] rounded-sm text-black pl-4 relative"
        :class="route.name === tab.router ? 'bg-[#eaeaea] hover:bg-[#eaeaea]' : null"
        @click="switchTab(tab.router as Tabs)"
      >
        <component
          :is="tab.icon"
          :solid="route.name === tab.router"
          :class="route.name === tab.router ? 'fill-[#0067c0]' : null"
        ></component>
        <span class="text-sm ml-6">
          {{ tab.text }}
        </span>
      </li>
    </ul>
  </div>
</template>
