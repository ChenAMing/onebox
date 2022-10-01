<script lang="ts" setup>
import { IconClear } from '@/icons'
import { computed } from 'vue'

const props = defineProps<{
  placeholder?: string
  modelValue: string
  label?: string
  id?: string
  allowClear?: boolean
}>()

const emits = defineEmits<{ (event: 'update:modelValue', value: string): void }>()

const value = computed({
  get: () => props.modelValue,
  set: newValue => emits('update:modelValue', newValue),
})

function clearValue() {
  value.value = ''
}
</script>

<template>
  <div
    class="flex h-10 flex-row items-center overflow-hidden rounded-md border border-[#e5e5e5] border-b-[#868686] bg-white shadow shadow-gray-50">
    <div v-if="$slots.pre">
      <slot name="pre"></slot>
    </div>

    <component :is="props.id ? 'label' : 'span'" :for="props.id ?? undefined">
      {{ props.label }}
    </component>

    <input
      type="text"
      :placeholder="props.placeholder"
      v-model="value"
      class="h-10 flex-grow border-[#0067c0] bg-transparent outline-none focus:border-b-[3px]"
      :id="props.id ?? undefined" />

    <span @click="clearValue" v-if="props.allowClear">
      <IconClear />
    </span>
  </div>
</template>
