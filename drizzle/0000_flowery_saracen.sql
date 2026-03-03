CREATE TABLE "exam_records" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"role" text NOT NULL,
	"score" integer NOT NULL,
	"total_score" integer NOT NULL,
	"duration" integer NOT NULL,
	"submitted_at" timestamp DEFAULT now() NOT NULL,
	"answers" text NOT NULL
);
