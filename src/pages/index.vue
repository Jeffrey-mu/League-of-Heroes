<script setup lang="ts">
import axios from 'axios'
const heroseList = ref([])
axios.get('https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js').then((res) => {
  if (res.status === 200) {
    heroseList.value = res.data.hero.map((el) => {
      el.image = `https://game.gtimg.cn/images/lol/act/img/skinloading/${el.heroId * 1000}.jpg`
      return el
    })
  }
})
</script>

<template>
  <div w-80vw h-75vh flex="~ wrap" ma>
    <Heroe v-for="hero, key in heroseList" :key="key" :herose="hero" />
    <Goods v-for="hero, key in heroseList" :key="key" :herose="hero" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
