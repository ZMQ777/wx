//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    grids: [
      {
        label: '1',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/index/bar_one.jpg',
        url: '/pages/jianjie/jianjie'
      }, {
        label: '2',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/index/bar_two.jpg',
        url: '/pages/zhuanjia/zhuanjia'
      }, {
        label: '3',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/index/bar_three.jpg',
        url: '/pages/jishu/jishu'
      }
      , {
        label: '4',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/index/bar_four.jpg',
        url: '/pages/list/list?t=pifu'
      }, {
        label: '5',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/index/bar_five.jpg',
        url: '/pages/list/list?t=fuke'
      }, {
        label: '6',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/index/bar_six.jpg',
        url: '/pages/list/list?t=nanke'
      }
    ],
    motto: '你好',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      // url: '../logs/logs'
      url: '../views/mysomething/mysomething'
    })
  },
  bindmysothing: function () {
    wx.navigateTo({
      url: '../mysomething/mysomething'

    })
  },
  onLoad: function () {
    // console.log(this.data.grids)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    // console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  click: function (e) {
    this.setData({
      text: "111"
    });
  },
  makePhoneCall:function(){
    wx.makePhoneCall({
      phoneNumber: '027-84777777',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  }
})
