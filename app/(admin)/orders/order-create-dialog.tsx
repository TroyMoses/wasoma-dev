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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createOrderAction } from "@/app/actions";
import { toast } from "sonner";

type State = { ok?: boolean; error?: string };

export function CreateOrderDialog() {
  const [state, formAction, pending] = useActionState<State, FormData>(
    createOrderAction,
    {}
  );
  useEffect(() => {
    if (state?.ok) toast.success("Order created");
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
          Add Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Order</DialogTitle>
        </DialogHeader>
        <form id="createOrder" action={formAction} className="space-y-3">
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
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              className="cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="total_amount">Total Amount</Label>
              <Input
                id="total_amount"
                name="total_amount"
                type="number"
                step="0.01"
                required
                className="cursor-pointer"
              />
            </div>
            <div className="grid gap-2">
              <Label>Status</Label>
              <Select name="status" defaultValue="pending">
                <SelectTrigger className="cursor-pointer">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending" className="cursor-pointer">
                    Pending
                  </SelectItem>
                  <SelectItem value="processing" className="cursor-pointer">
                    Processing
                  </SelectItem>
                  <SelectItem value="completed" className="cursor-pointer">
                    Completed
                  </SelectItem>
                  <SelectItem value="cancelled" className="cursor-pointer">
                    Cancelled
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
        <DialogFooter>
          <Button
            type="submit"
            form="createOrder"
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            disabled={pending}
          >
            {pending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
