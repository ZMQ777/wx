//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    grids: [
      {
        label: '1',
        src: '../../../images/bar_one.jpg',
        url: '../views/list3/list3?t=1'
      }, {
        label: '2',
        src: '../../../images/bar_two.jpg',
        url: '../views/list3/list3?t=2'
      }, {
        label: '3',
        src: '../../../images/bar_three.jpg',
        url: '../views/list3/list3?t=3'
      }
      , {
        label: '4',
        src: '../../../images/bar_four.jpg',
        url: '../views/list3/list3?t=4'
      }, {
        label: '5',
        src: '../../../images/bar_five.jpg',
        url: '../views/list3/list3?t=5'
      }, {
        label: '6',
        src: '../../../images/bar_six.jpg',
        url: '../views/list3/list3?t=6'
      }
    ],
    motto: '你好',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      // url: '../logs/logs'
      url: '../views/mysomething/mysomething'
    })
  },
  bindmysothing:function(){
    wx.navigateTo({
      url: '../mysomething/mysomething'

    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  getUserInfo: function(e) {
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
})
