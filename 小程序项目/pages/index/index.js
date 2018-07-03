Page({
  onPullDownRefresh: function () {
    wx.stopPullDownRefresh()
  },
  data: {
    currentTab: 0,
    imgUrls: [
      'http://58pic.ooopic.com/58pic/18/02/96/26558PICbu2.jpg',
      'http://n.sinaimg.cn/finance/transform/20161101/bQhV-fxxhmcp4331500.png',
      'http://img5.imgtn.bdimg.com/it/u=139238242,4262994731&fm=27&gp=0.jpg'
    ],
    playImg: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1531027855&di=9520582d96f0116d11a0429460b110f1&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01af3257e63fad0000018c1b2691b0.png%402o.jpg",
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530433196321&di=be2817e318719bf3be3697420420a84e&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20170710%2Fac122b52d093400b8ff6f1481fedadd1_th.jpg'
    ],
    position: [{
          img: '/image/y1.png'
    }],
    icon2:[{
      text: '茅箭区 26℃ 多云 ',
      data: '2018-6-22 星期五'
    }],
    swiper2:[{
      swiper2Img1: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=e16baf4349540923ae69647ca259d1dc/9345d688d43f8794c818194ed21b0ef41ad53aee.jpg',
      swiper2Img3:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530437301730&di=b99b83e32f5d6c9f563ea46287312a4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F00a5f459539f31a8012193a3522994.jpg%40260w_195h_1c_1e_1o_100sh.jpg',
      text1:'用户123',
      text3: '用户1983827',
      text2:'房屋出售',
      text4: '经营类',
      swiper2Img2:'/image/dh3.png',
      boda1:'拨打电话'
    },],
    icon3qty:[{
      qty1:'66154',
      qty2: '80',
    }],
    indicatordots:"true",
    indicatorDots: true,
    indicatoractivecolor: 'red',
    circular:true,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    vertical:true,
    scrolly:true,
    onReachBottomDistance: 50,
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
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  //滑动切换
  swiperTab: function (e) {
    var that = this;
    that.setData({
      currentTba: e.detail.current
    });
  },
  //点击切换
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





