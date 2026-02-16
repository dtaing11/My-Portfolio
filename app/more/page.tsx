import AnimatedBackground from "@/components/animated-background";
import SiteFooter from "@/components/site-footer";
import LanguageBar, { Lang } from "@/components/LanguageBar";

export default function MoreStuffPage() {

type Item = {
  title: string;
  note: string;
  link: string;
  langs: Lang[];
};

const items: Item[] = [
  {
    title: "Go TCP Sliding Window Simulator",
    note: "Selective Repeat + loss simulation",
    link: "https://github.com/yourname/go-tcp-sliding-window",
    langs: [
      { name: "Go", pct: 92, className: "bg-cyan-400" },
      { name: "Shell", pct: 6, className: "bg-emerald-400" },
      { name: "Other", pct: 2, className: "bg-slate-400" },
    ],
  },
  {
    title: "Custom SMTP Server on Cloud Run",
    note: "Go backend + API key auth",
    link: "https://github.com/yourname/smtp-cloud-run",
    langs: [
      { name: "Go", pct: 88, className: "bg-cyan-400" },
      { name: "Dockerfile", pct: 10, className: "bg-sky-400" },
      { name: "Other", pct: 2, className: "bg-slate-400" },
    ],
  },
  {
    title: "Mini Vim-like Text Editor in Go",
    note: "No GUI textbox; manual rendering",
    link: "https://github.com/yourname/go-vim-editor",
    langs: [
      { name: "Go", pct: 96, className: "bg-cyan-400" },
      { name: "Other", pct: 4, className: "bg-slate-400" },
    ],
  },
  {
    title: "LEGO Mosaic Generator (PyTorch)",
    note: "Piece estimation + palette mapping",
    link: "https://github.com/yourname/lego-mosaic",
    langs: [
      { name: "Python", pct: 90, className: "bg-yellow-400" },
      { name: "Jupyter", pct: 8, className: "bg-orange-400" },
      { name: "Other", pct: 2, className: "bg-slate-400" },
    ],
  },
];



  return (
        // ✅ DO NOT clip the whole page
        <main className="relative min-h-screen bg-transparent text-foreground overflow-visible">
          {/* ✅ Background is clipped (safe) */}
          <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <AnimatedBackground />
    
            {/* Purple / gold blobs */}
            <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-purple-600/40 blur-3xl animate-[pulse_12s_ease-in-out_infinite]" />
            <div className="absolute -bottom-40 -right-10 h-80 w-80 rounded-full bg-amber-400/40 blur-3xl animate-[pulse_14s_ease-in-out_infinite]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(148,163,255,0.18)_0,transparent_55%),radial-gradient(circle_at_bottom,rgba(251,191,36,0.18)_0,transparent_55%)]" />
    
            {/* Subtle grid overlay */}
     <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(to_right,rgba(148,163,184,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.4)_1px,transparent_1px)] bg-size-[32px_32px]" />
          </div>
    
          {/* Main content */}
          <div className="relative mx-auto flex max-w-5xl flex-col px-4 py-10 md:py-16">
                  <h1 className="text-3xl font-semibold text-white">More Stuff I Built</h1>
      <p className="mt-2 text-slate-300">
        Smaller experiments, infrastructure demos, and “why did I build this?” projects.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
  {items.map((x) => (
    <a
      key={x.title}
      href={x.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-md transition hover:border-amber-400/40 hover:bg-slate-900/70"
    >
      <h2 className="text-white font-semibold">{x.title}</h2>
      <p className="mt-2 text-sm text-slate-300">{x.note}</p>

      <LanguageBar langs={x.langs} />

      <p className="mt-4 text-xs text-amber-200 group-hover:underline">
        View on GitHub →
      </p>
    </a>
  ))}
</div>
  
            <div className="space-y-16 md:space-y-10">
          </div>
          <SiteFooter />
        </div>
    
        </main>
  );
}

