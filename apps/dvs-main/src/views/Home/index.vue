<template>
  <div>store.bears: {{ bears }}</div>
  <n-button type="info" @click="add">add</n-button>
  <n-button type="info" @click="clear">clear</n-button>
  <n-button type="primary">naive-ui</n-button>
</template>
<script setup lang="ts">
import { testStore } from "sun-store"
import { NButton } from "naive-ui"

const bears = testStore((state: any) => state.bears)
const add = testStore((state: any) => state.add)
const clear = testStore((state: any) => state.clear)
</script>