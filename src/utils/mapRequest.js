import {
  regeoURL,
  GDkey,
  keywordsURL,
  drivingURL
} from '@api/index'

// 逆地理编码API
export function mapRegeo (location, success) {
  wx.request({
    url: regeoURL,
    data: {
      key: GDkey,
      location: location
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      console.log(res)
      if (typeof success === 'function') {
        let data = res.data.regeocode.addressComponent
        let obj = {
          province: data.province,
          city: data.city,
          adress: data.streetNumber.street,
          location: data.streetNumber.location,
          code: data.adcode,
          name: data.city + '-' + data.streetNumber.street
        }
        success(obj)
      }
    },
    fail: function (res) {
      console.log(res)
    }
  })
}

// 关键字搜索API
export function keywordsApi (city, keywords, success) {
  wx.request({
    url: keywordsURL,
    data: {
      key: GDkey,
      keywords: keywords,
      city: city,
      citylimit: true,
      offset: 10,
      extensions: 'all'
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      if (typeof success === 'function') {
        success(res)
      }
    },
    fail: function (res) {
      console.log(res)
    }
  })
}

// 驾车路线规划API
export function drivingRoute (origin, destination, success) {
  wx.request({
    url: drivingURL,
    data: {
      key: GDkey,
      origin: origin,
      destination: destination
    },
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    success: function (res) {
      if (typeof success === 'function') {
        success(res)
      }
    },
    fail: function (res) {
      console.log(res)
    }
  })
}
