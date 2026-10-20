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
                        <form className="flex flex-col gap-4">
                         <div className="flex flex-col gap-1">  
                        <label htmlFor="date_applied">Date Applied: </label>
                        <input type="date" name="date_applied" id="date_applied" required/>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="company">Company: </label>
                        <input type="text" name="company" id="company" required/>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="role">Role: </label>
                        <input type="text" name="role" id="role" required/>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="location">Location: </label>
                        <input type="text" name="location" id="location" required/>
                        </div>
                        <div className="flex flex-col gap-1">
                        <label htmlFor="status">Status: </label>
                        <select name="status" id="status" required>
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
        )
    
}
