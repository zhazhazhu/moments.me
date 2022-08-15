<script setup lang="ts">
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <main class="px-7">
    <router-view />
  </main>
</template>
