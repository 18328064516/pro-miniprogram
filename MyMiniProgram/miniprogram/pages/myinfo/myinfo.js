// pages/myinfo/myinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers5:[
      'cloud://pusitongminiprogram.7075-pusitongminiprogram-1302923402/NaixueImgs/details/d1.jpg',
      'cloud://pusitongminiprogram.7075-pusitongminiprogram-1302923402/NaixueImgs/details/d2.jpg',
    ],
    markers: [{
      iconPath: "/images/tabimg/zuobiao.png",
      id: 0,
      latitude: 22.532052,
      longitude: 114.022921,
      width: 40,
      height: 40
    }],
    // polyline: [{
    //   points: [{
    //     longitude: 114.022921,
    //     latitude: 22.532052
    //   }, {
    //     longitude: 114.022921,
    //     latitude: 22.532052
    //   }],
    //   color:"#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    // controls: [{
    //   id: 1,
    //   iconPath: '/resources/location.png',
    //   position: {
    //     left: 0,
    //     top: 300 - 50,
    //     width: 50,
    //     height: 50
    //   },
    //   clickable: true
    // }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.detail.markerId)
  },
  controltap(e) {
    console.log(e.detail.controlId)
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