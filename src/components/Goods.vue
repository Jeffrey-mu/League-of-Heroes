<script setup lang="ts">
const { goods } = defineProps({
  goods: {
    type: Object,
    required: true,
  },
})
const TipMore = ref()
const goodsCard = ref()

const position = ref(
  {
    x: 0,
    y: 0,
  },
)
const show = ref(false)
const avatarUrl = goods.iconPath
const { isLoading } = useImage(
  { src: avatarUrl },
  { delay: 2000 },
)
const mouseEnter = function (e: MouseEvent) {
  const { x: mousex, y: mousey } = e
  if (!show.value) {
    show.value = true
    nextTick(() => {
      const { innerWidth, innerHeight } = window as any
      const { offsetWidth, offsetHeight } = TipMore.value

      position.value = {
        x: mousex + 20, y: mousey + 20,
      }

      if (innerWidth - mousex < offsetWidth)
        position.value.x = mousex - offsetWidth

      if (innerHeight - mousey < offsetHeight)
        position.value.y = mousey - offsetHeight
    })
  }
}

const TipStyle = computed(() => {
  return { position: 'fixed', top: `${position.value.y}px`, left: `${position.value.x}px` }
})
const mouseLeave = function () {
  show.value = false
}
</script>

<template>
  <div ref="goodsCard">
    <div w-20 h-30 m-2 border class="hero_item" @mouseenter.self.stop="mouseEnter" @mouseleave.self.stop="mouseLeave">
      <div href="" flex="~ col center">
        <div v-if="isLoading" class="h-52 animate-pulse bg-gray-500/9 p-2 b-rd-1" />
        <div v-else h-20 overflow="hidden" b-rd-1>
          <img :src="goods.iconPath" alt="" ma mt-2>
        </div>
        <div z-2 c-white fs-12 style="font-size: 12px" v-html="goods.name" />
      </div>
    </div>
    <div v-show="show" ref="TipMore" :style="TipStyle" border bg-black z-3 p-3 max-w-xl>
      <div flex>
        <span c-orange>{{ goods.name }}</span> <span px-2>售价或合成费用</span><span c-orange>{{ goods.price }}</span>
      </div>
      <p text-left c-gray v-html="goods.description" />
    </div>
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
