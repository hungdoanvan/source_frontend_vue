<template>
  <el-checkbox v-bind="$attrs">
    <slot />
  </el-checkbox>
</template>

<script lang="ts">
export default {
  name: "TheCheckbox",
};
</script>
