// pages/admin/detail/detail.js
const { formatTime, getScoreBadge } = require('../../../utils/util.js');
const { roleNames } = require('../../../data/questionBank.js');

Page({
  data: {
    id: 0,
    name: '',
    role: '',
    roleName: '',
    score: 0,
    totalScore: 0,
    duration: '',
    percentage: 0,
    submitTime: '',
    scoreClass: '',
    answers: []
  },

  onLoad(options) {
    const {
      id,
      name,
      role,
      score,
      totalScore,
      duration,
      percentage,
      submitTime
    } = options;

    this.setData({
      id: parseInt(id),
      name: decodeURIComponent(name || ''),
      role: decodeURIComponent(role || ''),
      roleName: roleNames[decodeURIComponent(role || '')] || decodeURIComponent(role || ''),
      score: parseInt(score),
      totalScore: parseInt(totalScore),
      duration: decodeURIComponent(duration || ''),
      percentage: parseInt(percentage),
      submitTime: decodeURIComponent(submitTime || ''),
      scoreClass: getScoreBadge(parseInt(score), parseInt(totalScore))
    });

    // 获取答题记录
    this.fetchAnswers();
  },

  async fetchAnswers() {
    try {
      const app = getApp();
      const records = await app.getExamRecords();
      const record = records.find(r => r.id === this.data.id);

      if (record && record.answers) {
        const answers = JSON.parse(record.answers);
        this.setData({ answers });
      }
    } catch (error) {
      console.error('获取答题记录失败:', error);
    }
  }
});
