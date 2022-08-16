<script setup lang="ts">
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="px-10px">
    <router-view />
    <Footer />
  </main>
</template>
