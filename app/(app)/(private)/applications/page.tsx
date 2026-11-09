import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import AddApplication from "./_components/add-application";
import { DeleteApplication } from "./_components/delete-application";
import { EditApplication } from "./_components/edit-application";

import { db } from "@/lib/db";
import { applications } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";

export default async function JobApplications() {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("User not authenticated");
  }
  const applicationsData = await db
    .select()
    .from(applications)
    .where(eq(applications.user_id, userId))
    .orderBy(desc(applications.date_applied));

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
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicationsData.map((application) => (
            <TableRow key={application.id}>
              <TableCell>
                {application.date_applied.toLocaleDateString()}
              </TableCell>
              <TableCell>{application.company}</TableCell>
              <TableCell>{application.role}</TableCell>
              <TableCell>{application.location}</TableCell>
              <TableCell className="text-right capitalize">
                {application.status}
              </TableCell>
              <TableCell className="text-right">
                <EditApplication application={application} />
                <DeleteApplication applicationId={application.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
