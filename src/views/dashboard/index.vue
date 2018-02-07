<template>
  <div class="dashboard-container">
    <div style="height: 100%; position: relative">
      <div class="dashboard-user">
        <div class="dashboard-user-swarrp">
          <div class="dashboard-user-info">
            <div class="dashboard-user-img">
              <img src="@/assets/user.jpg" style="width: 100%">
              <span>
                <i class="el-icon-edit"></i>
              </span>
            </div>
            <div class="dashboard-user-msg">
              <span class="" style="font-size: 16px">
                <span style="color: #2a71cb">王先生</span>，下午好
              </span>
              <span class="">
                您有
                <span style="color: #ff5656; font-size: 16px">56</span>
                条待办事件
              </span>
            </div>
          </div>
          <div class="dashboard-state">
            <span>业务能力</span>
            <el-progress :percentage="70" status="exception"></el-progress>
            <span style="font-size: 12px; color: #666">L4</span>
            <span class="f-r" style="font-size: 12px; color: #666">L5</span>
          </div>
          <div class="dashboard-state exception">
            <span>执行能力</span>
            <el-progress :percentage="75" status="exception"></el-progress>
            <span style="font-size: 12px; color: #666">0%</span>
            <span class="f-r" style="font-size: 12px; color: #666">100%</span>
          </div>
        </div>
        <div class="dashboard-user-time" style="position: absolute;
    top: 257px; bottom: 0; right: 0; left: 0">
          <happy-scroll hide-horizontal hide-vertical scroll-top size="8">
            <ul>
              <li :class="index == 0 ? 'active' : ''" v-for="(item, index) in time" :key="index">
                <span>{{ item.name }}</span>
                <p v-for="(node, nIndex) in item.node" :key="nIndex">{{ node.name }}</p>
              </li>
            </ul>
          </happy-scroll>
        </div>
      </div>
      <div class="dashboard-main">
        <el-card class="box-card" body-style="padding: 10px 0" ref="db">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-document" style="color: #3283bf"></i>
              待办任务
              <span style="color: #56a1fa">(56)</span>
            </span>
            <el-button
              class="f-r"
              style="padding: 0; line-height: 50px"
              type="text"
              icon="el-icon-arrow-down"
              @click="ofnFun('db')"></el-button>
          </div>
          <div>
            <div v-for="o in 3" :key="o" style="height: 30px; line-height: 30px; color: #414548; padding: 0 20px">
              <span>巴图尔XXX项目出差申请{{ o }}</span>
            </div>
          </div>
        </el-card>
        <el-row :gutter="20" style="margin-top: 20px">
          <el-col :span="12">
            <el-card class="box-card" ref="fw">
              <div slot="header" class="clearfix">
                <span>
                  <i class="el-icon-menu" style="color: #3283bf"></i>
                  自助服务
                </span>
                <el-button
                  class="f-r"
                  style="padding: 0; line-height: 50px"
                  type="text"
                  icon="el-icon-arrow-down"
                  @click="ofnFun('fw')"></el-button>
              </div>
              <div style="overflow: hidden; padding: 40px 0 10px">
                <div v-for="(item, index) in list" :key="index" class="text item f-l" style="width: 25%; text-align: center; min-height: 120px">
                  <a @click="serviceBtnFun(item.name)">
                    <div style="display: inline-block; width: 50px; height: 50px; border-radius: 25px; overflow: hidden; background: #e6e6e6"></div>
                    <br>
                    <span align="center" style="color: #666">
                      {{ $t(item.name) }}{{ $t(`event.sq`) }}
                    </span>
                  </a>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card class="box-card" ref="calendar">
              <div slot="header" class="clearfix">
                <span>
                  <i class="el-icon-date" style="color: #3283bf"></i>
                  事件管理
                </span>
                <el-button
                  class="f-r"
                  style="padding: 0; line-height: 50px"
                  type="text"
                  icon="el-icon-arrow-down"
                  @click="ofnFun('calendar')"></el-button>
                <el-radio-group class="f-r" v-model="radio6" size="mini" style="margin-top: 12px; margin-right: 10px">
                  <el-radio-button label="date">{{ $t(`common.month`) }}</el-radio-button>
                  <el-radio-button label="week">{{ $t(`common.week`) }}</el-radio-button>
                  <el-radio-button label="day">{{ $t(`common.day`) }}</el-radio-button>
                </el-radio-group>
              </div>
              <div style="height: 290px">
                <c-calendar :type="radio6"></c-calendar>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>

    <!-- 自助服务 -->
    <el-dialog
      class="d-dialog"
      :width="dialog.width"
      :title="$t(dialog.title) + $t('event.sq')"
      :visible.sync="dialog.vsible"
      :before-close="handleClose">
      <div>
        <cm-service :type="dialog.type"></cm-service>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialog.vsible = false">取 消</el-button>
        <el-button size="small" type="primary" @click="dialog.vsible = false">提 交</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import cCalendar from '@/components/Calendar'
import { cmService } from '../common'

export default {
  name: 'dashboard',
  components: { cCalendar, cmService },
  data () {
    return {
      dialog: {
        title: '',
        vsible: false,
        width: '60%'
      },
      radio6: 'date',
      time: [{
        name: '2018',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }, {
        name: '2017',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }, {
        name: '2016',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }, {
        name: '2015',
        node: [{
          name: 'XX项目圆满上线'
        }, {
          name: 'XXXXXX项目圆满上线'
        }]
      }],
      list: [{
        name: 'selfService.qj',
        icon: '',
        serf: ''
      }, {
        name: 'selfService.jb',
        icon: '',
        serf: ''
      }, {
        name: 'selfService.dx',
        icon: '',
        serf: ''
      }, {
        name: 'selfService.bq',
        icon: '',
        serf: ''
      }, {
        name: 'selfService.wc',
        icon: '',
        serf: ''
      }, {
        name: 'selfService.cc',
        icon: '',
        serf: ''
      }, {
        name: 'selfService.zz',
        icon: '',
        serf: ''
      }, {
        name: 'selfService.lz',
        icon: '',
        serf: ''
      }]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
      .then(_ => { done() })
      .catch(_ => {})
    },
    ofnFun (name) {
      if (this.$refs[name].$el.childNodes[1].style.display === 'none') {
        this.$refs[name].$el.childNodes[1].style.display = 'block'
      } else {
        this.$refs[name].$el.childNodes[1].style.display = 'none'
      }
    },
    serviceBtnFun (name) {
      this.dialog = {
        title: name,
        vsible: true,
        type: name.match(/\.(\S*)/)[1]
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.d-dialog
  .el-dialog__body
    padding 30px 20px 10px 0
    border-top 1px solid #f3f3f3
    border-bottom 1px solid #f3f3f3
</style>