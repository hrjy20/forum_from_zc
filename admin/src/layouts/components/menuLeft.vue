<template lang="pug">
block content
  a-menu(
    v-model:selectedKeys="selectedKeys",
    :open-keys="openKeys",
    @click="onOpenChange",
    mode="horizontal"
  )
    a-sub-menu(v-for="nav in navList", :key="nav.title")
      template(#title) {{ nav.title }}
      a-menu-item(v-for="(cNav, cIndex) in nav.child", :key="cNav.url") {{ cNav.title }}
</template>


<script>
import { message } from "ant-design-vue";
import { routerList } from "./columns/columns";
import { defineComponent, toRefs, reactive } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    let navList = routerList;
    const state = reactive({
      rootSubmenuKeys: ["sub1", "sub2", "sub4"],
      openKeys: [],
      selectedKeys: [],
    });
    // 跳转
    let router = useRouter();
    let onOpenChange = (e) => {
      e.key ? router.push(e.key) : message.info("暂无");
    };
    return {
      onOpenChange,
      ...toRefs(state),
      navList,
    };
  },
});
</script>
<style lang="less" scoped>
</style>