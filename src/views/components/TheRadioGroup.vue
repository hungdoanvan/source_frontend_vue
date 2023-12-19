<template>
  <el-radio-group v-bind="$attrs">
    <slot />
  </el-radio-group>
</template>

<script lang="ts">
export default {
  name: "TheRadioGroup",
};
</script>
