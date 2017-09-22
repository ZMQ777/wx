// pages/pifu/pifu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      search:"搜索商品",
      grids:[],
      zhuanyeyisheng:[],
      tesejishu:[],
      pifu: [
        {
          text: '',
          src: '/static/img/pifu_01.jpg',
          url: '',
          parse: '11.00',
          discount_price: ''
        },
        {
          text: '',
          src: '/static/img/pifu_02.jpg',
          url: '',
          parse: '11.00',
          discount_price: ''
        },
        {
          text: '',
          src: '/static/img/pifu_03.jpg',
          url: '',
          parse: '110',
          discount_price: '1000'
        },
        {
          text: '',
          src: '/static/img/pifu_04.jpg',
          url: '',
          parse: '300',
          discount_price: '3000'
        },
        {
          text: '',
          src: '/static/img/pifu_05.jpg',
          url: '',
          parse: '160',
          discount_price: '580'
        },
        {
          text: '',
          src: '/static/img/pifu_06.jpg',
          url: '',
          parse: '380',
          discount_price: '2080'
        },
        {
          text: '',
          src: '/static/img/pifu_07.jpg',
          url: '',
          parse: '360',
          discount_price: '3200'
        },
        {
          text: '',
          src: '/static/img/pifu_08.jpg',
          url: '',
          parse: '380',
          discount_price: '2080'
        },
        {
          text: '',
          src: '/static/img/pifu_09.jpg',
          url: '',
          parse: '11.00',
          discount_price: '30'
        },
        {
          text: '',
          src: '/static/img/pifu_10.jpg',
          url: '',
          parse: '25.00',
          discount_price: '60'
        },
        {
          text: '',
          src: '/static/img/pifu_11.jpg',
          url: '',
          parse: '11.00',
          discount_price: '30'
        },
        {
          text: '',
          src: '/static/img/pifu_12.jpg',
          url: '',
          parse: '240',
          discount_price: '480'
        },
        {
          text: '',
          src: '/static/img/pifu_13.jpg',
          url: '',
          parse: '280',
          discount_price: '3000'
        },
        {
          text: '',
          src: '/static/img/pifu_14.jpg',
          url: '',
          parse: '5.00',
          discount_price: ''
        }
      ],
      fuke:[
        {
          text: '',
          src: '/static/img/fuke_01.jpg',
          url: '',
          parse: '60',
          discount_price: '300'
        }, {
          text: '',
          src: '/static/img/fuke_02.jpg',
          url: '',
          parse: '100',
          discount_price: '340'
        }, {
          text: '',
          src: '/static/img/fuke_03.jpg',
          url: '',
          parse: '100',
          discount_price: '200'
        }, {
          text: '',
          src: '/static/img/fuke_04.jpg',
          url: '',
          parse: '280',
          discount_price: '562'
        }, {
          text: '',
          src: '/static/img/fuke_05.jpg',
          url: '',
          parse: '320',
          discount_price: '648'
        }, {
          text: '',
          src: '/static/img/fuke_06.jpg',
          url: '',
          parse: '420',
          discount_price: '848'
        }
      ],
      nanke:[
        {
          text: '',
          src: '/static/img/nanke_01.jpg',
          url: '',
          parse: '70',
          discount_price: '140'
        }, {
          text: '',
          src: '/static/img/nanke_02.jpg',
          url: '',
          parse: '240',
          discount_price: '482'
        },{
          text: '',
          src: '/static/img/nanke_03.jpg',
          url: '',
          parse: '320',
          discount_price: '648'
        },{
          text: '',
          src: '/static/img/nanke_04.jpg',
          url: '',
          parse: '420',
          discount_price: '848'
        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var t = options.t;
    switch(t){
      case "pifu":
        this.setData({
          grids: this.data.pifu
        })
        wx.setNavigationBarTitle({ title: '皮肤科精选' });
        break;
      case "nanke":
        this.setData({
          grids: this.data.nanke
        }) 
        wx.setNavigationBarTitle({ title: '男科精选' });
        break;
      case "fuke":
        this.setData({
          grids: this.data.fuke
        })
        wx.setNavigationBarTitle({ title: '妇科精选' });
        break;  
    }
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
  hidedefaultvalue:function(){
    this.setData({
      search: ''
    })
  },
  
})