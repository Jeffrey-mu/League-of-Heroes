
<script setup lang="ts">
import {getData} from '~/api/hero'
const heroseList = getData()
</script>
<template>
  <div w-95vw h-75vh flex="~ wrap justify-evenly" ma >
    <Heroe
        v-for="(hero, key) in heroseList"
      v-show="!activeType || hero.roles.includes(activeType)"
      :key="key"
      :herose="hero"
    />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
