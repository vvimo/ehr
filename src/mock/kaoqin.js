const kaoqinMap = [
  {
    number: 'xj0001',
    name: '刘一',
    pinyin: 'liuyi',
    section: 'keji',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-20',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0002',
    name: '陈二',
    pinyin: 'chener',
    section: 'gugong',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-21',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0003',
    name: '张三',
    pinyin: 'zhangsan',
    section: 'tiantan',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-22',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0004',
    name: '李四',
    pinyin: 'lisi',
    section: 'shiye',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-23',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0005',
    name: '王五',
    pinyin: 'wangwu',
    section: 'nanjing',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-24',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0006',
    name: '赵六',
    pinyin: 'zhaoliu',
    section: 'fuzimiao',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-25',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0007',
    name: '孙七',
    pinyin: 'sunqi',
    section: 'suzhou',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-26',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0008',
    name: '周八',
    pinyin: 'zhouba',
    section: 'zhuozhengyuan',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-27',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0009',
    name: '吴九',
    pinyin: 'wujiu',
    section: 'suzhou',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-28',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }, {
    number: 'xj0010',
    name: '郑十',
    pinyin: 'dengshi',
    section: 'suzhou',
    upTime: '2018-01-24 10:28:24',
    downTime: '2018-01-24 20:28:36',
    up: '乌鲁木齐',
    down: '乌鲁木齐',
    hour: '10',
    date: '2018-01-29',
    type: '正常',
    isSpecial: '否',
    ratio: '1%',
    overtime: '0',
    ratioHour: '0',
    month: '12',
    _highlight: false
  }
]

export default {
  getKaoqinInfo: (req) => {
    if (!req.body) return
    let map = []
    let data = JSON.parse(req.body)
    for (let i = 0; i < kaoqinMap.length; i++) {
      let type = true
      let time = new Date(kaoqinMap[i].date)
      if (data.number !== '') {
        if (kaoqinMap[i].number !== data.number) type = false
      }
      if (data.name !== '') {
        if (kaoqinMap[i].name !== data.name) type = false
      }
      if (data.section.length !== 0) {
        if (kaoqinMap[i].section !== data.section[data.section.length - 1]) type = false
      }
      if (data.start) {
        let start = new Date(data.start)
        if (time <= start) type = false
      }
      if (data.end) {
        let end = new Date(data.end)
        if (time > end) type = false
      }
      if (type) map.push(kaoqinMap[i])
    }
    return map
  }
}
