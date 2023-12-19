<template>
  <el-form v-bind="$attrs" ref="ruleForm">
    <el-alert v-show="isShowAlert" title="error alert" type="error" />
    <slot />
  </el-form>
</template>

<script lang="ts">
export default {
  name: "TheForm",
  data() {
    return {
      isShowAlert: false,
    };
  },

  // methods: {
  //   validate() {
  //     this.isShowAlert = false;
  //     const refForm = this.$refs.ruleForm as any;

  //     refForm.validate((valid: any) => {
  //       if (valid) {
  //         console.log(123);
  //       } else {
  //         this.isShowAlert = true;
  //       }
  //     });
  //   },
  // },
};
</script>
