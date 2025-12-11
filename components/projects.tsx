// "use client"

// import { useState, useEffect } from "react"
// import Image from "next/image"
// import { motion, AnimatePresence } from "framer-motion"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"


// /* ------------------------- Helpers ------------------------- */

// function guessLanguage(label: string): string {
//   const lower = label.toLowerCase()

//   if (lower.endsWith(".dart")) return "dart"
//   if (lower.endsWith(".ts") || lower.endsWith(".tsx")) return "typescript"
//   if (lower.endsWith(".js") || lower.endsWith(".jsx")) return "javascript"
//   if (lower.endsWith(".py")) return "python"
//   if (lower.endsWith(".go")) return "go"
//   if (lower.endsWith(".cpp") || lower.endsWith(".cc") || lower.endsWith(".hpp"))
//     return "cpp"
//   if (lower.endsWith(".java")) return "java"

//   return "text"
// }

// function ExpandableList({
//   title,
//   items,
//   initialCount = 3,
// }: {
//   title: string
//   items: string[]
//   initialCount?: number
// }) {
//   const [expanded, setExpanded] = useState(false)

//   const visibleItems = expanded ? items : items.slice(0, initialCount)
//   const isTruncated = items.length > initialCount

//   return (
//     <div className="space-y-1">
//       <h3 className="text-xs font-semibold uppercase tracking-wide text-amber-300">
//         {title}
//       </h3>
//       <ul className="list-disc space-y-1 pl-5 text-sm text-slate-200">
//         {visibleItems.map((item, i) => (
//           <li key={i}>{item}</li>
//         ))}
//       </ul>

//       {isTruncated && (
//         <button
//           type="button"
//           onClick={() => setExpanded((prev) => !prev)}
//           className="mt-1 text-[11px] font-medium text-amber-300 hover:text-amber-200 underline underline-offset-2"
//         >
//           {expanded ? "Show less" : "Show more"}
//         </button>
//       )}
//     </div>
//   )
// }

// /* ------------------------ CodePreview ------------------------ */
// function CodePreview({ sample }: { sample: CodeSample }) {
//   const [code, setCode] = useState<string | null>(null)
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState<string | null>(null)
//   const [expanded, setExpanded] = useState(false)

//   useEffect(() => {
//     let cancelled = false

//     async function load() {
//       try {
//         setLoading(true)
//         const res = await fetch(sample.url)
//         if (!res.ok) throw new Error(`HTTP ${res.status}`)
//         const text = await res.text()
//         if (!cancelled) {
//           setCode(text)
//           setError(null)
//           setExpanded(false) // reset when switching samples
//         }
//       } catch (err) {
//         console.error(err)
//         if (!cancelled) {
//           setError("Failed to load code snippet.")
//         }
//       } finally {
//         if (!cancelled) setLoading(false)
//       }
//     }

//     load()
//     return () => {
//       cancelled = true
//     }
//   }, [sample.url])

//   const language = guessLanguage(sample.label)

//   // --- truncation logic ---
//   const totalLines = code ? code.split("\n").length : 0
//   const hasMore = totalLines > 80

//   let displayCode = code ?? ""
//   if (code && hasMore && !expanded) {
//     displayCode = code.split("\n").slice(0, 80).join("\n")
//   }

//   return (
//     <motion.div
//       layout
//       initial={false}
//       transition={{ type: "spring", stiffness: 140, damping: 20 }}
//       className="flex flex-col gap-2"
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between gap-2">
//         <div className="space-y-1">
//           <h3 className="text-xs font-semibold uppercase tracking-wide text-amber-300">
//             Code – {sample.label}
//           </h3>
//           {sample.challenge && (
//             <p className="text-[11px] text-slate-300">
//               <span className="font-semibold">Challenge:</span> {sample.challenge}
//             </p>
//           )}
//         </div>

