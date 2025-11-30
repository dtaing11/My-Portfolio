"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

type CodeSample = {
  label: string           // e.g. "main.dart"
  url: string             // raw GitHub URL
  repoUrl?: string
  challenge?: string
}

type Project = {
  id: string
  title: string
  year: string
  summary: string
  tech: string[]
  details: string[]
  highlights?: string[]
  userExperience?: string[]
  image?: string
  screens?: string[]
  codeSamples?: CodeSample[]
  repoUrl?: string              // <--- new
  showCodePreview?: boolean     // <--- new (default true)
}



// ...

function guessLanguage(label: string): string {
  const lower = label.toLowerCase()

  if (lower.endsWith(".dart")) return "dart"
  if (lower.endsWith(".ts") || lower.endsWith(".tsx")) return "typescript"
  if (lower.endsWith(".js") || lower.endsWith(".jsx")) return "javascript"
  if (lower.endsWith(".py")) return "python"
  if (lower.endsWith(".go")) return "go"
  if (lower.endsWith(".cpp") || lower.endsWith(".cc") || lower.endsWith(".hpp"))
    return "cpp"
  if (lower.endsWith(".java")) return "java"

  return "text"
}

function CodePreview({ sample }: { sample: CodeSample }) {
  const [code, setCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        const res = await fetch(sample.url)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const text = await res.text()
        if (!cancelled) {
          setCode(text)
          setError(null)
          setExpanded(false) // reset when switching samples
        }
      } catch (err) {
        console.error(err)
        if (!cancelled) {
          setError("Failed to load code snippet.")
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [sample.url])

  let displayCode = code ?? ""
  let isTruncated = false

  if (code && !expanded) {
    const lines = code.split("\n")
    if (lines.length > 80) {
      displayCode = lines.slice(0, 80).join("\n")
      isTruncated = true
    }
  }

  const language = guessLanguage(sample.label)

  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <div className="space-y-1">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-amber-300">
            Code – {sample.label}
          </h3>
          {sample.challenge && (
            <p className="text-[11px] text-slate-300">
              <span className="font-semibold">Challenge:</span> {sample.challenge}
            </p>
          )}
        </div>

        {sample.repoUrl && (
          <Button
            asChild
            variant="outline"
            size="sm"
            className="rounded-md border-amber-400/60 bg-amber-400/10 text-xs text-amber-100 hover:bg-amber-400/20"
          >
            <a href={sample.repoUrl} target="_blank" rel="noreferrer">
              View Repo
            </a>
          </Button>
        )}
      </div>

      <div className="relative flex-1 overflow-auto rounded-md bg-black/90 p-2 text-xs font-mono text-emerald-200">
        {loading && <p className="px-2 py-1">Loading code...</p>}
        {error && <p className="px-2 py-1 text-red-300">{error}</p>}
        {code && (
          <>
            <SyntaxHighlighter
              language={language}
              style={vscDarkPlus}
              customStyle={{
                margin: 0,
                background: "transparent",
                fontSize: "0.75rem",
                padding: "0.75rem",
              }}
              wrapLongLines
            >
              {displayCode}
            </SyntaxHighlighter>

            {!expanded && isTruncated && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/95 to-black/0" />
            )}
          </>
        )}
      </div>

      {isTruncated && (
        <div className="flex justify-end">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-amber-200 hover:bg-amber-400/10"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? "Show less" : "View more"}
          </Button>
        </div>
      )}
    </div>
  )
}


