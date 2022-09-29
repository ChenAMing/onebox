<script lang="ts" setup>
import * as body from '@/components/home/body'
import { useRoute } from 'vue-router'

const route = useRoute()

const componentOfRoute = {
  file: body.AllFile,
  starred: body.StarredFile,
  share: body.MyShare,
  recycled: body.FileRecycled,
  settings: body.AppSettings,
}

type Route = keyof typeof componentOfRoute

// TODO transition
</script>

<template>
  <div class="m-2 bg-white absolute top-0 left-0 right-0 h-96 border border-[#e5e5e5] shadow-md rounded-md">
    <component :is="componentOfRoute[route.name as Route]" />
  </div>
</template>
