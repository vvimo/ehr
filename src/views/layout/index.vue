<template>
  <el-container>
    <el-header class="v-header">
      <navbar></navbar>
    </el-header>
    <el-container>
      <!-- 快捷菜单 -->
      <sidebar class="v-aside"></sidebar>
      <el-container style="position: relative">
        <!-- 功能菜单 -->
        <!-- <el-header class="v-palette" height="40px">
          <palette></palette>
        </el-header> -->
        <el-container>
          <!-- 内容 -->
          <app-main class="v-main"></app-main>
        </el-container>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import { Navbar, Sidebar, AppMain, Palette } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    Palette
  },
  data () {
    return {
    }
  },
  computed: {
    sidebar () {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wscn-icon
  float right
  margin-top 10px
  margin-right 10px
  
.el-dropdown-link
  color #eef3f7
</style>
