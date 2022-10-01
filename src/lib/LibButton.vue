<script lang="ts" setup>
const emits = defineEmits<{ (event: 'click'): void }>()

const onClick = () => emits('click')
</script>

<template>
  <button type="button" class="h-8"></button>
</template>
