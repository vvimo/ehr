import request from '@/utils/request'

export function getKaoqinInfo (req) {
  const data = req
  return request({
    url: '/kaoqin/info',
    method: 'post',
    data
  })
}
