"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addApplication } from "@/app/(app)/(private)/applications/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select";

export default function AddApplication() {
  return (
    <Dialog>
      <DialogTrigger render={<Button />}>Add Application</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Job Application</DialogTitle>
          <DialogDescription>
            Please add job application below.
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" action={addApplication}>
          <div className="flex flex-col gap-1">
            <Label htmlFor="date_applied">Date Applied: </Label>
            <Input type="date" name="date_applied" id="date_applied" required />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="company">Company: </Label>
            <Input type="text" name="company" id="company" required />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="role">Role: </Label>
            <Input type="text" name="role" id="role" required />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="location">Location: </Label>
            <Input type="text" name="location" id="location" required />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="status">Status: </Label>
            <Select name="status" id="status" required>
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
