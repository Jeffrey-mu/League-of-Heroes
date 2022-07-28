import type { HERO_LIST, HEOR_ITME } from "~/composables/Heroes";
import { HeroPath, IMG_URL } from "~/composables/Heroes";
export function getData() {
  const [data, error] = useFetch<HERO_LIST<HEOR_ITME>>(HeroPath)
  const heroseList = computed(() => {
    if (!error.value) {
      data.value?.hero.map((el) => {
        el.image = `${IMG_URL + el.heroId * 1000}.jpg`;
        return el;
      });
    }
    return data.value?.hero || []
  })
  return heroseList
}
