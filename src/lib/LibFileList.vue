<script lang="ts" setup>
import { IconMore, IconSortBy, IconSortPositive, IconSortReversed } from '@/icons/lib'
import { computed, ref, watchEffect } from 'vue'

const { head, data, modelValue, sortBy } = defineProps<{
  modelValue: string[]
  head: { key: string; text: string }[]
  data: { id: string; [propName: string]: string }[]
  // TODO
  sortBy: { text: string; fn: any }[]
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

const sortByPositive = ref<boolean>(true)

const sortBtn = {
  positive() {
    // TODO
    sortByPositive.value = true
  },
  reversed() {
    // TODO
    sortByPositive.value = false
  },
}

const className = `box-border flex w-20 flex-row items-center justify-center border border-blue-300
                   border-opacity-50 bg-blue-300 bg-opacity-40 opacity-90 transition-all`
const focusClassName = 'bg-opacity-80 opacity-100'

const showSortByMenu = ref<boolean>(false)

const switchSortByMenu = () => (showSortByMenu.value = !showSortByMenu.value)

// TODO
const usedSortOrder = ''
</script>

<template>
  <div class="relative flex flex-col">
    <!-- sort menu -->
    <div class="mb-2 flex h-[60px] flex-row rounded bg-blue-600 p-2 shadow shadow-blue-300">
      <span
        class="mr-auto flex cursor-pointer flex-row items-center rounded bg-white bg-opacity-30 px-2 opacity-80 transition-all hover:opacity-100"
        @click="switchSortByMenu">
        <IconSortBy class="stroke-white" />

        <span class="ml-2 mr-1 text-sm text-gray-50">排序方式</span>

        <IconMore class="stroke-white" />
      </span>

      <!-- popup menu -->
      <Transition enter-from-class="opacity-0" leave-to-class="opacity-0">
        <div v-show="showSortByMenu" class="transition">
          <div class="fixed inset-0 z-10" @click="switchSortByMenu"></div>

          <div
            class="absolute inset-0 top-2 left-2 z-20 flex h-40 w-[132px] flex-col flex-nowrap rounded bg-white py-1 shadow-lg shadow-gray-300">
            <span
              v-for="(order, index) in sortBy"
              :key="index"
              class="cursor-default py-2 px-4 hover:bg-gray-100">
              {{ order.text }}
            </span>
          </div>
        </div>
      </Transition>
      <!---------------->

      <span
        class="rounded-l"
        :class="[className, sortByPositive ? focusClassName : null]"
        @click="sortBtn.positive">
        <IconSortPositive class="stroke-white" />
      </span>
      <span
        class="rounded-r"
        :class="[className, sortByPositive ? null : focusClassName]"
        @click="sortBtn.reversed">
        <IconSortReversed class="stroke-white" />
      </span>
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
