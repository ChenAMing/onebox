<script lang="ts" setup>
import { computed, ref, watchEffect } from 'vue'

const { head, data, modelValue } = defineProps<{
  modelValue: string[]
  head: { key: string; text: string }[]
  data: { id: string; [propName: string]: string }[]
}>()

const emits = defineEmits<{ (event: 'update:modelValue', value: string[]): void }>()

const value = computed({
  get: () => modelValue,
  set: (newValue: string[]) => emits('update:modelValue', newValue),
})

const isCheckAll = ref<boolean>(false)

watchEffect(() => {
  value.value = isCheckAll.value ? data.map((item) => item.id) : []
})
</script>

<template>
  <div class="relative flex flex-col">
    <table class="cursor-default">
      <thead class="static">
        <tr class="text-left">
          <th>
            <input type="checkbox" v-model="isCheckAll" />
          </th>

          <th v-for="(th, index) in head" :key="index">{{ th.text }}</th>

          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(tr, tdIndex) in data" :key="tdIndex">
          <td>
            <input type="checkbox" :value="tr.id" v-model="modelValue" />
          </td>

          <td v-for="(th, thIndex) in head" :key="thIndex">{{ tr[th.key] }}</td>

          <td>
            <slot name="fn"></slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
