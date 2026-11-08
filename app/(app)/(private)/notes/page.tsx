import { AddNote } from "@/components/add-note";
import { db } from "@/lib/db";
import { notes } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { DeleteNote } from "@/components/delete-note";
import { EditNote } from "@/components/edit-note";

export default async function Notes() {
  const { userId } = await auth();
  if (!userId) {
    return null;
  }

  const userNotes = await db
    .select()
    .from(notes)
    .where(eq(notes.user_id, userId))
    .orderBy(desc(notes.created_at));

  return (
    <div>
      <h1>Notes</h1>
      <AddNote />
      <ul>
        {userNotes.map((note) => (
          <li key={note.id}>
            <h2>{note.title}</h2>
            <p>Category: {note.category}</p>
            <p>{note.content}</p>
            <p>Created at: {note.created_at.toLocaleDateString()}</p>
            <EditNote note={note} />
            <DeleteNote noteId={note.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
