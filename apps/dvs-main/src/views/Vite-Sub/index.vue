<template>
  <WujieVue width="100%" height="50%" name="vite" :url="viteUrl1" />
  <WujieVue width="100%" height="50%" name="vite1" :url="viteUrl2" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const viteUrl1 = ref("//localhost:6100/");
const viteUrl2 = ref("//localhost:6200/");
</script>