-- 创建考试记录表
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

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_exam_records_submitted_at ON exam_records(submitted_at DESC);
CREATE INDEX IF NOT EXISTS idx_exam_records_role ON exam_records(role);
CREATE INDEX IF NOT EXISTS idx_exam_records_name ON exam_records(name);
