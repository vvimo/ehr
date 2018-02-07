<template>
  <div style="padding: 20px">
    <div style="background: #dfdfdf; height: 50px; line-height: 50px; border: 1px solid #d2d2d2; padding: 0 20px">
      <el-breadcrumb class="f-l" separator=">" style="line-height: 50px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="f-r">
        <el-button size="mini" icon="el-icon-upload2">导入</el-button>
        <el-button size="mini" icon="el-icon-download">导出</el-button>
        <el-button size="mini" icon="el-icon-plus">新增</el-button>
        <el-input placeholder="请选择日期" prefix-icon="el-icon-search" suffix-icon="el-icon-caret-bottom" v-model="input2" size="mini" style="width: 200px"></el-input>
      </div>
    </div>
    <div style="padding: 10px 15px; border: 1px solid #c0c0c0; background: #cdcdcd">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input size="small" placeholder="请输入内容" v-model="input3">
            <template slot="prepend">名称</template>
          </el-input>
        </el-col>
        <el-col :span="12">
          <el-input size="small" placeholder="请输入内容" v-model="input3">
            <template slot="prepend">规则</template>
          </el-input>    
        </el-col>
      </el-row>
    </div>
    <el-table border stripe class="kqdz" :data="tableData" style="width: 100%">
      <el-table-column prop="a" label="考勤地点名称"></el-table-column>
      <el-table-column prop="b" label="城市名称"></el-table-column>
      <el-table-column prop="c" label="微信经度-X"></el-table-column>
      <el-table-column prop="d" label="微信经度-Y"></el-table-column>
      <el-table-column prop="e" label="微信误差范围"></el-table-column>
      <el-table-column prop="f" label="APP经度-X"></el-table-column>
      <el-table-column prop="g" label="APP经度-Y"></el-table-column>
      <el-table-column prop="h" label="APP误差范围"></el-table-column>
      <el-table-column prop="i" label="指定规则"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="height: 70px; line-height: 70px; position: fixed; left: 0; right: 0; bottom: 0; padding: 0 20px; z-index: 9; background: #fff; border-top: 1px solid #eee" align="center">
      <el-button size="small">上一页</el-button>
      <el-button size="small">首页</el-button>
      <span class="el-button el-button--text el-button--small" style="min-width: 26px;">1</span>
      <el-button size="small">尾页</el-button>
      <el-button size="small">下一页</el-button>
      <span class="f-r" style="font-size: 14px">
        <span>
          每页显示
          <span style="color: #55b0ff">13</span>
          条
        </span>
        <span style="margin-left: 10px">
          共
          <span>5</span>
          页
        </span>
      </span>
    </div>
    <el-dialog class="kqdz" title="新增地点管理" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <div>
        这是一段信息
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogVisible = false" icon="el-icon-plus">继续新增</el-button>
        <el-button size="small" @click="dialogVisible = false">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'kqcx',
  components: {},
  data () {
    return {
      dialogVisible: true,
      input2: '',
      input3: '',
      tableData: [{
        a: 'a',
        b: 'a',
        c: 'a',
        d: 'a',
        e: 'a',
        f: 'a',
        g: 'a',
        h: 'a',
        i: 'a'
      }, {
        a: 'a',
        b: 'a',
        c: 'a',
        d: 'a',
        e: 'a',
        f: 'a',
        g: 'a',
        h: 'a',
        i: 'a'
      }]
    }
  },
  computed: {},
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？').then(_ => {
        done()
      }).catch(_ => {})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.kqdz
  & .el-table__body-wrapper
    overflow inherit
  &.el-table
    tr
      background #dcdcdc
      &.el-table__row
        background #fff
    th
      padding 8px 0
      font-size 16px
      font-weight 100
      color #000
      background transparent
  &.el-table td
    padding 1px 0
    font-size 14px
    color #666
    border-bottom none
  &.el-table--border
  &.el-table--group
    border 1px solid #d2d2d2
  &.el-table th.is-leaf
  &.el-table--border th
    border-right 1px solid #bec0c0
    border-bottom 1px solid #bec0c0
  &.el-table td
  &.el-table--border td
    border-right 1px solid rgba(220, 222, 223, .5)
  &.el-table--striped .el-table__body tr.el-table__row--striped td
  &.el-table--striped .el-table__body tr.el-table__row:hover td
    background transparent
  &.el-table--striped .el-table__body tr.el-table__row--striped 
    background rgba(77, 140, 190, .08)
  &.el-table--striped .el-table__body tr.el-table__row:hover
    background rgba(85, 176, 255, .5)
    
  .el-dialog__header
    padding 0 0 0 20px
    height 40px
    line-height 40px
    background #55b0ff
  .el-dialog__title
    font-size 16px
    color #fff
  .el-dialog__headerbtn
    top 0
    .el-dialog__close
      color #fff
  .el-dialog__body
    padding 15px 45px
  .el-dialog__footer
    padding 15px 0 30px
    margin 0 45px
    border-top 1px solid #eee
</style>
