import type { GOODS_ITME, GOODS_STRUT } from '~/composables/goods'
import { GOODS_PATH } from '~/composables/goods'
import { useStore } from '~/store/state'
export function getGoodsData() {
  const state = useStore()
  if (state.goodsList.length)
    return state.goodsList

  const [data, error] = useFetch<GOODS_STRUT<GOODS_ITME>>(GOODS_PATH)
  if (error.value)
    throw new Error(error.value)

  const GoodsList = computed(() => {
    state.setGoodsList(data.value?.items)
    return data.value?.items || []
  })
  return GoodsList
}
