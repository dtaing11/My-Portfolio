// components/animated-background.tsx
"use client"

import { motion } from "framer-motion"

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      {/* Soft LSU gradient wash */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-purple-700/40 blur-3xl" />
        <div className="absolute top-10 -right-24 h-72 w-72 rounded-full bg-amber-400/30 blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-indigo-500/30 blur-3xl" />
      </div>

      {/* Faint grid so it feels technical */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(148,163,184,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.4)_1px,transparent_1px)] bg-size-[80px_80px]" />
      </div>

      {/* Scribble / drawing animations */}
      <motion.svg
        className="absolute -left-20 top-10 h-64 w-64 text-amber-300/60"
        viewBox="0 0 200 200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2, delay: 0.5 }} >
        <motion.path
          d="M10 150 C 40 100, 80 120, 110 80 S 180 40, 190 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="scribble-stroke"
        />
      </motion.svg>

      <motion.svg
        className="absolute -right-10 bottom-10 h-72 w-72 rotate-12 text-purple-300/50"
        viewBox="0 0 200 200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2.5, delay: 1 }} >
        <motion.path
          d="M10 20 Q 60 40, 90 20 T 150 30 T 190 80"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="scribble-stroke-delayed"
        />
      </motion.svg>
    </div>
  )
}
