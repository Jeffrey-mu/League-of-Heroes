interface HeroTypeI {

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
