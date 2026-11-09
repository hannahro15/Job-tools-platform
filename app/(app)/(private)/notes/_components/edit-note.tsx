"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { editNote } from "@/app/(app)/(private)/notes/actions";
import type { Note } from "@/lib/db/schema";

export function EditNote({ note }: { note: Note }) {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Edit Note</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Note</DialogTitle>
          <DialogDescription>
            Update the details of your note.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={editNote}>
          <input type="hidden" name="id" value={note.id} />
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title: </label>
            <input
              defaultValue={note.title}
              type="text"
              name="title"
              id="title"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category">Category: </label>
            <select
              defaultValue={note.category}
              id="category"
              name="category"
              className="text-sm text-muted-foreground"
              required
            >
              <option value="job">Job</option>
              <option value="interview">Interview</option>
              <option value="technical">Technical</option>
              <option value="networking">Networking</option>
              <option value="general">General</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="content">Content: </label>
            <textarea
              defaultValue={note.content}
              name="content"
              id="content"
              required
            />
          </div>
          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
