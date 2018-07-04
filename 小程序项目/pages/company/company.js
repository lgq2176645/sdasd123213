// pages/company/company.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'http://58pic.ooopic.com/58pic/18/02/96/26558PICbu2.jpg',
      'http://n.sinaimg.cn/finance/transform/20161101/bQhV-fxxhmcp4331500.png',
      'http://img5.imgtn.bdimg.com/it/u=139238242,4262994731&fm=27&gp=0.jpg'
    ],
    wenzi:[
      "sda",
      "sda",
      "sda",
    ],
    indicatordots:true,
    autoplay:true,
    interval:3000,
    circular:true,
    duration:1000,
    icon: [{
      iconImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1832560271,155450542&fm=27&gp=0.jpg',
      text: '房屋出租'
    }, {
      iconImg: 'http://img4.imgtn.bdimg.com/it/u=1416491392,2441299956&fm=27&gp=0.jpg',
      text: '教育培训'
    }, {
      iconImg: 'http://img3.imgtn.bdimg.com/it/u=3241597271,1456577750&fm=27&gp=0.jpg',
      text: '优秀促销'
    }, {
      iconImg: 'http://img0.imgtn.bdimg.com/it/u=551870967,766457781&fm=27&gp=0.jpg',
      text: '生活服务'
    }, {
      iconImg: 'http://img4.imgtn.bdimg.com/it/u=1362705571,1183067043&fm=27&gp=0.jpg',
      text: '生意转让'
    }, {
      iconImg: 'http://img4.imgtn.bdimg.com/it/u=1485334305,1242058993&fm=27&gp=0.jpg',
      text: '汽车服务'
    }, {
      iconImg: 'http://img4.imgtn.bdimg.com/it/u=903059295,1512121387&fm=27&gp=0.jpg',
      text: '二手买卖'
    }, {
      iconImg: 'http://img4.imgtn.bdimg.com/it/u=3666657493,930881857&fm=27&gp=0.jpg',
      text: '求职招聘'
    }
    ],
    selected:true,
    selected1:false,
    tableft:[{
      tableftImage1:'/image/shouche.jpg',
      tablefttext1:'高价收购精品二手车',
      tableftImage2:'/image/xixi1.png',
      tableftImage3:'/image/dianh1.png',
      tableftImage4:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3366233178,3605732163&fm=200&gp=0.jpg',
      tablefttext2:'十堰生活馆',
    }, {
        tableftImage1: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3306568276,3979109570&fm=27&gp=0.jpg',
      tablefttext1: '太阳能发电',
      tableftImage2: '/image/xixi1.png',
      tableftImage3: '/image/dianh1.png',
      tableftImage4: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4212220589,1103075872&fm=27&gp=0.jpg',
      tablefttext2: '十堰瑜伽馆',
      }, {
        tableftImage1: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1323358970,3189354097&fm=27&gp=0.jpg',
        tablefttext1: '十堰精品装修公司',
        tableftImage2: '/image/xixi1.png',
        tableftImage3: '/image/dianh1.png',
        tableftImage4: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3921483797,1839366674&fm=200&gp=0.jpg',
        tablefttext2: '十堰图书馆',
    }, {
        tableftImage1: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1270590407,1902126361&fm=200&gp=0.jpg',
      tablefttext1: '十堰美食街',
      tableftImage2: '/image/xixi1.png',
      tableftImage3: '/image/dianh1.png',
      tableftImage4: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=370545780,988582199&fm=27&gp=0.jpg',
      tablefttext2: '十堰美妆店',
      }, {
        tableftImage1: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1594046497,1024113468&fm=200&gp=0.jpg',
        tablefttext1: '十堰本地住宿',
        tableftImage2: '/image/xixi1.png',
        tableftImage3: '/image/dianh1.png',
        tableftImage4: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=643619004,3686060818&fm=27&gp=0.jpg',
        tablefttext2: '十堰楼市',
    }, {
        tableftImage1: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=743719138,3173722060&fm=200&gp=0.jpg',
      tablefttext1: '十堰超市',
      tableftImage2: '/image/xixi1.png',
      tableftImage3: '/image/dianh1.png',
      tableftImage4: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2790883722,2941138934&fm=27&gp=0.jpg',
      tablefttext2: '十堰4s店',
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(e) {
    console.log(e.title)
    this.setData({
      msgList: [
        { url: "url", title: "十堰商圈试营中，欢迎个人商家入驻！",titler:'恭喜【阳光生活馆】成功入驻' },
        { url: "url", title: "请遵守想关的法律法规，勿发涉黄信息！！" ,titler: '恭喜【十堰百度营销中心】成功入驻'},
        { url: "url", title: "不按规定发帖，你将进入黑名单！！！", titler: '恭喜【十堰罗克公司】成功入驻' }]
    });
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
  selected: function (e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  tal: function () {
    wx.makePhoneCall({
      phoneNumber:'18230544563',
      surress:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  }
})