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
  value.value = isCheckAll.value ? data.map(item => item.id) : []
})

const sortBy = ref()

function sort() {}
</script>

<template>
  <div class="relative flex flex-col">
    <div class="mb-2 h-10 rounded bg-blue-600 shadow shadow-blue-300">
      <span></span>
    </div>

    <div
      class="flex cursor-default flex-col rounded border border-slate-300 bg-white p-3 shadow-sm shadow-gray-200">
      <table>
        <thead class="static font-bold">
          <tr class="mb-1 h-10 text-left">
            <th>
              <input type="checkbox" v-model="isCheckAll" class="" />
            </th>

            <th v-for="(th, index) in head" :key="index">{{ th.text }}</th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(tr, tdIndex) in data"
            :key="tdIndex"
            class="h-10 border-t border-slate-200 text-gray-700 transition hover:bg-gray-100">
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
  </div>
</template>
