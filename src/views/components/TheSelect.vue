<template>
  <el-select v-bind="$attrs">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script lang="ts">
import { PropType } from "vue";

interface Option {
  value: number;
  label: string;
  disable?: boolean;
}

export default {
  name: "TheSelect",
  props: {
    options: {
      type: Array as PropType<Array<Option>>,
      required: false,
      default: () => [],
    },
  },
};
</script>
