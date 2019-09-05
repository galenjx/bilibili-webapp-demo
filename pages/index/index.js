Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击的nav的索引
    currentIndexNav:0,
    // nav数据
    navLists:[],
    // 轮播图数据
    swiperLists:[],
    // 视频数据
    videosLists:[]
  },

  // nav点击事件
  activeNav(e){//e为事件源对象，e.target为dom对象
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },

  // 屏幕滑动事件
  swiperSlide(e){
    // console.log(e)
    this.setData({
      currentIndexNav:e.detail.current
    })
  },
  // 获取导航栏数据
  getNavLists(){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5ccc2cc89e5cbc7d96b29785/bili/navList',
      success(res){
        // console.log(res.data)
        if (res.data.code==0){
          that.setData({
            navLists: res.data.data.navList
          })
        }
      }
    })
  },

  // 获取轮播图
  getSwiperLists(){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      success(res){
        if(res.data.code===0){
          that.setData({
            swiperLists: res.data.data.swiperList
          })
        }
      }
    })
  }, 
  
  // 获取视频数据
  getVideosLists(){
    let that=this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      success(res){
        if(res.data.code===0){
          that.setData({
            videosLists: res.data.data.videosList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavLists()
    this.getSwiperLists()
    this.getVideosLists()
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