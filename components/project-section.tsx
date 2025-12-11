// components/ProjectsSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CardSwap, { Card } from "./card-swap-component/card-swap";
import { projects } from "./data/projects";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex !== null ? projects[activeIndex] : null;

  return (
    <section
      id="projects"
      className="mb-10 z-10 mx-auto max-w-6xl px-4 py-16 text-white"
    >
      {/* Heading */}
      <div className="mt-16 mb-8 flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <p className="text-sm text-slate-300">
          Tap a card to focus a project. The stack auto-rotates, but you can
          always click to jump.
        </p>
      </div>

      <AnimatePresence mode="wait">
        {/* -------------------- */}
        {/* STATE 1: Only stack */}
        {/* -------------------- */}
        {active === null ? (
          <motion.div
            key="state-stack-only"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mt-16 md:mt-32 flex justify-center"
          >
            <CardSwap
              width={400}          // narrower so it fits phones
              height={350}
              cardDistance={60}
              verticalDistance={70}
              delay={4500}
              pauseOnHover
              skewAmount={6}
              easing="elastic"
              onCardClick={(i) => setActiveIndex(i)}
            >
              {projects.map((p) => (
                <Card key={p.id} customClass="project-card">
                  <div className="project-card-inner">
                    <div className="project-card-header">
                      <span className="project-card-pill">
                        {p.year || "Project"}
                      </span>
                    </div>

                    <h3 className="project-card-title">{p.title}</h3>

                    {p.highlights && p.highlights.length > 0 && (
                      <p className="project-card-subtitle">
                        {p.highlights[0]}
                      </p>
                    )}

                    <p className="project-card-summary">{p.summary}</p>

                    <div className="project-card-tech-row">
                      {p.tech.slice(0, 3).map((t) => (
                        <span key={t} className="project-card-tech-pill">
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 3 && (
                        <span className="project-card-tech-more">
                          +{p.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        ) : (
          /* ----------------------------- */
          /* STATE 2: Stack + hero panel  */
          /* ----------------------------- */
          <motion.div
            key="state-stack-hero"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -32 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="
              mt-10
              flex flex-col gap-10
              md:mt-20
              md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]
              md:items-start md:gap-16 lg:gap-24
            "
          >
            {/* Left: animated card stack */}
            <div className="flex justify-center md:justify-start order-1">
              <CardSwap
                width={540}
                height={300}
                cardDistance={60}
                verticalDistance={70}
                delay={4500}
                pauseOnHover
                skewAmount={6}
                easing="elastic"
                onCardClick={(i) => setActiveIndex(i)}
              >
                {projects.map((p, i) => (
                  <Card
                    key={p.id}
                    customClass={`project-card ${
                      i === activeIndex ? "project-card--active" : ""
                    }`}
                  >
                    <div className="project-card-inner">
                      <div className="project-card-header">
                        <span className="project-card-pill">
                          {p.year || "Project"}
                        </span>
                      </div>

                      <h3 className="project-card-title">{p.title}</h3>

                      {p.highlights && p.highlights.length > 0 && (
                        <p className="project-card-subtitle">
                          {p.highlights[0]}
                        </p>
                      )}

                      <p className="project-card-summary">{p.summary}</p>

                      <div className="project-card-tech-row">
                        {p.tech.slice(0, 3).map((t) => (
                          <span key={t} className="project-card-tech-pill">
                            {t}
                          </span>
                        ))}
                        {p.tech.length > 3 && (
                          <span className="project-card-tech-more">
                            +{p.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>

            {/* Right: expanded hero for selected card */}
            <div className="project-hero order-2">
              <div className="project-hero-header">
                <span className="project-hero-tag">
                  {active.year || "Featured Project"}
                </span>
              </div>

              <h3 className="project-hero-title">{active.title}</h3>

              {active.highlights && active.highlights.length > 0 && (
                <ul className="project-hero-highlights">
                  {active.highlights.map((h, idx) => (
                    <li key={idx} className="project-hero-highlight">
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <p className="project-hero-body">{active.summary}</p>

              {active.details && active.details.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  {active.details.map((d, idx) => (
                    <li key={idx} className="leading-snug">
                      • {d}
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-hero-tech">
                {active.tech.map((t) => (
                  <span key={t} className="project-hero-tech-pill">
                    {t}
                  </span>
                ))}
              </div>

              <div className="project-hero-links">
                {active.repoUrl && (
                  <a
                    href={active.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-hero-button project-hero-button--ghost"
                  >
                    View Code
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="project-hero-button ml-2 text-xs opacity-80"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
