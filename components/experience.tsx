// components/experience.tsx
import { useMemo, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"


const INITIAL_COUNT = 3;

const EXPERIENCE_ITEMS = [
  {
    title: "Software Engineer - FarmMind, Baton Rouge",
    bullets: [
      "Optimized the Flutter mobile app by improving memory management, eliminating unnecessary widget rebuilds, and tuning the network layer for faster load times and lower data usage.",
      "Designed and built an agentic AI orchestrator that coordinates tool calling, RAG pipelines, and specialized sub-agents using LangChain, LangSmith, and DSPy.",
      "Built an evaluation system to quantify and track model output quality across prompt and pipeline changes.",
      "Set up robust, scalable infrastructure on Google Cloud, using Compute Engine for backend workloads, Firebase and Firestore for app data, and BigQuery for analytics.",
    ],
    className:
      "border border-emerald-400/40 bg-emerald-900/25 backdrop-blur-md shadow-lg shadow-emerald-900/40",
  },
  {

    title: "AI/LLM Developer Intern - Our Lady of the Lake",
    bullets: [
      "Reduced staff search time by 70% by integrating hospital tools and resources into a unified MCP-driven platform.",
      "Delivered fast, reliable enterprise access by building and deploying an MCP server integrated with Microsoft Teams.",
      "Used Microsoft Foundry AI, Azure containers, and Redis caching to provide centralized high-performance knowledge access.",
    ],
    className: "border border-white/15 bg-slate-900/30 backdrop-blur-md shadow-lg shadow-black/30",
  },
  {
    title: "Eyetracker Plugin Developer - Ai4SE LAB",
    bullets: [
      "Developed an open-source JetBrains standalone plugin using Java, Python, and Docker to simplify setup and eliminate system-level issues.",
      "Implemented Tobii-Fusion eye-tracker to detect developer gaze and distinguish between handwritten and AI/Copilot-generated code.",
      "Reduced configuration failure by 80% through optimization and improved developer experience.",
    ],
    className: "border border-white/15 bg-amber-900/30 backdrop-blur-md shadow-lg shadow-amber/30",
  },
  {
    title: "Machine Learning Engineer - WISE Research",
    bullets: [
      "Reduced CFD computation time by 20× by optimizing C++ multithreaded execution.",
      "Integrated AI-based prediction models into the OpenFOAM workflow to accelerate simulation results.",
    ],
    className: "border border-white/15 bg-slate-900/30 backdrop-blur-md shadow-lg shadow-black/30",
  },
    {
    title: "Board Member & Project Lead — GDG @ LSU",
    bullets: [
      "Hosted and organized hackathons for LSU students.",
      "Built and led development of the GDG@LSU.org website.",
      "Project Lead for GeauxApp, on track to launch for LSU students in Spring 2026.",
      "Ran workshops in C++, parallel programming, and Flutter.",
    ],
    className:
      "border border-purple-400/40 bg-purple-900/25 backdrop-blur-md shadow-lg shadow-purple-900/40",
  },
  {
    title: "Software Engineer - Stellar Group",
    bullets: [
      "Increased HPX shared-thread execution performance by 30% by optimizing GCC-linked subsystem bottlenecks.",
      "Enabled higher scalability for parallel C++ applications.",
    ],
    className: "border border-white/15 bg-slate-900/30 backdrop-blur-md shadow-lg shadow-black/30",
  },
  {
    title: "Fullstack Developer - LSU",
    bullets: [
      "Developed a mobile app using Dart and Flutter to replace paper forms, improving construction site workflows.",
      "Worked on backend and Flutter app development for LSU students and research groups.",
    ],
    className: "border border-white/15 bg-slate-900/30 backdrop-blur-md shadow-lg shadow-black/30",
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(false);

  const visibleItems = useMemo(() => {
    return expanded ? EXPERIENCE_ITEMS : EXPERIENCE_ITEMS.slice(0, INITIAL_COUNT);
  }, [expanded]);

  const hasMore = EXPERIENCE_ITEMS.length > INITIAL_COUNT;

  return (
    <section id="experience" className="space-y-4" aria-labelledby="experience-heading">
      <div className="flex items-end justify-between gap-3">
        <h2 id="experience-heading" className="text-2xl font-semibold text-white">
          Experience
        </h2>

        {hasMore && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[12px] text-slate-200 transition hover:bg-purple-500/30 hover:text-white"
          >
            {expanded ? "Show less" : `See more (${EXPERIENCE_ITEMS.length - INITIAL_COUNT})`}
          </button>
        )}
      </div>

      <div className="space-y-4">
        {visibleItems.map((item, index) => (
          <Card key={`${item.title}-${index}`} className={item.className}>
            <CardHeader>
              <CardTitle className="text-base text-slate-50">{item.title}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-slate-200">
              <ul className="list-disc space-y-1 pl-5">
                {item.bullets.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Optional: bottom button too (nice on mobile) */}
      {hasMore && (
        <div className="pt-2">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="w-full rounded-xl border border-white/15 bg-slate-900/40 px-4 py-2 text-sm text-slate-100 transition hover:bg-purple-500/30"
          >
            {expanded ? "Show less" : "See more experience"}
          </button>
        </div>
      )}
    </section>
  );
}