// Example data: some with preview, some repo-only
const projects: Project[] = [
  {
    id: "municipal",
    title: "Municipal – Hazard Reporting App",
    year: "2024",
    summary:
      "A real-time hazardous infrastructure reporting app built with Flutter, AWS Amplify, DynamoDB, and AWS Lambda. Municipal empowers citizens to quickly report hazardous issues such as potholes, broken streetlights, flooding, unsafe intersections, and other municipal problems. Reports appear instantly on an interactive map, enabling rapid response and improved public safety.",
    tech: ["Flutter", "AWS Amplify", "DynamoDB", "Lambda"],
    details: [
      "Designed and built the end-to-end mobile app, from Flutter UI to AWS backend.",
      "Implemented geo-tagged reports with photos, categories, and status tracking.",
      "Integrated AWS Amplify, DynamoDB, and Lambda for a scalable serverless architecture.",
    ],
    highlights: [
      "Awarded Best Capstone Project.",
      "Nominated for the Engineering Excellence Award in Louisiana.",
    ],
    userExperience: [
      "Citizens open the app and immediately see a map of nearby reported hazards.",
      "To submit a new report, users take a photo, select a category, and confirm their location.",
      "The report appears on the map in real time, and users can track its status as the municipality updates it.",
    ],
    image: "/projects/municipal-cover.png",
    screens: [
      "/projects/muncipal/1.png",
      "/projects/muncipal/2.jpg",
      "/projects/muncipal/3.jpg",
      "/projects/muncipal/4.png",
    ],
    repoUrl: "https://github.com/dtaing11/MuniciPal/tree/master/municipal",
    showCodePreview: true, // uses code preview
    codeSamples: [
      {
        label: "LandingPage.dart",
        url: "https://raw.githubusercontent.com/dtaing11/MuniciPal/refs/heads/master/municipal/lib/Page/LandingPage.dart",
        repoUrl: "https://github.com/dtaing11/MuniciPal/tree/master/municipal",
        challenge:
          "Designing a custom map marker while ensuring accurate placement and preventing visual clutter when multiple reports appear.",
      },
    ],
  },
  {
    id: "SportApp",
    title: "PickleKing – Pickleball Ranking App",
    year: "2024",
    summary:
      "A cross-platform Pickleball tracking app built with Flutter and Supabase. This app helps players play with friends, create groups, track match results, and rank themselves to see who is the best.",
    tech: ["Flutter", "Provider", "PostgreSQL", "Supabase"],
    details: [
      "Designed and built the end-to-end mobile app using Flutter with Provider for clean state management.",
      "Implemented player profiles, match recording, and dynamic ELO/Glicko updates backed by Supabase Postgres.",
      "Integrated Supabase Auth for secure user authentication and session management across devices.",
      "Built real-time leaderboards and match updates using Supabase Realtime for instant syncing.",
      "Used Supabase Storage to handle profile avatars and uploaded images.",
    ],
    highlights: ["ELO Ranking System", "Live Score Update", "Groups & Club"],
    userExperience: [
      "Players open the app and instantly see their current rating, recent matches, and active groups.",
      "To start a game, users create or join a match lobby with friends and record scores as soon as the match ends.",
      "Rankings update immediately after each game, allowing players to see real-time changes powered by ELO/Glicko.",
      "Users explore leaderboards to compare rankings across friends, local clubs, or custom groups they join.",
      "Each player can review detailed match history, including opponents, scorelines, and rating changes.",
      "Groups provide a community space where players can track shared leaderboards and compete within their club.",
      "The experience is seamless across iOS and Android, giving players consistent access to stats anytime, anywhere.",
    ],
    image: "/projects/municipal-cover.png",
    screens: [
      "/projects/pickleball/1.png",
      "/projects/pickleball/2.png",
      "/projects/pickleball/3.png",
      "/projects/pickleball/4.png",
      "/projects/pickleball/5.png",
    ],
    repoUrl: "https://github.com/dtaing11/Sport-App",
    showCodePreview: false, // repo only, NO code panel
  },
  { id: "GeauxApp", 
    title: "GeauxApp – GDG@LSU Project",
    year: "2025", 
    summary: "A student-built LSU campus discovery and event-sharing app that helps LSU students explore campus, discover events, follow organizations, and post updates. Designed, led, and coordinated by me with a 20+ developer team. Built with Flutter and Supabase, with a custom GCP VM middleware to optimize performance and reduce storage costs. Targeting a Spring 2025 release.",
    tech: [ "Flutter", "Provider", "PostgreSQL", "Supabase", "Google Cloud VM", "Node.js Middleware", ],
    details: [ "Leading and coordinating a 20+ developer team ranging from beginners to advanced engineers, balancing workload, mentoring contributors, and maintaining consistent sprint delivery.", "Developed the full cross-platform mobile experience using Flutter with Provider for predictable and scalable state management.", "Built a custom middleware API running on a GCP virtual machine to centralize logic, handle caching, and reduce direct calls to Supabase.", "Implemented cost-optimized media storage by routing image uploads through the middleware and storing them in GCP buckets instead of Supabase Storage.", "Integrated Supabase Auth for secure login, user profiles, and persistent cross-device sessions.", "Implemented real-time feeds, organization posts, and event updates using Supabase Realtime and custom middleware syncing.", "Designed backend data models to support events, posts, organizations, comments, and user engagement across campus.", ],
    highlights: [ "Campus Event Feed", "Student Organizations", "Real-Time Updates", "GCP Middleware Optimization", "Cost-Effective Media Storage", ], userExperience: [ "Students instantly see a live campus feed showing upcoming events, organization posts, and trending activities around LSU.", "Users browse events, explore details, RSVP, and see club account activity all in one place.", "Student organizations can post announcements, upload posters, and manage their presence directly through the app.", "A personalized feed recommends events and orgs based on user interests and follows.", "Media uploads are routed through a GCP-powered pipeline for faster upload speeds and reduced hosting cost.", "The app delivers a consistent and smooth iOS/Android experience to help LSU students stay connected anywhere on campus.", ],
    image: "/projects/geauxapp-cover.png", 
    screens: [ "/projects/geauxapp/1.png", "/projects/geauxapp/2.png", ], 
    repoUrl: "https://github.com/Google-Developers-Student-Club-LSU/GeauxApp-Frontend",
    showCodePreview: false,
  },
 {
  id: "nlp-mini-engine",
  title: "Custom NLP Tokenizer & Language Model",
  year: "2025",
  summary:
    "An end-to-end mini NLP engine that builds a custom Byte Pair Encoding (BPE) tokenizer and an N-Gram language model from scratch. This project focuses on understanding how modern tokenization and classic statistical language modeling work under the hood, without relying on high-level libraries.",
  tech: ["Python", "BPE", "N-Gram", "NLP"],
  details: [
    "Implemented a custom Byte Pair Encoding (BPE) tokenizer, including vocabulary construction, merge operations, and text-to-token pipelines.",
    "Built an N-Gram language model (uni/bi/tri-gram) using the tokenized corpus, with configurable smoothing and context window sizes.",
    "Created a training pipeline to learn token merges, estimate N-Gram probabilities, and persist vocab + model artifacts for reuse.",
    "Exposed simple CLI/Notebook utilities to tokenize text, inspect merges, generate text, and compare different N-Gram orders.",
  ],
  highlights: [
    "End-to-end understanding of how raw text becomes tokens and how tokens drive language prediction.",
    "No heavy NLP frameworks for core logic – algorithms implemented from first principles.",
    "Built in a way that can be extended toward modern transformer-based models later.",
  ],
  userExperience: [
    "Developers point the tool at a text corpus to learn a custom BPE vocabulary and N-Gram statistics.",
    "They can experiment with different vocab sizes or N-Gram orders and immediately see how perplexity and sample generations change.",
    "The CLI/notebooks make it easy to inspect merges, token distributions, and example generated sequences for educational purposes.",
  ],
  repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage",
  showCodePreview: true,
  codeSamples: [
    {
      label: "bpe_tokenizer.py",
      url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/BPEModel/Taing_csc4700_cshw2.py",
      repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/BPEModel/Taing_csc4700_cshw2.py",
      challenge:
        "Implementing BPE merges and vocabulary construction from scratch while keeping the implementation easy to visualize and debug.",
    },
    {
      label: "ngram_model.py",
      url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/NgramModel/Taing_csc4700_cshw1.py",
      repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/NgramModel/Taing_csc4700_cshw1.py",
      challenge:
        "Designing an N-Gram model that supports different orders and smoothing methods while remaining simple enough for teaching.",
    },
  ],
},
{
  id: "agentic-controller",
  title: "Agentic Controller – Tool-Aware LLM Orchestrator",
  year: "2025",
  summary:
    "A minimal but fully featured agentic controller loop that orchestrates an LLM with tools, JSON Schema validation, budgets, and retrieval-augmented generation. It demonstrates planning, argument repair, rolling summarization, and Chroma-based knowledge search on top of the OpenAI API.",
  tech: [
    "Python",
    "OpenAI API",
    "ChromaDB",
    "JSON Schema",
    "dotenv",
    "Requests"
  ],
  details: [
    "Implemented a controller loop that plans the next action (tool call or final answer) using an LLM, with strict JSON-only interfaces.",
    "Defined a tool catalog with JSON Schemas and runtime validation to prevent hallucinated tools or arguments.",
    "Added automatic argument repair via a one-shot LLM call whenever schema validation fails.",
    "Implemented budget controls for max steps, tokens, and cost, with simple accounting tied to OpenAI usage metadata.",
    "Tracked recent actions with hashing to detect and break out of ineffective ReAct-style loops.",
    "Maintained a rolling history summary with an LLM compressor to keep context small while preserving key facts.",
    "Integrated a weather tool backed by Open-Meteo geocoding and forecast APIs with normalized output.",
    "Added a Chroma-based knowledge base search tool that uses manual OpenAI embeddings for retrieval-augmented reasoning.",
    "Implemented a final synthesis step that composes the answer solely from the working summary and tool evidence.",
    "Provided a `run_agent(goal)` entrypoint to execute the full planning–tool–synthesis pipeline from a single question."
  ],
  highlights: [
    "End-to-end example of a budget-aware agentic loop with real tools and retrieval.",
    "Strict JSON Schema tool interfaces with automatic LLM-based argument repair.",
    "Pluggable planner, summarizer, and synthesizer built around OpenAI chat + embeddings APIs.",
    "ChromaDB integration for local vector search with automatic seeding from SQuAD-style data."
  ],
  userExperience: [
    "Developers call `run_agent(\"<goal>\")` or run the script from the CLI with a natural language question.",
    "The controller decides whether to call the weather tool, search the knowledge base, or synthesize an answer directly.",
    "Each tool call produces a concise observation that is summarized into a rolling working memory.",
    "If the agent gets stuck repeating the same action, loop detection triggers a different plan instead of spinning forever.",
    "Once enough evidence is gathered, the agent switches to 'answer' mode and generates a final response grounded in the tool outputs."
  ],
  repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage",
  showCodePreview: true, // uses code preview
  codeSamples: [
    {
      label: "agentic_controller.py",
      url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/Agentic_Model/agentic_controll.py",
      repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/Agentic_Model/agentic_controll.py",
      challenge:
        "Designing a budget-aware agent loop that coordinates planning, JSON Schema validation, argument repair, Chroma RAG, and final synthesis without hallucinated tools or arguments."
    }
  ]
},
{
  id: "llm-integration-pipeline",
  title: "LLM Integration & Evaluation Pipeline",
  year: "2025",
  summary:
    "A practical LLM integration pipeline that wires together OpenAI (GPT-5-nano, GPT-5-mini) and OpenRouter (Qwen 3-8B) for large-scale question answering and automatic grading on SQuAD. The focus is on robust API integration, batch workflows, JSON-schema outputs, and end-to-end automation.",
  tech: [
    "Python",
    "OpenAI API",
    "OpenRouter",
    "Batch API",
    "JSON Schema",
    "SQuAD"
  ],
  details: [
    "Integrated multiple LLM providers (OpenAI and OpenRouter) in a single Python pipeline with consistent interfaces and error handling.",
    "Used OpenAI’s Batch API to run GPT-5-nano at scale, building JSONL request payloads and polling job status until completion.",
    "Implemented a unified parsing layer that normalizes differing response formats (raw text, choices, message content) into a clean predictions file.",
    "Called Qwen 3-8B via OpenRouter using a shared system prompt, creating a second prediction set over the same 500 SQuAD questions.",
    "Designed an LLM-as-judge component with GPT-5-mini, enforcing a JSON-schema output that includes a boolean score and short explanation.",
    "Generated judge batches for both GPT-5-nano and Qwen predictions and routed them through the same OpenAI batch endpoint for scalable scoring.",
    "Built robust fallbacks to recover judge outputs whether they appear in `parsed`, `output_text`, or nested message content fields.",
    "Computed model-level accuracy metrics and printed a clear comparison between GPT-5-nano and Qwen 3-8B using the judged scores.",
    "Wrapped all LLM integrations—answering, judging, and evaluation—into a single reproducible script driven by environment variables and local files."
  ],
  highlights: [
    "Demonstrates real-world multi-LLM integration across two providers with different APIs.",
    "Uses batch APIs to reduce latency and overhead for hundreds of LLM calls.",
    "LLM-as-judge design with strict JSON Schema for machine-readable evaluation.",
    "End-to-end pipeline: data prep → LLM answering → LLM judging → metrics."
  ],
  userExperience: [
    "An engineer runs the script once and it automatically prepares 500 SQuAD questions if needed.",
    "The pipeline submits a GPT-5-nano batch job, waits for completion, then normalizes outputs into JSONL predictions.",
    "In a second stage, the script streams each question to Qwen 3-8B via OpenRouter, logging progress every few dozen queries.",
    "GPT-5-mini is invoked as a judge in batch mode, returning JSON-schema-constrained scores and explanations for each prediction.",
    "Finally, the script aggregates judged results and prints accuracy for both models, giving a clean, quantitative comparison of LLM performance."
  ],
  repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage",
  showCodePreview: true,
  codeSamples: [
    {
      label: "llm_integration_pipeline.py",
      url: "https://raw.githubusercontent.com/dtaing11/OpenAi-Chatgpt-Usage/refs/heads/main/OpenAiAPI/Taing_csc4700_cshw2.py",
      repoUrl: "https://github.com/dtaing11/OpenAi-Chatgpt-Usage/blob/main/OpenAiAPI/Taing_csc4700_cshw2.py",
      challenge:
        "Coordinating multiple LLMs and providers—answering models and a judging model—through batch APIs, JSON Schema outputs, and resilient parsing while keeping the pipeline fully automated and reproducible."
    }
  ]
}




]


