<script lang="ts" setup>
import { LibButton } from '@/lib'
import { IconSearch } from '@/icons/head'
import { ref } from 'vue'

const showSearchPanel = ref<boolean>()

const openSearchPanel = () => (showSearchPanel.value = true)
</script>

<template>
  <div>
    <LibButton @click="" className="text-white bg-blue-500 shadow-md shadow-blue-300 mr-2">
      <template #icon>
        <IconSearch />
      </template>
      <template #text>搜索</template>
    </LibButton>
  </div>
</template>
