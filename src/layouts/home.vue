<script setup>
import { GLOBAL } from '~/enum'
</script>

<template>
  <main class="px-4 py-2 text-center text-gray-700 dark:text-gray-200" bg="#1a2026">
    <Header />

    <div>
      <LefeMenu />
      <button v-for="type in HeroType" :key="type.value" m-2 border pl-4 pr-4 hover="c-yellow" :class="{ 'c-yellow': activeType === type.value, 'cursor-not-allowed': activeMenu !== GLOBAL.HERO }" :disabled="activeMenu !== GLOBAL.HERO" @click="handleType(type.value)">
        {{ type.name }}
      </button>
    </div>

    <div overflow="auto" pt-2 flex="~ row">
      <RouterView />
    </div>
  </main>
</template>
