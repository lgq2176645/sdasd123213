// pages/join/join.js
var app = getApp()
Page({
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    headerright:[{
      liulan: '8686',
      tiezi:'80'
    }],
      icon: [{
        iconImg: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1832560271,155450542&fm=27&gp=0.jpg',
        text: '房屋出租'
      }, {
        iconImg: 'http://img4.imgtn.bdimg.com/it/u=1416491392,2441299956&fm=27&gp=0.jpg',
        text: '教育培训'
        },{
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
      tabheader: [{
        tabheaderimage1: '/image/xcx1.png',
        tabheadertext1: '小程序研究中心--但...',
        tabheadertext2: '置顶',
        tabheadertext3: '商务服务',
        tabheaderimage2:'/image/dh3.png',
        tabheaderbutton1:'拨打电话'
      }, {
          tabheaderimage1: 'http://img3.imgtn.bdimg.com/it/u=3241597271,1456577750&fm=27&gp=0.jpg',
        tabheadertext1: '优惠促销，你的专选...',
        tabheadertext2: '置顶',
        tabheadertext3: '商务服务',
        tabheaderimage2: '/image/dh3.png',
        tabheaderbutton1: '拨打电话'
      },{
          tabheaderimage1: 'http://img3.imgtn.bdimg.com/it/u=3241597271,1456577750&fm=27&gp=0.jpg',
        tabheadertext1: '优惠促销，你的专选...',
        tabheadertext2: '置顶',
        tabheadertext3: '商务服务',
        tabheaderimage2: '/image/dh3.png',
        tabheaderbutton1: '拨打电话'
      }],
      nextmargin:'500rpx',
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      mername: options.mername//options为页面路由过程中传递的参数
    })
    wx.setNavigationBarTitle({
      title: that.data.mername//页面标题为路由参数
    })
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
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  tel: function () {
    wx.makePhoneCall({
      phoneNumber: '18230544563',
      success: true,
      fail: false,
      complete: false
    })
  }
})