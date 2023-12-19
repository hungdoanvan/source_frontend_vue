<template>
  <span
    class="text-ellipsis overflow-hidden"
    :style="{
      '-webkit-line-clamp': rows,
      '-webkit-box-orient': 'vertical',
      display: inline ? '-webkit-inline-box' : '-webkit-box',
    }"
  >
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextEllipsis",

  props: {
    rows: {
      type: Number,
      required: false,
      default: 2,
    },
    inline: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
});
</script>
