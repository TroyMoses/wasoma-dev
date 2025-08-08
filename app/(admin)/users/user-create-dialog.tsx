"use client"

import { useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createUserAction } from "@/app/actions"
import { toast } from "sonner"

type State = { ok?: boolean; error?: string }

export function CreateUserDialog() {
  const [state, formAction, pending] = useActionState<State, FormData>(createUserAction, {})
  useEffect(() => {
    if (state?.ok) toast.success("User created")
    if (state?.error) toast.error(state.error)
  }, [state])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-red-600 hover:bg-red-700 text-white cursor-pointer">Add User</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New User</DialogTitle>
        </DialogHeader>
        <form id="createUser" action={formAction} className="space-y-3">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required className="cursor-pointer" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required className="cursor-pointer" />
          </div>
          <div className="grid gap-2">
            <Label>Role</Label>
            <Select name="role" defaultValue="staff">
              <SelectTrigger className="cursor-pointer">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin" className="cursor-pointer">
                  Admin
                </SelectItem>
                <SelectItem value="manager" className="cursor-pointer">
                  Manager
                </SelectItem>
                <SelectItem value="staff" className="cursor-pointer">
                  Staff
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
        <DialogFooter>
          <Button type="submit" form="createUser" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer" disabled={pending}>
            {pending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
