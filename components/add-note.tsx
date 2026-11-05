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
        {/* Form elements go here */}
      </DialogContent>
    </Dialog>
  );
}