//         {sample.repoUrl && (
//           <Button
//             asChild
//             variant="outline"
//             size="sm"
//             className="rounded-md border-amber-400/60 bg-amber-400/10 text-xs text-amber-100 hover:bg-amber-400/20"
//           >
//             <a href={sample.repoUrl} target="_blank" rel="noreferrer">
//               View Repo
//             </a>
//           </Button>
//         )}
//       </div>

//       {/* Code container — height animates smoothly */}
//       <div
//         className={
//           [
//             "relative overflow-y-auto overflow-x-hidden rounded-md bg-black/90",
//             "transition-[max-height] duration-300 ease-out",
//             expanded ? "max-h-[80vh]" : "max-h-[40vh] md:max-h-[60vh]",
//           ].join(" ")
//         }
//       >
//         {loading && <p className="px-2 py-1 text-xs">Loading code...</p>}
//         {error && <p className="px-2 py-1 text-xs text-red-300">{error}</p>}
//         {code && (
//           <>
//             <SyntaxHighlighter
//               language={language}
//               style={vscDarkPlus}
//               customStyle={{
//                 margin: 0,
//                 background: "transparent",
//                 fontSize: "0.72rem",   // good on phone
//                 padding: "0.75rem",
//                 whiteSpace: "pre-wrap",
//                 wordBreak: "break-all",
//               }}
//               codeTagProps={{
//                 style: {
//                   whiteSpace: "pre-wrap",
//                   wordBreak: "break-all",
//                 },
//               }}
//               wrapLongLines
//             >
//               {displayCode}
//             </SyntaxHighlighter>

//             {/* fade only when collapsed */}
//             {hasMore && !expanded && (
//               <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/95 to-black/0" />
//             )}
//           </>
//         )}
//       </div>

//       {/* View more / Show less */}
//       {hasMore && (
//         <div className="flex justify-end">
//           <Button
//             type="button"
//             variant="ghost"
//             size="sm"
//             className="text-amber-200 hover:bg-amber-400/10"
//             onClick={() => setExpanded((prev) => !prev)}
//           >
//             {expanded ? "Show less" : "View more"}
//           </Button>
//         </div>
//       )}
//     </motion.div>
//   )
// }
// /* ------------------------ Projects Data ------------------------ */



// /* ------------------------ Component ------------------------ */

// export default function Projects() {
//   const [activeProject, setActiveProject] = useState<Project | null>(null)
//   const [activeSampleIndex, setActiveSampleIndex] = useState(0)
//   const [activeScreenIndex, setActiveScreenIndex] = useState(0)

//   useEffect(() => {
//     setActiveSampleIndex(0)
//     setActiveScreenIndex(0)
//   }, [activeProject?.id])

//   return (
//     <section id="projects" className="relative min-h-screen space-y-4">
//       <div className="flex items-center justify-between gap-2">
//         <h2 className="text-2xl font-semibold text-white">Highlighted Projects</h2>
//         <span className="hidden text-xs uppercase tracking-[0.2em] text-amber-300/80 md:inline">
//           Selected work
//         </span>
//       </div>

//       {/* Grid of preview cards */}
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, idx) => (
//           <motion.div
//             key={project.id}
//             layout
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.05 * idx, duration: 0.3 }}
//             whileHover={{ y: -4, scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//             onClick={() => setActiveProject(project)}
//             className="cursor-pointer"
//           >
//             <Card className="h-full border border-white/10 bg-slate-900/80 backdrop-blur shadow-md shadow-purple-900/40 hover:border-purple-400/50 hover:shadow-purple-500/40 transition-colors">
//               <CardHeader>
//                 <div className="flex items-start justify-between gap-2">
//                   <CardTitle className="text-base text-slate-50">
//                     {project.title}
//                   </CardTitle>
//                   <span className="text-[11px] font-medium text-amber-300">
//                     {project.year}
//                   </span>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-2 text-sm">
//                 <p className="line-clamp-3 text-slate-300">{project.summary}</p>
//                 <div className="flex flex-wrap gap-2 text-[11px]">
//                   {project.tech.map((t) => (
//                     <Badge
//                       key={t}
//                       variant="secondary"
//                       className="bg-purple-500/20 text-purple-100 border border-purple-400/40"
//                     >
//                       {t}
//                     </Badge>
//                   ))}
//                 </div>
//                 <p className="mt-1 text-[11px] text-amber-300">
//                   Click to open full case study →
//                 </p>
//               </CardContent>
//             </Card>
//           </motion.div>
//         ))}
//       </div>

