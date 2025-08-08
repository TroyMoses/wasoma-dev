"use client"

import { useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createWorkerAction } from "@/app/actions"
import { toast } from "sonner"

type State = { ok?: boolean; error?: string }

export function CreateWorkerDialog() {
  const [state, formAction, pending] = useActionState<State, FormData>(createWorkerAction, {})
  useEffect(() => {
    if (state?.ok) toast.success("Worker added")
    if (state?.error) toast.error(state.error)
  }, [state])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">Add Worker</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Worker</DialogTitle>
        </DialogHeader>
        <form id="createWorker" action={formAction} className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required className="cursor-pointer" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="role">Role</Label>
            <Input id="role" name="role" required className="cursor-pointer" placeholder="Technician, Welder..." />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" className="cursor-pointer" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" className="cursor-pointer" />
          </div>
          <div className="grid gap-2">
            <Label>Status</Label>
            <Select name="status" defaultValue="active">
              <SelectTrigger className="cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active" className="cursor-pointer">
                  Active
                </SelectItem>
                <SelectItem value="inactive" className="cursor-pointer">
                  Inactive
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" form="createWorker" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer" disabled={pending}>
            {pending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
