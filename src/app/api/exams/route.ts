import { NextRequest, NextResponse } from 'next/server';
import { supabase, type ExamRecord } from '@/lib/db/supabase';

// 临时存储（用于测试，不连接数据库）
let tempRecords: ExamRecord[] = [];

// 检查是否配置了 Supabase
const isSupabaseConfigured = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  return url && url !== 'your_supabase_project_url' && url.startsWith('http');
};

// GET - 获取所有考试记录
export async function GET() {
  try {
    // 如果配置了 Supabase，从数据库读取
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('exam_records')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) {
        console.error('获取考试记录失败:', error);
        return NextResponse.json({ error: '获取考试记录失败' }, { status: 500 });
      }

      return NextResponse.json(data || []);
    }

    // 未配置数据库，返回临时数据
    return NextResponse.json(tempRecords);
  } catch (error) {
    console.error('获取考试记录失败:', error);
    return NextResponse.json({ error: '获取考试记录失败' }, { status: 500 });
  }
}

// POST - 保存考试记录
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, role, score, totalScore, duration, answers } = body;

    if (!name || !role || score === undefined || !duration) {
      return NextResponse.json({ error: '缺少必要参数' }, { status: 400 });
    }

    const newRecord: Partial<ExamRecord> = {
      name: name.trim(),
      role,
      score,
      totalScore,
      duration,
      answers: JSON.stringify(answers),
    };

    // 如果配置了 Supabase，保存到数据库
    if (isSupabaseConfigured()) {
      const { data, error } = await supabase
        .from('exam_records')
        .insert([newRecord])
        .select()
        .single();

      if (error) {
        console.error('保存考试记录失败:', error);
        return NextResponse.json({ error: '保存考试记录失败' }, { status: 500 });
      }

      return NextResponse.json(data);
    }

    // 未配置数据库，保存到临时存储
    const recordWithId = {
      ...newRecord,
      id: tempRecords.length + 1,
      submitted_at: new Date().toISOString(),
    } as ExamRecord;

    tempRecords.push(recordWithId);
    return NextResponse.json(recordWithId);
  } catch (error) {
    console.error('保存考试记录失败:', error);
    return NextResponse.json({ error: '保存考试记录失败' }, { status: 500 });
  }
}
