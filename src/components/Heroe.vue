<script setup lang="ts">
const { herose } = defineProps({
  herose: {
    type: Object,
    required: true,
  },
})
const avatarUrl = herose.image
const { isLoading } = useImage({ src: avatarUrl }, { delay: 2000 })
</script>

<template>
  <div w-40 h-60 m-2 border class="hero_item">
    <a href="" flex="~ col center">
      <div v-if="isLoading" class="h-52 animate-pulse bg-gray-500/9 p-2 b-rd-1" />
      <div v-else h-52 overflow="hidden" b-rd-1>
        <img :src="herose.image" alt="">
      </div>
      <div z-2 c-white>
        {{ herose.name }}
      </div>
    </a>
  </div>
</template>

<style scoped>
.hero_item:hover{
  transform: scale(1.1);
  transition: all 0.2s;
  border-color: rgba(255, 255, 0, 0.684);
}
.hero_item{transition: all 0.2s;}
</style>
