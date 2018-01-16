<template>
  <div class="">
    招聘需求
  </div>
</template>

<script>
export default {
  name: 'rlzy',
  data () {
    return {
      menuMap: []
    }
  },
  computed: {
    sidebar () {
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
</style>
