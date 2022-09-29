<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const tabs = {
  file: '全部文件',
  log: '上传记录',
  starred: '星标文件',
  share: '我的分享',
  recycled: '回收站',
  settings: '设置',
}

type Tabs = keyof typeof tabs

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
        v-for="(text, routeName, index) in tabs"
        :key="index"
        class="cursor-pointer h-10 mb-1 flex flex-row items-center hover:bg-[#eaeaea] rounded-sm text-black pl-6 relative"
        :class="route.name === routeName ? 'bg-[#eaeaea] hover:bg-[#eaeaea]' : null"
        @click="switchTab(routeName as Tabs)"
      >
        <span class="text-sm">
          {{ text }}
        </span>
      </li>
    </ul>
  </div>
</template>
