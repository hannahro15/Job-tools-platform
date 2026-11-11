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
import { addNote } from "@/app/(app)/(private)/notes/actions";

export function AddNote() {
  return (
    <Dialog>
      <DialogTrigger render={<button>Add Note</button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new note.
          </DialogDescription>
        </DialogHeader>
        <form action={addNote} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <input id="title" name="title" className="w-full" required />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              className="text-sm text-muted-foreground"
              required
            >
              <option value="">Select a category</option>
              <option value="job">Job</option>
              <option value="interview">Interview</option>
              <option value="technical">Technical</option>
              <option value="networking">Networking</option>
              <option value="general">General</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="content">Note</label>
            <textarea
              id="content"
              name="content"
              rows={4}
              className="w-full"
              required
            />
          </div>
          <Button type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
