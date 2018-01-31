import Mock from 'mockjs'
import loginAPI from './login'
import menuAPI from './menu'
import kaoqinAPI from './kaoqin'
// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 菜单相关
Mock.mock(/\/menu\/menu/, 'post', menuAPI.getMenu)
Mock.mock(/\/menu\/nav/, 'post', menuAPI.getNav)

// 考勤相关
Mock.mock(/\/kaoqin\/info/, 'post', kaoqinAPI.getKaoqinInfo)

export default Mock
