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
                <DialogTitle> Add Job Application</DialogTitle>
                    <DialogDescription>
                        Please add job application below.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
        )
    
}
