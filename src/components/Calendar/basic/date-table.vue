<template>
  <table class="el-date-table" style="width: 100%">
    <tbody>
      <tr>
        <th v-for="(week, index) in weeks" :key="index">{{ $t('weeks.' + week) }}</th>
      </tr>
      <tr
        class="el-date-table__row"
        v-for="(row, index) in rows" :key="index">
        <td
          v-for="(cell, cellIndex) in row" :key="cellIndex"
          :class="getCellClasses(cell)">
          <div>
            <span>{{ cell.text }}</span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { getFirstDayOfMonth, getDayCountOfMonth, getStartDateOfMonth } from '../util'

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
    rows () {
      const date = new Date(this.year, this.month, 1)
      let day = getFirstDayOfMonth(date) // day of first day
      const dateCountOfMonth = getDayCountOfMonth(date.getFullYear(), date.getMonth())
      const dateCountOfLastMonth = getDayCountOfMonth(date.getFullYear(), (date.getMonth() === 0 ? 11 : date.getMonth() - 1))

      day = (day === 0 ? 7 : day)

      const offset = this.offsetDay
      const rows = this.tableRows
      let count = 1
      let firstDayPosition

      for (let i = 0; i < 6; i++) {
        const row = rows[i]

        for (let j = 0; j < 7; j++) {
          let cell = row[j]

          if (!cell) {
            cell = { row: i, column: j, type: 'normal', inRange: false, start: false, end: false }
          }

          cell.type = 'normal'

          if (i >= 0 && i <= 1) {
            if (j + i * 7 >= (day + offset)) {
              cell.text = count++
              if (count === 2) {
                firstDayPosition = i * 7 + j
              }
            } else {
              cell.text = dateCountOfLastMonth - (day + offset - j % 7) + 1 + i * 7
              cell.type = 'prev-month'
            }
          } else {
            if (count <= dateCountOfMonth) {
              cell.text = count++
              if (count === 2) {
                firstDayPosition = i * 7 + j
              }
            } else {
              cell.text = count++ - dateCountOfMonth
              cell.type = 'next-month'
            }
          }
          this.$set(row, j, cell)
        }
      }
      rows.firstDayPosition = firstDayPosition
      return rows
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
    }
  }
}
</script>
