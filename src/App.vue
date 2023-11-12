<template>
  <DefaultLayout>
    <router-view />
  </DefaultLayout>
</template>

<script lang="ts">
import DefaultLayout from "@/views/layout/Default.vue";

export default {
  components: {
    DefaultLayout,
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");

body {
  font-family: Poppins, sans-serif;
}
</style>
