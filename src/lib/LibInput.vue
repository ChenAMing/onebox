<script lang="ts" setup>
import { IconClear, IconSearch } from '@/icons'
import { computed } from 'vue'

const props = defineProps<{
  placeholder?: string
  modelValue: string
  label?: string
  id?: string
}>()

const emits = defineEmits<{ (event: 'update:modelValue', value: string): void }>()

const value = computed({
  get: () => props.modelValue,
  set: (newValue) => emits('update:modelValue', newValue),
})

function clearValue() {
  value.value = ''
}
</script>

<template>
  <div class="flex flex-row items-center h-4">
    <IconSearch />

    <component :is="props.id ? 'label' : 'span'" :id="props.id ?? null">
      {{ props.label }}
    </component>

    <input type="text" :placeholder="props.placeholder" v-model="value" class="h-10" />

    <span @click="clearValue">
      <IconClear />
    </span>
  </div>
</template>
