<template>
  <el-container>
    <el-header style="height: 110px; padding: 0">
      <navbar></navbar>
    </el-header>
    <el-container>
      <!-- 内容 -->
      <app-main class="v-main"></app-main>
    </el-container>
  </el-container>
</template>

<script>
import { Navbar, AppMain } from './components'

export default {
  name: 'layout',
  components: { Navbar, AppMain },
  data () {
    return {}
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
