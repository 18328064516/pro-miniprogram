// pages/search/search.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swipers4:[
      'cloud://pusitongminiprogram.7075-pusitongminiprogram-1302923402/NaixueImgs/details/d1.jpg',
      'cloud://pusitongminiprogram.7075-pusitongminiprogram-1302923402/NaixueImgs/details/d2.jpg',
    ],
    products:[],
    inputValue: '',
    time:''
  },
  clear: function () {
    if(this.inputValue !==''){
      this.setData({
        inputValue: "",
      })
      wx.showToast({
        title: '请输入关键字！',
        image: '../../images/tabimg/warning.png',
        duration: 500,
      }) 
      // return
    }
    
    setTimeout(()=>{
      // this.onLoad();
      //1.连接到云数据库,返回database对象
      let db=wx.cloud.database();
      //2.在集合中插入记录,返回collection对象
      let collect=db.collection('proFenlei2');
      collect
      .get({
        success:res=>{
          console.log(res) ;        
          this.setData({
            products:res.data
          });
          console.log(res.data);
        } 
      });
    },1000)

    // wx.showToast({
    //   title: '暂无该商品！',
    //   image: '../../images/tabimg/warning.png',
    //   duration: 500,
    // })
    
    
  },

  //商品关键字模糊搜索
  bindInput: function (e) {
    let {value}=e.detail;
    if(!value.trim()){
      wx.showToast({
        title: '不能有空格！',
        image: '../../images/tabimg/warning.png',
        duration: 2000,
      })
    }
    
    clearTimeout(this.data.time);
    this.data.time=setTimeout(()=>{
          this.getSearch(value);
    },1000)
    console.log(value);
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
    //1.连接到云数据库,返回database对象
    let db=wx.cloud.database();
    //2.在集合中插入记录,返回collection对象
    let collect=db.collection('proFenlei2');
    collect
    .get({
      success:res=>{
        console.log(res) ;        
        this.setData({
          products:res.data
        });
        console.log(res.data);
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