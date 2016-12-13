<template>
  <div id="app" :class="{'layout-collapsed': collapsed}">
    <header class="layout-header">
      <ul class="ngui2-nav">
          <li><a href="#"><i class="icon iconfont"></i> 链接</a></li>
          <li><a href="#">链接</a></li>
          <li><a href="#">链接</a></li>
          <li><a href="#">链接</a></li>
      </ul>
      <div class="menu-bar">
          <a href="#" @click="zysToggleMenu()"><i class="icon iconfont">&#xe622;</i></a>
      </div>
    </header>
    <div class="container-fluid">
      <div class="layout-content">
        <div class="layout-sidebar">
          <h1>网络诊断项目</h1>
          <h2>网络</h2>
          <section class="side-menu-section">
            <el-menu default-active="1" mode="vertical" style="margi;background-color: #2f353f">
              <el-menu-item index="1">
                <router-link to="/">
                  网络诊断
                </router-link>
              </el-menu-item>
              <el-menu-item index="2">导航二</el-menu-item>
              <el-menu-item index="3">导航三</el-menu-item>
            </el-menu>
          </section>
        </div>
        <div class="layout-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer class="layout-footer">@MT-Falcon 2017</footer>
  </div>
</template>

<script>

  import OriginData from "./components/OriginData.vue";
  export default {
    data () {
      return {
        collapsed: false
      }
    },
    methods: {
      zysToggleMenu () {
        this.collapsed = !this.collapsed;
      },
    },
    components: {
      OriginData: OriginData,
    },
  }
</script>