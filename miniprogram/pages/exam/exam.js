// pages/exam/exam.js
const app = getApp();
const { formatTime } = require('../../utils/util.js');

Page({
  data: {
    name: '',
    roleName: '',
    questions: [],
    answers: {}, // 存储答案
    timer: '00:00',
    submitted: false,
    optionLabels: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
  },

  onLoad() {
    const examInfo = wx.getStorageSync('examInfo');
    if (!examInfo) {
      wx.showToast({
        title: '考试信息不存在',
        icon: 'none'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
      return;
    }

    // 预处理题目数据
    const questions = examInfo.questions.map((q, index) => {
      let typeName = '';
      switch (q.type) {
        case 1: typeName = '【单选】'; break;
        case 2: typeName = '【多选】'; break;
        case 3: typeName = '【判断】'; break;
        case 4: typeName = '【填空】'; break;
        case 5: typeName = '【简答】'; break;
        case 6: typeName = '【情景】'; break;
        case 7: typeName = '【案例】'; break;
      }

      let correctAnswerText = '';
      if (Array.isArray(q.answer)) {
        correctAnswerText = q.answer.join('、');
      } else {
        correctAnswerText = q.answer;
      }

      return {
        ...q,
        typeName,
        correctAnswerText
      };
    });

    this.setData({
      name: examInfo.name,
      roleName: examInfo.roleName,
      questions: questions,
      role: examInfo.role
    });

    // 启动计时器
    this.startTimer();
  },

  onUnload() {
    // 页面卸载时清除计时器
    this.stopTimer();
  },

  startTimer() {
    this.timerInterval = setInterval(() => {
      const seconds = this.data.timerSeconds || 0;
      const newSeconds = seconds + 1;
      this.setData({
        timer: formatTime(newSeconds),
        timerSeconds: newSeconds
      });
    }, 1000);
  },

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  },

  isAnswerSelected(qIndex, optIndex) {
    const answer = this.data.answers[qIndex];
    if (!answer) return false;
    const optionLabel = this.data.optionLabels[optIndex];
    return answer.includes(optionLabel);
  },

  selectOption(e) {
    if (this.data.submitted) return;

    const { index, opt } = e.currentTarget.dataset;
    const optionLabel = this.data.optionLabels[opt];
    this.setData({
      [`answers.${index}`]: optionLabel
    });
  },

  toggleMultiOption(e) {
    if (this.data.submitted) return;

    const { index, opt } = e.currentTarget.dataset;
    const optionLabel = this.data.optionLabels[opt];
    let currentAnswer = this.data.answers[index] || '';
    const options = currentAnswer ? currentAnswer.split('') : [];

    const optIdx = options.indexOf(optionLabel);
    if (optIdx > -1) {
      options.splice(optIdx, 1);
    } else {
      options.push(optionLabel);
    }

    options.sort();
    this.setData({
      [`answers.${index}`]: options.join('')
    });
  },

  selectJudge(e) {
    if (this.data.submitted) return;

    const { index, value } = e.currentTarget.dataset;
    this.setData({
      [`answers.${index}`]: value
    });
  },

  getFillAnswer(qIndex, blankIndex) {
    const answer = this.data.answers[qIndex] || '';
    const parts = answer.split('|');
    return parts[blankIndex] || '';
  },

  onFillInput(e) {
    if (this.data.submitted) return;

    const { q, i } = e.currentTarget.dataset;
    const currentAnswer = this.data.answers[q] || '';
    const parts = currentAnswer.split('|');
    parts[i] = e.detail.value;

    this.setData({
      [`answers.${q}`]: parts.join('|')
    });
  },

  getSubjectiveAnswer(index) {
    return this.data.answers[index] || '';
  },

  onSubjectiveInput(e) {
    if (this.data.submitted) return;

    const { index } = e.currentTarget.dataset;
    this.setData({
      [`answers.${index}`]: e.detail.value
    });
  },

  getUserAnswer(index) {
    return this.data.answers[index] || '';
  },

  cancelExam() {
    wx.showModal({
      title: '提示',
      content: '确定要取消考试吗？答题记录将丢失',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('examInfo');
          wx.navigateBack();
        }
      }
    });
  },

  submitExam() {
    if (this.data.submitted) return;

    wx.showModal({
      title: '确认提交',
      content: '确定提交试卷吗？提交后将无法修改答案',
      success: async (res) => {
        if (res.confirm) {
          await this.doSubmit();
        }
      }
    });
  },

  async doSubmit() {
    wx.showLoading({
      title: '提交中...',
      mask: true
    });

    this.stopTimer();

    try {
      let earnedScore = 0;
      let totalScore = 0;
      const userAnswers = [];

      this.data.questions.forEach((q, idx) => {
        totalScore += q.score;
        const userAnswer = this.data.answers[idx] || '';
        userAnswers.push({
          index: idx,
          answer: userAnswer
        });

        // 客观题自动评分
        if (q.type <= 3) {
          if (userAnswer === q.answer) {
            earnedScore += q.score;
          }
        } else if (q.type === 4) {
          const userParts = userAnswer.split('|');
          const correctParts = Array.isArray(q.answer) ? q.answer : [q.answer];
          let allMatch = true;
          for (let i = 0; i < correctParts.length; i++) {
            if (userParts[i] !== correctParts[i]) {
              allMatch = false;
              break;
            }
          }
          if (allMatch) earnedScore += q.score;
        }
      });

      this.setData({
        submitted: true,
        score: earnedScore,
        totalScore: totalScore
      });

      // 保存考试记录
      try {
        await app.saveExamRecord({
          name: this.data.name,
          role: this.data.role,
          score: earnedScore,
          totalScore: totalScore,
          duration: this.data.timerSeconds || 0,
          answers: userAnswers
        });
      } catch (error) {
        console.error('保存考试记录失败:', error);
        // 保存失败不影响提交，只在控制台记录
      }

      setTimeout(() => {
        wx.hideLoading();
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        });

        // 跳转到结果页面
        setTimeout(() => {
          wx.redirectTo({
            url: `/pages/result/result?score=${earnedScore}&totalScore=${totalScore}&duration=${this.data.timerSeconds || 0}`
          });
        }, 2000);
      }, 500);
    } catch (error) {
      wx.hideLoading();
      wx.showToast({
        title: '提交失败',
        icon: 'none'
      });
    }
  }
});
