// app/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, FileText, ExternalLink, Code2 } from "lucide-react";
import { AsciiArt } from "@/components/ui/ascii-art";

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
    githubUrl: "https://github.com/BE-Hackathon-2025/LaunchPad",
    liveUrl: "https://drive.google.com/file/d/1SL8xfrbek4Xp3n01jlvQsvsSjd1J8FJT/view",
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
      <header className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16">
        {/* Text Intro */}
        <div className="md:col-span-2 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Available for work!
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-100">
              Mali Glemaud-Thesee
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-neutral-300">
              Computer Science @ Morehouse College
            </p>
          </div>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Building full-stack web applications, applied AI tooling, and data-driven systems.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="/SWE_Resume_Template__Mali_.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 text-neutral-950 font-medium hover:bg-neutral-200 transition-colors text-sm"
            >
              <FileText className="w-4 h-4" /> View Resume
            </a>
            <a
              href="https://github.com/mgthesee"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-sm"
            >
              <svg
                className="w-4 h-4 fill-current inline-block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/maligt"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-sm"
            >
              <svg
                className="w-4 h-4 fill-current inline-block"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* ASCII Art Visual */}
        <div>
          <AsciiArt
            src="/profile.png"
            resolution={80}
            color="#00ff00"
            animationStyle="matrix"
            inverted
            animateOnView={false}
            className="mx-auto aspect-square w-full max-w-lg bg-black"
          />
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
                className={`cursor-pointer px-2.5 py-1 rounded transition-colors ${filter === cat
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
                      <a href={project.githubUrl} className="text-neutral-400 hover:text-white" target="_blank" rel="noreferrer">
                        <svg
                          className="w-4 h-4 fill-current inline-block"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-neutral-400 hover:text-white" target="_blank" rel="noreferrer">
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