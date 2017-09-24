Page({
  data: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/visia/good-banner.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/visia/good-banner.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/visia/good-banner.jpg'
    ],
    goodsName: "【VISIA皮肤检测】精确的皮肤分析",
    price: "9.00",
    originalPrice: "50",
    fee: "免运费",
    amount: "100",
    sales: "783",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/visia/good-detail.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/visia/good-detail.jpg"
    ],
    hotGoods: [
      [{
        text: '',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_01.jpg',
        url: '/pages/detail/detail',
        parse: '11.00',
        discount_price: ''
      }, {
        text: '',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_02.jpg',
        url: '/pages/detail/detail',
        parse: '11.00',
        discount_price: ''
      }, {
        text: '',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_03.jpg',
        url: '/pages/detail/detail',
        parse: '110',
        discount_price: '1000'
      }, {
        text: '',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_04.jpg',
        url: '/pages/detail/detail',
        parse: '300',
        discount_price: '3000'
      }],
      [{
        text: '',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_02.jpg',
        url: '/pages/detail/detail',
        parse: '11.00',
        discount_price: ''
      }, {
        text: '',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_03.jpg',
        url: '/pages/detail/detail',
        parse: '110',
        discount_price: '1000'
      }, {
        text: '',
        src: 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/list/pifu/pifu_04.jpg',
        url: '/pages/detail/detail',
        parse: '300',
        discount_price: '3000'
      }]
    ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})