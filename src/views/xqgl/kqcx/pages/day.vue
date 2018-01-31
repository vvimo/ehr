<template>
  <div>
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem label="员工标识" :label-width="60">
          <Input type="text" :v-model="formInline.user" placeholder=""></Input>
        </FormItem>
        <FormItem label="部门" :label-width="40">
          <Cascader :data="data1" :v-model="formInline.password"></Cascader>
        </FormItem>
        <FormItem label="开始日期" :label-width="60">
          <DatePicker type="date" placeholder="" :value="formInline.start" style="width: 160px"></DatePicker>
        </FormItem>
        <FormItem label="结束日期" :label-width="60">
          <DatePicker type="date" placeholder="" :value="formInline.end" style="width: 160px"></DatePicker>
        </FormItem>
        <FormItem label="状态" :label-width="40">
          <Select v-model="formInline.state">
            <Option :value="0">0</Option>
            <Option :value="1">1</Option>
          </Select>
        </FormItem>
        <FormItem :label-width="10">
          <Button type="primary" @click="handleSubmit('formInline')">查询</Button>
        </FormItem>
      </Form>
    </div>
    <div>
      <Table border ref="selection" :columns="columns" :data="data"></Table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
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
        user: '',
        password: '',
        start: '',
        end: '',
        state: ''
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
      }]
    }
  },
  computed: {},
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
