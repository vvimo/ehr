<template>
  <div class="z-navbar">
    <div class="z-navbar-msg">
      <a href="/" style="display: inline-block;margin-top: 12px">
        <img src="@/assets/logo_title.png">
      </a>
      <ul class="f-r">
        <li class="f-l">
          <span>消息</span>
          <div></div>
        </li>
        <li class="f-l">
          <span>罕古丽</span>
        </li>
        <li class="f-l">
          <span>移动端下载</span>
        </li>
        <li class="f-l">
          <span>安全退出</span>
        </li>
      </ul>
    </div>
    <div class="z-navbar-menu">
      <ul>
        <li class="f-l" :class="index === 0 ? 'active' : ''" v-for="(item, index) in menus" :key="index">
          <a :href="item.serf">{{ item.name }}</a>
        </li>
      </ul>
      <div class="v-navbar-search f-r" style="padding: 0; margin-top: 11px">
        <el-button slot="append" icon="el-icon-search"></el-button>
        <el-select v-model="input5" multiple filterable remote reserve-keyword placeholder="请输入关键词" :remote-method="remoteMethod" :loading="loading">
          <el-option
            v-for="item in options4"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      menus: [{
        name: '首页',
        serf: '#/dashboard'
      }, {
        name: '补签',
        serf: '#/xqgl/ywmk'
      }, {
        name: '考勤查询',
        serf: '#/xqgl/kqcx'
      }, {
        name: '时间管理',
        serf: '/'
      }, {
        name: '薪酬管理',
        serf: '/'
      }, {
        name: '员工关怀',
        serf: '/'
      }, {
        name: '资产管理',
        serf: '/'
      }, {
        name: '公告管理',
        serf: '/'
      }, {
        name: '档案管理',
        serf: '/'
      }],
      input5: '',
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  },
  computed: {},
  mounted () {},
  methods: {
    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options4 = []
      }
    }
  }
}
</script>

<style>
</style>
