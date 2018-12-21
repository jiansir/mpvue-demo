<template>
  <div class="container">
    <div class="m-container">
      <div class="publish">
        <div class="publish-content">
          <div class="address">
            <div class="icon">
              <div class="start"></div>
              <div class="end"></div>
            </div>
            <div class="content">
              <div
                class="item"
                @click="handleStart"
              >{{startInput}}</div>
              <div
                class="item"
                @click="handleEnd"
              >{{endInput}}</div>
            </div>
            <div
              :class="{ switch:true, 'checked': routeType==0}"
              data-type="0"
              @click="switchRoute"
            ></div>
          </div>
          <div class="other-condition">
            <div class="date condition-item">
              <div class="icon"></div>
              <picker
                mode="multiSelector"
                :value="multiIndex"
                @change="handleDateChange"
                @columnchange="changeDateTimeColumn"
                :range="multiArray"
                class="picker"
              >
                <view class="item">{{dateTime?dateTime:'出发时间'}}</view>
              </picker>
            </div>
            <div class="line"></div>
            <div class="number condition-item">
              <div class="icon"></div>
              <picker
                @change="bindRidenumChange"
                :value="rideTemp"
                :range="rideNumArr"
              >
                <div class="item">{{rideNum}}人同行</div>
              </picker>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/card'
