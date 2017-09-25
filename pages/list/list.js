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
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_01.jpg',
          url: '/pages/detail/detail?list=pifu&project=VISIApifujiance',
          parse: '11.00',
          discount_price: ''
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_02.jpg',
          url: '/pages/detail/detail?list=pifu&project=yiyongmianmo',
          parse: '11.00',
          discount_price: ''
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_03.jpg',
          url: '/pages/detail/detail?list=pifu&project=shuiyanghuofu',
          parse: '110',
          discount_price: '1000'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_04.jpg',
          url: '/pages/detail/detail?list=pifu&project=weizhenmeisu',
          parse: '300',
          discount_price: '3000'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_05.jpg',
          url: '/pages/detail/detail?list=pifu&project=zhongxifadou',
          parse: '160',
          discount_price: '580'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_06.jpg',
          url: '/pages/detail/detail?list=pifu&project=qudouVISIAshuiyangsanheyi',
          parse: '380',
          discount_price: '2080'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_07.jpg',
          url: '/pages/detail/detail?list=pifu&project=Eguangmeibainenfu',
          parse: '360',
          discount_price: '3200'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_08.jpg',
          url: '/pages/detail/detail?list=pifu&project=Eguangshuiyang',
          parse: '380',
          discount_price: '2080'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_09.jpg',
          url: '/pages/detail/detail?list=pifu&project=tuofajiancha',
          parse: '11.00',
          discount_price: '30'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_10.jpg',
          url: '/pages/detail/detail?list=pifu&project=pifujiancha',
          parse: '25.00',
          discount_price: '60'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_11.jpg',
          url: '/pages/detail/detail?list=pifu&project=huizhijiajiancha',
          parse: '11.00',
          discount_price: '30'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_12.jpg',
          url: '/pages/detail/detail?list=pifu&project=guomingyuanjiance',
          parse: '240',
          discount_price: '480'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_13.jpg',
          url: '/pages/detail/detail?list=pifu&project=yechoushoushu',
          parse: '280',
          discount_price: '3000'
        },
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_14.jpg',
          url: '/pages/detail/detail?list=pifu&project=qiangxiaoqudou',
          parse: '5.00',
          discount_price: ''
        }
      ],
      fuke:[
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/fuke/fuke_01.jpg',
          url: '/pages/detail/detail?list=women&project=women5',
          parse: '60',
          discount_price: '300'
        }, {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/fuke/fuke_02.jpg',
          url: '/pages/detail/detail?list=women&project=women6',
          parse: '100',
          discount_price: '340'
        }, {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/fuke/fuke_03.jpg',
          url: '/pages/detail/detail?list=women&project=women1',
          parse: '100',
          discount_price: '200'
        }, {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/fuke/fuke_04.jpg',
          url: '/pages/detail/detail?list=women&project=women2',
          parse: '280',
          discount_price: '562'
        }, {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/fuke/fuke_05.jpg',
          url: '/pages/detail/detail?list=women&project=women3',
          parse: '320',
          discount_price: '648'
        }, {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/fuke/fuke_06.jpg',
          url: '/pages/detail/detail?list=women&project=women4',
          parse: '420',
          discount_price: '848'
        }
      ],
      nanke:[
        {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/nanke/nanke_01.jpg',
          url: '/pages/detail/detail?list=man&project=man1',
          parse: '70',
          discount_price: '140'
        }, {
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/nanke/nanke_02.jpg',
          url: '/pages/detail/detail?list=man&project=man2',
          parse: '240',
          discount_price: '482'
        },{
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/nanke/nanke_03.jpg',
          url: '/pages/detail/detail?list=man&project=man3',
          parse: '320',
          discount_price: '648'
        },{
          text: '',
          src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/nanke/nanke_04.jpg',
          url: '/pages/detail/detail?list=man&project=man4',
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