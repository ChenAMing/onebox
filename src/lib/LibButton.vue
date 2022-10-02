<script lang="ts" setup>
const { className } = defineProps<{ className?: string }>()

const emits = defineEmits<{ (event: 'click'): void }>()

const onClick = () => emits('click')
</script>

<template>
  <button
    type="button"
    class="text-bold flex h-8 flex-row items-center rounded p-3 text-sm font-bold opacity-90 transition hover:opacity-80 active:opacity-100 tracking-widest"
    :class="className"
    @click="onClick">
    <span class="mr-3" v-if="$slots.icon">
      <slot name="icon"></slot>
    </span>
    <span v-if="$slots.text">
      <slot name="text"></slot>
    </span>
    <span v-if="$slots.plugin">
      <slot name="plugin"></slot>
    </span>
  </button>
</template>
