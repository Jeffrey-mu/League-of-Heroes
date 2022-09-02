<script setup lang="ts">
const menuList = ref([
  {
    label: '英雄',
    id: 1,
  },
  {
    label: '物品',
    id: 2,
  },
])
</script>

<template>
  <div w-40 inline-block>
    <ul flex>
      <li v-for="menu in menuList" :key="menu.id" mr-2 :class="{ active: menu.id === activeMenu }" cursor-pointer hover="c-#fff transition-2" @click="handleMenu(menu)">
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
