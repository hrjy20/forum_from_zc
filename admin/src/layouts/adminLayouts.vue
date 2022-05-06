<template lang="pug">
block content
  .content_box
    .menu_left
      MenuLeft
    .real_content
      router-view
</template>


<script>
import MenuLeft from "./components/menuLeft.vue";
import { defineComponent, toRefs, reactive } from "vue";

export default defineComponent({
  components: { MenuLeft },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
.content_box {
  //   display: flex;
  .menu_left {
    width: 100%;
  }
  .real_content {
    padding: 16px;
  }
}
</style>