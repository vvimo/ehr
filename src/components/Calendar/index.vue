<template>
  <div class="calendar-body">
    <div class="calendar-header" align="center">
      <button
        v-show="currentView !== 'day'"
        type="button"
        @click="prevYear"
        class="el-picker-panel__icon-btn f-l el-icon-d-arrow-left"></button>
      <button
        type="button"
        @click="prevMonth"
        class="el-picker-panel__icon-btn f-l el-icon-arrow-left"></button>
      <span
        @click="showYearPicker"
        class="el-date-picker__header-label">{{ yearLabel }}</span>
      <span
        v-show="currentView === 'date' || currentView === 'week' || currentView === 'day'"
        @click="showMonthPicker"
        class="el-date-picker__header-label">{{ month + 1 }} {{ $t(`common.month`) }}</span>
      <span
        v-show="currentView === 'week'"
        class="el-date-picker__header-label">{{ weekNumber }} {{ $t(`common.week`) }}</span>
      <span
        v-show="currentView === 'day'"
        class="el-date-picker__header-label">{{ date.getDate() }} {{ $t(`common.day`) }}</span>
      <button
        v-show="currentView !== 'day'"
        type="button"
        @click="nextYear"
        class="el-picker-panel__icon-btn f-r el-icon-d-arrow-right"></button>
      <button
        type="button"
        @click="nextMonth"
        class="el-picker-panel__icon-btn f-r el-icon-arrow-right"></button>
    </div>
    <div class="calendar-content">
      <date-table
        v-show="currentView === 'date'"
        :date="date"
        :first-day-of-week="firstDayOfWeek"
        @pick="handleDatePick"
        ></date-table>
      <year-table
        v-show="currentView === 'year'"
        :date="date"
        @pick="handleYearPick"
        ></year-table>
      <month-table
        v-show="currentView === 'month'"
        :date="date"
        @pick="handleMonthPick"
        ></month-table>
      <week-table
        v-show="currentView === 'week'"
        :date="date"
        @pick="handleWeekPick"
        ></week-table>
      <day-table
        v-show="currentView === 'day'"
        :date="date"
        ></day-table>
    </div>
  </div>
</template>

<script>
import {
  initTimeDate,
  prevYear,
  nextYear,
  prevMonth,
  nextMonth,
  prevDate,
  nextDate,
  getWeekNumber,
  modifyDate } from './util'
import { dateTable, yearTable, monthTable, weekTable, dayTable } from './basic'

export default {
  name: 'calendar',
  components: { dateTable, yearTable, monthTable, weekTable, dayTable },
  props: {
    type: {
      type: String,
      default: 'date'
    }
  },
  computed: {
    year () {
      return this.date.getFullYear()
    },
    month () {
      return this.date.getMonth()
    },
    week () {
      return getWeekNumber(this.date)
    },
    monthDate () {
      return this.date.getDate()
    },
    yearLabel () {
      const yearTranslation = this.$t('common.year')
      if (this.currentView === 'year') {
        const startYear = Math.floor(this.year / 10) * 10
        if (yearTranslation) {
          return startYear + ' ' + yearTranslation + ' - ' + (startYear + 9) + ' ' + yearTranslation
        }
        return startYear + ' - ' + (startYear + 9)
      }
      return this.year + ' ' + yearTranslation
    }
  },
  watch: {
    type (val) {
      this.currentView = val
    }
  },
  data () {
    return {
      currentView: 'date',
      date: initTimeDate(),
      firstDayOfWeek: 7,
      selectionMode: 'day',
      weekNumber: 0
    }
  },
  methods: {
    prevMonth () {
      if (this.currentView === 'week') {
        this.date = prevDate(this.date, 7)
      } else if (this.currentView === 'day') {
        this.date = prevDate(this.date)
      } else {
        this.date = prevMonth(this.date)
      }
    },
    nextMonth () {
      if (this.currentView === 'week') {
        this.date = nextDate(this.date, 7)
      } else if (this.currentView === 'day') {
        this.date = nextDate(this.date)
      } else {
        this.date = nextMonth(this.date)
      }
    },
    prevYear () {
      if (this.currentView === 'week') {
        this.date = prevMonth(this.date)
      } else {
        this.date = prevYear(this.date)
      }
    },
    nextYear () {
      if (this.currentView === 'week') {
        this.date = nextMonth(this.date)
      } else {
        this.date = nextYear(this.date)
      }
    },
    handleDatePick (value) {
      this.date = modifyDate(this.date, value.getFullYear(), value.getMonth(), value.getDate())
      this.emit(this.date, this.showTime)
    },
    handleYearPick (year) {
      this.date = modifyDate(this.date, year, this.month, this.monthDate)
      // TODO: should emit intermediate value ??
      // this.emit(this.date, true);
      this.currentView = 'month'
    },
    handleMonthPick (month) {
      this.date = modifyDate(this.date, this.year, month, this.monthDate)
      // TODO: should emit intermediate value ??
      // this.emit(this.date);
      this.currentView = 'date'
    },
    handleWeekPick (val) {
      this.weekNumber = val
    },
    showYearPicker () {
      if (this.currentView === 'week' || this.currentView === 'day') return
      this.currentView = 'year'
    },
    showMonthPicker () {
      if (this.currentView === 'week' || this.currentView === 'day') return
      this.currentView = 'month'
    }
  },
  mounted () {}
}
</script>

<style rel="stylesheet/stylus" lang="stylus">
.calendar
  &-header
    margin 0 10px 10px 10px
    .el-picker-panel__icon-btn
      padding 0 5px
  &-content
    .el-date-table th
      text-align center
</style>
