<script lang="ts" setup>
const emits = defineEmits<{ (event: 'click'): void }>()

const onClick = emits('click')
</script>

<template>
  <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
    <div>
      <div @click="onClick" class="fixed inset-0 z-10 bg-black bg-opacity-30 transition"></div>
      <div class="absolute z-20">
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>
