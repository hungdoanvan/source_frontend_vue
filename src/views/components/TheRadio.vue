<template>
  <el-radio v-bind="$attrs">
    <slot />
  </el-radio>
</template>

<script lang="ts">
export default {
  name: "TheRadio",
};
</script>
