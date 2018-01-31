<template>
  <div>
    <div style="padding: 16px 24px 0 24px">
      <el-breadcrumb separator="/" style="height: 30px; border-bottom: 1px solid #e8e8e8">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>业务管理</el-breadcrumb-item>
        <el-breadcrumb-item>补签</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="padding: 0 24px">
      <Tabs value="name1">
        <TabPane label="补签申请" name="name1">
          <t-save></t-save>
        </TabPane>
        <TabPane label="补签审核" name="name2">
          <t-examine></t-examine>
        </TabPane>
        <TabPane label="补签查看" name="name3">
          <t-info></t-info>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { tSave, tExamine, tInfo } from './pages/index'

export default {
  name: 'bq',
  components: { tSave, tExamine, tInfo },
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
