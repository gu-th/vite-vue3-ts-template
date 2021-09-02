<!--
 * @Author       : guth
 * @Date         : 2021-09-01 14:59:25
 * @LastEditors  : guth
 * @LastEditTime : 2021-09-01 16:39:14
 * @FilePath     : \nav-ui\src\components\left-menu.vue
 * @Description  : 
-->
<template>
  <div class="fd-menu">
    <n-space vertical>
      <n-switch v-model:value="state.collapsed" />
      <n-layout has-sider>
        <n-layout-sider
          bordered
          collapse-mode="width"
          :collapsed-width="64"
          :width="240"
          :collapsed="state.collapsed"
          show-trigger
          @collapse="state.collapsed = true"
          @expand="state.collapsed = false"
        >
          <!-- :collapsed="collapsed" -->
          <n-menu
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="state.menuOptions"
            v-model:value="state.activeKey"
          />
        </n-layout-sider>
        <n-layout>
          <span>内容</span>
        </n-layout>
      </n-layout>
    </n-space>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "@vue/reactivity";
import groupApi from "../res/api/groupApi";
import { NSpace, NLayout, NMenu, NLayoutSider, NSwitch } from 'naive-ui'

// function renderIcon (icon) {
//   return () => h(NIcon, null, { default: () => h(icon) })
// }


const state = reactive({
  menuOptions: [{
    label: '常用链接',
    key: 'common-nav',
    // icon: renderIcon()
  }],
  activeKey: 'common-nav',
  collapsed: true,
})




let groups = ref([]);
groupApi.getGroupList().then((data: any) => {
  groups.value = data;
})

</script>

<style lang="scss">
.fd-menu {
  width: 200px;
  height: 100%;
  background-color: rgb(122, 188, 250);
}
</style>
