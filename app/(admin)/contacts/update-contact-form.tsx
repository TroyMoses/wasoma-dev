"use client";

import { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateContactAction } from "@/app/actions";
import { toast } from "sonner";

type State = { ok?: boolean; error?: string };

export function UpdateContactStatusForm({
  id,
  currentStatus,
}: {
  id: string;
  currentStatus: string;
}) {
  const [state, formAction, pending] = useActionState<State, FormData>(
    updateContactAction,
    {}
  );
  useEffect(() => {
    if (state?.ok) toast.success("Contact updated");
    if (state?.error) toast.error(state.error);
  }, [state]);

  return (
    <form action={formAction} className="inline-flex items-center gap-2">
      <input type="hidden" name="id" value={id} />
      <Select name="status" defaultValue={currentStatus}>
        <SelectTrigger className="w-[120px] cursor-pointer">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="new" className="cursor-pointer">
            New
          </SelectItem>
          <SelectItem value="read" className="cursor-pointer">
            Read
          </SelectItem>
          <SelectItem value="archived" className="cursor-pointer">
            Archived
          </SelectItem>
        </SelectContent>
      </Select>
      <Button
        type="submit"
        size="sm"
        className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
        disabled={pending}
      >
        Save
      </Button>
    </form>
  );
}
