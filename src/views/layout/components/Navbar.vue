<template>
  <div class="v-navbar">
    <h1 class="v-navbar-logo">
      <a href="/">
        <img src="@/assets/logo_title.png">
      </a>
    </h1>
    <ul class="v-navbar-info" style="float: right">
      <li>
        <div class="v-navbar-search">
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
      </li>
      <li>
        <a href="" class="v-navbar-btn v-navbar-bell">
          <el-badge :value="1" :max="99" :is-dot="true" class="item">
            <i class="el-icon-bell"></i>
          </el-badge>
          <div class="v-navbar-dropdown v-navbar-bell-dropdown">
            <ul>
              <li>
                <a style="text-align: left">
                  <span style="display: block">
                    <el-tag size="mini">入职待办</el-tag>
                    <span style="float: right">
                      <i class="el-icon-time"></i>
                      5分钟前
                    </span>
                  </span>
                  <span style="display: block">
                    XXX入职代办申请
                  </span>
                </a>
              </li>
              <li>
                <a style="text-align: left">
                  <span style="display: block">
                    <el-tag type="warning" size="mini">入职待办</el-tag>
                    <span style="float: right">
                      <i class="el-icon-time"></i>
                      10分钟前
                    </span>
                  </span>
                  <span style="display: block">
                    XXX入职代办申请
                  </span>
                </a>
              </li>
              <li>
                <a style="text-align: left">
                  <span style="display: block">
                    <el-tag type="danger" size="mini">入职待办</el-tag>
                    <span style="float: right">
                      <i class="el-icon-time"></i>
                      1小时前
                    </span>
                  </span>
                  <span style="display: block">
                    XXX入职代办申请
                  </span>
                </a>
              </li>
            </ul>
            <el-pagination small layout="prev, pager, next" :total="100"></el-pagination>
          </div>
        </a>
      </li>
      <li>
        <div class="v-navbar-user">
          <img class="v-navbar-user-img" :src="avatar"><!-- 
           --><span class="v-navbar-user-msg">
            <span>{{ introduction }}</span>
            <span>{{ name }}</span>
          </span><!-- 
           --><i class="el-icon-caret-bottom"></i>
          <div class="v-navbar-dropdown v-navbar-user-dropdown">
            <div>
              <span>机构号：</span><span></span>
            </div>
            <div>
              <span>机构名称：</span><span></span>
            </div>
            <div>
              <span>客户经理号：</span><span></span>
            </div>
            <div>
              <span>客户经理名称：</span><span></span>
            </div>
            <div style="margin-top: 5px">
              <el-button type="primary">修改密码</el-button><!-- 
               --><el-button @click="logout" type="info">切换角色</el-button>
            </div>
          </div>
        </div>
      </li>
      <li>
        <a @click="logout" class="v-navbar-btn v-navbar-close">
          <i class="el-icon-close"></i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'navbar',
  data () {
    return {
      input5: '',
      logo: require('@/assets/logo.png'),
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'introduction'
    ])
  },
  mounted () {
    this.list = this.states.map(item => {
      return { value: item, label: item }
    })
  },
  methods: {
    logout () {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
    },
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
