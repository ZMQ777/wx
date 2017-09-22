// pages/jianjie/jianjie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentDocTab: 0, 
    currentJiShuTab: 0, 
    timelineData: [{
      "year": "2004",
      "event": "落户武汉，迅速发展成为荆楚大地具有品牌影响力的大型现代化综合医院；"
    }, {
      "year": "2005",
      "event": "我院专家赴京受到前卫生部副部长曹泽毅亲切接近；"
    }, {
      "year": "2007",
      "event": "我院获评全国诚信示范医院；"
    }, {
      "year": "2008",
      "event": "著名泰斗级人物马晓年教授来我院指导工作；"
    }, {
      "year": "2011",
      "event": "工程院院士郭应禄前来我院指导并亲笔题词；"
    }, {
      "year": "2014",
      "event": "我院正式成为中国医促会亚健康委员旗下湖北专家团临床会诊"
    }, {
      "year": "2015",
      "event": "“爱在江城?春节送温暖”慰问活动仪式在武汉友好医院举行"
    }, {
      "year": "2016",
      "event": "我院组织参与汉阳江滩举行的“新长征-万人健步行”活动"
    }],


    "gongyi": [{
      "img": "/static/img/gongyi-top-1.jpg",
      "text": "百万慈善基金援助"
    }, {
      "img": "/static/img/gongyi-top-2.jpg",
      "text": "社区义诊活动"
    }, {
      "img": "/static/img/gongyi-top-3.jpg",
      "text": "春节送温暖献爱心"
    }, {
      "img": "/static/img/gongyi-bottom-1.jpg",
      "text": "医护人员捐款献爱心"
    }, {
      "img": "/static/img/gongyi-bottom-2.jpg",
      "text": "设立爱心驿站"
    }, {
      "img": "/static/img/gongyi-bottom-3.jpg",
      "text": "评为“最具爱心医院”"
    }]
  },


  swichDocTab: function (e) {
    var self = this;
    if (self.data.currentDocTab === e.target.dataset.current) {
      return false;
    } else {
      self.setData({
        currentDocTab: e.target.dataset.current
      })
    }
  }, 
  swichJiShuTab: function (e) {
    var self = this;
    if (self.data.currentJiShuTab === e.target.dataset.current) {
      return false;
    } else {
      self.setData({
        currentJiShuTab: e.target.dataset.current
      })
    }
  }
})