-- 添加主观题评分相关字段
ALTER TABLE exam_records
ADD COLUMN IF NOT EXISTS subjective_score NUMERIC DEFAULT 0; -- 主观题得分
ALTER TABLE exam_records
ADD COLUMN IF NOT EXISTS total_subjective_score NUMERIC DEFAULT 0; -- 主观题总分
ALTER TABLE exam_records
ADD COLUMN IF NOT EXISTS needs_grading BOOLEAN DEFAULT false; -- 是否需要人工评分
ALTER TABLE exam_records
ADD COLUMN IF NOT EXISTS graded_at TIMESTAMPTZ; -- 评分时间
