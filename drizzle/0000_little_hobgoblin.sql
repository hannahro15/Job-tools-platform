CREATE TABLE "applications" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "applications_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"user_id" text NOT NULL,
	"company" varchar(255) NOT NULL,
	"role" varchar(255) NOT NULL,
	"location" varchar(255),
	"date_applied" date NOT NULL,
	"status" varchar(255) NOT NULL,
	"link" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
