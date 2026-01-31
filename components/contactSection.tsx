"use client";

import ContactForm from "@/components/contactForm";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative z-10 mx-auto w-full max-w-6xl px-4 "
    >

      {/* Optional section frame */}
      <div className="rounded-3xl border border-white/10 bg-slate-950/20 p-6 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04)] md:p-10">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.55)]" />
              <h2 className="text-2xl font-semibold text-white md:text-3xl">
                Contact
              </h2>
            </div>

            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
              Want to collaborate, chat about AI/ML, or talk opportunities? Send me
              a note and I’ll get back to you.
            </p>

            <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          {/* Chips */}
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-200">
              Fast response
            </span>
            <span className="rounded-full border border-purple-400/25 bg-purple-500/10 px-3 py-1 text-purple-200">
              Open to collaboration
            </span>
            <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-amber-200">
              Email delivery via Cloud Run
            </span>

            {/* ✅ New chip */}
            <span className="rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-emerald-200">
              Delivered by self-made SMTP server (Golang)
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT PANEL: gradient border + glass */}
          <div className="rounded-2xl p-[1px] bg-gradient-to-br from-purple-500/45 via-white/10 to-amber-400/30">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 p-6 backdrop-blur-xl shadow-xl shadow-black/40">
              {/* inner glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-600/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-10 -bottom-12 h-40 w-40 rounded-full bg-amber-400/10 blur-3xl" />

              <div className="relative space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                    What I’m open to
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white">
                    Let’s build something real.
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    If you’re reaching out about a role, a project, or research.
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <ul className="space-y-2 text-sm text-slate-200">
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300" />
                    <span>Software Engineering (backend / systems / infra)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300" />
                    <span>AI/ML Engineering</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-purple-300" />
                    <span>High-performance computing + performance work</span>
                  </li>
                </ul>

                {/* Tip box */}
                <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">
                    Tip
                  </p>
                  <p className="mt-1 text-sm text-slate-100">
                    Include your name + email so I can reply quickly.
                  </p>
                </div>

                {/* ✅ Footer microcopy */}
                <p className="text-xs text-slate-400">
                  Delivered by a self-made SMTP server hosted on GCP Cloud Run (Golang).
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: your themed form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
