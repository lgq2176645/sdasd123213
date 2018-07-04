// pages/my/my.js
var app = getApp
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{
        avatarUrl:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=209482008,3032162102&fm=27&gp=0.jpg',
        ncikName:'王者重道'
      },
      icon: [{
        iconImg: '/image/daifu1.png',
        text: '代付款'
      }, {
        iconImg: '/image/daifa1.png',
        text: '代发货'
      }, {
        iconImg: '/image/daishou1.png',
        text: '待收货'
      }, {
        iconImg: '/image/yiwan1.png',
        text: '待收货'
      }, {
        iconImg: '/image/tuikuan1.png',
        text: '待收货'
      }],
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
  
  }
})