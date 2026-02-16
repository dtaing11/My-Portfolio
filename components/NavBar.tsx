"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  match: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/", match: (p) => p === "/" },
  { label: "More Useless Project I've Built", href: "/more", match: (p) => p.startsWith("/more") },
  { label: "Contact", href: "/contact", match: (p) => p.startsWith("/contact") },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  // close menu on route change
  React.useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/85 to-transparent" />

      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/DT.png" alt="Dina Taing" width={50} height={50} className="rounded-md" priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const active = item.match(pathname);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "rounded-full border px-3 py-1 text-[12px] transition",
                  active
                    ? "border-amber-400/40 bg-amber-400/15 text-amber-200 shadow-sm shadow-amber-400/20"
                    : "text-white border bg-purple-500/20 hover:bg-white/10 border-purple-400/40 hover:text-white hover:bg-purple-100/40",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white"
          aria-label="Open menu"
          aria-expanded={open}
        >
          ☰
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => {
              const active = item.match(pathname);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "rounded-md border px-3 py-2 text-sm transition",
                    active
                      ? "border-amber-400/40 bg-amber-400/15 text-amber-200"
                      : "border-white/10 bg-white/5 text-white hover:bg-white/10",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