import { mapRegeo } from '@utils/mapRequest'
import {
  getDayArr,
  getTodayDateArr,
  getAllDateArr,
  getCurMintArr,
  getDateStrShow,
  withData
} from '@utils/date'
export default {
  data () {
    return {
      rideTemp: 1,
      rideNumArr: [1, 2, 3, 4, 5, 6],
      rideNum: 1,
      dateStr: ' ',
      routeType: 0,
      startLocation: '',
      endLocation: '',
      dateTime: '',
      multiArray: null,
      multiIndex: [0, 0, 0]
    }
  },

  components: {
    card
  },

  methods: {
    handleDateChange (e) {
      console.log(e)
      let indexArr = e.mp.detail.value
      this.dateTime = getDateStrShow[indexArr[0]] + ' ' + this.getNumber(this.multiArray[1][indexArr[1]]) + ':' + this.getNumber(this.multiArray[2][indexArr[2]])
    },
    getNumber (s) {
      return withData(s.substring(0, s.length - 1))
    },
    changeDateTimeColumn (e) {
      this.multiIndex[e.mp.detail.column] = e.mp.detail.value
      if (e.mp.detail.column === 0) {
        if (e.mp.detail.value === 0) {
          this.multiArray = [getDayArr, ...getTodayDateArr]
        } else {
          this.multiArray = [getDayArr, ...getAllDateArr]
        }
        this.multiIndex[1] = 0
        this.multiIndex[2] = 0
      } else if (e.mp.detail.column === 1) {
        this.multiIndex[2] = 0
        if (this.multiIndex[0] === 0) {
          if (e.mp.detail.value === 0) {
            this.multiArray = [getDayArr, ...getTodayDateArr]
          } else {
            this.multiArray = [getDayArr, ...getCurMintArr]
          }
        }
      }
    },
    handleStart () {
      wx.chooseLocation({
        success: res => {
          let locationName = res.name
          let location = `${res.longitude},${res.latitude}`
          mapRegeo(location, result => {
            this.startLocation = Object.assign(result, {
              name: locationName
            })
          })
        },
        fail: () => {},
        complete: () => {}
      })
    },
    handleEnd () {
      wx.chooseLocation({
        success: res => {
          let locationName = res.name
          let location = `${res.longitude},${res.latitude}`
          mapRegeo(location, result => {
            this.endLocation = Object.assign(result, {
              name: locationName
            })
          })
        },
        fail: () => {},
        complete: () => {}
      })
    },
    bindRidenumChange (e) {
      this.rideTemp = e.mp.detail.value
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    let that = this
    wx.getLocation({
      success: function (res) {
        let location = `${res.longitude},${res.latitude}`
        mapRegeo(location, result => {
          that.startLocation = result
        })
      },
      fail: function (res) {
        console.log(res)
      }
    })
    this.multiArray = [getDayArr, ...getTodayDateArr]
  },
  computed: {
    startInput () {
      return this.startLocation && this.startLocation.name
    },
    endInput () {
      return this.endLocation ? this.endLocation.name : '您要去哪儿？'
    }
    // multiArray () {
    //   return getTodayDateArr
    // }
  }
}
</script>

<style scoped>
.publish {
  padding: 30rpx;
}

.publish-content {
  background: #ffffff;
  box-shadow: 0 0 20rpx #e6eaed;
  border-radius: 4rpx;
}

.address {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  border-bottom: 2rpx solid #eceef2;
}

.address .icon {
  width: 100rpx;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  height: 200rpx;
}

.address .icon .start {
  height: 100rpx;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAFVBMVEUYyLoAAAAYyLoYyLoYyLoYyLoYyLpGSsGzAAAABnRSTlPgAIAQMPDrZs23AAAAN0lEQVQI12MQNGJLUBZkEGFLS0t1ZDBNAwJmBjUQlcTABqISGNLAAEpBBWFKDMAawNoTHKGGAQCBLRVtpx5EEQAAAABJRU5ErkJggg==")
    center no-repeat;
  background-size: 12rpx 12rpx;
}

.address .icon .end {
  height: 100rpx;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMBAMAAACkW0HUAAAAFVBMVEX/VQAAAAD/VQD/VQD/VQD/VQD/VQADP3jbAAAABnRSTlPgAIAQMPDrZs23AAAAN0lEQVQI12MQNGJLUBZkEGFLS0t1ZDBNAwJmBjUQlcTABqISGNLAAEpBBWFKDMAawNoTHKGGAQCBLRVtpx5EEQAAAABJRU5ErkJggg==")
    center no-repeat;
  background-size: 12rpx 12rpx;
}

.address .content {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 200rpx;
}

.address .content .item {
  height: 100rpx;
  line-height: 100rpx;
  border-bottom: 2rpx solid #eceef2;
  color: #404a59;
  font-size: 26rpx;
  overflow: hidden;
}

.address .content .item:last-child {
  border-bottom: 0;
}

.address .switch {
  width: 140rpx;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  height: 200rpx;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAflBMVEUAAAC4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMm4uMleM2mJAAAAKXRSTlMAZn/TA+DEa2C5tTcpzL2soIR4PRbp5aebi1pW7ZByMAsH9tlDHhJNSXuyTIgAAAJnSURBVFjDpVfpuqIwDG1lFWQVFEFcrle9ff8XHJKSGfmGLb3nj63tCVnbVMzjO4r2wgC7PJXwWyilvl4w8ipZrKb7serggyAYPLvBBSQlP6vo0lKILUxSpVL4jRTCrRfpP7AV0eC80T+S/o3DWfothU2o7nu4Ugckop3h7x2FsLwRhz3zg16NdhN00vNRT+knexETEk56dTNn4klvmeE/woXMAiu/p/nJXSzg1m7raftbYYqQbFuNYZzsM/P7t+ArsD/mFfADxvfbbn/1kUDAdwQDR2D8K3Qsnyur3jHkNGtgdhIsbIBD8YTcONuCB8jqQ59cIMxbT71jstXA0iW77UalYKD4q4KLU24KCZ3uFzrupB6w8QJe3g0CVIUPND3us/giDODB0XcT10ESsZNpLyQlAR8lhv+kLTF1QotlkfLJVMOJcDELjLDB+EU6j03DEGEpSyM++t/6jQAfBbjmJlzQB/HvnBhjGCvzMB5Fhr2ECVD5DD1RGvHtEv0f0n3NBpZhqMvZMwwClmEATjB1QUBHWsHnF3SYv5TZkZQD70VlfRBsHLTpdLHUJoVAvc7DJBVKul3pcs14/Aw4zeB637GTyBo2GA/BgKOP9GHDcVzPT2B/OqgL1g3bwu5ypM3LGd2Juo6EdU0oqKetx8Uu+8FOqCcdl2CF8/zQmlIVJaDs+0xvkvV7Zh8cjm9PaC8dhfCXnjxO/hx78tDqfqaHrlSPOA9fH9/eeQGtVPNPinekCGc3OeVSXjap6yhC9F7z8JyE64s1aLb/UxlPX8DOSw5DtnP0C+a9E/pZGriW5QZp1ky3cX8AlclvGSYWgZ4AAAAASUVORK5CYII=")
    center no-repeat;
  background-size: 64rpx 64rpx;
}

.address .switch.checked {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAmVBMVEUAAABA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdA7xdz8BAjAAAAMnRSTlMA7hnjAybnvDW339WDYJxrCrStaGT6zMaNclVDOhTCfFoqp6J/d0tAH/TbkYgw0mYkEQlOolwAAALnSURBVFjDnZdpg7IgEMdxM6+80tKyssPcejo3vv+He2RQyRYR9v9GBH8zXDMCEmuVJCf0B43L4kmeG4zx/EVKgR9/SeOeiSt5xBApnKvCsnr+i76l8HiCQSZ5KTAuyDOhdeluEP9OcK0M3jP6iJtacy3EwwK+4nR3ZzcmFgL+5GDQJNj8bjxvDdqa7HtHX+N9Aw1jamLeY+FG+aNoiAv4ZMttpG0XmKSBUZ76/UchGlB4tblDnAF/RX+VxYYvqe7G1jW6wtIKp3NbR0w+4afyPMy4z17XhB8hBR0IwRYMwueuYmAPS968ZWoTANoSpllPsjc0XQ7UPY9+abBRr4ixQHLxqtEmIYQnoWjI2qQDkrzBnI2qUt7kPezK8SNMtISXJSmS7fSEvKfAGy/UOi6rwpTkOgVe+0GoHbpZ7+KlAj9uKgKS+kIaRndF/2wzrWEKNF3Vf7sVAkgkubJ/kAkZ5PAeV+fr9UfGP4vhCOVvieRLq6bFkuXRETqf0K3F9sbcGubZMiQQyrM2LMHCaZBneXTSMYAiDFoN8czAA6WdULSZhUEeRpzCWmzRp4WTmGdJxWTLyOmDmIdlPCAXzHAsDPLQ+RvMhIH4Fr4MEa+T1hkNpj2rpgEOlaHQP7qTRouGc4A4FjRHyKNlHYZTmASeBdAc+L4pmDbnks8jTd7yFgdlKS2uCi/MSUl6OsSjsnVswzpwLAh5SCc2+7HseEM0BLz3tt0upAucT+INEnfg8h7FLlKSS5is83sfK//eJ90DxkXFgAMp/ePAcZDnIfH4vw5ZrsoJCRucY14pxx/h4ztnWbEr55+7cbZQXQzietTnyoWGhyXmLXohuvEPXqCjLnDvYtFQZ7TV8fQefOZgkNd7GRjVJsoz78pT447gShH67e2sXL/efO+DNkn5oeS1D2tptCjj2fJY5E5bmQ5fPp8T3KvUQzLKTB4Md0lZjePI6NLOwdsgJemW5/rT/PHI7cLN+o9x/wFaprNa2cv9YAAAAABJRU5ErkJggg==");
}

.other-condition {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  height: 100rpx;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  border-bottom: 2rpx solid #eceef2;
}

.other-condition .date {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

.other-condition .number {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

.other-condition .line {
  height: 80rpx;
  width: 2rpx;
  background: #eceef2;
}

.other-condition .condition-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
}

.other-condition .condition-item .icon {
  width: 100rpx;
  height: 100rpx;
  -webkit-box-flex: 0;
  -webkit-flex: none;
  flex: none;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAJ1BMVEUAAAB/f39/f39/f39/f39/f3/f39////+/v7/v7+/Hx8efn5+Pj48OOw4mAAAABXRSTlMA0JAgEJEfMx4AAABnSURBVAjXY2BgYFYMDRUyYAAB1VAgCAKxHEPBQISBgUUUwgx0YGAKhQIFBlMgGZYKJIIZVMFMsEZRGDOQIRTGDMVgzujoOAphRpWXl28NBWmD2gFxAcQVpjBmMLLFCOcgHInidISHAMESN33fzyU9AAAAAElFTkSuQmCC")
    center no-repeat;
  background-size: 20rpx 20rpx;
}
.other-condition .condition-item .picker {
  flex: 1;
}

.other-condition .condition-item .item {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  height: 100rpx;
  line-height: 100rpx;
  color: #404a59;
  font-size: 26rpx;
}

.other-condition .condition-item.number .icon {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAMFBMVEUAAAB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/f3+rdzeOAAAAD3RSTlMA8sAwcOCwlBAg0KCAQGB0ZzZrAAAAc0lEQVQI12MAgmv//+cygAHPfyA4AGb6g5j/QCxOeRDzYwOQyfIfDByATCYIUwEnkx3CLAAymSFMA5Bp+SDWN7AVXSDmCjCTo/D/f3GIG1xBoiEglilEWzDQAHkI86MBw8T/UCDJsB/G/M0AlIeqYPgPBwBsVnzbMvFgTAAAAABJRU5ErkJggg==")
    center no-repeat;
  background-size: 20rpx 20rpx;
}
</style>
