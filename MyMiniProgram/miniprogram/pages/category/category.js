// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proimgs:['cloud://pusitongminiprogram.7075-pusitongminiprogram-1302923402/NaixueImgs/proList/p1.png'],
    //定义当前默认分类为分类1
    products1:[],
    products2:[],
    products3:[],
    // fenlei:[
    //   {
    //   "Fid":1,
    //   "name":"寻好茶"
    //   },
    //   {
    //     "Fid":2,
    //     "name":'手做软欧包'
    //     },
    //     {
    //       "Fid":3,
    //       "name":'冷泡茶'
    //       }],
    curIndex:0,
    
  },
  boxtwo: function (e) {
    // 获取item项的id，和数组的下标值
    var index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curIndex: index
    })
    
   },

  tap1: function (e) {
    // 获取item项的id，和数组的下标值
    var index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curIndex: index
    })
    //1.连接到云数据库,返回database对象
    let db=wx.cloud.database();
    //2.在集合中插入记录,返回collection对象
    let collect=db.collection('proFenlei2');
    collect
    .field({
      _id:false,
      pname:true,
      pimg:true,
      pid:true,
      Fid:true
    })
    .where({
      Fid:1
    })
    .get({
      success:res=>{
        console.log(res) ;
        this.setData({
          products1:res.data,
        }); 
        console.log(res.data) ; 
      }
    });
    
   },

   tap2: function (e) {
      // 获取item项的id，和数组的下标值
    var index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curIndex: index
    })
    //1.连接到云数据库,返回database对象
    let db=wx.cloud.database();
    //2.在集合中插入记录,返回collection对象
    let collect=db.collection('proFenlei2');
    collect
    .field({
      _id:false,
      pname:true,
      pimg:true,
      pid:true,
      Fid:true
    })
    .where({
      Fid:2
    })
    .get({
      success:res=>{
        console.log(res) ;
        this.setData({
          products2:res.data,
        }); 
        console.log(res.data) ; 
      }
    });
    
   },

   tap3: function (e) {
      // 获取item项的id，和数组的下标值
    var index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index
    this.setData({
      curIndex: index
    })
    //1.连接到云数据库,返回database对象
    let db=wx.cloud.database();
    //2.在集合中插入记录,返回collection对象
    let collect=db.collection('proFenlei2');
    collect
    .field({
      _id:false,
      pname:true,
      pimg:true,
      pid:true,
      Fid:true
    })
    .where({
      Fid:3
    })
    .get({
      success:res=>{
        console.log(res) ;
        this.setData({
          products3:res.data,
        }); 
        console.log(res.data) ; 
      }
    });
    
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
    .field({
      _id:false,
      pname:true,
      pimg:true,
      pid:true,
      Fid:true
    })
    .where({
      Fid:1 
    })
    .get({
      success:res=>{
        console.log(res) ;
        this.setData({
          products1:res.data,
        }); 
        console.log(res.data) ; 
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