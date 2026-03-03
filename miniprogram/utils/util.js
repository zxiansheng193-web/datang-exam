// utils/util.js

// 格式化时间（秒 -> 分:秒）
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

// 格式化日期
const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hour}:${minute}`;
};

// 获取得分颜色
const getScoreColor = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage >= 80) return '#2e7d32';
  if (percentage >= 60) return '#e65100';
  return '#c62828';
};

// 获取得分样式类
const getScoreBadge = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage >= 80) return 'badge-success';
  if (percentage >= 60) return 'badge-warning';
  return 'badge-danger';
};

module.exports = {
  formatTime,
  formatDate,
  getScoreColor,
  getScoreBadge
};
