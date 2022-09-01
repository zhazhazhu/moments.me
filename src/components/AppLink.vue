<template>
  <a
    v-if="isExternalLink"
    v-bind="$attrs"
    :href="to"
    target="_blank"
    class="text-white!"
  >
    <slot />
  </a>
  <router-link v-else v-bind="$props" class="text-white!">
    <slot />
  </router-link>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  to: string;
}>();

const isExternalLink = computed(() => {
  return typeof props.to === "string" && props.to.startsWith("http");
});
</script>
