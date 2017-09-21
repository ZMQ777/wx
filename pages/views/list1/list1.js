// pages/views/list1/list1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]  ,
    nav_bar_data: [
    { text: '优惠', url: '', src: '' },
    { text: '详情', url: '', src: '' },
    { text: '活动', url: '', src: '' },
    { text: '套餐', url: '', src: '' }
    ],
    grids: [
      {
        label: '优惠',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=1'
      }, {
        label: '详情',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=2'
      }, {
        label: '活动',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=3'
      }, {
        label: '套餐',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=4'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
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