<template>
  <el-image
    v-bind="$attrs"
    :src="url || ($attrs.src as string) || '/no-image.png'"
    @error="onError"
  >
  </el-image>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface DataProps {
  url: string;
}

export default defineComponent({
  name: "TheImg",

  data(): DataProps {
    return {
      url: "",
    };
  },

  methods: {
    onError() {
      this.url = "/no-image.png";
    },
  },
});
</script>
