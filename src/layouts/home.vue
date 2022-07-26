<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200" bg="#1a2026">
    <Header />
    <div overflow="auto" pt-10 flex="~ row">
      <LefeMenu />
      <RouterView />
    </div>
  </main>
</template>
