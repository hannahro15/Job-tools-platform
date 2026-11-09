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
import { editApplication } from "@/app/(app)/(private)/applications/actions";
import type { Application } from "@/lib/db/schema";

export function EditApplication({ application }: { application: Application }) {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Edit Application</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Application</DialogTitle>
          <DialogDescription>
            Update the details of your job application.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={editApplication}>
          <input type="hidden" name="id" value={application.id} />
          <div className="flex flex-col gap-1">
            <label htmlFor="date_applied">Date Applied: </label>
            <input
              defaultValue={application.date_applied.toISOString().slice(0, 10)}
              type="date"
              name="date_applied"
              id="date_applied"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="company">Company: </label>
            <input
              defaultValue={application.company}
              type="text"
              name="company"
              id="company"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="role">Role: </label>
            <input
              defaultValue={application.role}
              type="text"
              name="role"
              id="role"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="location">Location: </label>
            <input
              defaultValue={application.location}
              type="text"
              name="location"
              id="location"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="status">Status: </label>
            <select
              name="status"
              id="status"
              defaultValue={application.status}
              required
            >
              <option value="applied">Applied</option>
              <option value="screening">Screening</option>
              <option value="interviewing">Interviewing</option>
              <option value="offer">Offer</option>
              <option value="rejected">Rejected</option>
              <option value="withdrawn">Withdrawn</option>
              <option value="ghosted">Ghosted</option>
            </select>
          </div>
          <Button type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
