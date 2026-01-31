"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
  match: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    match: (pathname) => pathname === "/",
  },

  {
    label: "More Useless Project I've Built",
    href: "/more",
    match: (pathname) => pathname.startsWith("/more"),
  },
//   {
//     label: "Blog",
//     href: "/blog",
//     match: (pathname) => pathname.startsWith("/blog"),
//   },
  {
    label: "Contact",
    href: "/contact",
    match: (pathname) => pathname.startsWith("/contact"), // contact on home
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50">
      {/* background blur */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/85 to-transparent" />

      <nav className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* Brand */}

        <Link href="/" className="flex items-center gap-2">
        <Image
            src="/DT.png"
            alt="Dina Taing"
            width={50}
            height={50}
            className="rounded-md"
            priority
        />
        </Link>

        {/* Links */}
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
                    : "border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

      

      </nav>

      <div className="h-px w-full bg-white/10" />
    </header>
  );
}
