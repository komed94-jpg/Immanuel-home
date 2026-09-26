import { boolean, integer, pgTable, serial, text, timestamp, uniqueIndex } from "drizzle-orm/pg-core";

export const members = pgTable("members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull().unique(),
  birthDate: text("birth_date").notNull(),
  passwordHash: text("password_hash").notNull(),
  accountStatus: text("account_status").notNull().default("active"),
  membershipStatus: text("membership_status").notNull().default("nonmember"),
  role: text("role").notNull().default("member"),
  memberNumber: text("member_number").unique(),
  registrationCategory: integer("registration_category"),
  address: text("address"),
  occupation: text("occupation"),
  currentDepartment: text("current_department"),
  faithYears: text("faith_years"),
  baptismType: text("baptism_type"),
  baptismChurch: text("baptism_church"),
  previousChurchName: text("previous_church_name"),
  previousChurchPosition: text("previous_church_position"),
  serviceHistory: text("service_history"),
  pastoralNote: text("pastoral_note"),
  privacyConsentedAt: timestamp("privacy_consented_at", { withTimezone: true }).notNull().defaultNow(),
  approvedAt: timestamp("approved_at", { withTimezone: true }),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const memberSessions = pgTable("member_sessions", {
  id: serial("id").primaryKey(),
  memberId: integer("member_id").notNull().references(() => members.id, { onDelete: "cascade" }),
  tokenHash: text("token_hash").notNull().unique(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const memberLoginAttempts = pgTable("member_login_attempts", {
  id: serial("id").primaryKey(),
  identifierHash: text("identifier_hash").notNull().unique(),
  attempts: integer("attempts").notNull().default(0),
  windowStartedAt: timestamp("window_started_at", { withTimezone: true }).notNull().defaultNow(),
  blockedUntil: timestamp("blocked_until", { withTimezone: true }),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const bibleStudyResponses = pgTable("bible_study_responses", {
  id: serial("id").primaryKey(),
  memberId: integer("member_id").notNull().references(() => members.id, { onDelete: "cascade" }),
  courseSlug: text("course_slug").notNull(),
  lessonSlug: text("lesson_slug").notNull(),
  pageKey: text("page_key").notNull(),
  questionKey: text("question_key").notNull(),
  answer: text("answer").notNull().default(""),
  studiedOn: text("studied_on").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex("bible_study_response_member_question_idx").on(table.memberId, table.courseSlug, table.lessonSlug, table.pageKey, table.questionKey)]);

export const bibleStudyPageProgress = pgTable("bible_study_page_progress", {
  id: serial("id").primaryKey(),
  memberId: integer("member_id").notNull().references(() => members.id, { onDelete: "cascade" }),
  courseSlug: text("course_slug").notNull(),
  lessonSlug: text("lesson_slug").notNull(),
  pageKey: text("page_key").notNull(),
  studiedOn: text("studied_on").notNull(),
  completedAt: timestamp("completed_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex("bible_study_progress_member_page_idx").on(table.memberId, table.courseSlug, table.lessonSlug, table.pageKey)]);

export const bibleStudyCompletions = pgTable("bible_study_completions", {
  id: serial("id").primaryKey(),
  memberId: integer("member_id").notNull().references(() => members.id, { onDelete: "cascade" }),
  courseSlug: text("course_slug").notNull(),
  status: text("status").notNull().default("ready"),
  adminNote: text("admin_note"),
  completedAt: timestamp("completed_at", { withTimezone: true }).notNull().defaultNow(),
  certifiedAt: timestamp("certified_at", { withTimezone: true }),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
}, (table) => [uniqueIndex("bible_study_completion_member_course_idx").on(table.memberId, table.courseSlug)]);

