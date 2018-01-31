<template>
  <div>
    <mt-header fixed title="你好"></mt-header>
    <div style="overflow: auto; height: 100%">
      <mt-tab-container v-model="active" swipeable="true">
        <mt-tab-container-item id="tab1" style="padding: 40px 0">
          <div style="height: 120px">
            <mt-swipe :auto="4000">
              <mt-swipe-item style="vertical-align: middle">
                <img src="@/assets/swipe/1.png" height="100%">
              </mt-swipe-item>
              <mt-swipe-item style="vertical-align: middle">
                <img src="@/assets/swipe/2.jpeg" height="100%">
              </mt-swipe-item>
              <mt-swipe-item style="vertical-align: middle">
                <img src="@/assets/swipe/3.jpeg" height="100%">
              </mt-swipe-item>
            </mt-swipe>
          </div>
          <div class="list">
            <a class="item c1">工作量</a>
            <a class="item t1">签到</a>
            <a class="item c1 t3">考勤</a>
            <a class="item c2 t2">请假</a>
            <a class="item c2">加班</a>
            <a class="item c2">倒休</a>
            <a class="item c2">外出</a>
            <a class="item c2">出差</a>
            <a class="item c3">借款</a>
            <a class="item c3">报销</a>
            <a class="item c3">设备借用</a>
            <a class="item c3">资质</a>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab2">
          <div style="padding: 40px 0"></div>
        </mt-tab-container-item>
        <mt-tab-container-item id="tab3">
          <div style="padding: 40px 0">
            <mt-cell title="xxxx-Band5" >
              <span slot="icon"></span>
              <i class="el-icon-arrow-right"></i>
            </mt-cell>
            <mt-cell title="离职" >
              <span slot="icon">
                <i class="el-icon-upload2"></i>
              </span>
              <i class="el-icon-arrow-right"></i>
            </mt-cell>
            <mt-cell title="薪酬福利" >
              <span slot="icon">
                <i class="el-icon-upload2"></i>
              </span>
              <i class="el-icon-arrow-right"></i>
            </mt-cell>
            <mt-cell title="个人设备" >
              <span slot="icon">
                <i class="el-icon-printer"></i>
              </span>
              <i class="el-icon-arrow-right"></i>
            </mt-cell>
            <mt-cell title="设置" >
              <span slot="icon">
                <i class="el-icon-setting"></i>
              </span>
              <i class="el-icon-arrow-right"></i>
            </mt-cell>
            <mt-cell title="退出登录" >
              <span slot="icon">
                <i class="el-icon-upload2"></i>
              </span>
              <i class="el-icon-arrow-right"></i>
            </mt-cell>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="active">
      <mt-tab-item id="tab1">
        <i class="el-icon-menu" style="display: block"></i>
        自助服务
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <i class="el-icon-tickets" style="display: block"></i>
        我的工作
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <i class="el-icon-picture" style="display: block"></i>
        个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'mLayout',
  components: {
  },
  data () {
    return {
      active: 'tab1'
    }
  },
  computed: {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
color_1 = #fe9150
color_2 = #fb7039
color_3 = #64c4ec
color_4 = #a2d53c
baseFontSize = 75 // 基于视觉稿横屏尺寸/100得出的基准font-size
px2rem(name, px)
  {name}: (px / baseFontSize * 1)rem
.list
  position relative
  px2rem(margin-left, 15)
  px2rem(margin-top, 15)
  .item
    float left
    px2rem(width, 230)
    px2rem(height, 190)
    px2rem(line-height, 190)
    px2rem(margin, 15)
    px2rem(margin-left, 0)
    px2rem(margin-top, 0)
    px2rem(font-size, 32)
    text-align center
    color #fff
    px2rem(border-radius, 6)
    background-color color_2
    &.t1
      px2rem(width, 475)
      px2rem(height, 395)
      px2rem(line-height, 395)
      px2rem(font-size, 42)
    &.t2
      px2rem(height, 395)
      px2rem(line-height, 395)
    &.t3
      position absolute
      px2rem(top, 205)
      px2rem(left, 0)
    &.c1
      background-color color_1
    &.c2
      background-color color_3
    &.c3
      background-color color_4
</style>
