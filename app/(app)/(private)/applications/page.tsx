import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from
 "@/components/ui/button"

export default function JobApplications() {
  return (
    <div>
      <h1>Job Application Tracker</h1>
      <div>
      <Button>Add Application</Button>
      </div>
      <Table>
        <TableCaption>Recent job applications.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date Applied</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Location</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        </TableBody>
      </Table>
    </div>
  );
}
