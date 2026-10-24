"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

import { deleteApplication } from "@/app/(app)/(private)/applications/actions"


interface DeleteApplicationProps {
    applicationId: number;
}

export function DeleteApplication({ applicationId }: DeleteApplicationProps) {
    return (
        <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline">Delete</Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure you want to delete this application?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            application from the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <form action={deleteApplication}>
            <input type="hidden" name="id" value={applicationId} />
            <AlertDialogAction type="submit">Delete</AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    );
}