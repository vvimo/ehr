<template>
  <l-main></l-main>
</template>

<script>
import lMain from '@/views/main'

export default {
  name: 'rlzy',
  components: { lMain },
  data () {
    return {
      menuMap: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  computed: {
    sidebar () {
      console.log(this.menuMap)
      this.$store.dispatch('GetNav', { serf: 'rlzy' }).then((res) => {
        console.log(res)
        this.menuMap = res
      }).catch(() => {
        this.menuMap = []
      })
      console.log(this.menuMap)
      return this.menuMap
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.box-card
  box-shadow none
</style>
