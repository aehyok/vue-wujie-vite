<template>
  <WujieVue width="100%" height="50%" name="vite" :url="viteUrl1" />
  <WujieVue width="100%" height="50%" name="vite1" :url="viteUrl2" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const viteUrl1 = ref("//localhost:1110/");
const viteUrl2 = ref("//localhost:120/");
</script>