export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [activeSampleIndex, setActiveSampleIndex] = useState(0)
  const [activeScreenIndex, setActiveScreenIndex] = useState(0)

  useEffect(() => {
    setActiveSampleIndex(0)
    setActiveScreenIndex(0)
  }, [activeProject?.id])

  return (
    <section id="projects" className="relative min-h-screen space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-2xl font-semibold text-white">Highlighted Projects</h2>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-amber-300/80 md:inline">
          Selected work
        </span>
      </div>

      {/* Grid of preview cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * idx, duration: 0.3 }}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveProject(project)}
            className="cursor-pointer"
          >
            <Card className="h-full border border-white/10 bg-slate-900/80 backdrop-blur shadow-md shadow-purple-900/40 hover:border-purple-400/50 hover:shadow-purple-500/40 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base text-slate-50">
                    {project.title}
                  </CardTitle>
                  <span className="text-[11px] font-medium text-amber-300">
                    {project.year}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p className="line-clamp-3 text-slate-300">{project.summary}</p>
                <div className="flex flex-wrap gap-2 text-[11px]">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="bg-purple-500/20 text-purple-100 border border-purple-400/40"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
                <p className="mt-1 text-[11px] text-amber-300">
                  Click to open full case study →
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Full-screen project view */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            key={activeProject.id}
            className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
              {/* Top bar */}
              <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-4 py-3 md:px-8">
                <div className="flex items-center gap-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-slate-100 hover:bg-slate-800/80"
                    onClick={() => setActiveProject(null)}
                  >
                    ← Back
                  </Button>
                  <div className="flex flex-col">
                    <span className="text-xs uppercase tracking-wide text-slate-400">
                      Project
                    </span>
                    <div className="flex items-center gap-2">
                      <h1 className="text-sm font-semibold text-slate-50 md:text-base">
                        {activeProject.title}
                      </h1>
                      <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[11px] font-medium text-amber-300 border border-amber-400/40">
                        {activeProject.year}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="hidden flex-wrap gap-2 text-[11px] md:flex">
                    {activeProject.tech.map((t) => (
                      <Badge
                        key={t}
                        variant="secondary"
                        className="bg-purple-500/30 text-purple-50 border border-purple-400/60"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                  {activeProject.repoUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-amber-400/60 bg-amber-400/10 text-xs text-amber-100 hover:bg-amber-400/20"
                    >
                      <a
                        href={activeProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Repo
                      </a>
                    </Button>
                  )}
                </div>
              </header>

              {/* Main content: 1 or 2 columns depending on showCodePreview */}
              <main
                className={
                  "grid gap-4 px-4 py-4 md:px-8 md:py-6 lg:py-8 " +
                  (activeProject.showCodePreview !== false &&
                  activeProject.codeSamples &&
                  activeProject.codeSamples.length > 0
                    ? "md:grid-cols-2"
                    : "md:grid-cols-1")
                }
              >
                {/* LEFT: images + description */}
                <section className="space-y-4 rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-purple-900/40 md:p-6">
                  {(activeProject.screens && activeProject.screens.length > 0) ||
                  activeProject.image ? (
                    <div className="space-y-3">
                      <div className="flex justify-center">
                        <div className="inline-block overflow-hidden rounded-[1.75rem] border border-slate-700 bg-black shadow-xl shadow-black/60">
                          <Image
                            src={
                              activeProject.screens &&
                              activeProject.screens.length > 0
                                ? activeProject.screens[activeScreenIndex]
                                : (activeProject.image as string)
                            }
                            alt={activeProject.title}
                            width={360}
                            height={780}
                            className="block h-auto w-full max-w-40 md:max-w-48 object-contain"
                          />
                        </div>
                      </div>

                      {activeProject.screens &&
                        activeProject.screens.length > 1 && (
                          <div className="flex justify-center gap-2 overflow-x-auto pt-1">
                            {activeProject.screens.map((src, idx) => {
                              const isActive = idx === activeScreenIndex
                              return (
                                <button
                                  key={src}
                                  type="button"
                                  onClick={() => setActiveScreenIndex(idx)}
                                  className={[
                                    "flex items-center justify-center rounded-xl border px-1 py-1 transition",
                                    isActive
                                      ? "border-amber-400 ring-2 ring-amber-400/60 bg-black"
                                      : "border-slate-600 bg-black hover:border-amber-300/80",
                                  ].join(" ")}
                                >
                                  <Image
                                    src={src}
                                    alt={`${activeProject.title} screen ${
                                      idx + 1
                                    }`}
                                    width={80}
                                    height={160}
                                    className="block h-auto w-auto max-h-16 object-contain"
                                  />
                                </button>
                              )
                            })}
                          </div>
                        )}
                    </div>
                  ) : null}

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-xl font-bold text-slate-50 md:text-2xl">
                        {activeProject.title}
                      </h2>
                      <p className="text-sm text-slate-300">
                        {activeProject.summary}
                      </p>
                    </div>

                    {activeProject.highlights &&
                      activeProject.highlights.length > 0 && (
                        <div className="space-y-1">
                          <h3 className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                            Highlights
                          </h3>
                          <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                            {activeProject.highlights.map((h, i) => (
                              <li key={i}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                    <div className="space-y-1">
                      <h3 className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                        What I did
                      </h3>
                      <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                        {activeProject.details.map((d, i) => (
                          <li key={i}>{d}</li>
                        ))}
                      </ul>
                    </div>

                    {activeProject.userExperience && (
                      <div className="space-y-1">
                        <h3 className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                          User Experience
                        </h3>
                        <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
                          {activeProject.userExperience.map((ux, i) => (
                            <li key={i}>{ux}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-2 flex flex-wrap gap-2 text-[11px] md:hidden">
                      {activeProject.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="outline"
                          className="border-purple-400/60 text-purple-100"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </section>

                {/* RIGHT: code panel – only if enabled */}
                {activeProject.showCodePreview !== false &&
                  activeProject.codeSamples &&
                  activeProject.codeSamples.length > 0 && (
                    <section className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-purple-900/40 md:p-6">
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-amber-300">
                          Code Samples
                        </span>

                        <div className="inline-flex flex-wrap gap-2 rounded-lg bg-slate-800/80 p-1">
                          {activeProject.codeSamples.map((sample, idx) => {
                            const isActive = idx === activeSampleIndex
                            return (
                              <button
                                key={sample.label}
                                type="button"
                                onClick={() => setActiveSampleIndex(idx)}
                                className={[
                                  "min-w-20 rounded-md px-3 py-1 text-[11px] font-mono transition",
                                  isActive
                                    ? "bg-slate-950 text-amber-200 border border-amber-400/70 shadow-sm shadow-amber-400/40"
                                    : "bg-slate-800 text-slate-200 border border-transparent hover:bg-slate-900 hover:text-amber-100",
                                ].join(" ")}
                              >
                                {sample.label}
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      <div className="min-h-[260px] md:min-h-[340px]">
                        <CodePreview
                          sample={
                            activeProject.codeSamples[activeSampleIndex] as CodeSample
                          }
                        />
                      </div>
                    </section>
                  )}
              </main>

              <footer className="flex items-center justify-center border-t border-white/10 bg-slate-950/90 px-4 py-2 md:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-slate-500 text-slate-100 hover:bg-slate-800"
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </Button>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
