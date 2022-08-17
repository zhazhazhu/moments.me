<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";
import type { LayoutItem } from "vue3-grid-layout";
import { GridItem, GridLayout } from "vue3-grid-layout";
import { Moment } from "~/types";

const props = defineProps<{
  data: Moment[];
}>();

interface GridLayoutItem extends LayoutItem {
  data?: Moment;
}

const currentPage = ref(1);

const dataPage = computed(() => {
  return props.data.splice((currentPage.value - 1) * 6, currentPage.value * 6);
});

const { width } = useWindowSize();

const windowCol = computed(() => {
  return width.value > 1200
    ? 3
    : width.value > 996
    ? 3
    : width.value > 768
    ? 2
    : width.value > 480
    ? 2
    : 1;
});

const layout = computed<GridLayoutItem[]>(() => {
  let x = 0;
  let y = 0;
  return dataPage.value.map((item, i) => {
    x++;
    if (i - 1 === windowCol.value) {
      x = 0;
    }
    return {
      i: i,
      x: x - 1,
      y: i,
      w: 1,
      h: i % 2 === 0 ? 2 : 1,
      data: item,
    };
  });
});
</script>

<template>
  <div class="container m-auto">
    <GridLayout
      v-model:layout="layout"
      :col-num="6"
      :cols="{ lg: 3, md: 3, sm: 2, xs: 2, xxs: 1 }"
      :is-draggable="true"
      :is-resizable="true"
      :preventCollision="false"
      :responsive="true"
      :vertical-compact="true"
      :useStyleCursor="false"
      :margin="[20, 20]"
    >
      <GridItem
        v-for="item in layout"
        :key="item.i"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <img :src="item.data?.image" class="w-100% h-100%" />
        {{ item.data?.title }}
      </GridItem>
    </GridLayout>
  </div>
</template>

<style lang="less">
.vue-grid-item {
  border: 1px solid red;
}
.slick-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
