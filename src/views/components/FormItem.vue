<template>
  <el-form-item>
    <div :class="['form-item', { [classModifier]: !!classModifier }]">
      <div
        :class="[
          'form-item__label',
          { 'form-item__label--spacing': labelSpacing },
        ]"
      >
        <slot name="label">
          <span>{{ label }}</span>
        </slot>
        <span v-if="required" class="tw-text-primary">*</span>
      </div>
      <div class="form-item__content">
        <slot />
      </div>
    </div>
  </el-form-item>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormItem",

  props: {
    label: {
      type: String,
      required: false,
      default: () => "",
    },

    required: Boolean,

    labelSpacing: Boolean,

    grid: {
      type: String,
      required: false,
      default: () => "",
    },
  },

  computed: {
    classModifier(): string {
      return this.grid ? `form-item--${this.grid}` : "";
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/components/form-item.scss";
</style>
