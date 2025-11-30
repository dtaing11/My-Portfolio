"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, FileText } from "lucide-react"

function IconButton({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http")

  return (
    <Button
      asChild
      variant="ghost"
      size="icon"
      className="
        h-10 w-10 rounded-full 
        bg-white/10 
        hover:bg-white/20 
        text-white 
        shadow-md shadow-white/10
        transition
      "
    >
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        <span className="text-white">{children}</span>
      </a>
    </Button>
  )
}

export default function Hero() {
  return (
    <motion.section
      className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* LEFT – text */}
      <motion.div
        className="space-y-4 max-w-xl md:order-1 order-2"
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <Badge className="border border-purple-400/50 bg-purple-500/20 text-xs uppercase tracking-wide text-purple-100 backdrop-blur">
          Software Engineer · ML · HPC
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r from-purple-300 via-amber-200 to-purple-200 bg-clip-text text-transparent">
            Dina Taing
          </span>
        </h1>

        <p className="max-w-xl text-gray-300/95 drop-shadow">
          I am from Cambodia, a senior undergraduate in Lousiana State University
          Software Engineering, specializing in machine learning and high-performance
          computing. I have a background in research and currently develop and lead an
          open-source project for a research community.
        </p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Button asChild className="shadow-lg shadow-purple-500/30">
            <a href="#projects">View Projects</a>
          </Button>

          <Button
            asChild
            className="bg-amber-200 text-slate-950 hover:bg-amber-300 shadow-lg shadow-amber-400/40 border-none"
          >
            <a href="#experience">Experience</a>
          </Button>

          <motion.div
            className="flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
          >
            <IconButton href="https://github.com/dtaing11">
              <Github className="h-4 w-4" />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/dina-taing">
              <Linkedin className="h-4 w-4" />
            </IconButton>
            <IconButton href="mailto:dinatiang1108@gmail.com">
              <Mail className="h-4 w-4" />
            </IconButton>

            {/* ✅ Resume button with full word */}
            <Button
              asChild
              className="ml-1 h-10 rounded-full border border-amber-300/70 bg-amber-300/15 px-4 text-xs font-semibold uppercase tracking-wide text-amber-100 hover:bg-amber-300/25 hover:text-amber-50 shadow-md shadow-amber-400/40"
            >
              <a
                href="https://drive.google.com/file/d/1-VIap0-5IK2ltH4NcLrkTqGk4kS9OiVu/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>Resume</span>
                </span>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* RIGHT – floating circular portrait */}
      <motion.div
        className="flex justify-center md:justify-end md:order-2 order-1"
        initial={{ opacity: 0, x: 24, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 120, damping: 18 }}
      >
        <div className="relative h-52 w-52 md:h-64 md:w-64 animate-float">
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-linear-to-tr from-purple-500/70 via-indigo-400/70 to-amber-400/70 blur-2xl" />

          {/* Photo */}
          <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-background/80 bg-background shadow-2xl shadow-purple-500/40">
            <Image
              src="/image_dina.png"
              alt="Portrait of Dina Taing"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
