<template>
  <div>
    <div>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
        <FormItem label="员工工号" :label-width="60">
          <Input type="text" v-model="formInline.number" placeholder=""></Input>
        </FormItem>
        <FormItem label="员工名称" :label-width="200">
          <Input type="text" v-model="formInline.name" placeholder=""></Input>
        </FormItem>
        <FormItem :label-width="20">
          <Button type="primary" @click="handleSubmit">查询</Button>
        </FormItem>
      </Form>
    </div>
    <div>
      <Table border highlight-row ref="selection" :columns="columns" :data="data" @on-current-change="selection"></Table>
    </div>
  </div>
</template>

<script>
import { getKaoqinInfo } from '@/api/kaoqin'

export default {
  components: {},
  props: {
    value: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      number: '',
      columns: [
        {
          type: 'index',
          width: 60,
          align: 'center'
        },
        {
          title: '员工工号',
          key: 'number'
        }, {
          title: '员工名称',
          key: 'name'
        }, {
          title: '部门',
          key: 'section',
          render: (h, params) => {
            return h('div', [
              h('strong', this.data1[params.row.section])
            ])
          }
        }
      ],
      formInline: {
        number: '',
        name: '',
        section: [],
        start: null,
        end: null
      },
      ruleInline: {},
      data1: {
        keji: '科技部',
        gugong: '研发',
        tiantan: '运维',
        shiye: '事业部',
        nanjing: '市场',
        fuzimiao: '宣传',
        suzhou: '人力',
        zhuozhengyuan: '招聘'
      }
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
    selection (currentRow, oldCurrentRow) {
      this.$emit('change', currentRow.number)
    },
    setCurrentValue (val) {
      if (val === this.number) return
      this.number = val
    },
    clearCurrentRow () {
      this.$refs.currentRowTable.clearCurrentRow()
    }
  },
  watch: {
    value (val) {
      this.setCurrentValue(val)
    }
  },
  mounted () {
    this.setCurrentValue(this.value)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
