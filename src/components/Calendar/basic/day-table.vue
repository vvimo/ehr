<template>
  <table
    class="el-date-table"
    style="width: 100%">
    <tbody>
      <tr>
        <th v-for="item in 12" :key="item">{{ item }}</th>
      </tr>
      <tr>
        <td colspan="12" style="background: #f5f5f5">{{ $t(`common.am`) }}</td>
      </tr>
      <tr>
        <td colspan="12">
          无事件
        </td>
      </tr>
      <tr>
        <td colspan="12" style="background: #f5f5f5">{{ $t(`common.pm`) }}</td>
      </tr>
      <tr>
        <td colspan="12">
          无事件
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {},
  computed: {},
  watch: {},
  data () {
    return {}
  },
  methods: {}
}
</script>
