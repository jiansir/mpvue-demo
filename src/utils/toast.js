export function wxTipSuc (title) {
  wx.showToast({
    title: title
  })
}
export function wxTipText (title) {
  wx.showToast({
    title: title,
    icon: 'none'
  })
}
export function wxTipErr (title) {
  wx.showToast({
    title: title,
    image: '/asserts/icon/tips.png'
  })
}
export function wxTipLoading (title) {
  wx.showLoading({
    title: title
  })
}
export function wxHideLoading () {
  wx.hideLoading()
}
