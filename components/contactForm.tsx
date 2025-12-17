"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, XCircle } from "lucide-react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      emailAddress: formData.get("emailAddress"),
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="border border-white/15 bg-slate-900/40 backdrop-blur-md shadow-lg shadow-black/30">
      <CardHeader>
        <CardTitle className="text-white text-xl">
          Contact Me
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <Label htmlFor="firstName" className="text-white">
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                required
                placeholder="Sam"
                className="text-white placeholder:text-slate-300"
              />
            </div>

            <div className="space-y-1">
              <Label htmlFor="lastName" className="text-white">
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                required
                placeholder="Lee"
                className="text-white placeholder:text-slate-300"
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="emailAddress" className="text-white">
              Email
            </Label>
            <Input
              id="emailAddress"
              name="emailAddress"
              type="email"
              required
              placeholder="sam@example.com"
              className="text-white placeholder:text-slate-300"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full gap-2"
          >
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Send Message
          </Button>

          {success && (
            <p className="flex items-center gap-2 text-green-400 text-sm">
              <CheckCircle className="h-4 w-4" />
              Message sent successfully!
            </p>
          )}

          {error && (
            <p className="flex items-center gap-2 text-red-400 text-sm">
              <XCircle className="h-4 w-4" />
              {error}
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
