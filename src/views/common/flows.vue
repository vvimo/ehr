<template>
  <div class="cm-flows">
    <div style="background: #dfdfdf; height: 50px; line-height: 50px; border: 1px solid #d2d2d2; padding-left: 20px">
      <el-row>
        <el-col :span="18">
          <el-breadcrumb separator=">" style="line-height: 50px;">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>业务管理</el-breadcrumb-item>
            <el-breadcrumb-item>补签</el-breadcrumb-item>
          </el-breadcrumb>
        </el-col>
        <el-col :span="6">
          <div class="el-steps el-steps--simple">
            <div class="el-step is-simple" style="flex-basis: 25%; margin-right: 0px;" v-for="(item, index) in list" :key="index">
              <div class="el-step__main">
                <div class="el-step__title" :class="item.class" @click="btnFun(index)">{{ item.name }}</div>
                <div class="el-step__arrow"></div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div>
      <div style="margin-bottom: -20px; padding: 20px">
        <el-alert v-if="flowActive === 1" title="复核通过" type="success" :closable="false"></el-alert>
        <el-alert v-if="flowActive === 2" title="审核失败: '失败原因'" type="error" :closable="false"></el-alert>
      </div>
      <div style="padding: 20px">
        <div v-if="flowActive === 0">
          <cm-service :type="form.type"></cm-service>
        </div>
        <div v-show="flowActive !== 0">
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">姓名</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">张三</span>
            </el-col>
            <el-col :span="2" align="right">
              <span class="color-title">员工编号</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">XJ0001</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">部门</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">研发部</span>
            </el-col>
            <el-col :span="2" align="right">
              <span class="color-title">岗位</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">工程师</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">补签日期</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">2018-02-12</span>
            </el-col>
            <el-col :span="2" align="right">
              <span class="color-title">补签原因</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">忘打卡</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">上班时间</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">08:30:00</span>
            </el-col>
            <el-col :span="2" align="right">
              <span class="color-title">下班时间</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">20:01:21</span>
            </el-col>
          </el-row>
        </div>
        <div v-show="flowActive === 1">
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">复核人</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">赵四</span>
            </el-col>
            <el-col :span="2" align="right">
              <span class="color-title">复核部门</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">复核部</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">复核时间</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">2018-02-13</span>
            </el-col>
          </el-row>
        </div>
        <div v-show="flowActive === 2">
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">审核人</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">赵四</span>
            </el-col>
            <el-col :span="2" align="right">
              <span class="color-title">审核部门</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">复核部</span>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="2" align="right">
              <span class="color-title">审核时间</span>
            </el-col>
            <el-col :span="10">
              <span class="color-span">2018-02-13</span>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div style="height: 70px; line-height: 70px; position: fixed; left: 0; right: 0; bottom: 0; padding: 0 20px; z-index: 9; background: #fff; border-top: 1px solid #eee" align="center" v-if="flowActive === 3 || flowActive === 0">
      <el-button size="small" type="danger" @click="open3" v-if="flowActive === 3">拒绝</el-button>
      <el-button size="small" type="success" v-if="flowActive === 3">批准</el-button>
      <el-button size="small" v-if="flowActive === 0">取消</el-button>
      <el-button size="small" type="primary" v-if="flowActive === 0">提交</el-button>
    </div>
  </div>
</template>

<script>
import { cmService } from '@/views/common'
export default {
  name: 'flows',
  components: { cmService },
  data () {
    return {
      flowActive: 3,
      form: {
        type: 'bq'
      },
      list: [{
        name: '提交',
        class: 'is-success'
      }, {
        name: '复核',
        class: 'is-success'
      }, {
        name: '审核',
        class: 'is-error'
      }, {
        name: '审批',
        class: 'is-finish'
      }, {
        name: '结束',
        class: 'is-wait'
      }]
    }
  },
  computed: {},
  methods: {
    btnFun (tag) {
      if (tag === 4) return
      this.flowActive = tag
    },
    open3() {
      this.$prompt('请输入拒绝理由', 'XX意见', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: 'XX意见: ' + value
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        });       
      });
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.color-title
  display inline-block
  color #666
  line-height 1.6em
  padding 5px 0
.color-span
  display inline-block
  color #409EFF
  line-height 1.6em
  border-left 1px solid #f3f3f3
  padding 5px
.color-input
  padding 5px
.cm-flows
  padding 20px
  .el-steps
    padding 15px 0
    background transparent
  .el-step__title
    font-size 14px
    cursor pointer
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
