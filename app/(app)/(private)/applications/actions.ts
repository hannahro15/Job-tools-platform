"use server"

import { auth } from "@clerk/nextjs/server"
import { db } from "@/lib/db"
import { applications, applicationStatusEnum } from "@/lib/db/schema";
import { revalidatePath } from "next/cache"
import { eq } from "drizzle-orm";
import { and } from "drizzle-orm";


export async function addApplication(formData: FormData) {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("User not authenticated")
    }

    const company = formData.get("company") as string;
    const role = formData.get("role") as string;
    const dateApplied = new Date(formData.get("date_applied") as string);
    const location = formData.get("location") as string;
    const status = formData.get("status") as (typeof applicationStatusEnum.enumValues[number]);

    await db.insert(applications).values({
        user_id: userId,
        company: company,
        role: role,
        date_applied: dateApplied,
        location: location,
        status: status
    })
    revalidatePath("/applications")
}

export async function deleteApplication(formData: FormData) {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("User not authenticated")
    }

    const applicationId = Number(formData.get("id"));
    await db.delete(applications).where(and(eq(applications.id, applicationId), eq(applications.user_id, userId)))
    revalidatePath("/applications")
}