//       {/* Full-screen project view */}
//       <AnimatePresence>
//         {activeProject && (
//           <motion.div
//             key={activeProject.id}
//             className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl overflow-y-auto"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.18 }}
//           >
//             <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col">
//               {/* Top bar */}
//               <header className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/90 px-4 py-3 md:px-8">
//                 <div className="flex items-center gap-3">
//                   <Button
//                     variant="ghost"
//                     size="sm"
//                     className="text-slate-100 hover:bg-slate-800/80"
//                     onClick={() => setActiveProject(null)}
//                   >
//                     ← Back
//                   </Button>
//                   <div className="flex flex-col">
//                     <span className="text-xs uppercase tracking-wide text-slate-400">
//                       Project
//                     </span>
//                     <div className="flex items-center gap-2">
//                       <h1 className="text-sm font-semibold text-slate-50 md:text-base">
//                         {activeProject.title}
//                       </h1>
//                       <span className="rounded-full bg-amber-400/15 px-2 py-0.5 text-[11px] font-medium text-amber-300 border border-amber-400/40">
//                         {activeProject.year}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <div className="hidden flex-wrap gap-2 text-[11px] md:flex">
//                     {activeProject.tech.map((t) => (
//                       <Badge
//                         key={t}
//                         variant="secondary"
//                         className="bg-purple-500/30 text-purple-50 border border-purple-400/60"
//                       >
//                         {t}
//                       </Badge>
//                     ))}
//                   </div>
//                   {activeProject.repoUrl && (
//                     <Button
//                       asChild
//                       variant="outline"
//                       size="sm"
//                       className="border-amber-400/60 bg-amber-400/10 text-xs text-amber-100 hover:bg-amber-400/20"
//                     >
//                       <a
//                         href={activeProject.repoUrl}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         View Repo
//                       </a>
//                     </Button>
//                   )}
//                 </div>
//               </header>

//               {/* Main content */}
//               <main
//                 className={
//                   "grid gap-4 px-4 py-4 md:px-8 md:py-6 lg:py-8 " +
//                   (activeProject.showCodePreview !== false &&
//                   activeProject.codeSamples &&
//                   activeProject.codeSamples.length > 0
//                     ? "md:grid-cols-2"
//                     : "md:grid-cols-1")
//                 }
//               >
//                 {/* LEFT: images + description */}
//                 <section className="space-y-4 rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-purple-900/40 md:p-6">
//                   {(activeProject.screens && activeProject.screens.length > 0) ||
//                   activeProject.image ? (
//                     <div className="space-y-3">
//                       <div className="flex justify-center">
//                         <div className="inline-block overflow-hidden rounded-[1.75rem] border border-slate-700 bg-black shadow-xl shadow-black/60">
//                           <Image
//                             src={
//                               activeProject.screens &&
//                               activeProject.screens.length > 0
//                                 ? activeProject.screens[activeScreenIndex]
//                                 : (activeProject.image as string)
//                             }
//                             alt={activeProject.title}
//                             width={360}
//                             height={780}
//                             className="block h-auto w-full max-w-40 md:max-w-48 object-contain"
//                           />
//                         </div>
//                       </div>

