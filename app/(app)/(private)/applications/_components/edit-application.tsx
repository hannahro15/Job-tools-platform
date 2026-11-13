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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

export function EditApplication({ application }: { application: Application }) {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" size="sm" />}>
        Edit
      </DialogTrigger>
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
            <Label htmlFor="date_applied">Date Applied: </Label>
            <Input
              defaultValue={application.date_applied.toISOString().slice(0, 10)}
              type="date"
              name="date_applied"
              id="date_applied"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="company">Company: </Label>
            <Input
              defaultValue={application.company}
              type="text"
              name="company"
              id="company"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="role">Role: </Label>
            <Input
              defaultValue={application.role}
              type="text"
              name="role"
              id="role"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="location">Location: </Label>
            <Input
              defaultValue={application.location}
              type="text"
              name="location"
              id="location"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="status">Status: </Label>
            <Select
              name="status"
              id="status"
              defaultValue={application.status}
              required
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="screening">Screening</SelectItem>
                <SelectItem value="interviewing">Interviewing</SelectItem>
                <SelectItem value="offer">Offer</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
                <SelectItem value="withdrawn">Withdrawn</SelectItem>
                <SelectItem value="ghosted">Ghosted</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit">Save</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
