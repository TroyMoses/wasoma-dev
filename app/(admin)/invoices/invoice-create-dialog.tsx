"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createInvoiceAction } from "@/app/actions";
import { toast } from "sonner";

type State = { ok?: boolean; error?: string };

export function CreateInvoiceDialog() {
  const [state, formAction, pending] = useActionState<State, FormData>(
    createInvoiceAction,
    {}
  );
  useEffect(() => {
    if (state?.ok) toast.success("Invoice created");
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
          Add Invoice
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Invoice</DialogTitle>
        </DialogHeader>
        <form id="createInvoice" action={formAction} className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="customer_name">Customer</Label>
            <Input
              id="customer_name"
              name="customer_name"
              required
              className="cursor-pointer"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              name="amount"
              type="number"
              step="0.01"
              required
              className="cursor-pointer"
            />
          </div>
          <div className="grid gap-2">
            <Label>Status</Label>
            <Select name="status" defaultValue="unpaid">
              <SelectTrigger className="cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unpaid" className="cursor-pointer">
                  Unpaid
                </SelectItem>
                <SelectItem value="paid" className="cursor-pointer">
                  Paid
                </SelectItem>
                <SelectItem value="overdue" className="cursor-pointer">
                  Overdue
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="due_at">Due Date</Label>
            <Input
              id="due_at"
              name="due_at"
              type="date"
              className="cursor-pointer"
            />
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            form="createInvoice"
            className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            disabled={pending}
          >
            {pending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
