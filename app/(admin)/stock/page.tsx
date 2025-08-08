import { listStock } from "@/app/actions"
import { CreateStockDialog } from "./stock-create-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default async function StockPage() {
  const stock = await listStock()
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Stock</CardTitle>
        <CreateStockDialog />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead className="text-right">Qty</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead className="text-right">Cost</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stock.map((s) => (
                <TableRow key={s.id}>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell>{s.sku || "-"}</TableCell>
                  <TableCell className="text-right">{s.quantity}</TableCell>
                  <TableCell>{s.unit || "-"}</TableCell>
                  <TableCell className="text-right">{s.cost_price ?? "-"}</TableCell>
                  <TableCell className="text-right">{s.selling_price ?? "-"}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm" className="cursor-pointer mr-2" disabled>
                      Edit
                    </Button>
                    <Button variant="destructive" size="sm" className="cursor-pointer" disabled>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {stock.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center text-muted-foreground">
                    No items yet.
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
