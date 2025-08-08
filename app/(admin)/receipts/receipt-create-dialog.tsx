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
import { createReceiptAction } from "@/app/actions";
import { toast } from "sonner";

type State = { ok?: boolean; error?: string };

export function CreateReceiptDialog() {
  const [state, formAction, pending] = useActionState<State, FormData>(
    createReceiptAction,
    {}
  );
  useEffect(() => {
    if (state?.ok) toast.success("Receipt created");
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">
          Add Receipt
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Receipt</DialogTitle>
        </DialogHeader>
        <form id="createReceipt" action={formAction} className="space-y-3">
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
            <Label htmlFor="received_at">Received Date</Label>
            <Input
              id="received_at"
              name="received_at"
              type="date"
              className="cursor-pointer"
            />
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            form="createReceipt"
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
