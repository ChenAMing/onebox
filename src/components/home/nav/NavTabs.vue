<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const tabs = {
  file: '全部文件',
  starred: '星标文件',
  share: '我的分享',
  recycled: '回收站',
  settings: '设置',
}

type Tabs = keyof typeof tabs

function switchTab(routeName: Tabs) {
  router.push(routeName)
}
</script>

<template>
  <div>
    <ul>
      <li
        v-for="(text, routeName, index) in tabs"
        :key="index"
        class="cursor-pointer h-10 flex flex-row items-center hover:bg-[#eaeaea] rounded-sm text-black pl-6 mx-3 relative my-1"
        :class="
          route.name === routeName
            ? 'bg-[#eaeaea] hover:bg-[#eaeaea] before:w-1 before:absolute before:left-0 before:h-10 before:bg-[#0067c0] before:rounded-full'
            : null
        "
        @click="switchTab(routeName as Tabs)"
      >
        <span class="text-sm">
          {{ text }}
        </span>
      </li>
    </ul>
  </div>
</template>
