import { listOrders } from "@/app/actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CreateOrderDialog } from "./order-create-dialog"
import { Button } from "@/components/ui/button"

export default async function OrdersPage() {
  const orders = await listOrders()
  return (
    <Card>
      <CardHeader className="flex items-center justify-between flex-row">
        <CardTitle>Orders</CardTitle>
        <CreateOrderDialog />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((o) => (
                <TableRow key={o.id}>
                  <TableCell className="font-medium">{o.customer_name}</TableCell>
                  <TableCell className="max-w-[280px] truncate">{o.description || "-"}</TableCell>
                  <TableCell>{o.status}</TableCell>
                  <TableCell className="text-right">${o.total_amount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="cursor-pointer mr-2" disabled>
                      View
                    </Button>
                    <Button variant="destructive" size="sm" className="cursor-pointer" disabled>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {orders.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground">
                    No orders yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
