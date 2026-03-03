import { pgTable, serial, timestamp, text, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const healthCheck = pgTable("health_check", {
	id: serial().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
})

// 考试记录表
export const examRecords = pgTable("exam_records", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  score: integer("score").notNull(),
  totalScore: integer("total_score").notNull(),
  duration: integer("duration").notNull(),
  submittedAt: timestamp("submitted_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
  answers: text("answers").notNull(),
});
