<template>
  <div id="app">
    <div>
      <el-menu theme="light" default-active="1" mode="horizontal">
        <el-menu-item index="1">
          <router-link to="/">
            网络诊断
          </router-link>
        </el-menu-item>
      </el-menu>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

  import OriginData from "./components/OriginData.vue";
  export default {

    components: {
      OriginData: OriginData,
    },
  }
</script>