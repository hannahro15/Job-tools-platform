"use server";

import { notes, NoteCategoryEnum } from "@/lib/db/schema";
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
