// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Github, LinkedIn, FileText, ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "LaunchPad",
    category: "Full-Stack AI",
    description: "AI-driven career roadmap platform featuring custom ML fit-scoring, real-time voice guidance, and prompt-tailored guidance.",
    tags: ["React", "Node.js", "Python", "OpenAI API", "Zustand"],
    githubUrl: "https://github.com",
    liveUrl: "https://launchpad-demo.com",
  },
  {
    title: "Maternal Health Dashboard",
    category: "Data Science & NLP",
    description: "Interactive visual analytics platform synthesizing 10-year CDC natality trends, geospatial mapping, and survey LDA topic modeling.",
    tags: ["Python", "React", "LDA NLP", "Time-Series", "Geospatial"],
    githubUrl: "https://github.com",
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter((p) => p.category === filter);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 font-sans px-6 py-12 max-w-4xl mx-auto selection:bg-neutral-800">
      {/* Header / Intro */}
      <header className="space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for SWE & Data Science Roles
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-100">
          Software Engineer & Data Researcher
        </h1>
        <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
          Building full-stack web applications, applied AI tooling, and data-driven systems. Focused on modern interface engineering, NLP pipelines, and interactive computing.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-950 font-medium hover:bg-neutral-200 transition-colors text-sm"
          >
            <FileText className="w-4 h-4" /> View Resume
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-sm"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
        </div>
      </header>

      {/* Featured Projects Section */}
      <section className="space-y-6 mb-16">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
          <h2 className="text-xl font-bold tracking-tight text-neutral-200 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-neutral-400" /> Featured Systems & Projects
          </h2>
          <div className="flex gap-2 text-xs font-mono">
            {["All", "Full-Stack AI", "Data Science & NLP"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-2.5 py-1 rounded transition-colors ${
                  filter === cat
                    ? "bg-neutral-800 text-neutral-100 font-semibold"
                    : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a href={project.githubUrl} className="text-neutral-400 hover:text-white">
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-neutral-400 hover:text-white">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-neutral-100 mb-2">{project.title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-neutral-950 border border-neutral-800 text-neutral-400"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="pt-8 border-t border-neutral-900 text-center text-xs text-neutral-500 font-mono">
        Designed with Next.js, Tailwind CSS & Framer Motion.
      </footer>
    </main>
  );
}