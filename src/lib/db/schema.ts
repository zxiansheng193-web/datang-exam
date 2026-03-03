import { pgTable, text, integer, timestamp, serial } from 'drizzle-orm/pg-core';

export const examRecords = pgTable('exam_records', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  role: text('role').notNull(),
  score: integer('score').notNull(),
  totalScore: integer('total_score').notNull(),
  duration: integer('duration').notNull(),
  submittedAt: timestamp('submitted_at').notNull().defaultNow(),
  answers: text('answers').notNull(),
});

export type ExamRecord = typeof examRecords.$inferSelect;
export type NewExamRecord = typeof examRecords.$inferInsert;
