import { acceptHMRUpdate, defineStore } from 'pinia'
import type { GOODS_ITME } from '~/composables/goods'
import type { HEOR_ITME } from '~/composables/Heroes'
import type { toArray } from '~/types'
export const useStore = defineStore('state', () => {
  /**
   * Current name of the user.
   */
  const goodsList = ref<toArray<GOODS_ITME>>([])
  const horeList = ref<toArray<HEOR_ITME>>([])
  function setGoodsList(data: toArray<GOODS_ITME>) {
    goodsList.value = data
  }
  function setHoreList(data: toArray<HEOR_ITME>) {
    horeList.value = data
  }
  /**
   * Changes the current name of the user and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */

  return {
    goodsList,
    horeList,
    setGoodsList,
    setHoreList,
  }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot))
