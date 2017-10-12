// pages/jishu/jishu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentFukeTab: 1,
    currentNankeTab: 8,
    currentPifuTab: 1,
    fukeTabItem: [
      {
        'tabId': '1',
        'title': '无痛人流',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/wtrl.jpg',
        'zz': '无痛、3-5分钟可结束',
        'lf': '超导可视无痛人流术',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']

      }, {
        'tabId': '2',
        'title': '白带异常',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/bdyc.jpg',
        'zz': '带量增多，色、质或气味改白变',
        'lf': '六联立体分型疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']

      }, {
        'tabId': '3',
        'title': '阴道炎',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/ydy.jpg',
        'zz': '阴道瘙痒、灼热、性交疼、白带增多',
        'lf': '艾薇儿阴道平衡疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']

      }, {
        'tabId': '4',
        'title': '盆腔炎',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/pqy.jpg',
        'zz': '下腹坠胀、尿频尿痛、月经异常等',
        'lf': '三维七联疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']

      }, {
        'tabId': '5',
        'title': '附件炎',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/fjy.jpg',
        'zz': '腰部疼痛、月经不调、白带增多等',
        'lf': '德国POT纯净臭氧无创技术',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']

      }, {
        'tabId': '6',
        'title': '宫颈疾病',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/gjjb.jpg',
        'zz': '脓性白带、宫颈充血及触痛等',
        'lf': '美国奥洛克宫颈除糜系统',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']

      }, {
        'tabId': '7',
        'title': '子宫肌瘤',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/zgjl.jpg',
        'zz': '子宫出血、疼痛、白带增多等',
        'lf': '微创手术祛肌瘤',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']

      }, {
        'tabId': '8',
        'title': '月经不调',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fukebanner/yjbt.jpg',
        'zz': '月经量多、量少、推迟、提前、痛经',
        'lf': '绿色中医综合疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/fuke1-02.jpg']
      }
    ],
    nankeTabItem: [
      {
        'tabId': '8',
        'title': '前列腺炎',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/qlxy.jpg',
        'zz': '尿频尿急、尿不尽等',
        'lf': '前列腺腔内场效消融介入排毒素',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      },
      {
        'tabId': '1',
        'title': '阳痿',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/yw.jpg',
        'zz': '性生活时间短、勃起不坚等',
        'lf': '六位一体分型疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      }, 
      {
        'tabId': '2',
        'title': '早泄',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/zx.jpg',
        'zz': '性交时不能控制射精或时间少于2分钟',
        'lf': '阴茎背敏感神经精控术',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      }, 
      {
        'tabId': '3',
        'title': '包皮包茎',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/bpbj.jpg',
        'zz': '阴茎勃起后龟头也不能完全外露',
        'lf': '韩式包皮精雕整形术',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      }, 
      {
        'tabId': '4',
        'title': '尿道炎',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/ndy.jpg',
        'zz': '尿频、尿痛、尿急和血尿等',
        'lf': '美国OKW热疗系统',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      }, 
      {
        'tabId': '5',
        'title': '龟头炎',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/gty.jpg',
        'zz': '局部红斑、水肿、疼痛',
        'lf': '美国CRS光导系统',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      }, 
      {
        'tabId': '6',
        'title': '尿路感染',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/mngr.jpg',
        'zz': '尿频、尿急、尿痛、膀胱或会阴部不适',
        'lf': '美国CRS短波治疗系统',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      }, 
      {
        'tabId': '7',
        'title': '男性不育',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nankebanner/nxby.jpg',
        'zz': '精液异常、生精障碍、精卵结合障碍',
        'lf': '精子体内优化技术',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/nanke1-02.jpg']
      }

    ],
    
    pifuTabItem: [
      {
        'tabId': '1',
        'title': '青春痘',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-banner.jpg',
        'zz': '粉刺、脓包、红肿、瘙痒',
        'lf': '深层水氧活肤疗法体系',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }, 
      {
        'tabId': '2',
        'title': '脱发',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifubanner/tf.jpg',
        'zz': '脱发、鳞屑、头发油、斑秃',
        'lf': '渗透祛脂三联激活疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }, 
      {
        'tabId': '3',
        'title': '腋臭',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifubanner/yc.jpg',
        'zz': '多汗、刺鼻性异味',
        'lf': '韩国3D光纤定位消融术',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }, 
      {
        'tabId': '4',
        'title': '银屑病',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifubanner/yxb.jpg',
        'zz': '鳞屑、点状出血、牛皮癣',
        'lf': '中医消银多维工程',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }, 
      {
        'tabId': '5',
        'title': '鱼鳞病',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifubanner/ylb.jpg',
        'zz': '鳞屑、皮肤干燥、皲裂',
        'lf': '激活免疫祛鳞疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }, 
      {
        'tabId': '6',
        'title': '白癜风',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifubanner/bdf.jpg',
        'zz': '一处或多处白斑、皮损、瘙痒等',
        'lf': '白癜风多维康复体系',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }, 
      {
        'tabId': '7',
        'title': '灰指甲',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifubanner/hzj.jpg',
        'zz': '指甲白斑、脚气、皲裂、角质化',
        'lf': '渗透软化疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }, 
      {
        'tabId': '8',
        'title': '皮炎湿疹',
        'banner': 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifubanner/pysz.jpg',
        'zz': '丘疹、水泡、瘙痒、红疹',
        'lf': '中医综合疗法',
        'by': ['http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-01.jpg', 'http://odwbo6hwu.bkt.clouddn.com/webapp/img/jishu/pifu1-02.jpg']
      }
    ]
  },
  onLoad: function(options){
    wx.setNavigationBarTitle({
      title: '特色技术',
    })
  },
  swichFukeTab: function (e) {
    var self = this;
    if (self.data.currentFukeTab === e.target.dataset.current) {
      return false;
    } else {
      self.setData({
        currentFukeTab: e.target.dataset.current
      })
    }
  },
  swichNankeTab: function (e) {
    var self = this;
    if (self.data.currentNankeTab === e.target.dataset.current) {
      return false;
    } else {
      self.setData({
        currentNankeTab: e.target.dataset.current
      })
    }
  },
  swichPifuTab: function (e) {
    var self = this;
    if (self.data.currentPifuTab === e.target.dataset.current) {
      return false;
    } else {
      self.setData({
        currentPifuTab: e.target.dataset.current
      })
    }
  },
  /**
 * 用户点击右上角分享
 */
  onShareAppMessage: function () {

  }
})