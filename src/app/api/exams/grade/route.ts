import { NextRequest, NextResponse } from 'next/server';
import { getSupabaseClient } from '@/storage/database/supabase-client';

const client = getSupabaseClient();

// PUT - 更新主观题评分
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, subjectiveScore } = body;

    if (!id || subjectiveScore === undefined) {
      return NextResponse.json({ error: '缺少必要参数' }, { status: 400 });
    }

    // 获取考试记录
    const { data: record, error: fetchError } = await client
      .from('exam_records')
      .select('*')
      .eq('id', id)
      .single();

    if (fetchError) {
      console.error('获取考试记录失败:', fetchError);
      return NextResponse.json({ error: '获取考试记录失败' }, { status: 500 });
    }

    if (!record) {
      return NextResponse.json({ error: '考试记录不存在' }, { status: 404 });
    }

    // 计算总分（客观题得分 + 主观题得分）
    const totalScore = record.score + subjectiveScore;

    // 更新主观题得分和总分
    const { data, error } = await client
      .from('exam_records')
      .update({
        subjectiveScore,
        totalScore: totalScore,
        needsGrading: false, // 标记为已评分
        gradedAt: new Date().toISOString(),
      })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('更新主观题评分失败:', error);
      return NextResponse.json({ error: '更新主观题评分失败' }, { status: 500 });
    }

    return NextResponse.json({ ...data, totalScore });
  } catch (error) {
    console.error('更新主观题评分失败:', error);
    return NextResponse.json({ error: '更新主观题评分失败' }, { status: 500 });
  }
}
