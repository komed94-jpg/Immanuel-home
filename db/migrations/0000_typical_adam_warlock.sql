CREATE TABLE "bible_study_completions" (
	"id" serial PRIMARY KEY NOT NULL,
	"member_id" integer NOT NULL,
	"course_slug" text NOT NULL,
	"status" text DEFAULT 'ready' NOT NULL,
	"admin_note" text,
	"completed_at" timestamp with time zone DEFAULT now() NOT NULL,
	"certified_at" timestamp with time zone,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bible_study_page_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"member_id" integer NOT NULL,
	"course_slug" text NOT NULL,
	"lesson_slug" text NOT NULL,
	"page_key" text NOT NULL,
	"studied_on" text NOT NULL,
	"completed_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "bible_study_responses" (
	"id" serial PRIMARY KEY NOT NULL,
	"member_id" integer NOT NULL,
	"course_slug" text NOT NULL,
	"lesson_slug" text NOT NULL,
	"page_key" text NOT NULL,
	"question_key" text NOT NULL,
	"answer" text DEFAULT '' NOT NULL,
	"studied_on" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "member_login_attempts" (
	"id" serial PRIMARY KEY NOT NULL,
	"identifier_hash" text NOT NULL,
	"attempts" integer DEFAULT 0 NOT NULL,
	"window_started_at" timestamp with time zone DEFAULT now() NOT NULL,
	"blocked_until" timestamp with time zone,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "member_login_attempts_identifier_hash_unique" UNIQUE("identifier_hash")
);
--> statement-breakpoint
CREATE TABLE "member_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"member_id" integer NOT NULL,
	"token_hash" text NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "member_sessions_token_hash_unique" UNIQUE("token_hash")
);
--> statement-breakpoint
CREATE TABLE "members" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"birth_date" text NOT NULL,
	"password_hash" text NOT NULL,
	"account_status" text DEFAULT 'active' NOT NULL,
	"membership_status" text DEFAULT 'nonmember' NOT NULL,
	"role" text DEFAULT 'member' NOT NULL,
	"member_number" text,
	"registration_category" integer,
	"address" text,
	"occupation" text,
	"current_department" text,
	"faith_years" text,
	"baptism_type" text,
	"baptism_church" text,
	"previous_church_name" text,
	"previous_church_position" text,
	"service_history" text,
	"pastoral_note" text,
	"privacy_consented_at" timestamp with time zone DEFAULT now() NOT NULL,
	"approved_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "members_email_unique" UNIQUE("email"),
	CONSTRAINT "members_phone_unique" UNIQUE("phone"),
	CONSTRAINT "members_member_number_unique" UNIQUE("member_number")
);
--> statement-breakpoint
ALTER TABLE "bible_study_completions" ADD CONSTRAINT "bible_study_completions_member_id_members_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bible_study_page_progress" ADD CONSTRAINT "bible_study_page_progress_member_id_members_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bible_study_responses" ADD CONSTRAINT "bible_study_responses_member_id_members_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_sessions" ADD CONSTRAINT "member_sessions_member_id_members_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."members"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "bible_study_completion_member_course_idx" ON "bible_study_completions" USING btree ("member_id","course_slug");--> statement-breakpoint
CREATE UNIQUE INDEX "bible_study_progress_member_page_idx" ON "bible_study_page_progress" USING btree ("member_id","course_slug","lesson_slug","page_key");--> statement-breakpoint
CREATE UNIQUE INDEX "bible_study_response_member_question_idx" ON "bible_study_responses" USING btree ("member_id","course_slug","lesson_slug","page_key","question_key");