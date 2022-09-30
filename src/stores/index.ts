import { defineStore } from 'pinia'
import { computed, ref, watchEffect } from 'vue'
import { listDir } from '@/api/file'
import { useRoute } from 'vue-router'

const useDir = defineStore('file', () => {
  const route = useRoute()

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

  const classify = ref({ image: [], audio: [], video: [], code: [], document: [] })

  watchEffect(() => {
    if (route.name === 'image' || 'audio' || 'video' || 'code' || 'document') {
      // TODO
    }
  })

  const starred = ref([])

  watchEffect(() => {
    if (route.name === 'starred') {
      // TODO
    }
  })

  const recycled = ref([])

  watchEffect(() => {
    if (route.name === 'recycled') {
      // TODO
    }
  })

  const share = ref([])

  watchEffect(() => {
    if (route.name === 'share') {
      // TODO
    }
  })

  return { fullPath, currentDir, listOfCurrentDir, classify, starred, recycled, share }
})

export { useDir }
