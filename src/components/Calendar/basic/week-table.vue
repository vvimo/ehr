<template>
  <table
    class="el-date-table"
    style="width: 100%">
    <tbody>
      <tr>
        <th
          v-for="(cell, index) in cells" :key="index"
          :class="getCellClasses(cell)">
          <div>
            <span>{{ index ===0 ? $t(`common.hour`) : cell.text }}</span>
          </div>
        </th>
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
import { getFirstDayOfMonth, getDayCountOfMonth, getStartDateOfMonth, getWeekNumber, nextDate } from '../util'

export default {
  props: {
    firstDayOfWeek: {
      type: Number,
      validator: val => val >= 1 && val <= 7,
      default: 7
    },
    date: {}
  },
  computed: {
    offsetDay () {
      const week = this.firstDayOfWeek
      // 周日为界限，左右偏移的天数，3217654 例如周一就是 -1，目的是调整前两行日期的位置
      return week > 3 ? 7 - week : -week
    },
    year () {
      return this.date.getFullYear()
    },
    month () {
      return this.date.getMonth()
    },
    startDate () {
      return getStartDateOfMonth(this.year, this.month)
    },
    cells () {
      const date = new Date(this.year, this.month, 1)
      let day = getFirstDayOfMonth(date) // day of first day
      const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth())
      const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1))

      day = (day === 0 ? 7 : day)

      let index = 0
      const offset = this.offsetDay
      const rows = this.tableRows
      let count = 1

      const startDate = this.startDate

      for (let i = 0; i < 6; i++) {
        const row = rows[i]

        row[0] = { type: 'week', text: getWeekNumber(nextDate(startDate, i * 7 + 1)) }

        for (let j = 0; j < 7; j++) {
          let cell = row[j + 1]

          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false }
          }

          cell.type = 'normal'

          if (i >= 0 && i <= 1) {
            if (j + i * 7 >= (day + offset)) {
              cell.text = count++
            } else {
              cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7
              cell.type = 'prev-month'
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++
            } else {
              cell.text = count++ - dateCountOfMonth
              cell.type = 'next-month'
            }
          }
          this.$set(row, j + 1, cell)
        }

        const start = 1
        const isWeekActive = this.isWeekActive(row[start + 1])

        if (isWeekActive) {
          index = i
        }
      }

      this.$emit('pick', rows[index][0].text)
      return rows[index]
    }
  },
  watch: {},
  data () {
    return {
      weeks: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
      tableRows: [ [], [], [], [], [], [] ]
    }
  },
  methods: {
    getCellClasses (cell) {
      let classes = []
      if (cell.type === 'normal') {
        classes.push('available')
      } else {
        classes.push(cell.type)
      }

      return classes.join(' ')
    },
    isWeekActive (cell) {
      const newDate = new Date(this.year, this.month, 1)
      const year = newDate.getFullYear()
      const month = newDate.getMonth()

      if (cell.type === 'prev-month') {
        newDate.setMonth(month === 0 ? 11 : month - 1)
        newDate.setFullYear(month === 0 ? year - 1 : year)
      }

      if (cell.type === 'next-month') {
        newDate.setMonth(month === 11 ? 0 : month + 1)
        newDate.setFullYear(month === 11 ? year + 1 : year)
      }

      newDate.setDate(parseInt(cell.text, 10))

      return getWeekNumber(newDate) === getWeekNumber(this.date)
    }
  }
}
</script>
