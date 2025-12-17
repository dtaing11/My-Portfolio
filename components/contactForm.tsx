"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, CheckCircle, XCircle, Send } from "lucide-react";

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
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      emailAddress: String(formData.get("emailAddress") ?? ""),
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
    <div className="relative">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10">
        <div className="absolute -top-8 left-6 h-40 w-40 rounded-full bg-purple-600/25 blur-3xl" />
        <div className="absolute -bottom-10 right-2 h-44 w-44 rounded-full bg-amber-400/15 blur-3xl" />
      </div>

      {/* gradient border wrapper */}
      <div className="rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/50 via-white/10 to-amber-400/35 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
        <Card className="rounded-2xl border-0 bg-slate-950/55 backdrop-blur-xl shadow-xl shadow-black/40">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <CardTitle className="text-white text-xl">
                  Contact Me
                </CardTitle>
                <p className="text-sm text-slate-300">
                  Drop your information, I’ll reply as soon as I can.
                </p>
              </div>


            </div>

            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white/90">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Sam"
                    className={[
                      "text-white placeholder:text-slate-400",
                      "bg-slate-900/60 border-white/10",
                      "focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:border-purple-400/40",
                    ].join(" ")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white/90">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Lee"
                    className={[
                      "text-white placeholder:text-slate-400",
                      "bg-slate-900/60 border-white/10",
                      "focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:border-purple-400/40",
                    ].join(" ")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="emailAddress" className="text-white/90">
                  Email
                </Label>
                <Input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  required
                  placeholder="sam@example.com"
                  className={[
                    "text-white placeholder:text-slate-400",
                    "bg-slate-900/60 border-white/10",
                    "focus-visible:ring-2 focus-visible:ring-purple-500/60 focus-visible:border-purple-400/40",
                  ].join(" ")}
                />
                <p className="text-xs text-slate-400">
                  I’ll only use this to reply — no spam.
                </p>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className={[
                  "w-full gap-2 rounded-xl",
                  "bg-gradient-to-r from-purple-600 to-amber-500",
                  "text-white shadow-lg shadow-purple-900/30",
                  "hover:opacity-95 hover:shadow-purple-700/40",
                  "active:scale-[0.99] transition",
                ].join(" ")}
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {success && (
                <p className="flex items-center gap-2 text-emerald-300 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  Message sent successfully!
                </p>
              )}

              {error && (
                <p className="flex items-center gap-2 text-red-300 text-sm">
                  <XCircle className="h-4 w-4" />
                  {error}
                </p>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
