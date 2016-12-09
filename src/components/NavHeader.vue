<template>
  <el-menu theme="light" default-active="1" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">网络诊断</el-menu-item>
  </el-menu>
</template>


<script>
  export default {
    data: function () {
      return {
        user: 'zhaoyoushuai'
      }
    },
    methods: {
      handleSelect: function() {
        alert("navigator");
      }
    }
  }
</script>