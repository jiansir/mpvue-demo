// import { Root } from 'settings.js';
import { lsGet } from '././storage'
import { wxTipText } from './toast'

function getToken (successFn) {
  var token = lsGet('token')
  if (token) return successFn(token)
  return returnLogin()
}
function returnLogin () {
  wx.redirectTo({
    url: '/pages/reLogin/index'
  })
}

export function post (url, data, method) {
  return new Promise((resolve, reject) => {
    getToken(token => {
      var tokenObj = {token}
      wx.request({
        url: url,
        method: method || 'POST',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: Object.assign(data, tokenObj, {version: '2.5.0'}),
        success: function (res) {
          if (res.data.code === 2000) {
            resolve(res.data.data || res.data.message)
          } else if (res.data.code === 3001) {
            return returnLogin()
          } else {
            reject(res.data.message)
          }
        },
        fail: function (err) {
          wxTipText({title: '网络出错'})
        }
      })
    })
  })
}
export function postEasy (url, data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: Object.assign(data),
      success: function (res) {
        if (res.data.code === 2000) {
          resolve(res.data.data || res.data.message)
        } else {
          reject(res.data.message)
        }
      },
      fail: function (err) {
        wxTipText({title: '网络出错'})
      }
    })
  })
}
