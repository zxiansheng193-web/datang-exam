// pages/index/index.js
const { questionBank, roleNames } = require('../../data/questionBank.js');

Page({
  data: {
    name: '',
    roleIndex: 0,
    roleOptions: [
      { value: 'reception', label: '前台接待顾问' },
      { value: 'mechanic', label: '汽修工' },
      { value: 'storekeeper', label: '库房管理员' }
    ],
    questionCount: 0
  },

  onLoad() {
    // 更新题目数量
    const role = this.data.roleOptions[this.data.roleIndex].value;
    this.setData({
      questionCount: questionBank[role]?.length || 0
    });
  },

  onNameInput(e) {
    this.setData({
      name: e.detail.value
    });
  },

  onRoleChange(e) {
    const index = e.detail.value;
    const role = this.data.roleOptions[index].value;
    this.setData({
      roleIndex: index,
      questionCount: questionBank[role]?.length || 0
    });
  },

  startExam() {
    if (!this.data.name.trim()) {
      wx.showToast({
        title: '请输入姓名',
        icon: 'none'
      });
      return;
    }

    const role = this.data.roleOptions[this.data.roleIndex].value;
    const questions = questionBank[role];

    if (!questions || questions.length === 0) {
      wx.showToast({
        title: '该岗位题库为空',
        icon: 'none'
      });
      return;
    }

    // 保存考试信息到全局数据
    wx.setStorageSync('examInfo', {
      name: this.data.name.trim(),
      role: role,
      roleName: this.data.roleOptions[this.data.roleIndex].label,
      questions: questions
    });

    // 跳转到考试页面
    wx.navigateTo({
      url: '/pages/exam/exam'
    });
  }
});
