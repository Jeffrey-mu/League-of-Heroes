<script setup lang="ts">
const menuList = ref([
  {
    label: '英雄列表',
    id: 1,
  },
  {
    label: '物品列表',
    id: 2,
  },
])
</script>

<template>
  <div w-40>
    <ul>
      <li v-for="menu in menuList" :key="menu.id" :class="{ active: menu.id === activeMenu }" hover="c-#fff transition-2" @click="handleMenu(menu)">
        {{ menu.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.active {
  color: #fff;
}
</style>
