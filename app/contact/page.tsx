import { ContactForm } from "./contact-form"

export const dynamic = "force-dynamic"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">
          Share your requirements and our team will respond within 1 business day.
        </p>
      </div>
      <div className="mt-8 max-w-2xl">
        <ContactForm />
      </div>
    </div>
  )
}
