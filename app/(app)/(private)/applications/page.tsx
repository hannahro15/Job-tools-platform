import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table"
import AddApplication from "@/components/add-application"

import { db } from "@/lib/db";
import { applications } from "@/lib/db/schema"; 
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

const { userId } = await auth();
export default async function JobApplications() {
  
  const applicationsData = await db.select().from(applications).where(eq(applications.user_id, userId));

  return (
    <div>
      <h1>Job Application Tracker</h1>
      <div>
      <AddApplication />
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
          {applicationsData.map((application) => (
            <TableRow key={application.id}>
              <TableCell>{application.date_applied.toLocaleDateString()}</TableCell>
              <TableCell>{application.company}</TableCell>
              <TableCell>{application.role}</TableCell>
              <TableCell>{application.location}</TableCell>
              <TableCell className="text-right">{application.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
