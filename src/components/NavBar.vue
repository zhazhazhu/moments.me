<script lang="ts" setup>
const isDark = useDark();

function toggleDark() {
  isDark.value = !isDark.value;
}
</script>

<template>
  <header class="header z-40">
    <router-link
      to="/"
      focusable="false"
      class="absolute lg:fixed m-6 select-none outline-none flex-center items-end"
    >
      <img src="/favicon.svg" width="30" height="30" />
      <span class="text-16px lt-md:hidden"> Zhazhazhu </span>
    </router-link>

    <nav class="nav">
      <div class="spacer" />
      <div class="right">
        <router-link to="/projects" title="PROJECTS">
          <span class="lt-md:hidden">PROJECTS</span>
          <div i-material-symbols-list-alt-rounded md:hidden text-18px />
        </router-link>
        <router-link to="/photo" title="PHOTO">
          <span class="lt-md:hidden">PHOTO</span>
          <div i-ic-round-insert-photo md:hidden text-18px />
        </router-link>
        <router-link to="/about" title="ABOUT">
          <span class="lt-md:hidden">ABOUT</span>
          <div i-material-symbols-sentiment-satisfied md:hidden text-18px />
        </router-link>
        <a
          href="https://twitter.com/Zhazhazhu_"
          target="_blank"
          title="Twitter"
          class="lt-md:hidden"
        >
          <feather-twitter />
        </a>
        <a
          href="https://github.com/zhazhazhu"
          target="_blank"
          title="GitHub"
          class="lt-md:hidden"
        >
          <div class="i-mdi-github-face text-24px" />
        </a>
        <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
          <ri-moon-line v-show="isDark" />
          <ri-sun-line v-show="!isDark" />
        </a>
      </div>
    </nav>
  </header>
</template>

<style lang="less" scoped>
.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}
.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}
.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.nav .right > * {
  margin: auto;
}
</style>
