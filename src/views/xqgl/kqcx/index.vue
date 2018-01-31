<template>
  <div>
    <div style="padding: 16px 24px 0 24px">
      <el-breadcrumb separator="/" style="height: 30px; border-bottom: 1px solid #e8e8e8">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>考勤管理</el-breadcrumb-item>
        <el-breadcrumb-item>考勤查询</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="padding: 0 24px">
      <Tabs value="name1">
        <TabPane label="考勤详细查询" name="name1">
          <t-info></t-info>
        </TabPane>
        <TabPane label="日考勤查询" name="name2">
          <t-day></t-day>
        </TabPane>
        <TabPane label="月考勤查询" name="name3">
          <t-month></t-month>
        </TabPane>
        <TabPane label="加班记录查询" name="name4">
          <t-log></t-log>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { tInfo, tDay, tMonth, tLog } from './pages/index'

export default {
  name: 'kqcx',
  components: { tInfo, tDay, tMonth, tLog },
  data () {
    return {
    }
  },
  computed: {},
  methods: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
