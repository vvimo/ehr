<template>
  <div>
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem label="员工标识" :label-width="60">
          <Input type="text" :v-model="formInline.user" placeholder=""></Input>
        </FormItem>
        <FormItem label="部门" :label-width="80">
          <Cascader :data="data1" :v-model="formInline.password"></Cascader>
        </FormItem>
        <FormItem label="考勤月份" :label-width="100">
          <DatePicker type="month" placeholder="" :value="formInline.start"></DatePicker>
        </FormItem>
        <FormItem :label-width="80">
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
          key: 'number'
        }, {
          title: '员工名称',
          key: 'name'
        }, {
          title: '出勤率',
          key: 'ratio'
        }, {
          title: '特殊加班工时',
          key: 'overtime'
        }, {
          title: '请假工时',
          key: 'ratioHour'
        }, {
          title: '当前月份',
          key: 'month'
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
        end: ''
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
