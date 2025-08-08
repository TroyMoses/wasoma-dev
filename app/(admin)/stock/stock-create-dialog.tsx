"use client"

import { useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { createStockAction } from "@/app/actions"
import { toast } from "sonner"

type State = { ok?: boolean; error?: string }

export function CreateStockDialog() {
  const [state, formAction, pending] = useActionState<State, FormData>(createStockAction, {})
  useEffect(() => {
    if (state?.ok) toast.success("Stock item created")
    if (state?.error) toast.error(state.error)
  }, [state])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">Add Item</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Stock Item</DialogTitle>
        </DialogHeader>
        <form id="createStock" action={formAction} className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required className="cursor-pointer" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="sku">SKU</Label>
            <Input id="sku" name="sku" className="cursor-pointer" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input id="quantity" name="quantity" type="number" min="0" defaultValue="0" className="cursor-pointer" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="unit">Unit</Label>
              <Input id="unit" name="unit" placeholder="pcs, kg..." className="cursor-pointer" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="cost_price">Cost Price</Label>
              <Input id="cost_price" name="cost_price" type="number" step="0.01" className="cursor-pointer" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="selling_price">Selling Price</Label>
              <Input id="selling_price" name="selling_price" type="number" step="0.01" className="cursor-pointer" />
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" form="createStock" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer" disabled={pending}>
            {pending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
