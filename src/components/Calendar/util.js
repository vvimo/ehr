export const getWeekNumber = function (src) {
  const date = new Date(src.getTime())
  date.setHours(0, 0, 0, 0)
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7)
  // January 4 is always in week 1.
  const week1 = new Date(date.getFullYear(), 0, 4)
  // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
  // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7)
}

export const getStartDateOfMonth = function (year, month) {
  const result = new Date(year, month, 1)
  const day = result.getDay()

  if (day === 0) {
    return prevDate(result, 7)
  } else {
    return prevDate(result, day)
  }
}

export const getDayCountOfMonth = function (year, month) {
  if (month === 3 || month === 5 || month === 8 || month === 10) {
    return 30
  }

  if (month === 1) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      return 29
    } else {
      return 28
    }
  }

  return 31
}

export const getDayCountOfYear = function (year) {
  const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)
  return isLeapYear ? 366 : 365
}

export const getFirstDayOfMonth = function (date) {
  const temp = new Date(date.getTime())
  temp.setDate(1)
  return temp.getDay()
}

export const initTimeDate = function () {
  const date = new Date()
  date.setHours(0)
  date.setMinutes(0)
  date.setSeconds(0)
  return date
}

export const modifyDate = function (date, y, m, d) {
  return new Date(y, m, d, date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
}

// check for leap year Feburary
export const prevYear = function (date, amount = 1) {
  const year = date.getFullYear() - amount
  const month = date.getMonth()
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month))
  return modifyDate(date, year, month, monthDate)
}

export const nextYear = function (date, amount = 1) {
  const year = date.getFullYear() + amount
  const month = date.getMonth()
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month))
  return modifyDate(date, year, month, monthDate)
}

export const prevMonth = function (date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  if (month === 0) {
    year -= 1
    month = 11
  } else {
    month -= 1
  }
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month))
  return modifyDate(date, year, month, monthDate)
}

export const nextMonth = function (date) {
  let year = date.getFullYear()
  let month = date.getMonth()
  if (month === 11) {
    year += 1
    month = 0
  } else {
    month += 1
  }
  const monthDate = Math.min(date.getDate(), getDayCountOfMonth(year, month))
  return modifyDate(date, year, month, monthDate)
}

export const prevDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - amount)
}

export const nextDate = function (date, amount = 1) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount)
}
