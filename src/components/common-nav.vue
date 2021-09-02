<!--
 * @Author       : guth
 * @Date         : 2021-09-01 10:11:39
 * @LastEditors  : guth
 * @LastEditTime : 2021-09-01 16:18:11
 * @FilePath     : \nav-ui\src\components\common-nav.vue
 * @Description  : 公共导航
-->
<template>
  <div>
    <ul>
      <li v-for="item in navList" @click="navClick(item.lj)">{{ item.mc }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from "@vue/reactivity";
  import { Ref } from "vue";
  import { navDto } from "../res/interface/dto/nav.interface";
  import commonNavApi from "../res/api/commonNavApi";

  let navList: Ref<Array<navDto>> = ref([]);

  commonNavApi.getNavList().then((data: any) => {
    navList.value = data;
  });
  let navClick = (lj: string) => {
    window.open(lj, '_blank');
  }
</script>


<style lang="scss" scoped>
</style>