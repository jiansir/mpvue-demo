<script>
// import { wauthLogin } from '@api/index.js'
// import { lsSet } from '@utils/storage.js'
// import {wxTipText} from '@utils/toast'
export default {
  created () {
    // wx.login({
    //   timeout: 10000,
    //   success: (res) => {
    //     res.code && wx.request({
    //       url: wauthLogin,
    //       data: {
    //         code: res.code
    //       },
    //       header: {
    //         'content-type': 'application/x-www-form-urlencoded'
    //       },
    //       method: 'POST',
    //       success: function (res) {
    //         if (res.data.code === 2000) {
    //           lsSet('token', res.data.data)
    //         } else if (res.data.code === 4013) {
    //           lsSet('str', res.data.data)
    //           wx.redirectTo({
    //             url: '/pages/login/index'
    //           })
    //         }
    //       },
    //       fail: function (err) {
    //         wxTipText({
    //           title: err
    //         })
    //       }
    //     })
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // })
  }
}
</script>

<style>
body{
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.container {
   position: relative;
   height: 100%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
