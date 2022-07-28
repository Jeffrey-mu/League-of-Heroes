interface HeroTypeI {

}
export  const HeroPath: string = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js'
export const IMG_URL = 'https://game.gtimg.cn/images/lol/act/img/skinloading/'
export interface HERO_LIST<T> {
  ileName: string;
  fileTime: string;
  hero: T[];
  version: string;
}
export interface HEOR_ITME {
  image: string;
  heroId: number;
  roles: string[]
}
export const HeroType: HeroTypeI = [
  {
    name: '全部',
    value: '',
    pos: '',
  },
  {
    name: '法师',
    value: 'mage',
    pos: '中路',
  },
  {
    name: '刺客',
    value: 'assassin',
    pos: '中',
  },
  {
    name: '辅助',
    value: 'support',
    pos: '中',
  },
  {
    name: '坦克',
    value: 'tank',
    pos: '辅助',
  },
  {
    name: '战士',
    value: 'fighter',
    pos: '上单',
  },
  {
    name: '射手',
    value: 'marksman',
    pos: '下路',
  },
]
export const activeType = ref('')
export function handleType(type: string) {
  activeType.value = type
}
