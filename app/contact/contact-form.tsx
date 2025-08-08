"use client"

import { useActionState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { createContactAction } from "@/app/actions"
import { toast } from "sonner"

type FormState = {
  ok?: boolean
  error?: string
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState<FormState, FormData>(createContactAction, {})

  useEffect(() => {
    if (state?.ok) toast.success("Message sent successfully")
    if (state?.error) toast.error(state.error)
  }, [state])

  return (
    <form action={formAction} className="space-y-5 rounded-xl border bg-card p-6">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" name="name" placeholder="Your name" required className="cursor-pointer" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="you@example.com" required className="cursor-pointer" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" placeholder="+255 ..." className="cursor-pointer" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" placeholder="What is it about?" className="cursor-pointer" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" placeholder="How can we help?" required className="min-h-32 cursor-pointer" />
      </div>
      <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white cursor-pointer" disabled={pending}>
        {pending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
