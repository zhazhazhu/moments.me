<script lang="ts" setup>
import { Moment } from "~/types";
import AppLink from "./AppLink.vue";

defineProps<{
  routes: Moment[];
}>();
</script>

<template>
  <div class="w-100% features">
    <div
      v-for="(route, idx) in routes"
      :key="route.path"
      class="slick-slide relative w-350px h-400px"
    >
      <img :src="route.image" />
      <div class="img-overlay"></div>
      <div
        class="card-content absolute bottom-0 w-100% h-180px text-center p-30px"
      >
        <div class="text-13px">
          {{ route.title }}
        </div>
        <div class="text-28px">
          {{ route.description }}
        </div>
        <AppLink :to="route.path">
          <button class="b-1px px-14px py-4px m-t-10px">Read More</button>
        </AppLink>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.features {
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
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
}

.slick-slide img {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
