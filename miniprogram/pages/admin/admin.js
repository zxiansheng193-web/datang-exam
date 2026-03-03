// pages/admin/admin.js
const app = getApp();
const { formatTime, formatDate, getScoreColor, getScoreBadge } = require('../../utils/util.js');
const { roleNames } = require('../../data/questionBank.js');

Page({
  data: {
    records: [],
    loading: true,
    totalRecords: 0,
    avgPercentage: 0,
    avgDuration: '00:00',
    passRate: 0
  },

  onLoad() {
    this.fetchRecords();
  },

  onShow() {
    // 每次显示页面时刷新数据
    this.fetchRecords();
  },

  async fetchRecords() {
    this.setData({ loading: true });

    try {
      const records = await app.getExamRecords();

      const processedRecords = records.map(record => {
        const percentage = record.totalScore > 0
          ? Math.round((record.score / record.totalScore) * 100)
          : 0;

        return {
          ...record,
          roleName: roleNames[record.role] || record.role,
          duration: formatTime(record.duration),
          percentage: percentage,
          badgeClass: getScoreBadge(record.score, record.totalScore),
          submitTime: formatDate(record.submitted_at)
        };
      });

      // 计算统计数据
      const totalRecords = records.length;
      let avgPercentage = 0;
      let totalDuration = 0;
      let passCount = 0;

      if (totalRecords > 0) {
        const totalPercentage = records.reduce((sum, r) => {
          return sum + (r.totalScore > 0 ? (r.score / r.totalScore) * 100 : 0);
        }, 0);
        avgPercentage = Math.round(totalPercentage / totalRecords);

        totalDuration = records.reduce((sum, r) => sum + r.duration, 0);

        passCount = records.filter(r => {
          const percentage = r.totalScore > 0 ? (r.score / r.totalScore) * 100 : 0;
          return percentage >= 60;
        }).length;
      }

      const avgDurationValue = totalRecords > 0 ? Math.round(totalDuration / totalRecords) : 0;
      const passRate = totalRecords > 0 ? Math.round((passCount / totalRecords) * 100) : 0;

      this.setData({
        records: processedRecords,
        loading: false,
        totalRecords,
        avgPercentage,
        avgDuration: formatTime(avgDurationValue),
        passRate
      });
    } catch (error) {
      console.error('获取考试记录失败:', error);
      this.setData({
        loading: false
      });
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      });
    }
  },

  refreshData() {
    this.fetchRecords();
    wx.showToast({
      title: '已刷新',
      icon: 'success'
    });
  },

  viewDetail(e) {
    const record = e.currentTarget.dataset.record;
    wx.navigateTo({
      url: `/pages/admin/detail/detail?id=${record.id}&name=${record.name}&role=${record.role}&score=${record.score}&totalScore=${record.totalScore}&duration=${record.duration}&percentage=${record.percentage}&submitTime=${encodeURIComponent(record.submitTime)}`
    });
  }
});
