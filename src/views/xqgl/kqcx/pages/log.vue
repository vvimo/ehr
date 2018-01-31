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
          key: 'a',
          width: 120,
          fixed: 'left'
        }, {
          title: '员工名称',
          key: 'b',
          width: 120,
          fixed: 'left'
        }, {
          title: '加班开始时间',
          key: 'c',
          width: 180
        }, {
          title: '加班结束时间',
          key: 'd',
          width: 180
        }, {
          title: '加班总时长',
          key: 'e',
          width: 120
        }, {
          title: '普通加班时长',
          key: 'f',
          width: 120
        }, {
          title: '节假日加班时长',
          width: 120,
          key: 'g'
        }, {
          title: '加班消耗时长',
          width: 120,
          key: 'h'
        }, {
          title: '状态',
          width: 120,
          key: 'i'
        }, {
          title: '审批人',
          width: 120,
          key: 'j'
        }, {
          title: '加班过期时间',
          width: 120,
          key: 'k'
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
      data: [
        {
          a: '1',
          b: 'a',
          c: '2016-10-03 09:30:00',
          d: '2016-10-03 17:30:00',
          e: '8',
          f: '8',
          g: '0',
          h: '8',
          i: '加班',
          j: 'A',
          K: '2'
        }, {
          a: '2',
          b: 'b',
          c: '2016-10-03 09:30:00',
          d: '2016-10-03 17:30:00',
          e: '8',
          f: '8',
          g: '0',
          h: '8',
          i: '加班',
          j: 'A',
          K: '2'
        }, {
          a: '3',
          b: 'c',
          c: '2016-10-03 09:30:00',
          d: '2016-10-03 17:30:00',
          e: '8',
          f: '8',
          g: '0',
          h: '8',
          i: '加班',
          j: 'A',
          K: '2'
        }, {
          a: '4',
          b: 'd',
          c: '2016-10-03 09:30:00',
          d: '2016-10-03 17:30:00',
          e: '8',
          f: '8',
          g: '0',
          h: '8',
          i: '加班',
          j: 'A',
          K: '2'
        }, {
          a: '5',
          b: 'e',
          c: '2016-10-03 09:30:00',
          d: '2016-10-03 17:30:00',
          e: '8',
          f: '8',
          g: '0',
          h: '8',
          i: '加班',
          j: 'A',
          K: '2'
        }
      ],
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
