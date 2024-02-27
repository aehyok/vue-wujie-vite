<template>
  <div>store.bears: {{ bears }}</div>
  <button @click="add">add</button>
  <button @click="clear">clear</button>
</template>
<script setup lang="ts">
import { testStore } from "sun-store"

const bears = testStore((state: any) => state.bears)
const add = testStore((state: any) => state.add)
const clear = testStore((state: any) => state.clear)
</script>