import {
  pgTable,
  pgEnum,
  integer,
  varchar,
  date,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const applicationStatusEnum = pgEnum("application_status", [
  "applied",
  "screening",
  "interviewing",
  "offer",
  "rejected",
  "withdrawn",
  "ghosted",
]);

export const applications = pgTable("applications", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: text().notNull(),
  company: varchar({ length: 255 }).notNull(),
  role: varchar({ length: 255 }).notNull(),
  location: varchar({ length: 255 }).notNull(),
  date_applied: date({ mode: "date" }).notNull(),
  status: applicationStatusEnum().notNull(),
  link: text(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp()
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type Application = typeof applications.$inferSelect;

export const noteCategoryEnum = pgEnum("notes_category", [
  "job",
  "interview",
  "technical",
  "networking",
  "general",
]);

export const notes = pgTable("notes", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  user_id: text().notNull(),
  title: varchar({ length: 255 }).notNull(),
  application_id: integer().references(() => applications.id, {
    onDelete: "set null",
  }),
  category: noteCategoryEnum().default("general").notNull(),
  content: text().notNull(),
  created_at: timestamp().defaultNow().notNull(),
  updated_at: timestamp()
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type Note = typeof notes.$inferSelect;
