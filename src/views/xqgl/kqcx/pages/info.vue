<template>
  <div>
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem label="员工标识" :label-width="60">
          <Input type="text" v-model="formInline.partyIdSend" placeholder="" clearable @on-focus="focus"></Input>
        </FormItem>
        <FormItem label="部门" :label-width="60">
          <Cascader :data="data1" v-model="formInline.selectItem" change-on-select></Cascader>
        </FormItem>
        <FormItem label="开始日期" :label-width="80">
          <el-date-picker v-model="formInline.startDate" type="date" value-format="yyyy/MM/dd HH:mm:ss"></el-date-picker>
        </FormItem>
        <FormItem label="结束日期" :label-width="80">
          <el-date-picker v-model="formInline.endDate" type="date" value-format="yyyy/MM/dd HH:mm:ss"></el-date-picker>
        </FormItem>
        <FormItem :label-width="20">
          <Button type="primary" @click="handleSubmit">查询</Button>
        </FormItem>
      </Form>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="partyId" label="员工编号"></el-table-column>
        <el-table-column prop="firstName" label="员工名称"></el-table-column>
        <el-table-column prop="addressName" label="地点"></el-table-column>
        <el-table-column prop="remark" label="工作内容"></el-table-column>
        <el-table-column prop="attendanceDate" label="打卡时间"></el-table-column>
        <el-table-column prop="fromTypeName" label="出勤类型"></el-table-column>
        <el-table-column prop="locationX" label="打卡坐标X"></el-table-column>
        <el-table-column prop="locationY" label="打卡坐标Y"></el-table-column>
      </el-table>
      <el-pagination background layout="prev, pager, next" @current-change="currentChange" :total="pages.total" v-show="pages.total > 0"></el-pagination>
    </div>
    <Modal v-model="modal2" width="800">
      <tl-model :value="formInline.number" :page-size="formInline.viewSize" :data="modalData" v-on:change="getNumber"></tl-model>
    </Modal>
  </div>
</template>

<script>
import { getKaoqinInfo } from '@/api/kaoqin'

export default {
  components: {},
  data () {
    return {
      modal2: false,
      tableData: [],
      pages: {
        size: 10,
        index: 1,
        total: 0
      },
      formInline: {
        viewSize: 10,
        viewIndex: 1,
        partyIdSend: '',
        selectItem: [],
        startDate: '',
        endDate: '',
        attendanceDaliyDate: '',
        partyIdFrom: ''
      },
      ruleInline: {},
      data1: [{
        value: 'keji',
        label: '科技部',
        children: [
          {
            value: 'gugong',
            label: '研发'
          },
          {
            value: 'tiantan',
            label: '运维'
          }
        ]
      }, {
        value: 'shiye',
        label: '事业部',
        children: [
          {
            value: 'nanjing',
            label: '市场',
            children: [
              {
                value: 'fuzimiao',
                label: '宣传'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '人力',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '招聘'
              }
            ]
          }
        ]
      }],
      modalData: []
    }
  },
  computed: {},
  methods: {
    handleSubmit () {
      getKaoqinInfo(this.formInline).then(response => {
        if (response && response.code === '200') {
          this.tableData = response.data.attendanceItemList
          this.pages.total = response.data.attendanceItemListSize
        } else {
          this.$Message.error('查询失败')
        }
      }).catch(error => {
        this.$Message.error(error)
      })
    },
    getNumber (val) {
      this.formInline.number = val
    },
    focus () {
      this.modal2 = true
      getKaoqinInfo({
        number: '',
        name: '',
        section: [],
        start: null,
        end: null
      }).then(response => {
        const data = response.data
        if (data) {
          for (let item in data) {
            if (data[item].number === this.formInline.number) {
              data[item]._highlight = true
            } else {
              data[item]._highlight = false
            }
          }
          this.modalData = data
        } else {
          this.$Message.error('1')
        }
      }).catch(error => {
        this.$Message.error(error)
      })
    },
    currentChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
