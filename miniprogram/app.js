// app.js
App({
  globalData: {
    // API 地址，部署后需要修改为实际的服务器地址
    apiBaseUrl: 'http://localhost:5000/api',
    // 可以在开发工具中切换为线上地址
    // apiBaseUrl: 'https://your-domain.com/api'
  },

  onLaunch() {
    // 小程序启动时执行
    console.log('小程序启动');
  },

  // 发起网络请求
  request(options) {
    const { url, method = 'GET', data = {}, success, fail, complete } = options;
    wx.request({
      url: `${this.globalData.apiBaseUrl}${url}`,
      method,
      data,
      header: {
        'content-type': 'application/json',
      },
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          success && success(res.data);
        } else {
          wx.showToast({
            title: '请求失败',
            icon: 'none'
          });
          fail && fail(res);
        }
      },
      fail: (err) => {
        wx.showToast({
          title: '网络错误',
          icon: 'none'
        });
        fail && fail(err);
      },
      complete
    });
  },

  // 保存考试记录
  saveExamRecord(data) {
    return new Promise((resolve, reject) => {
      this.request({
        url: '/exams',
        method: 'POST',
        data,
        success: resolve,
        fail: reject
      });
    });
  },

  // 获取考试记录列表
  getExamRecords() {
    return new Promise((resolve, reject) => {
      this.request({
        url: '/exams',
        method: 'GET',
        success: resolve,
        fail: reject
      });
    });
  }
});
