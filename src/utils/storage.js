function lsSet (key, val) {
  wx.setStorageSync(key, val)
}

function lsGet (key, defaultValue) {
  var val = wx.getStorageSync(key)
  if (val) {
    return val
  }
  return defaultValue
}
function lsRemove (key) {
  wx.removeStorage({
    key: key
  })
}

export {
  lsSet,
  lsGet,
  lsRemove
}
