CREATE TYPE "public"."application_status" AS ENUM('applied', 'screening', 'interviewing', 'offer', 'rejected', 'withdrawn', 'ghosted');--> statement-breakpoint
ALTER TABLE "applications" ALTER COLUMN "location" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "applications" ALTER COLUMN "status" SET DATA TYPE "public"."application_status" USING "status"::"public"."application_status";