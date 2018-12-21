const getDay = () => {
  let monthDay = ['今天', '明天']
  let date = new Date()
  // 月-日
  for (let i = 2; i <= 7; i++) {
    var date1 = new Date(date)
    date1.setDate(date.getDate() + i)
    let md = (date1.getMonth() + 1) + '月' + date1.getDate() + '日'
    monthDay.push(md)
  }
  return monthDay
}
export const withData = (param) => {
  return param < 10 ? '0' + param : '' + param
}
const getDateStr = () => {
  let date = new Date()
  let dateStr = []
  for (let i = 0; i <= 7; i++) {
    var date1 = new Date(date)
    date1.setDate(date.getDate() + i)
    let str = date1.getFullYear() + '-' + withData(date1.getMonth() + 1) + '-' + withData(date1.getDate())
    dateStr.push(str)
  }
  return dateStr
}
export const getDayArr = getDay()
const getTodayDate = () => {
  let hours = []
  let minute = []
  let date = new Date()
  date.setMinutes(date.getMinutes() + 30)
  let currentHours = date.getHours()
  let currentMinute = date.getMinutes()
  console.log(currentMinute)
  let minuteIndex
  if (currentMinute > 0 && currentMinute <= 10) {
    minuteIndex = 10
  } else if (currentMinute > 10 && currentMinute <= 20) {
    minuteIndex = 20
  } else if (currentMinute > 20 && currentMinute <= 30) {
    minuteIndex = 30
  } else if (currentMinute > 30 && currentMinute <= 40) {
    minuteIndex = 40
  } else if (currentMinute > 40 && currentMinute <= 50) {
    minuteIndex = 50
  } else {
    minuteIndex = 60
  }

  if (minuteIndex === 60) {
    for (let i = currentHours + 1; i < 24; i++) {
      hours.push(i + '时')
    }
    for (let i = 0; i < 60; i += 10) {
      minute.push(i + '分')
    }
  } else {
    for (let i = currentHours; i < 24; i++) {
      hours.push(i + '时')
    }
    for (let i = minuteIndex; i < 60; i += 10) {
      minute.push(i + '分')
    }
  }
  return [hours, minute]
}

const getAllHourMint = () => {
  let hours = []
  let minute = []
  for (let i = 0; i < 24; i++) {
    hours.push(i + '时')
  }
  for (let i = 0; i < 60; i += 10) {
    minute.push(i + '分')
  }
  return [hours, minute]
}
const getAllHourMintArr = getAllHourMint()
const getCurrentHourMint = () => {
  let hours = []
  let minute = []
  let date = new Date()
  date.setMinutes(date.getMinutes() + 30)
  let currentHours = date.getHours()
  for (let i = currentHours; i < 24; i++) {
    hours.push(i + '时')
  }
  for (let i = 0; i < 60; i += 10) {
    minute.push(i + '分')
  }
  return [hours, minute]
}
export const getTodayDateArr = getTodayDate()
export const getAllDateArr = [...getAllHourMintArr]
export const getCurMintArr = getCurrentHourMint()
export const getDateStrShow = getDateStr()