//                       {activeProject.screens &&
//                         activeProject.screens.length > 1 && (
//                           <div className="flex justify-center gap-2 overflow-x-auto pt-1">
//                             {activeProject.screens.map((src, idx) => {
//                               const isActive = idx === activeScreenIndex
//                               return (
//                                 <button
//                                   key={src}
//                                   type="button"
//                                   onClick={() => setActiveScreenIndex(idx)}
//                                   className={[
//                                     "flex items-center justify-center rounded-xl border px-1 py-1 transition",
//                                     isActive
//                                       ? "border-amber-400 ring-2 ring-amber-400/60 bg-black"
//                                       : "border-slate-600 bg-black hover:border-amber-300/80",
//                                   ].join(" ")}
//                                 >
//                                   <Image
//                                     src={src}
//                                     alt={`${activeProject.title} screen ${
//                                       idx + 1
//                                     }`}
//                                     width={80}
//                                     height={160}
//                                     className="block h-auto w-auto max-h-16 object-contain"
//                                   />
//                                 </button>
//                               )
//                             })}
//                           </div>
//                         )}
//                     </div>
//                   ) : null}

//                   <div className="space-y-4">
//                     <div className="space-y-2">
//                       <h2 className="text-xl font-bold text-slate-50 md:text-2xl">
//                         {activeProject.title}
//                       </h2>
//                       <p className="text-sm text-slate-300">
//                         {activeProject.summary}
//                       </p>
//                     </div>

//                     {activeProject.highlights &&
//                       activeProject.highlights.length > 0 && (
//                         <ExpandableList
//                           title="Highlights"
//                           items={activeProject.highlights}
//                           initialCount={3}
//                         />
//                       )}

//                     <ExpandableList
//                       title="What I did"
//                       items={activeProject.details}
//                       initialCount={3}
//                     />

//                     {activeProject.userExperience && (
//                       <ExpandableList
//                         title="User Experience"
//                         items={activeProject.userExperience}
//                         initialCount={3}
//                       />
//                     )}

//                     <div className="mt-2 flex flex-wrap gap-2 text-[11px] md:hidden">
//                       {activeProject.tech.map((t) => (
//                         <Badge
//                           key={t}
//                           variant="outline"
//                           className="border-purple-400/60 text-purple-100"
//                         >
//                           {t}
//                         </Badge>
//                       ))}
//                     </div>
//                   </div>
//                 </section>

//                 {/* RIGHT: code panel – only if enabled */}
//                 {activeProject.showCodePreview !== false &&
//                   activeProject.codeSamples &&
//                   activeProject.codeSamples.length > 0 && (
//                     <section className="flex flex-col gap-3 rounded-xl border border-white/10 bg-slate-900/80 p-4 shadow-xl shadow-purple-900/40 md:p-6">
//                       <div className="flex flex-col gap-2">
//                         <span className="text-xs font-semibold uppercase tracking-wide text-amber-300">
//                           Code Samples
//                         </span>

//                         <div className="inline-flex flex-wrap gap-2 rounded-lg bg-slate-800/80 p-1">
//                           {activeProject.codeSamples.map((sample, idx) => {
//                             const isActive = idx === activeSampleIndex
//                             return (
//                               <button
//                                 key={sample.label}
//                                 type="button"
//                                 onClick={() => setActiveSampleIndex(idx)}
//                                 className={[
//                                   "min-w-20 rounded-md px-3 py-1 text-[11px] font-mono transition",
//                                   isActive
//                                     ? "bg-slate-950 text-amber-200 border border-amber-400/70 shadow-sm shadow-amber-400/40"
//                                     : "bg-slate-800 text-slate-200 border border-transparent hover:bg-slate-900 hover:text-amber-100",
//                                 ].join(" ")}
//                               >
//                                 {sample.label}
//                               </button>
//                             )
//                           })}
//                         </div>
//                       </div>

//                       <div className="min-h-[220px] max-h-[55vh] md:min-h-[340px] md:max-h-none">
//                         <CodePreview
//                           sample={
//                             activeProject.codeSamples[
//                               activeSampleIndex
//                             ] as CodeSample
//                           }
//                         />
//                       </div>
//                     </section>
//                   )}
//               </main>

//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   )
// }
