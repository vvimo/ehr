const menuMap = {
  rlzy: {
    name: '人资管理',
    nonde: [
      {
        name: '简历管理'
      },
      {
        name: '招聘需求'
      },
      {
        name: '招聘需求'
      },
      {
        name: '招聘实施'
      },
      {
        name: '入职'
      },
      {
        name: '人力资源信息维护'
      },
      {
        name: '员工花名册维护'
      },
      {
        name: '合同签订'
      },
      {
        name: '合同模板维护'
      },
      {
        name: '转正'
      },
      {
        name: '续签'
      },
      {
        name: '调岗'
      },
      {
        name: '借调'
      },
      {
        name: '辞职'
      },
      {
        name: '外部人员管理'
      },
      {
        name: '任职资格管理'
      }
    ]
  },
  xcgl: {
    name: '薪酬管理',
    node: []
  },
  sjgl: {
    name: '时间管理',
    node: []
  },
  pxgl: {
    name: '培训管理',
    node: []
  },
  zzgl: {
    name: '资质管理',
    node: []
  },
  jxgl: {
    name: '绩效管理',
    node: []
  },
  txgl: {
    name: '通讯管理',
    node: []
  }
}

export default {
  getMenu: config => {
    return menuMap
  },
  getNav: config => {
    const { serf } = JSON.parse(config.body)
    return menuMap[serf]
  }
}
