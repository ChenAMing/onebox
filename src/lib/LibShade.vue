<script lang="ts" setup>
const props = defineProps<{ forReturn?: boolean }>()

const emits = defineEmits<{ (event: 'click'): void }>()

const onClick = () => emits('click')
</script>

<template>
  <div
    class="fixed inset-0"
    :class="
      props.forReturn
        ? null
        : 'bg-black bg-opacity-25  flex flex-col items-center justify-center backdrop-blur-sm'
    "
    @click="onClick"
  >
    <slot v-if="props.forReturn"></slot>
  </div>
</template>
