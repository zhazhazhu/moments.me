<script lang="ts" setup>
import type { Photo } from "~/types";

const { photos } = defineProps<{
  photos: Photo[];
}>();
</script>

<template>
  <main class="photos m-auto">
    <template v-for="item in photos">
      <img :src="item.path" alt="loading error" class="h-240px py-6px w-100%" />
    </template>
  </main>
</template>

<style lang="less" scoped>
@media screen and (min-width: 700px) {
  .photos {
    width: 700px;
    column-count: 3;
  }
}
@media screen and (max-width: 700px) {
  .photos {
    width: 100%;
    column-count: 1;
  }
}
.photos :deep(img) {
  object-fit: cover;
}
</style>
