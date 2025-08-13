import { listInvoices } from "@/app/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CreateInvoiceDialog } from "./invoice-create-dialog";

export default async function InvoicesPage() {
  const invoices = await listInvoices();
  return (
    <Card>
      <CardHeader className="flex items-center justify-between flex-row">
        <CardTitle>Invoices</CardTitle>
        <CreateInvoiceDialog />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Due</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((i) => (
                <TableRow key={i.id}>
                  <TableCell className="font-medium">
                    {i.customer_name}
                  </TableCell>
                  <TableCell>{i.status}</TableCell>
                  <TableCell>
                    {i.due_at ? new Date(i.due_at).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell className="text-right">
                    ${i.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
              {invoices.length === 0 && (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-muted-foreground"
                  >
                    No invoices yet.
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
