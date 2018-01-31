<template>
  <div>
    <div style="padding: 16px 24px 0 24px">
      <el-breadcrumb separator="/" style="height: 30px; border-bottom: 1px solid #e8e8e8">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>人力资源管理</el-breadcrumb-item>
        <el-breadcrumb-item>招聘管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="v-screen" style="margin-top: 5px">
      <el-input prefix-icon="el-icon-search" v-model="input" placeholder="请输入内容" style="width: 300px"></el-input>
      <el-button type="text" @click="screenOfnFun(screenOfn)" style="margin-left: 10px">
        筛选条件
        <i class="el-icon-arrow-down"></i>
      </el-button>
      <div class="v-screen-dropdown" v-if="screenOfn">
        <ul>
          <li style="line-height: 30px">
            <span style="float: left; margin-right: 30px">xxx名称</span>
            <el-radio v-model="radio" label="0">全部</el-radio>
            <el-radio v-model="radio" label="1">条件一</el-radio>
            <el-radio v-model="radio" label="2">条件二</el-radio>
          </li>
          <li style="line-height: 30px">
            <span style="float: left; margin-right: 30px">xxx名称</span>
            <el-checkbox-group v-model="checkList">
              <el-checkbox label="复选框 A"></el-checkbox>
              <el-checkbox label="复选框 B"></el-checkbox>
              <el-checkbox label="复选框 C"></el-checkbox>
              <el-checkbox label="禁用" disabled></el-checkbox>
              <el-checkbox label="选中且禁用" disabled></el-checkbox>
            </el-checkbox-group>
          </li>
        </ul>
      </div>
      <div style="padding-top: 5px">
        <span style="color: #999">筛选情况：</span>
        <el-tag size="mini" closable>条件一</el-tag>
        <el-tag size="mini" closable>复选框 A</el-tag>
      </div>
    </div>
    <div style="padding: 0 24px">
      <div style="padding-top: 20px">
        <el-button type="success" size="mini">
          <i class="el-icon-plus"></i>
          新增
        </el-button>
        <el-button type="danger" size="mini">
          <i class="el-icon-delete"></i>
          删除
        </el-button>
      </div>
      <el-table :data="tableData" :row-class-name="tableRowClassName" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]" :filter-method="filterTag" filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="margin-top: 15px" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
// import { Navbar, Sidebar, AppMain, Palette } from './components'

export default {
  name: 'lMain',
  data () {
    return {
      menuMap: [],
      screenOfn: false,
      input: '',
      radio: '1',
      checkList: ['复选框 A'],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '家'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        tag: '公司'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        tag: '家'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        tag: '公司'
      }],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    screenOfnFun (ofn) {
      this.screenOfn = !ofn
    },
    tableRowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.el-table
  .warning-row
    background oldlace
  .success-row
    background #f0f9eb
.el-table
  td
  th
    padding 10px 0
</style>
