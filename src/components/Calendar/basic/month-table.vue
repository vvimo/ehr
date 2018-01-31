<template>
  <table
    @click="handleMonthTableClick"
    class="el-month-table"
    style="width: 100%">
    <tbody>
    <tr>
      <td>
        <a class="cell">{{ $t('months.jan') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.feb') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.mar') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.apr') }}</a>
      </td>
    </tr>
    <tr>
      <td>
        <a class="cell">{{ $t('months.may') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.jun') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.jul') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.aug') }}</a>
      </td>
    </tr>
    <tr>
      <td>
        <a class="cell">{{ $t('months.sep') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.oct') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.nov') }}</a>
      </td>
      <td>
        <a class="cell">{{ $t('months.dec') }}</a>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    date: {}
  },
  computed: {},
  watch: {},
  data () {
    return {}
  },
  methods: {
    handleMonthTableClick (event) {
      const target = event.target
      if (target.tagName !== 'A') return
      const column = target.parentNode.cellIndex
      const row = target.parentNode.parentNode.rowIndex
      const month = row * 4 + column

      this.$emit('pick', month)
    }
  }
}
</script>
