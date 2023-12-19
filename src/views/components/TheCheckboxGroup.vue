<template>
  <el-checkbox-group v-bind="$attrs">
    <slot />
  </el-checkbox-group>
</template>

<script lang="ts">
export default {
  name: "TheCheckboxGroup",
};
</script>
