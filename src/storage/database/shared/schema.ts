import { pgTable, serial, text, integer, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const examRecords = pgTable("exam_records", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	role: text().notNull(),
	score: integer().notNull(), // 客观题得分
	subjectiveScore: integer("subjective_score").default(0), // 主观题得分
	totalScore: integer("total_score").notNull(), // 客观题总分
	totalSubjectiveScore: integer("total_subjective_score").default(0), // 主观题总分
	duration: integer().notNull(),
	submittedAt: timestamp("submitted_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	answers: text().notNull(),
	needsGrading: integer("needs_grading").default(0).notNull(), // 是否需要人工评分 (0=不需要, 1=需要)
	gradedAt: timestamp("graded_at", { withTimezone: true, mode: 'string' }), // 评分时间
});

export const healthCheck = pgTable("health_check", {
	id: serial().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});
