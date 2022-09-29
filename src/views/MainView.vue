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
  <div class="bg-white h-96 border border-gray-300 max-w-5xl m-auto">
    <Transition enter-from-class="opacity-0 transition-all" leave-to-class="opacity-0">
      <component :is="componentOfRoute[route.name as Route]" />
    </Transition>
  </div>
</template>
