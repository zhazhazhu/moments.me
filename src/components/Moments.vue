<script lang="ts" setup>
import { useRouter } from "vue-router";
import { Moment } from "~/types";
import Featured from "./Featured.vue";
import Posts from "./Posts.vue";

defineProps<{
  moments?: Moment[];
}>();

const router = useRouter();
const routes: Moment[] = router
  .getRoutes()
  .filter((i) => i.path.startsWith("/moments") && i.meta.frontmatter.date)
  .sort(
    (a, b) =>
      +new Date(b.meta.frontmatter.date) - +new Date(a.meta.frontmatter.date)
  )
  .filter((i) => !i.path.endsWith(".html"))
  .map((i) => ({
    path: i.path,
    image: import.meta.env.DEV
      ? i.meta.frontmatter.image
      : (i.meta.frontmatter.image as string).includes("http")
      ? i.meta.frontmatter.image
      : import.meta.env.VITE_CDN + i.meta.frontmatter.image,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    lang: i.meta.frontmatter.lang,
    duration: i.meta.frontmatter.duration,
    recording: i.meta.frontmatter.recording,
    tags: i.meta.frontmatter.tags,
    type: i.meta.frontmatter.type,
    description: i.meta.frontmatter.description,
  }));

const features = routes.filter((i) => i.type === "featured");

const posts = routes.filter((i) => i.type === "post");
</script>

<template>
  <div class="moments">
    <Featured :data="features"></Featured>
    <Posts :data="posts"></Posts>
  </div>
</template>

<style lang="less"></style>
