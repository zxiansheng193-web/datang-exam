'use client';

import { useState, useEffect } from 'react';
import { questionBank, roleNames, type Question } from '@/lib/questionBank';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Link from 'next/link';

interface UserAnswer {
  index: number;
  answer: string;
}

export default function ExamSystem() {
  const [name, setName] = useState('');
  const [role, setRole] = useState<keyof typeof questionBank>('reception');
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Map<number, string>>(new Map());
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [duration, setDuration] = useState(0);
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);

  // 计时器
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (examStarted && !examSubmitted) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [examStarted, examSubmitted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExam = () => {
    if (!name.trim()) {
      alert('请输入姓名');
      return;
    }
    const questions = questionBank[role];
    if (!questions || questions.length === 0) {
      alert('该岗位题库为空');
      return;
    }
    setCurrentQuestions(questions);
    setExamStarted(true);
    setExamSubmitted(false);
    setAnswers(new Map());
    setScore(0);
    setTimer(0);
  };

  const resetExam = () => {
    setExamStarted(false);
    setExamSubmitted(false);
    setCurrentQuestions([]);
    setAnswers(new Map());
    setScore(0);
    setTimer(0);
    setDuration(0);
  };

  const handleAnswerChange = (index: number, answer: string) => {
    setAnswers((prev) => new Map(prev).set(index, answer));
  };

  const handleMultiSelectChange = (index: number, option: string, checked: boolean) => {
    const current = answers.get(index) || '';
    const options = current ? current.split('') : [];
    if (checked) {
      options.push(option);
    } else {
      const idx = options.indexOf(option);
      if (idx > -1) options.splice(idx, 1);
    }
    options.sort();
    handleAnswerChange(index, options.join(''));
  };

  const submitExam = async () => {
    if (!confirm('确定提交试卷吗？')) return;

    setLoading(true);
    try {
      let earnedScore = 0;
      let total = 0;
      let correctCount = 0;
      const userAnswers: UserAnswer[] = [];

      currentQuestions.forEach((q, idx) => {
        total += q.score;
        const userAnswer = answers.get(idx) || '';
        userAnswers.push({ index: idx, answer: userAnswer });

        if (q.type <= 3) {
          // 客观题自动评分
          if (userAnswer === q.answer) {
            earnedScore += q.score;
            correctCount++;
          }
        } else if (q.type === 4) {
          // 填空题评分
          const userParts = userAnswer.split('|');
          const correctParts = Array.isArray(q.answer) ? q.answer : [q.answer];
          let allMatch = true;
          for (let i = 0; i < correctParts.length; i++) {
            if (userParts[i] !== correctParts[i]) {
              allMatch = false;
              break;
            }
          }
          if (allMatch) {
            earnedScore += q.score;
            correctCount++;
          }
        }
        // 主观题不计分
      });

      // 总分已经是100分，直接使用实际得分
      setScore(earnedScore);
      setTotalScore(100);
      setDuration(timer);
      setExamSubmitted(true);

      // 保存考试记录
      await fetch('/api/exams', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          role,
          score: earnedScore,
          totalScore: total,
          duration: timer,
          answers: userAnswers,
        }),
      });
    } catch (error) {
      console.error('提交失败:', error);
      alert('提交失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  const renderQuestion = (q: Question, idx: number) => {
    const userAnswer = answers.get(idx) || '';
    const isSubmitted = examSubmitted;

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

    const correctAnswerText = Array.isArray(q.answer) ? q.answer.join('、') : q.answer;

    return (
      <Card key={idx} className="mb-4">
        <CardContent className="pt-6">
          <div className="mb-4">
            <Badge variant="outline">{typeName}</Badge>
            <span className="ml-2 text-sm text-muted-foreground">分值：{q.score}分</span>
          </div>
          <p className="font-medium mb-4">
            {idx + 1}. {q.question}
          </p>

          {/* 单选题 */}
          {q.type === 1 && q.options && (
            <RadioGroup
              value={userAnswer}
              onValueChange={(val) => handleAnswerChange(idx, val)}
              disabled={isSubmitted}
            >
              {q.options.map((opt, i) => (
                <div key={i} className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value={String.fromCharCode(65 + i)} id={`q${idx}-opt${i}`} />
                  <Label htmlFor={`q${idx}-opt${i}`}>
                    {String.fromCharCode(65 + i)}. {opt}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}

          {/* 多选题 */}
          {q.type === 2 && q.options && (
            <div className="space-y-2">
              {q.options.map((opt, i) => {
                const optVal = String.fromCharCode(65 + i);
                const isChecked = userAnswer.includes(optVal);
                return (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox
                      id={`q${idx}-opt${i}`}
                      checked={isChecked}
                      onCheckedChange={(checked) =>
                        handleMultiSelectChange(idx, optVal, checked as boolean)
                      }
                      disabled={isSubmitted}
                    />
                    <Label htmlFor={`q${idx}-opt${i}`}>
                      {optVal}. {opt}
                    </Label>
                  </div>
                );
              })}
            </div>
          )}

          {/* 判断题 */}
          {q.type === 3 && (
            <RadioGroup
              value={userAnswer}
              onValueChange={(val) => handleAnswerChange(idx, val)}
              disabled={isSubmitted}
            >
              <div className="flex items-center space-x-2 mb-2">
                <RadioGroupItem value="对" id={`q${idx}-correct`} />
                <Label htmlFor={`q${idx}-correct`}>对</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="错" id={`q${idx}-wrong`} />
                <Label htmlFor={`q${idx}-wrong`}>错</Label>
              </div>
            </RadioGroup>
          )}

          {/* 填空题 */}
          {q.type === 4 && q.blanks && (
            <div className="space-y-2">
              {q.blanks.map((_, i) => (
                <Input
                  key={i}
                  placeholder={`填空 ${i + 1}`}
                  value={userAnswer.split('|')[i] || ''}
                  onChange={(e) => {
                    const parts = userAnswer.split('|');
                    parts[i] = e.target.value;
                    handleAnswerChange(idx, parts.join('|'));
                  }}
                  disabled={isSubmitted}
                />
              ))}
            </div>
          )}

          {/* 简答题/情景题/案例题 */}
          {(q.type === 5 || q.type === 6 || q.type === 7) && (
            <Textarea
              placeholder="请输入答案"
              value={userAnswer}
              onChange={(e) => handleAnswerChange(idx, e.target.value)}
              disabled={isSubmitted}
              rows={6}
            />
          )}

          {/* 答案解析 */}
          {isSubmitted && q.type <= 4 && (
            <Alert className="mt-4">
              <AlertDescription>
                <p className="font-medium">您的答案：{userAnswer || '未作答'}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  正确答案：{correctAnswerText}
                </p>
                {q.explanation && (
                  <p className="text-sm mt-2">
                    <strong>解析：</strong>{q.explanation}
                  </p>
                )}
              </AlertDescription>
            </Alert>
          )}

          {isSubmitted && q.type > 4 && (
            <Alert className="mt-4">
              <AlertDescription>
                <p className="font-medium">您的答案：</p>
                <p className="text-sm mt-1 whitespace-pre-wrap">{userAnswer || '未作答'}</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>参考答案：</strong>{correctAnswerText}
                </p>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    );
  };

  if (!examStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-blue-900 dark:text-blue-100">
                🚗 大唐环宇名车岗位技能考试系统
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">姓名 *</Label>
                <Input
                  id="name"
                  placeholder="请输入您的姓名"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">选择岗位 *</Label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value as keyof typeof questionBank)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="reception">前台接待顾问</option>
                  <option value="mechanic">汽修工</option>
                  <option value="storekeeper">库房管理员</option>
                </select>
              </div>

              <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">考试说明：</h3>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• 考试时间不限，请合理安排时间</li>
                  <li>• 客观题系统自动评分，主观题需人工评阅</li>
                  <li>• 提交后将自动保存考试记录</li>
                  <li>• 请认真作答，确保信息准确</li>
                </ul>
              </div>

              <Button
                onClick={startExam}
                className="w-full bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                开始考试
              </Button>

              <div className="text-center pt-4">
                <Link
                  href="/admin"
                  className="text-sm text-blue-600 hover:underline dark:text-blue-400"
                >
                  进入后台管理系统
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 考试头部 */}
        <Card className="mb-6 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold">
                  {roleNames[role]} - {name}
                </h2>
                <p className="text-sm text-muted-foreground">
                  题目数量：{currentQuestions.length}题
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-mono font-bold text-red-600">
                  {formatTime(timer)}
                </div>
                <p className="text-xs text-muted-foreground">用时</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 考试题目 */}
        {currentQuestions.map((q, idx) => renderQuestion(q, idx))}

        {/* 提交结果 */}
        {examSubmitted && (
          <Card className="mb-6 shadow-lg border-2 border-green-500">
            <CardContent className="pt-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">
                考试得分：{score}分
              </div>

              {/* 工资提升提示 */}
              {score >= 96 && (
                <Alert className="mb-4 bg-green-50 dark:bg-green-900/20 border-green-500">
                  <AlertDescription className="text-lg font-semibold text-green-700 dark:text-green-400">
                    🎉 恭喜您工资提升500元！
                  </AlertDescription>
                </Alert>
              )}
              {score >= 90 && score <= 95 && (
                <Alert className="mb-4 bg-blue-50 dark:bg-blue-900/20 border-blue-500">
                  <AlertDescription className="text-lg font-semibold text-blue-700 dark:text-blue-400">
                    🎊 恭喜您工资提升200元！
                  </AlertDescription>
                </Alert>
              )}
              {score >= 80 && score <= 89 && (
                <Alert className="mb-4 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500">
                  <AlertDescription className="text-lg font-semibold text-yellow-700 dark:text-yellow-400">
                    🎯 恭喜您工资提升100元！
                  </AlertDescription>
                </Alert>
              )}

              <p className="text-gray-600 dark:text-gray-300">
                用时：{formatTime(duration)} | 题目数量：{currentQuestions.length}题
              </p>
              <div className="mt-4 space-x-2">
                <Button onClick={resetExam} variant="outline">
                  重新考试
                </Button>
                <Link href="/">
                  <Button>返回首页</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* 提交按钮 */}
        {!examSubmitted && (
          <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t shadow-lg p-4">
            <div className="max-w-4xl mx-auto flex justify-end gap-4">
              <Button onClick={resetExam} variant="outline">
                取消考试
              </Button>
              <Button
                onClick={submitExam}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 px-8"
              >
                {loading ? '提交中...' : '提交试卷'}
              </Button>
            </div>
          </div>
        )}

        {/* 底部占位，避免被固定按钮遮挡 */}
        {!examSubmitted && <div className="h-24" />}
      </div>
    </div>
  );
}
