// pages/proDetail/proDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    swipers3:[
      'cloud://pusitongminiprogram.7075-pusitongminiprogram-1302923402/NaixueImgs/details/d1.jpg',
      'cloud://pusitongminiprogram.7075-pusitongminiprogram-1302923402/NaixueImgs/details/d2.jpg',
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1.连接到云数据库,返回database对象
    let db=wx.cloud.database();
    //2.在集合中插入记录,返回collection对象
    let collect=db.collection('proFenlei2');

    var  id = options.id-1;

    collect.get({
      success:res=>{
        console.log(res) ;
        console.log(res.data[id]) ;
        this.setData({
          info:res.data[id],
        });
        
      }
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

  }
})