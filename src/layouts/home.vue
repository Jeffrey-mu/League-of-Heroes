<template>
  <main class="px-4 py-5 text-center text-gray-700 dark:text-gray-200" bg="#1a2026">
    <Header />
    <div>
      <button v-for="type in HeroType" :key="type.value" m-2 border pl-4 pr-4 hover="c-yellow" :class="{ 'c-yellow': activeType === type.value }" @click="handleType(type.value)">
        {{ type.name }}
      </button>
    </div>
    <div overflow="auto" pt-10 flex="~ row">
      <LefeMenu />
      <RouterView />
    </div>
  </main>
</template>
