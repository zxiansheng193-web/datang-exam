import { supabase, type ExamRecord } from './supabase';

// 初始化数据库表
export async function initDatabase() {
  const { error: checkError } = await supabase
    .from('exam_records')
    .select('id')
    .limit(1);

  if (checkError) {
    console.log('表不存在,正在创建...');
    const sql = `
      CREATE TABLE IF NOT EXISTS exam_records (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        score INTEGER NOT NULL,
        total_score INTEGER NOT NULL,
        duration INTEGER NOT NULL,
        submitted_at TIMESTAMP DEFAULT NOW() NOT NULL,
        answers TEXT NOT NULL
      );
    `;
    const { error: createError } = await supabase.rpc('exec_sql', { sql });
    if (createError) {
      console.error('创建表失败:', createError);
      // 如果 rpc 不工作,尝试直接通过 SQL 编辑器创建表
      console.log('请在 Supabase SQL 编辑器中手动执行以下 SQL:');
      console.log(sql);
    } else {
      console.log('表创建成功');
    }
  }
}

export { supabase, ExamRecord };
