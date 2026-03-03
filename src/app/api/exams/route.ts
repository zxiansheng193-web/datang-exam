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
    const { name, role, score, subjectiveScore, totalScore, totalSubjectiveScore, duration, answers, needsGrading } = body;

    if (!name || !role || score === undefined || !duration) {
      return NextResponse.json({ error: '缺少必要参数' }, { status: 400 });
    }

    const { data, error } = await client
      .from('exam_records')
      .insert({
        name: name.trim(),
        role,
        score, // 客观题得分
        subjectiveScore: subjectiveScore || 0, // 主观题得分
        totalScore, // 客观题总分
        totalSubjectiveScore: totalSubjectiveScore || 0, // 主观题总分
        duration,
        answers: JSON.stringify(answers),
        needsGrading: needsGrading !== undefined ? needsGrading : false, // 是否需要人工评分
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
