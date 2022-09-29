<script lang="ts" setup>
import Layout from '@/components/home/Layout.vue'
import { HeadSearch, HeadUpload } from '@/components/home/head'
import { NavTabs } from '@/components/home/nav'
</script>

<template>
  <Layout>
    <template #head>
      <HeadSearch />
      <HeadUpload />
    </template>

    <template #body>
      <RouterView />
    </template>

    <template #nav>
      <NavTabs />
    </template>
  </Layout>
</template>
