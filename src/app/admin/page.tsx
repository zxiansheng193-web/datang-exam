'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const ADMIN_PASSWORD = '888888'; // 后台密码，可以修改

interface ExamRecord {
  id: number;
  name: string;
  role: string;
  score: number; // 客观题得分
  subjectiveScore?: number; // 主观题得分
  totalScore: number; // 客观题总分
  totalSubjectiveScore?: number; // 主观题总分
  duration: number;
  submittedAt: string;
  answers: string;
  needsGrading?: boolean; // 是否需要人工评分
  gradedAt?: string; // 评分时间
}

const roleNames: { [key: string]: string } = {
  reception: '前台接待顾问',
  mechanic: '汽修工',
  storekeeper: '库房管理员',
};

export default function AdminPage() {
  const router = useRouter();
  const [records, setRecords] = useState<ExamRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [authenticating, setAuthenticating] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<ExamRecord | null>(null);

  const fetchRecords = async () => {
    try {
      const res = await fetch('/api/exams');
      const data = await res.json();
      setRecords(data);
    } catch (error) {
      console.error('获取考试记录失败:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) {
      return; // 等待组件挂载
    }

    // 验证密码
    const auth = localStorage.getItem('adminAuth');
    const authTime = localStorage.getItem('adminAuthTime');
    
    if (!auth || auth !== 'true') {
      // 未认证，立即跳转到登录页面
      router.replace('/admin/login');
      return;
    }
    
    // 检查会话是否过期（24小时）
    if (authTime) {
      const elapsed = Date.now() - parseInt(authTime);
      if (elapsed > 24 * 60 * 60 * 1000) {
        localStorage.removeItem('adminAuth');
        localStorage.removeItem('adminAuthTime');
        router.replace('/admin/login');
        return;
      }
    }

    // 认证成功，加载数据
    setAuthenticating(false);
    fetchRecords();
  }, [router, isMounted]);

  // 如果正在认证，显示加载状态
  if (authenticating || !isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-xl">
          <CardContent className="pt-6 text-center">
            <div className="text-xl font-semibold mb-2">正在验证身份...</div>
            <div className="text-sm text-gray-600">请稍候</div>
            <p className="text-xs text-gray-500 mt-2">
              如果长时间停留在本页面，请先登录：<a href="/admin/login" className="text-blue-600 hover:underline">点击登录</a>
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getScoreColor = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBadgeVariant = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'default';
    if (percentage >= 60) return 'secondary';
    return 'destructive';
  };

  const handleGradeSubjective = async (recordId: number, score: number) => {
    try {
      const res = await fetch('/api/exams/grade', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: recordId, subjectiveScore: score }),
      });
      if (!res.ok) {
        alert('评分失败，请重试');
        return;
      }
      await fetchRecords(); // 刷新数据
      alert('评分成功！');
    } catch (error) {
      console.error('评分失败:', error);
      alert('评分失败，请重试');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* 头部 */}
        <Card className="mb-6 shadow-lg">
          <CardContent className="pt-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  📊 考试记录管理后台
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                  查看和管理所有员工的考试记录
                </p>
              </div>
              <div className="flex gap-3">
                <Button onClick={fetchRecords} variant="outline">
                  刷新数据
                </Button>
                <Button
                  onClick={() => {
                    localStorage.removeItem('adminAuth');
                    localStorage.removeItem('adminAuthTime');
                    router.push('/');
                  }}
                  variant="outline"
                >
                  退出登录
                </Button>
                <Link href="/">
                  <Button>返回考试页面</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 统计卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">总考试次数</div>
              <div className="text-3xl font-bold text-blue-600">{records.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">平均得分率</div>
              <div className="text-3xl font-bold text-green-600">
                {records.length > 0
                  ? Math.round(
                      (records.reduce((sum, r) => sum + (r.score / r.totalScore) * 100, 0) /
                        records.length)
                    )
                  : 0}
                %
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">平均用时</div>
              <div className="text-3xl font-bold text-purple-600">
                {records.length > 0
                  ? formatTime(
                      Math.round(records.reduce((sum, r) => sum + r.duration, 0) / records.length)
                    )
                  : '00:00'}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="text-sm text-gray-600 dark:text-gray-400">及格率 (≥60%)</div>
              <div className="text-3xl font-bold text-orange-600">
                {records.length > 0
                  ? Math.round(
                      (records.filter((r) => (r.score / r.totalScore) * 100 >= 60).length /
                        records.length) *
                        100
                    )
                  : 0}
                %
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 考试记录表格 */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>考试记录列表</CardTitle>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="text-center py-12 text-gray-500">加载中...</div>
            ) : records.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                暂无考试记录，等待员工参加考试
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>姓名</TableHead>
                    <TableHead>岗位</TableHead>
                    <TableHead>得分</TableHead>
                    <TableHead>得分率</TableHead>
                    <TableHead>用时</TableHead>
                    <TableHead>提交时间</TableHead>
                    <TableHead>操作</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {records.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell className="font-medium">{record.id}</TableCell>
                      <TableCell>{record.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{roleNames[record.role] || record.role}</Badge>
                      </TableCell>
                      <TableCell className={getScoreColor(record.score, record.totalScore)}>
                        {record.score}/{record.totalScore}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getScoreBadgeVariant(record.score, record.totalScore)}>
                          {Math.round((record.score / record.totalScore) * 100)}%
                        </Badge>
                      </TableCell>
                      <TableCell>{formatTime(record.duration)}</TableCell>
                      <TableCell>{formatDate(record.submittedAt)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedRecord(record)}
                              >
                                查看详情
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh]">
                              <DialogHeader>
                                <DialogTitle>考试详情 - {record.name}</DialogTitle>
                              </DialogHeader>
                              <ScrollArea className="h-[60vh] pr-4">
                                <div className="space-y-4">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div>
                                      <div className="text-sm text-gray-500">姓名</div>
                                      <div className="font-semibold">{record.name}</div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">岗位</div>
                                      <div className="font-semibold">
                                        {roleNames[record.role] || record.role}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">客观题得分</div>
                                      <div className={`font-semibold ${getScoreColor(record.score, record.totalScore)}`}>
                                        {record.score}/{record.totalScore} (
                                        {Math.round((record.score / record.totalScore) * 100)}%)
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">主观题得分</div>
                                      <div className="font-semibold">
                                        {record.subjectiveScore || 0}/{record.totalSubjectiveScore || 0}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">总分</div>
                                      <div className="font-semibold text-xl">
                                        {(record.score + (record.subjectiveScore || 0))}/{(record.totalScore || 100) + (record.totalSubjectiveScore || 0)}
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">用时</div>
                                      <div className="font-semibold">{formatTime(record.duration)}</div>
                                    </div>
                                    <div>
                                      <div className="text-sm text-gray-500">提交时间</div>
                                      <div className="font-semibold">{formatDate(record.submittedAt)}</div>
                                    </div>
                                  </div>

                                  <div className="border-t pt-4">
                                    <h3 className="font-semibold mb-3">答题记录</h3>
                                    <div className="space-y-3">
                                      {JSON.parse(record.answers).map((item: any, idx: number) => (
                                        <div key={idx} className="border rounded-lg p-3">
                                          <div className="text-sm text-gray-500 mb-1">
                                            第 {item.index + 1} 题
                                          </div>
                                          <div className="font-medium">
                                            作答：{item.answer || '未作答'}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </ScrollArea>
                            </DialogContent>
                          </Dialog>
                          {record.needsGrading && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="secondary" size="sm">
                                  评分主观题
                                </Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>主观题评分 - {record.name}</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  <div>
                                    <Label htmlFor="subjectiveScore">主观题得分（满分：{record.totalSubjectiveScore || 6}分）</Label>
                                    <Input
                                      id="subjectiveScore"
                                      type="number"
                                      min={0}
                                      max={record.totalSubjectiveScore || 6}
                                      defaultValue={record.subjectiveScore || 0}
                                    />
                                  </div>
                                  <Button
                                    onClick={() => {
                                      const input = document.getElementById('subjectiveScore') as HTMLInputElement;
                                      const score = parseFloat(input.value);
                                      if (isNaN(score) || score < 0 || score > (record.totalSubjectiveScore || 6)) {
                                        alert('请输入有效的分数');
                                        return;
                                      }
                                      handleGradeSubjective(record.id, score);
                                    }}
                                  >
                                    提交评分
                                  </Button>
                                </div>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
