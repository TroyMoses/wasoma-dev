"use client"

import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { deleteContactAction } from "@/app/actions"
import { toast } from "sonner"

export function DeleteContactButton({ id }: { id: string }) {
  const [pending, start] = useTransition()

  return (
    <Button
      variant="destructive"
      size="sm"
      className="cursor-pointer"
      disabled={pending}
      onClick={() =>
        start(async () => {
          const res = await deleteContactAction(id)
          if (res.ok) toast.success("Deleted")
          else toast.error(res.error || "Failed to delete")
        })
      }
    >
      {pending ? "Deleting..." : "Delete"}
    </Button>
  )
}
