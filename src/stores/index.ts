import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import { listDir } from '@/api/file'

const useDir = defineStore('file', () => {
  const fullPath = ref([])

  const currentDir = computed(() => fullPath.value[fullPath.value.length - 1] ?? 'root')

  // TODO
  const listOfCurrentDir = ref([
    { id: '0', name: '美丽人生.mkv', time: '1', size: '1', type: '' },
    { id: '1', name: 'HelloWorld.cs', time: '1', size: '1', type: '' },
    { id: '2', name: '1', time: '1', size: '1', type: '' },
  ])

  watchEffect(async () => {
    const { data } = await listDir(currentDir.value)

    listOfCurrentDir.value = data
  })

  return { fullPath, currentDir, listOfCurrentDir }
})

export { useDir }
