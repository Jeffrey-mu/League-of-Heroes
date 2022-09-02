<script setup lang="ts">
import { getData } from '~/api/hero'
import { getGoodsData } from '~/api/goods'
import { GLOBAL } from '~/enum'
const heroseList = getData()
const goodsList = getGoodsData()
</script>

<template>
  <div w-95vw h-85vh flex="~ wrap" justify-center ma>
    <Hero
      v-for="(hero, key) in heroseList"
      v-show="activeMenu === GLOBAL.HERO && (!activeType || hero.roles.includes(activeType))"
      :key="key"
      :herose="hero"
    />
    <template v-if="activeMenu === GLOBAL.GOODS">
      <Goods
        v-for="(goods, key) in goodsList"
        :key="key"
        :goods="goods"
      />
    </template>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
