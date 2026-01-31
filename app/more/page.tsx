import AnimatedBackground from "@/components/animated-background";
import SiteFooter from "@/components/site-footer";

export default function MoreStuffPage() {
  const items = [
    { title: "Go TCP Sliding Window Simulator", note: "Selective Repeat + loss simulation" },
    { title: "Custom SMTP Server on Cloud Run", note: "Go backend + API key auth" },
    { title: "Mini Vim-like Text Editor in Go", note: "No GUI textbox; manual rendering" },
    { title: "LEGO Mosaic Generator (PyTorch)", note: "Piece estimation + palette mapping" },
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
          <div
            key={x.title}
            className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-md"
          >
            <h2 className="text-white font-semibold">{x.title}</h2>
            <p className="mt-2 text-sm text-slate-300">{x.note}</p>
            <p className="mt-4 text-xs text-amber-200">Click to see details →</p>
          </div>
        ))}
    //   </div>
            
            <div className="space-y-16 md:space-y-10">
          </div>
          <SiteFooter />
        </div>
    
        </main>
    // <main className="mx-auto max-w-6xl px-4 py-16">
    //   <h1 className="text-3xl font-semibold text-white">More Stuff I Built</h1>
    //   <p className="mt-2 text-slate-300">
    //     Smaller experiments, infrastructure demos, and “why did I build this?” projects.
    //   </p>

    //   <div className="mt-8 grid gap-4 md:grid-cols-2">
    //     {items.map((x) => (
    //       <div
    //         key={x.title}
    //         className="rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur-md"
    //       >
    //         <h2 className="text-white font-semibold">{x.title}</h2>
    //         <p className="mt-2 text-sm text-slate-300">{x.note}</p>
    //         <p className="mt-4 text-xs text-amber-200">Click to see details →</p>
    //       </div>
    //     ))}
    // //   </div>
    // </main>
  );
}
