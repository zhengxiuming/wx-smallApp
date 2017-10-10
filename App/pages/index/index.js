//index.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    imgUrl:'http://img.douxie.com/upload/upload/2014/11/13/54647b7fe84b0.jpg',
    listItem:[
      { imgUrl: '../../images/kenan.jpg', text: '标题党--柯南', iconUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2451018869,2581623535&fm=27&gp=0.jpg'},
      { imgUrl: '../../images/kenan.jpg', text: '标题党--柯南', iconUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2451018869,2581623535&fm=27&gp=0.jpg'},
      { imgUrl: '../../images/kenan.jpg', text: '标题党--柯南', iconUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2451018869,2581623535&fm=27&gp=0.jpg'},
      { imgUrl: '../../images/kenan.jpg', text: '标题党--柯南', iconUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2451018869,2581623535&fm=27&gp=0.jpg'},
      { imgUrl: '../../images/kenan.jpg', text: '标题党--柯南', iconUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2451018869,2581623535&fm=27&gp=0.jpg'}
    ]
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
  scroll:function(event){
    console.log(event);
  },
  tap:function(){
      this.setData({
        toView:'red'
      })
  },
  tapMove:function(){
    this.setData({
      scrollTop: this.data.scrollTop+10
    })
  },
  upper:function(e){
    console.log(e,'upper');
  },
  lower:function(e){
    console.log(e,'lower');
  },
  resTest:function(){
    var that=this;
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        wx.uploadFile({
          url: 'https://zhengxiuming.com.cn/xiaochengxu/test.php',
          filePath: tempFilePaths[0],
          name: 'image',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            var data = res.data
            console.log(data);
            //do something
            wx.downloadFile({
              url: 'https://zhengxiuming.com.cn/xiaochengxu/upload/' + data, //仅为示例，并非真实的资源
              success: function (res) {
                var tempFilePath = res.tempFilePath;
                that.setData({
                  imgUrl: tempFilePath
                })
              }
            })
          }
        })
      }
    })
    // wx.request({
    //   url: 'https://zhengxiuming.com.cn/xiaochengxu/test.php',
    //   data:{a:1},
    //   method:'GET',
    //   header:{
    //     'content-type': 'application/json'
    //   },
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
  }
})