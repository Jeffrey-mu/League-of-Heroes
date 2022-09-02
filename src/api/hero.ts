import type { HEOR_ITME, HERO_STRUCT } from '~/composables/Heroes'
import { HeroPath, IMG_URL } from '~/composables/Heroes'
import { useStore } from '~/store/state'
export function getData() {
  const state = useStore()
  if (state.horeList && state.horeList.length)
    return state.horeList

  const [data, error] = useFetch<HERO_STRUCT<HEOR_ITME>>(HeroPath)
  const heroseList = computed(() => {
    if (!error.value) {
      data.value?.hero.map((el) => {
        el.image = `${IMG_URL + el.heroId * 1000}.jpg`
        return el
      })
    }
    state.setHoreList(data.value?.hero)
    return data.value?.hero || []
  })
  return heroseList
}
