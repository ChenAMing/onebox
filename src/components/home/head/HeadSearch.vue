<script lang="ts" setup>
import { LibButton } from '@/lib'
import { IconSearch } from '@/icons/head'
import { ref } from 'vue'

const showSearchPanel = ref<boolean>()

const openSearchPanel = () => (showSearchPanel.value = true)
</script>

<template>
  <div>
    <LibButton
      @click=""
      className="text-black bg-transparent mr-2 border border-blue-600 shadow-sm shadow-blue-300">
      <template #icon>
        <IconSearch />
      </template>
      <template #text>搜索</template>
    </LibButton>
  </div>
</template>
