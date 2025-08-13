"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <section className="py-3 md:py-5 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container px-5 md:px-10">
        <Card className="max-w-2xl mx-auto bg-white/95 backdrop-blur">
          <CardContent className="p-8 text-center">
            <div className="size-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on our services, maintenance tips, and
              industry insights delivered to your inbox.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 cursor-pointer"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>

            <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span>No spam, unsubscribe anytime</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
