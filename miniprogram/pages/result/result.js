// pages/result/result.js
const { formatTime, getScoreBadge } = require('../../utils/util.js');

Page({
  data: {
    score: 0,
    totalScore: 0,
    duration: 0,
    name: '',
    roleName: '',
    percentage: 0,
    scoreClass: ''
  },

  onLoad(options) {
    const { score, totalScore, duration } = options;

    // 获取考试信息
    const examInfo = wx.getStorageSync('examInfo');
    const name = examInfo?.name || '';
    const roleName = examInfo?.roleName || '';

    const scoreNum = parseInt(score) || 0;
    const totalScoreNum = parseInt(totalScore) || 0;
    const durationNum = parseInt(duration) || 0;
    const percentage = totalScoreNum > 0 ? Math.round((scoreNum / totalScoreNum) * 100) : 0;

    this.setData({
      score: scoreNum,
      totalScore: totalScoreNum,
      duration: formatTime(durationNum),
      name: name,
      roleName: roleName,
      percentage: percentage,
      scoreClass: getScoreBadge(scoreNum, totalScoreNum)
    });

    // 清除考试信息
    wx.removeStorageSync('examInfo');
  },

  backToHome() {
    wx.reLaunch({
      url: '/pages/index/index'
    });
  },

  viewAdmin() {
    wx.switchTab({
      url: '/pages/admin/admin'
    });
  }
});
