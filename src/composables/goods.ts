export const GOODS_PATH = 'https://game.gtimg.cn/images/lol/act/img/js/items/items.js'
export interface GOODS_STRUCT<T> {
  fileName: string
  fileTime: string
  items: T[]
  tree: object[]
  version: string
}
export interface GOODS_ITME {
  description: string
  from: string
  iconPath: string
  into: string[]
  itemId: string
  keywords: string
  maps: string[]
  name: string
  plaintext: string
  price: number
  sell: number
  suitHeroId: string
  tag: string
  total: number
  types: string[]
}
