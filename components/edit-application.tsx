"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { editApplication } from "@/app/(app)/(private)/applications/actions"

export function EditApplication({ applicationId }: { applicationId: number }) {
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
        <form action={editApplication}>
          <input type="hidden" name="id" value={applicationId} />
          <>
            <label>
              Company:
              <input type="text" name="company" />
            </label>
            <label>
              Role:
              <input type="text" name="role" />
            </label>
            <label>
              Date Applied:
              <input type="date" name="date_applied" />
            </label>
            <label>
              Location:
              <input type="text" name="location" />
            </label>
            <label>
              Status:
                <select name="status" id="status" required>
                            <option value="applied">Applied</option>
                            <option value="screening">Screening</option>
                            <option value="interviewing">Interviewing</option>
                            <option value="offer">Offer</option>
                            <option value="rejected">Rejected</option>
                            <option value="withdrawn">Withdrawn</option>
                            <option value="ghosted">Ghosted</option>
                        </select>
            </label>
          </>
          <Button type="submit">Save Changes</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}