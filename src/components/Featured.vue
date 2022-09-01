<script lang="ts" setup>
import { useSlide } from "@qzzhu/core";
import { Moment } from "~/types";

const { data } = defineProps<{
  data: Moment[];
}>();

const { value, last, next, resume } = useSlide(data, {
  intervalTime: 8000,
});

function onSwipe(direction: "left" | "right" | "top" | "bottom") {
  if (direction === "left") next();
  if (direction === "right") last();
  resume && resume();
}

const featuresRef = ref<HTMLElement>();

onMounted(() => {
  featuresRef.value?.addEventListener("scroll", (e) => {
    e.preventDefault();
  });
});
</script>

<template>
  <div
    class="features text-center w-100%"
    v-touch:swipe.passive="onSwipe"
    ref="featuresRef"
  >
    <TransitionGroup name="list" tag="ul">
      <div
        v-for="(item, i) in value"
        :key="item.path"
        class="slick-slide relative w[calc(25%-10px)] mx-5px"
      >
        <img :src="item.image" />
        <div class="img-overlay"></div>
        <div
          class="card-content absolute bottom-0 w-100% h-180px text-center p-30px"
        >
          <div class="text-13px">
            {{ item.title }}
          </div>
          <div class="text-28px">
            {{ item.description }}
          </div>
          <AppLink :to="item.path">
            <button
              class="b-1px px-14px py-4px m-t-10px hover:bg-white hover:text-#2b2b2b b-color-white"
            >
              Read More
            </button>
          </AppLink>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<style lang="less" scoped>
.list-move {
  transition: all 0.5s ease;
}
.features {
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: hidden;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #fff;
}
.img-overlay::before {
  position: absolute;
  content: "";
  background: linear-gradient(transparent 40%, rgba(0, 0, 0, 0.5));
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
.slick-slide {
  white-space: nowrap;
  display: inline-block;
  @media (max-width: 768px) {
    width: calc(100% - 10px);
  }
  @media (max-width: 1200px) and (min-width: 768px) {
    width: calc(100% / 3);
  }
}

.slick-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
