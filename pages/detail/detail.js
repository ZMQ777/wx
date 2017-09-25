Page({
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
  }, onLoad: function (options) {
    var t = options.t;
    switch (t) {
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
  data:{
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
  VISIApifujiance: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-banner_03.jpg'
    ],
    goodsName: "【VISIA皮肤检测】精确的皮肤分析",
    price: "11.00",
    originalPrice: "",
    fee: "免运费",
    amount: "100",
    sales: "120",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-detail_02.jpg",         "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-detail_03.jpg",       "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-detail_04.jpg",         "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/VISIApifujiance/good-detail_05.jpg"
    ]
  },
  yiyongmianmo: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yiyongmianmo/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yiyongmianmo/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yiyongmianmo/good-banner_03.jpg'
    ],
    goodsName: "【医用面膜】秘制中药祛痘/美白面膜（任选其一",
    price: "11.00",
    originalPrice: "",
    fee: "免运费",
    amount: "76",
    sales: "305",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yiyongmianmo/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yiyongmianmo/good-detail_02.jpg",     
    ]
  },
  shuiyanghuofu: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/shuiyanghuofu/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/shuiyanghuofu/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/shuiyanghuofu/good-banner_03.jpg'
    ],
    goodsName: "【水氧活肤】 水氧活肤+医用面膜+皮肤检测",
    price: "110",
    originalPrice: "1000",
    fee: "免运费",
    amount: "123",
    sales: "204",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/shuiyanghuofu/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/shuiyanghuofu/good-detail_02.jpg",
    ]
  },
  weizhenmeisu: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/weizhenmeisu/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/weizhenmeisu/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/weizhenmeisu/good-banner_03.jpg'
    ],
    goodsName: "【微针美塑】还你净润透白肌",
    price: "300",
    originalPrice: "3000",
    fee: "免运费",
    amount: "125",
    sales: "260",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/weizhenmeisu/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/weizhenmeisu/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/weizhenmeisu/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/weizhenmeisu/good-detail_02.jpg"
    ]
  },
  zhongxifadou: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/zhongxifadou/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/zhongxifadou/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/zhongxifadou/good-banner_03.jpg'
    ],
    goodsName: "【中西祛痘】友好中西医结合祛痘疗法",
    price: "160",
    originalPrice: "580",
    fee: "免运费",
    amount: "155",
    sales: "59",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/zhongxifadou/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/zhongxifadou/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/zhongxifadou/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/zhongxifadou/good-detail_04.jpg"
    ]
  },
  qudouVISIAshuiyangsanheyi: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-banner_03.jpg'
    ],
    goodsName: "中西祛痘+VISIA皮肤检测+水氧活肤",
    price: "380",
    originalPrice: "2080",
    fee: "免运费",
    amount: "120",
    sales: "230",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-detail_04.jpg", "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/qudouVISIAshuiyangsanheyi/good-detail_05.jpg"
    ]
  },
  Eguangmeibainenfu: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangmeibainenfu/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangmeibainenfu/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangmeibainenfu/good-banner_03.jpg'
    ],
    goodsName: "【E光美白嫩肤】比光子嫩肤更好的嫩肤",
    price: "360",
    originalPrice: "3200",
    fee: "免运费",
    amount: "143",
    sales: "82",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangmeibainenfu/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangmeibainenfu/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangmeibainenfu/good-detail_03.jpg"
    ]
  },
  Eguangshuiyang: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangshuiyang/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangshuiyang/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangshuiyang/good-banner_03.jpg'
    ],
    goodsName: "【E光水氧】E光嫩肤+水氧活肤",
    price: "380",
    originalPrice: "2080",
    fee: "免运费",
    amount: "133",
    sales: "67",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangshuiyang/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangshuiyang/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/Eguangshuiyang/good-detail_03.jpg"
    ]
  },
  tuofajiancha: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/tuofajiancha/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/tuofajiancha/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/tuofajiancha/good-banner_03.jpg'
    ],
    goodsName: "【脱发检查】直击皮肤底层神器",
    price: "11.00",
    originalPrice: "30",
    fee: "免运费",
    amount: "154",
    sales: "301",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/tuofajiancha/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/tuofajiancha/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/tuofajiancha/good-detail_03.jpg"
    ]
  },
  pifujiancha: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/pifujiancha/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/pifujiancha/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/pifujiancha/good-banner_03.jpg'
    ],
    goodsName: "【皮肤检查】皮肤检测|血液|尿液分析",
    price: "25.00",
    originalPrice: "60",
    fee: "免运费",
    amount: "88",
    sales: "265",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/pifujiancha/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/pifujiancha/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/pifujiancha/good-detail_03.jpg"
    ]
  },
  huizhijiajiancha: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/huizhijiajiancha/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/huizhijiajiancha/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/huizhijiajiancha/good-banner_03.jpg'
    ],
    goodsName: "【灰指甲检查】真菌检查 对症治疗",
    price: "11.00",
    originalPrice: "30",
    fee: "免运费",
    amount: "88",
    sales: "405",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/huizhijiajiancha/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/huizhijiajiancha/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/huizhijiajiancha/good-detail_03.jpg"
    ]
  },
  guomingyuanjiance: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/guomingyuanjiance/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/guomingyuanjiance/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/guomingyuanjiance/good-banner_03.jpg'
    ],
    goodsName: "【过敏源检测】直击根源，对症护理",
    price: "240",
    originalPrice: "480",
    fee: "免运费",
    amount: "88",
    sales: "405",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/guomingyuanjiance/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/guomingyuanjiance/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/guomingyuanjiance/good-detail_03.jpg"
    ]
  },
  yechoushoushu: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-banner_03.jpg'
    ],
    goodsName: "【腋臭手术】韩式微创单侧",
    price: "280",
    originalPrice: "3000",
    fee: "免运费",
    amount: "280",
    sales: "144",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-detail_02.jpg"
    ]
  },
  qiangxiaoqudou: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-banner_01.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-banner_02.jpg',
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-banner_03.jpg'
    ],
    goodsName: "【强效祛痘】友好中西活肤强效祛痘疗法",
    price: "5",
    originalPrice: "",
    fee: "免运费",
    amount: "170",
    sales: "180",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/pifu/yechoushoushu/good-detail_04.jpg"
    ]
  }, 
  man1: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man1/good-banner_01.jpg'
    ],
    goodsName: "男性团体体检套餐（一）",
    price: "70",
    originalPrice: "140",
    fee: "免运费",
    amount: "170",
    sales: "650",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man1/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man1/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man1/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man1/good-detail_04.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man1/good-detail_05.jpg"
    ]
  },
  man2: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man2/good-banner_01.jpg'
    ],
    goodsName: "男性团体体检套餐（二）",
    price: "240",
    originalPrice: "482",
    fee: "免运费",
    amount: "180",
    sales: "560",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man2/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man2/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man2/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man2/good-detail_04.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man2/good-detail_05.jpg"
    ]
  },
  man3: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man3/good-banner_01.jpg'
    ],
    goodsName: "男性团体体检套餐（三）",
    price: "320",
    originalPrice: "648",
    fee: "免运费",
    amount: "170",
    sales: "410",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man3/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man3/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man3/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man3/good-detail_04.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man3/good-detail_05.jpg"
    ]
  },
  man4: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-banner_01.jpg'
    ],
    goodsName: "男性团体体检套餐（四）",
    price: "420",
    originalPrice: "848",
    fee: "免运费",
    amount: "122",
    sales: "302",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-detail_04.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-detail_05.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-detail_06.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/man/man4/good-detail_07.jpg"
    ]
  },
  women1: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women1/good-banner_01.jpg'
    ],
    goodsName: "女性团体体检套餐（一）",
    price: "100",
    originalPrice: "200",
    fee: "免运费",
    amount: "630",
    sales: "133",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women1/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women1/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women1/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women1/good-detail_04.jpg"
    ]
  },
  women2: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women2/good-banner_01.jpg'
    ],
    goodsName: "女性团体体检套餐（二）",
    price: "280",
    originalPrice: "562",
    fee: "免运费",
    amount: "590",
    sales: "133",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women2/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women2/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women2/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women2/good-detail_04.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women2/good-detail_05.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women2/good-detail_06.jpg"
    ]
  },
  women3: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women3/good-banner_01.jpg'
    ],
    goodsName: "女性团体体检套餐（三）",
    price: "320",
    originalPrice: "648",
    fee: "免运费",
    amount: "520",
    sales: "133",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women3/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women3/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women3/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women3/good-detail_04.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women3/good-detail_05.jpg"
    ]
  },
  women4: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-banner_01.jpg'
    ],
    goodsName: "女性团体体检套餐（四）",
    price: "420",
    originalPrice: "848",
    fee: "免运费",
    amount: "102",
    sales: "133",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-detail_03.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-detail_04.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-detail_05.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-detail_06.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women4/good-detail_07.jpg"
    ]
  },
  women5: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women5/good-banner_01.jpg'
    ],
    goodsName: "女性团体体检套餐（五）",
    price: "60",
    originalPrice: "300",
    fee: "免运费",
    amount: "80",
    sales: "164",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women5/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women5/good-detail_02.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women5/good-detail_03.jpg"
    ]
  },
  women6: {
    goodsBanner: [
      'http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women6/good-banner_01.jpg'
    ],
    goodsName: "女性团体体检套餐（六）",
    price: "100",
    originalPrice: "340",
    fee: "免运费",
    amount: "513",
    sales: "153",
    goodsDetailImg: [
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women6/good-detail_01.jpg",
      "http://odwbo6hwu.bkt.clouddn.com/webapp/img/detail/women/women6/good-detail_02.jpg"
    ]
  }


























































})