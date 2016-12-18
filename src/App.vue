<template>
  <div id="app" :class="{'layout-collapsed': collapsed}">
    <header class="layout-header">
      <!--<ul class="ngui2-nav">
          <li><a href="#"><i class="icon iconfont"></i> 链接</a></li>
          <li><a href="#">链接</a></li>
          <li><a href="#">链接</a></li>
      </ul>-->
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
  import $ from 'jquery';
  import OriginData from "./components/OriginData.vue";
  export default {
    components: {
      OriginData: OriginData,
    },
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
        this.collapsed = !this.collapsed;
      },

      logout () {
        //后端接口清除登录状态
        this.logout()
      },

      getProfile () {
        $.ajax({
          url: '/dns/api/get_login_info/',
          type: 'GET',
          dataType: 'json',
          success: (data) => {
            console.log(data);
            if (data.username != '') {
              this.$store.dispatch('setUserName', data.username)
              this.user_name = this.$store.getters.getUserName;
              this.redirect_url = data.redirect_url;
            }else{
              window.location.href = data.redirect_url;
            }
          }
        })
      },

      logout () {
        window.location.href = this.redirect_url;
      }

    },
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