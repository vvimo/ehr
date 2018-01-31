<template>
  <div>
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem label="员工标识" :label-width="60">
          <Input type="text" v-model="formInline.number" placeholder="" clearable @on-focus="focus"></Input>
        </FormItem>
        <FormItem label="部门" :label-width="60">
          <Cascader :data="data1" v-model="formInline.section" change-on-select></Cascader>
        </FormItem>
        <FormItem label="开始日期" :label-width="80">
          <DatePicker type="date" placeholder="" v-model="formInline.start"></DatePicker>
        </FormItem>
        <FormItem label="结束日期" :label-width="80">
          <DatePicker type="date" placeholder="" v-model="formInline.end"></DatePicker>
        </FormItem>
        <FormItem :label-width="20">
          <Button type="primary" @click="handleSubmit">查询</Button>
        </FormItem>
      </Form>
    </div>
    <div>
      <Table border ref="selection" :columns="columns" :data="data"></Table>
    </div>
    <Modal v-model="modal2" width="800">
      <tl-model :value="formInline.number" :data="modalData" v-on:change="getNumber"></tl-model>
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
      columns: [
        {
          title: '员工编号',
          key: 'number',
          width: 120,
          fixed: 'left'
        }, {
          title: '员工名称',
          key: 'name',
          width: 120,
          fixed: 'left'
        }, {
          title: '上班打卡时间',
          key: 'upTime',
          width: 180
        }, {
          title: '下班打卡时间',
          key: 'downTime',
          width: 180
        }, {
          title: '上班打卡地点',
          key: 'up',
          width: 120
        }, {
          title: '下班打卡地点',
          key: 'down',
          width: 120
        }, {
          title: '出勤小时数',
          width: 120,
          key: 'hour'
        }, {
          title: '打卡日期',
          width: 120,
          key: 'date'
        }, {
          title: '类型',
          width: 120,
          key: 'type'
        }, {
          title: '特殊考勤',
          width: 120,
          key: 'isSpecial'
        }, {
          title: '操作',
          key: 'action',
          fixed: 'right',
          width: 90,
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, '查看')
            ])
          }
        }
      ],
      data: [],
      formInline: {
        number: '',
        name: '',
        section: [],
        start: null,
        end: null
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
        const data = response.data
        if (data) {
          this.data = data
        } else {
          this.$Message.error('1')
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
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
