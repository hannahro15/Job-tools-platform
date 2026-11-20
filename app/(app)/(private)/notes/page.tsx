import { AddNote } from "./_components/add-note";
import { db } from "@/lib/db";
import { notes } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";
import { DeleteNote } from "./_components/delete-note";
import { EditNote } from "./_components/edit-note";

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
          <li key={note.id} className="border-2 p-4 rounded-md text-center">
            <h2>
              <strong className="text-lg">{note.title}</strong>
            </h2>
            <p className="whitespace-pre-wrap">
              <strong>Category:</strong> {note.category}
            </p>
            <p className="whitespace-pre-wrap">
              <strong>Note: </strong>
              {note.content}
            </p>
            <p className="whitespace-pre-wrap">
              <strong>Created at:</strong>{" "}
              {note.created_at.toLocaleDateString()}
            </p>
            <div className=" flex gap-4 justify-center my-2">
              <EditNote note={note} />
              <DeleteNote noteId={note.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
