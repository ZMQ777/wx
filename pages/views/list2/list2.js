// pages/views/list2/list2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [
      {
        label:'1',
        src:'../../../images/maidou.jpg',
        url:'../list3/list3?t=1'
      },{
        label: '2',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=2'
      },{
        label: '3',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=3'
      }, {
        label: '4',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=4'
      }, {
        label: '5',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=5'
      }, {
        label: '6',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=6'
      }, {
        label: '7',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=7'
      }, {
        label: '8',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=8'
      }, {
        label: '9',
        src: '../../../images/maidou.jpg',
        url: '../list3/list3?t=9'
      }
      ],
    icon:'../../../images/maidou.jpg',
    inputShowed: false,
    inputVal: "",
    text:'cell standard',
    region: ['广东省', '广州市', '海珠区']
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
    console.log("到底了");
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
  click:function(e){
    this.setData({
      text: "111"
    });
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})