<script setup lang="ts">
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

useHead({
  meta: [
    { property: "og:title", content: "Zhazhazhu" },
    {
      property: "og:image",
      content:
        " https://cdn.jsdelivr.net/gh/zhazhazhu/image-hosting@master/root/WechatIMG235_ey7civ_.jpeg",
    },
    { name: "description", content: "Zhazhazhu's Portfolio" },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:creator", content: "@Zhazhazhu_" },
  ],
});
</script>

<template>
  <NavBar />
  <main class="px-10px">
    <router-view />
    <Footer />
  </main>
</template>
