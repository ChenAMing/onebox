<script lang="ts" setup>
import { AllFile, StarredFile, MyShare, FileRecycled, AppSettings } from '@/components/home/body'
import { useRoute } from 'vue-router'

const route = useRoute()

const componentOfRoute = {
  file: AllFile,
  starred: StarredFile,
  share: MyShare,
  recycled: FileRecycled,
  settings: AppSettings,
}

type Route = keyof typeof componentOfRoute

// TODO transition
</script>

<template>
  <div class="m-auto h-96 max-w-5xl border border-gray-300 bg-white">
    <component :is="componentOfRoute[route.name as Route]" />
  </div>
</template>
