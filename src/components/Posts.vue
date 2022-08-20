<script lang="ts" setup>
import { useWindowSize } from "@vueuse/core";
import { useCeil } from "@vueuse/math";
import type { LayoutItem } from "vue3-grid-layout";
import { Moment } from "~/types";
import AppLink from "./AppLink.vue";

const GridLayout = defineAsyncComponent(
  async () => (await import("vue3-grid-layout")).GridLayout
);

const GridItem = defineAsyncComponent(
  async () => (await import("vue3-grid-layout")).GridItem
);

const props = defineProps<{
  data: Moment[];
}>();

interface GridLayoutItem extends LayoutItem {
  data?: Moment;
}

const currentPage = ref(1);

const pageNum = 6;

const totalPageNum = useCeil(props.data.length / pageNum);

const dataPage = computed(() => {
  return props.data.slice(
    (currentPage.value - 1) * pageNum,
    currentPage.value * pageNum
  );
});

const { width } = useWindowSize();

const windowCol = computed(() => {
  return width.value > 1200
    ? 3
    : width.value > 996
    ? 2
    : width.value > 768
    ? 2
    : width.value > 480
    ? 2
    : 1;
});

const layout = computed<GridLayoutItem[]>(() => {
  let x = 0;
  let y = 0;
  let data: GridLayoutItem[] = [];
  dataPage.value.forEach((item, i) => {
    const rowNum = Math.floor(data.length / windowCol.value);
    const columnHeight =
      rowNum === 0 ? 0 : data[(rowNum - 1) * windowCol.value]?.h || 0;
    data.push({
      i: i,
      x: x,
      y: columnHeight,
      w: 1,
      h: (windowCol.value + rowNum + i) % 2 === 0 ? 3 : 2.5,
      data: item,
    });
    x++;
    y++;
    if (x === windowCol.value) {
      x = 0;
    }
  });
  return data;
});
</script>

<template>
  <div class="container m-auto">
    <GridLayout
      class="w-100% m-auto"
      v-model:layout="layout"
      :col-num="12"
      :cols="{ lg: 3, md: 3, sm: 2, xs: 2, xxs: 1 }"
      :is-draggable="false"
      :is-resizable="false"
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
        <div class="content w-100% h-100%">
          <img
            :src="item.data?.image"
            class=""
            fit="contain"
            :style="{ height: item.h === 3 ? '70%' : '60%' }"
          />
          <div class="flex-center m-t-10px">
            <template v-for="tag in item.data?.tags">
              <div class="m-w-100px px-4px text-12px">
                [{{ tag.toUpperCase() }}]
              </div>
            </template>
          </div>
          <div class="text-24px text-center my-10px">
            {{ item.data?.title }}
          </div>
          <div class="bottom-line w-28%"></div>
          <div class="text-center text-14px text-color-grey my-10px desc">
            {{ item.data?.description }}
          </div>
          <AppLink :to="item.data!.path">
            <button class="flex-center m-auto">Read More</button>
          </AppLink>
        </div>
      </GridItem>
    </GridLayout>

    <div class="page flex-center">
      <button v-show="currentPage !== 1" @click="currentPage--">
        Previous
      </button>
      <template v-for="page in totalPageNum" :key="page">
        <div
          class="mx-10px hover:cursor-pointer text-24px"
          :class="{ active: currentPage === page }"
          @click="currentPage = page"
        >
          {{ page }}
        </div>
      </template>
      <button v-show="currentPage !== totalPageNum" @click="currentPage++">
        Next
      </button>
    </div>
  </div>
</template>

<style lang="less" scoped>
button {
  color: #ff6f00;
}
.container {
  .vue-grid-item,
  .vue-grid-item.no-touch {
    touch-action: auto;
  }
}
.page > .active {
  font-size: 12px;
  border-bottom: 1px solid;
}
@media screen and (min-width: 1200px) and (max-width: 3000px) {
  .container {
    width: 1000px;
  }
}
@media screen and (max-width: 1200px) {
  .container {
    width: 700px;
  }
}
@media screen and (max-width: 992px) {
  .container {
    width: 790px;
  }
}
@media screen and (max-width: 768px) {
  .container {
    width: 520px;
  }
}
@media screen and (max-width: 576px) {
  .container {
    width: 100%;
  }
}
.container :deep(img) {
  object-fit: cover;
  width: 100%;
}
.container :deep(.desc) {
  max-height: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
