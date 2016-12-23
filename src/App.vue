<template>
  <div id="app" :class="{'layout-collapsed': collapsed}">
    <header class="layout-header">
      <div class="login">
        <el-dropdown>
          <span class="el-dropdown-link">
            你好，{{ user_name }}<i class="el-icon-caret-bottom el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><a @click="logout">登出</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="menu-bar">
          <a href="#" @click="zysToggleMenu()"><i class="icon icon-bars"></i></a>
      </div>
    </header>
    <div class="container-fluid">
      <div class="layout-content">
        <div class="layout-sidebar">
          <div style="height:60px;">
            <h1>Diagnose</h1>
            <h2>Diagnose</h2>
          </div>
          <div>
            <ngui2-menu :collapsed="collapsed" :unique-opened="false" :router="true">
              <ngui2-submenu index="1">
                  <template slot="title"><i class="icon icon-bars"></i> 网络诊断</template>
                  <ngui2-menu-item index="/">诊断记录</ngui2-menu-item>
              </ngui2-submenu>
            </div>
        </div>
        <div class="layout-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer class="layout-footer">&copy;2017 ZYS</footer>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'app',
    data () {
      return {
        user_name: '',
        collapsed: false,
        redirect_url: ''
      }
    },
    mounted () {
      this.getProfile()
    },
    methods: {
      zysToggleMenu () {
        this.collapsed = !this.collapsed
      },
      logout () {
        // 后端接口清除登录状态
        this.logOut()
      },
      getProfile () {
        $.ajax({
          url: '/dns/api/get_login_info/',
          type: 'GET',
          dataType: 'json',
          success: (data) => {
            console.log(data)
            if (data.username !== null & data.username !== '') {
              this.$store.dispatch('setUserName', data.username)
              this.user_name = this.$store.getters.getUserName
              this.redirect_url = data.redirect_url
            } else {
              window.location.href = data.redirect_url
            }
          }
        })
      },
      logOut () {
        window.location.href = '/dns/api/logout/'
      }
    }
  }
</script>
<style>
.login {
  display: block;
  padding-top: 20px;
  float: right;
  margin: 0;
}
</style>
