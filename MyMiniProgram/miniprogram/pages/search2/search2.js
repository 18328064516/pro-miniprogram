// pages/search2/search2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    time:'',
    inputValue: "",
    products:[]
  },
  clear: function () {
    this.setData({
      inputValue: "",
    })
  },
  back: function () {
    wx.switchTab({
      url: '/pages/search/search',
    })
  },
  //商品关键字模糊搜索
  bindInput: function (e) {
    let {value}=e.detail;
    // if(!value.trim()){
    //   return
    // }
    // if(this.data.time){
    //   this.setData({
    //     time:clearTimeout(this.data.time)
    //   })
    // }
    if(!value.trim()){
      wx.showToast({
        title: '不能有空格！',
        image: '../../images/tabimg/warning.png',
        duration: 2000,
      })
    }
    
    this.setData({
      time:setTimeout(()=>{
        this.getSearch(value);
      },1000)
      
    })
    console.log(value)
  },
  getSearch(value){
    let db = wx.cloud.database();
    // 数据库正则对象
    db.collection('proFenlei2')
    .where({
      pname: {
        $regex: '.*'+value,//做为关键字进行匹配
      }
    })
    .get({
      success:res=>{
        this.setData({
          products:res.data
        });
        console.log(res.data)
      }
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

  }
})