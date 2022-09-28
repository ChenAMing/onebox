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
  <component :is="componentOfRoute[route.name as Route]" />
</template>
