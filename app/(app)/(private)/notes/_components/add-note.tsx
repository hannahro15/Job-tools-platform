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
import { Input } from "@/components/ui/input";
import { addNote } from "@/app/(app)/(private)/notes/actions";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

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
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" className="w-full" required />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="category">Category</Label>
            <Select id="category" name="category" required>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="job">Job</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="networking">Networking</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="content">Note</Label>
            <Textarea
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
