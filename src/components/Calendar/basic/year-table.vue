<template>
  <table
    @click="handleYearTableClick"
    class="el-year-table"
    style="width: 100%">
    <tbody>
    <tr>
      <td class="available">
        <a class="cell">{{ startYear }}</a>
      </td>
      <td class="available">
        <a class="cell">{{ startYear + 1 }}</a>
      </td>
      <td class="available">
        <a class="cell">{{ startYear + 2 }}</a>
      </td>
      <td class="available">
        <a class="cell">{{ startYear + 3 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available">
        <a class="cell">{{ startYear + 4 }}</a>
      </td>
      <td class="available">
        <a class="cell">{{ startYear + 5 }}</a>
      </td>
      <td class="available">
        <a class="cell">{{ startYear + 6 }}</a>
      </td>
      <td class="available">
        <a class="cell">{{ startYear + 7 }}</a>
      </td>
    </tr>
    <tr>
      <td class="available">
        <a class="cell">{{ startYear + 8 }}</a>
      </td>
      <td class="available">
        <a class="cell">{{ startYear + 9 }}</a>
      </td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    date: {}
  },
  computed: {
    startYear () {
      return Math.floor(this.date.getFullYear() / 10) * 10
    }
  },
  watch: {},
  data () {
    return {}
  },
  methods: {
    handleYearTableClick (event) {
      const target = event.target
      if (target.tagName === 'A') {
        const year = target.textContent || target.innerText
        this.$emit('pick', Number(year))
      }
    }
  }
}
</script>
