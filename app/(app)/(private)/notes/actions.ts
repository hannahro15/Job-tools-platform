"use server";

import { notes, NoteCategoryEnum } from "@/lib/db/schema";
import { and, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

export async function addNote(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const title = formData.get("title") as string;
  const category = formData.get(
    "category",
  ) as (typeof NoteCategoryEnum.enumValues)[number];
  const content = formData.get("content") as string;

  await db.insert(notes).values({
    user_id: userId,
    title,
    category: category || "general",
    content,
  });

  revalidatePath("/notes");
}

export async function deleteNote(formData: FormData) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");

  const noteId = Number(formData.get("id"));
  await db
    .delete(notes)
    .where(and(eq(notes.id, noteId), eq(notes.user_id, userId)));

  revalidatePath("/notes");
}
