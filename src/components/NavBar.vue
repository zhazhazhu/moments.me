<script lang="ts" setup></script>

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
        <router-link to="/project" title="PROJECT">
          <span class="lt-md:hidden">Project</span>
          <div i-ri-article-line md:hidden />
        </router-link>
        <router-link to="/about" title="ABOUT">
          <span class="lt-md:hidden">About</span>
          <div i-ri-article-line md:hidden />
        </router-link>
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
}

.nav .right > * {
  margin: auto;
}
</style>
