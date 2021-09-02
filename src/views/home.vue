<!--
 * @Author       : guth
 * @Date         : 2021-08-30 18:00:30
 * @LastEditors  : guth
 * @LastEditTime : 2021-09-02 12:14:18
 * @FilePath     : \vite-vue3-ts-template\src\views\home.vue
 * @Description  :
-->
<template>
  <div class="fd-info">
    <p>欢迎使用 .</p>
    <span class="fd-title">This is a template project for </span>
    <span class="fd-text"> Vite + Vue3.* + TS .</span>
  </div>
  <!-- <common-nav></common-nav> -->
</template>

<script lang="ts" setup>
// import commonNav from "../components/common-nav.vue";

</script>

<style lang="scss" scoped>
.fd-info {
  position: relative;
  top: 120px;
  text-align: center;
}
p {
  font-size: 32px;
  margin-bottom: 40px;
}
.fd-title {
  font-size: 28px;
  text-align: center;
}
.fd-text {
  font-size: 32px;
  font-style: italic;
  font-weight: 600;
  text-align: center;
  text-shadow: 5px 5px 8px #a66fee;
  color: #a66fee;
}
</style>