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
      className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-6 pb-24 text-white"

    >
      {/* Heading */}
      <div className="mt-6 mb-6 flex flex-col gap-1">
        <h2 className="text-3xl font-semibold">Projects</h2>
      </div>

      <AnimatePresence mode="wait">
        {/* ===================== */}
        {/* STATE 1: ONLY STACK */}
        {/* ===================== */}
        {active === null ? (
          <motion.div
            key="state-stack-only"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Reserve vertical space */}
            <div className="relative mt-16 min-h-[600px] md:min-h-[600px]">

             <div className="absolute inset-x-0 bottom-0 flex justify-center pb-10 md:pb-14">
                <CardSwap
                  width={400}
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
                          <span className="project-card-pill">{p.year || "Project"}</span>
                        </div>

                        <h3 className="project-card-title">{p.title}</h3>

                        {p.highlights?.[0] && (
                          <p className="project-card-subtitle">{p.highlights[0]}</p>
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
            </div>
          </motion.div>
        ) : (
          /* ============================== */
          /* STATE 2: STACK + HERO PANEL   */
          /* ============================== */
          <motion.div
            key="state-stack-hero"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="
              mt-16
              flex flex-col gap-12
              md:grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]
              md:items-start
            "
          >
            {/* Left: stack */}
            <div className="relative min-h-[500px] md:min-h-[600px]">
            <div className="h-[180px] md:h-[220px]" />
            <div className="absolute inset-x-0 bottom-0 flex justify-center md:justify-start pb-10 md:pb-14">
            <CardSwap
                 width={400}
                  height={350}
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
                          <span className="project-card-pill">{p.year || "Project"}</span>
                        </div>

                        <h3 className="project-card-title">{p.title}</h3>

                        {p.highlights?.[0] && (
                          <p className="project-card-subtitle">{p.highlights[0]}</p>
                        )}

                        <p className="project-card-summary">{p.summary}</p>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>

            {/* Right: hero panel */}
            <div className="project-hero">
              <span className="project-hero-tag">{active.year}</span>
              <h3 className="project-hero-title">{active.title}</h3>

              <p className="project-hero-body">{active.summary}</p>

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
