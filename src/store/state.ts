import { acceptHMRUpdate, defineStore } from 'pinia'
import type { GOODS_ITME } from '~/composables/goods'
import type { HEOR_ITME } from '~/composables/Heroes'
import type { toArray } from '~/types'
export const useStore = defineStore('state', () => {
  const goodsList = ref<toArray<GOODS_ITME>>([])
  const horeList = ref<toArray<HEOR_ITME>>([])
  function setGoodsList(data: toArray<GOODS_ITME>) {
    goodsList.value = data
  }
  function setHoreList(data: toArray<HEOR_ITME>) {
    horeList.value = data
  }

  return {
    goodsList,
    horeList,
    setGoodsList,
    setHoreList,
  }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
