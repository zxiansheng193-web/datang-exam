import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

const client = getSupabaseClient();

// GET - 获取所有考试记录
export async function GET() {
  try {
    const { data, error } = await client
      .from('exam_records')
      .select('*')
      .order('submitted_at', { ascending: false });

    if (error) {
      console.error('获取考试记录失败:', error);
      return NextResponse.json({ error: '获取考试记录失败' }, { status: 500 });
    }

    return NextResponse.json(data || []);
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

    const { data, error } = await client
      .from('exam_records')
      .insert({
        name: name.trim(),
        role,
        score,
        totalScore,
        duration,
        answers: JSON.stringify(answers),
      })
      .select()
      .single();

    if (error) {
      console.error('保存考试记录失败:', error);
      return NextResponse.json({ error: '保存考试记录失败' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('保存考试记录失败:', error);
    return NextResponse.json({ error: '保存考试记录失败' }, { status: 500 });
  }
}
