<template>
  <el-container>
    <el-header style="height: 30px">
      <el-breadcrumb separator="/" style="line-height: 30px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>人力资源管理</el-breadcrumb-item>
        <el-breadcrumb-item>招聘管理</el-breadcrumb-item>
      </el-breadcrumb>
    </el-header>
    <el-header style="height: 30px; line-height: 30px">
      筛选条件
    </el-header>
    <el-main style="padding: 0 20px; margin: 10px 0">
      <el-card class="box-card">
        <div>
          <el-button type="success" size="mini" icon="el-icon-plus"></el-button>
          <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </div>
        <el-table :data="tableData" style="width: 100%; margin-top: 20px">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
    </el-main>
    <el-footer style="height: 40px">
      <el-pagination style="margin-top: 4px" background layout="prev, pager, next" :total="1000">
      </el-pagination> 
    </el-footer>
  </el-container>
</template>

<script>
// import { Navbar, Sidebar, AppMain, Palette } from './components'

export default {
  name: 'lMain',
  data () {
    return {
      menuMap: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
