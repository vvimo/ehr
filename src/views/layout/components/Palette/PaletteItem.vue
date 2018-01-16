<template>
  <div class="palette-wrapper">
    <scroll-pane>
        <div class="palette-item" v-for="(item, index) in 15" :key="index">
          <i class="palette-item-icon"></i><!--
           --><span>人力资源管理</span><!-- 
           --><i class="palette-item-icon el-icon-arrow-down"></i>
        </div>  
    </scroll-pane>
    <div class="palette-item-dropdown">
      <scroll-bar>
        <div class="palette-item-dropdown-warp">
            <ul>
              <li>
                <h3>客户开户</h3>
              </li>
              <li>
                <a>
                  <span>对私客户开户</span>
                </a>
              </li>
            </ul>
        </div>
      </scroll-bar>
    </div>
  </div>
</template>

<script>
import { generateTitle } from '@/utils/i18n'
import ScrollPane from '@/components/ScrollPane'
import ScrollBar from '@/components/ScrollBar'

export default {
  name: 'paletteItem',
  components: {
    ScrollPane,
    ScrollBar
  },
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    generateTitle
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.palette-wrapper
  height 100%
  color #fff
  .palette-item
    display inline-block
    padding 0 15px
    &-icon
      padding 0 5px
    &-dropdown
      display none
      position absolute
      top 40px
      left 0
      right 0
      bottom 0
      font-size 14px
      color #666
      line-height 26px
      z-index 9
      &-warp
        padding 25px 60px
        background-color #fff
        border-bottom 1px solid #eee
      & h3
        font-size 16px
        color #333
        padding-bottom 10px
    &:hover
      background-color #fff
      color #368ee0
      cursor pointer
  &:hover .palette-item-dropdown
    display block
</style>

