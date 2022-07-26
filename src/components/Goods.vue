<script setup lang="ts">
defineProps({
  herose: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div w-40 h-60 m-2 border class="hero_item">
    <a href="" flex="~ col center">
      <div h-52 overflow="hidden" b-rd-1>
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
