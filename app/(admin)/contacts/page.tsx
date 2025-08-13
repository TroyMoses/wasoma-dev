import {
  listContacts,
} from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { DeleteContactButton } from "./remove-contact-button";
import { UpdateContactStatusForm } from "./update-contact-form";

export default async function ContactsPage() {
  const contacts = await listContacts();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Website Contacts</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="hidden md:table-cell">Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-medium">{c.name}</TableCell>
                  <TableCell>{c.email}</TableCell>
                  <TableCell>{c.phone || "-"}</TableCell>
                  <TableCell>{c.subject || "-"}</TableCell>
                  <TableCell className="hidden md:table-cell max-w-[300px] truncate">
                    {c.message}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        c.status === "read"
                          ? "secondary"
                          : c.status === "archived"
                          ? "outline"
                          : "default"
                      }
                    >
                      {c.status || "new"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(c.created_at).toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right space-x-2">
                    <UpdateContactStatusForm
                      id={c.id}
                      currentStatus={c.status || "new"}
                    />
                    <DeleteContactButton id={c.id} />
                  </TableCell>
                </TableRow>
              ))}
              {contacts.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={8}
                    className="text-center text-muted-foreground"
                  >
                    No messages found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
