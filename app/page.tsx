"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "AgentMesh",
    subtitle: "Agent Orchestration Platform",
    description:
      "Reliable AI agent execution with retry queues, idempotent jobs, dead-letter pipelines, and execution tracing.",
    href: "https://github.com/akashkutex/Agent-Mesh",
    technologies: ["Node.js", "React", "Kafka", "Redis", "AWS"],
    architecture: [
      { title: "API", subtitle: "Run Request" },
      { title: "Kafka", subtitle: "Queue" },
      { title: "Workers", subtitle: "Execute" },
      { title: "Redis", subtitle: "State" },
      { title: "DLQ", subtitle: "Failures" },
    ],
    metrics: [
      { value: "10K+", label: "Executions / day" },
      { value: "Idempotent", label: "Execution model" },
      { value: "Retry + DLQ", label: "Failure handling" },
    ],
  },
  {
    number: "02",
    title: "AutoRefactorAI",
    subtitle: "Multi-Agent Code Review",
    description:
      "Autonomous pull-request review using specialized LLM agents, static analysis, tests, and structured line-level feedback.",
    href: "https://github.com/akashkutex/Autorefactor-ai",
    technologies: ["Python", "FastAPI", "LangGraph", "GPT-4o"],
    architecture: [
      { title: "GitHub PR", subtitle: "Input" },
      { title: "FastAPI", subtitle: "API" },
      { title: "LangGraph", subtitle: "Agents" },
      { title: "Tools", subtitle: "Tests" },
      { title: "Review", subtitle: "Comments" },
    ],
    metrics: [
      { value: "LLM", label: "Specialized agents" },
      { value: "Retry", label: "Fallback edges" },
      { value: "JSON", label: "Structured output" },
    ],
  },
  {
    number: "03",
    title: "TimeTrace",
    subtitle: "Distributed Systems Debugger",
    description:
      "Correlates OpenTelemetry spans into causal timelines for reconstructing and debugging cross-service failures.",
    href: "https://github.com/akashkutex/timetrace",
    technologies: ["Go", "Kafka", "ClickHouse", "OpenTelemetry"],
    architecture: [
      { title: "Services", subtitle: "Spans" },
      { title: "Kafka", subtitle: "Ingest" },
      { title: "Go", subtitle: "Process" },
      { title: "ClickHouse", subtitle: "Store" },
      { title: "Replay", subtitle: "Debug" },
    ],
    metrics: [
      { value: "5M+", label: "Events / day" },
      { value: "Causal", label: "Span ordering" },
      { value: "Cached", label: "Query layer" },
    ],
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    number: "01",
    company: "Syracuse University",
    role: "AI Research Assistant",
    location: "Syracuse, NY",
    period: "Jun 2026 — Present",
    description:
      "Building evaluation infrastructure for generative AI systems and automating multimodal generation and benchmarking workflows.",
    flow: [
      {
        eyebrow: "Generation",
        value: "25+",
        label: "Runs / cycle",
      },
      {
        eyebrow: "Evaluation",
        value: "Automated",
        label: "Benchmark pipeline",
      },
      {
        eyebrow: "Impact",
        value: "~60%",
        label: "Faster evaluation",
      },
    ],
  },
  {
    number: "02",
    company: "Mazecare Ltd.",
    role: "Software Engineer",
    location: "Singapore",
    period: "Apr 2023 — Jun 2024",
    description:
      "Built a multi-tenant healthcare SaaS platform spanning billing, payments, inventory, clinic workflows, testing, and performance.",
    flow: [
      {
        eyebrow: "Scale",
        value: "11",
        label: "Clinic sites",
      },
      {
        eyebrow: "Platform",
        value: "Multi-tenant",
        label: "Billing + workflows",
      },
      {
        eyebrow: "Quality",
        value: "45%",
        label: "Fewer regressions",
      },
    ],
  },
  {
    number: "03",
    company: "S2K Technologies Inc.",
    role: "Software Engineer",
    location: "Quebec, Canada",
    period: "Apr 2022 — Apr 2023",
    description:
      "Built customer-facing React workflows and backend services from API design through production deployment.",
    flow: [
      {
        eyebrow: "Backend",
        value: "REST APIs",
        label: "Service layer",
      },
      {
        eyebrow: "Delivery",
        value: "30%",
        label: "Faster CI/CD",
      },
      {
        eyebrow: "Performance",
        value: "25%",
        label: "Lower P95 latency",
      },
    ],
  },
];

/* =========================================================
   TOOLBOX
========================================================= */

const toolbox = [
  {
    number: "01",
    category: "Languages",
    letters: "LANG",
    items: ["Python", "TypeScript", "Java", "Go", "JavaScript", "SQL"],
  },
  {
    number: "02",
    category: "Backend & APIs",
    letters: "API",
    items: [
      "Spring Boot",
      "Node.js",
      "FastAPI",
      "REST APIs",
      "GraphQL",
      "gRPC",
    ],
  },
  {
    number: "03",
    category: "Frontend",
    letters: "WEB",
    items: [
      "React",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    number: "04",
    category: "Data",
    letters: "DATA",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "ClickHouse"],
  },
  {
    number: "05",
    category: "Infrastructure",
    letters: "OPS",
    items: ["AWS", "Docker", "Kubernetes", "Terraform", "Kafka", "CI/CD"],
  },
  {
    number: "06",
    category: "AI & Observability",
    letters: "AI",
    items: [
      "LangGraph",
      "OpenTelemetry",
      "Tracing",
      "Metrics",
      "Jest",
      "Playwright",
      "pytest",
    ],
  },
];

/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    number: "01",
    title: "M.S. Information Systems Management",
    school: "Syracuse University",
    location: "Syracuse, NY",
    period: "2024 — 2026",
  },
  {
    number: "02",
    title: "B.E. Information Technology",
    school: "Savitribai Phule Pune University",
    location: "Pune, India",
    period: "2018 — 2022",
  },
];

/* =========================================================
   SECTION HEADING
========================================================= */

function SectionHeading({
  eyebrow,
  title,
  major = false,
}: {
  eyebrow: string;
  title: string;
  major?: boolean;
}) {
  return (
    <div className="mb-5 border-b border-white/10 pb-4 md:mb-6 xl:mb-8 xl:pb-5">
      <p className="mb-2 text-[8px] uppercase tracking-[0.28em] text-orange-500 md:text-[9px] xl:text-[10px]">
        {eyebrow}
      </p>

      <h2
        className={
          major
            ? "text-[28px] font-semibold tracking-[-0.045em] sm:text-3xl md:text-4xl xl:text-[46px]"
            : "text-[26px] font-semibold tracking-[-0.04em] sm:text-3xl xl:text-[40px]"
        }
      >
        {title}
      </h2>
    </div>
  );
}

/* =========================================================
   PROJECT ARCHITECTURE
========================================================= */

function ArchitectureDiagram({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="overflow-hidden rounded-[14px] border border-white/10 bg-[#111111] md:rounded-[15px] xl:rounded-[18px]">
      <div className="flex items-center justify-between border-b border-white/10 px-3 py-2.5 md:px-4 xl:px-5 xl:py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 xl:h-2 xl:w-2" />

          <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-zinc-500 md:text-[7px] xl:text-[8px]">
            System Architecture
          </p>
        </div>

        <p className="font-mono text-[6px] lowercase text-zinc-700 md:text-[7px] xl:text-[8px]">
          {project.title}
        </p>
      </div>

      <div className="p-2.5 md:p-3 xl:p-4">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-5 xl:gap-3">
          {project.architecture.map((node, index) => (
            <div
              key={node.title}
              className="relative min-w-0 rounded-[9px] border border-white/15 bg-[#0b0b0b] px-3 py-2 xl:rounded-[11px] xl:px-4 xl:py-3"
            >
              <p className="truncate font-mono text-[8px] font-medium text-zinc-200 md:text-[9px] xl:text-[11px]">
                {node.title}
              </p>

              <p className="mt-1 truncate font-mono text-[6px] uppercase tracking-[0.1em] text-zinc-600 md:mt-1.5 md:text-[7px] xl:text-[8px]">
                {node.subtitle}
              </p>

              {index !== project.architecture.length - 1 && (
                <div className="absolute -right-[7px] top-1/2 z-10 hidden -translate-y-1/2 items-center md:flex">
                  <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-orange-500/30 bg-[#111111] font-mono text-[7px] text-orange-500 xl:h-[18px] xl:w-[18px] xl:text-[9px]">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-2 grid grid-cols-3 overflow-hidden rounded-[9px] border border-white/10 xl:mt-3 xl:rounded-[11px]">
          {project.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`min-w-0 bg-[#0b0b0b] px-2 py-2.5 md:px-3 md:py-2 xl:px-4 xl:py-3 ${
                index !== project.metrics.length - 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >
              <p className="truncate font-mono text-[10px] text-zinc-100 md:text-[13px] xl:text-[16px]">
                {metric.value}
              </p>

              <p className="mt-1 text-[5px] uppercase leading-[1.35] tracking-[0.08em] text-zinc-600 md:font-mono md:text-[7px] md:tracking-[0.11em] xl:text-[8px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   EXPERIENCE FLOW
========================================================= */

function ExperienceFlow({
  flow,
}: {
  flow: (typeof experiences)[number]["flow"];
}) {
  return (
    <>
      {/* MOBILE */}
      <div className="mt-4 grid grid-cols-3 overflow-hidden rounded-[12px] border border-white/10 bg-[#101010] md:hidden">
        {flow.map((step, index) => (
          <div
            key={`${step.eyebrow}-${step.value}`}
            className={`min-w-0 px-2.5 py-3 ${
              index !== flow.length - 1 ? "border-r border-white/10" : ""
            }`}
          >
            <p className="font-mono text-[5px] uppercase tracking-[0.12em] text-zinc-600">
              {step.eyebrow}
            </p>

            <p className="mt-1.5 break-words font-mono text-[11px] leading-tight tracking-[-0.03em] text-zinc-100">
              {step.value}
            </p>

            <p className="mt-1 font-mono text-[5px] uppercase leading-[1.3] tracking-[0.08em] text-zinc-600">
              {step.label}
            </p>
          </div>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="mt-4 hidden rounded-[13px] border border-white/10 bg-[#101010] px-4 py-3 md:block xl:mt-5 xl:rounded-[16px] xl:px-5 xl:py-4">
        <div className="grid grid-cols-[1fr_24px_1fr_24px_1fr] items-center gap-3 xl:grid-cols-[1fr_32px_1fr_32px_1fr]">
          {flow.map((step, index) => (
            <div
              key={`${step.eyebrow}-${step.value}-desktop`}
              className="contents"
            >
              <div className="min-w-0">
                <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-zinc-600 xl:text-[8px]">
                  {step.eyebrow}
                </p>

                <p className="mt-1.5 truncate font-mono text-[15px] tracking-[-0.035em] text-zinc-100 xl:text-[19px]">
                  {step.value}
                </p>

                <p className="mt-1 font-mono text-[6px] uppercase tracking-[0.11em] text-zinc-600 xl:text-[8px]">
                  {step.label}
                </p>
              </div>

              {index !== flow.length - 1 && (
                <div className="flex items-center justify-center">
                  <span className="font-mono text-[13px] text-orange-500/70 xl:text-[16px]">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

/* =========================================================
   TOOLBOX
========================================================= */

function ToolboxCard({
  tool,
}: {
  tool: (typeof toolbox)[number];
}) {
  const isLanguages = tool.category === "Languages";

  return (
    <article className="group relative min-h-[82px] overflow-hidden rounded-[13px] border border-white/10 bg-[#101010] px-3.5 py-3 transition duration-300 hover:border-orange-500/40 hover:bg-[#121212] md:min-h-[94px] md:rounded-[14px] md:px-4 xl:min-h-[118px] xl:rounded-[17px] xl:px-5 xl:py-4">
      <p className="pointer-events-none absolute -bottom-6 -right-2 select-none font-mono text-[2.8rem] font-bold tracking-[-0.1em] text-white/[0.018] transition duration-300 group-hover:text-orange-500/[0.04] md:text-[3.2rem] xl:text-[4rem]">
        {tool.letters}
      </p>

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[5px] text-zinc-700 md:text-[6px] xl:text-[7px]">
            {tool.number}
          </p>

          <span className="h-1.5 w-1.5 rounded-full bg-orange-500 xl:h-2 xl:w-2" />
        </div>

        <h3 className="mt-1.5 text-[13px] font-medium tracking-[-0.035em] text-zinc-100 md:text-[15px] xl:text-[18px]">
          {tool.category}
        </h3>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2 xl:gap-2 xl:pt-3">
          {tool.items.map((item, index) => {
            const highlighted = isLanguages && index < 3;

            return (
              <span
                key={item}
                className={
                  highlighted
                    ? "rounded-full border border-white/30 bg-white/[0.05] px-2 py-[4px] font-mono text-[6px] leading-none text-zinc-100 md:px-2.5 md:py-[5px] md:text-[7px] xl:px-3 xl:py-1.5 xl:text-[8px]"
                    : "rounded-full border border-white/15 bg-white/[0.02] px-2 py-[4px] font-mono text-[6px] leading-none text-zinc-400 md:px-2.5 md:py-[5px] md:text-[7px] xl:px-3 xl:py-1.5 xl:text-[8px]"
                }
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   ICONS
========================================================= */

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.4c.58.1.79-.25.79-.56v-2.2c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.57-.29-5.27-1.29-5.27-5.74 0-1.27.45-2.3 1.19-3.12-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.17 1.19A11 11 0 0 1 12 6.04c.98 0 1.96.13 2.88.39 2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.78.11 3.07.74.82 1.19 1.85 1.19 3.12 0 4.46-2.71 5.45-5.29 5.73.42.36.79 1.07.79 2.16v3.21c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.1 20.45H3.54V9H7.1v11.45Z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[19px] w-[19px]"
      fill="currentColor"
      aria-hidden="true"
    >
      <ellipse cx="6.5" cy="12" rx="5.5" ry="7" />
      <ellipse cx="15.5" cy="12" rx="2.8" ry="7" />
      <ellipse cx="21" cy="12" rx="1" ry="6.3" />
    </svg>
  );
}

/* =========================================================
   DESKTOP PROFILE
========================================================= */

function ProfileCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#111111] p-3.5 shadow-[0_30px_80px_rgba(0,0,0,0.32)] xl:rounded-[26px] xl:p-4">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-500/10 blur-[70px]" />

      <div className="relative h-[178px] overflow-hidden rounded-[16px] border border-white/10 bg-[#090909] xl:h-[220px] xl:rounded-[20px] 2xl:h-[232px]">
        <Image
          src="/akash-profile.png"
          alt="Akash Kute"
          fill
          priority
          className="relative z-10 scale-[1.08] object-cover object-center"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-black/40 to-transparent" />

        <div className="absolute bottom-3 right-3 z-30 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 backdrop-blur-md xl:px-3 xl:py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

          <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-white/60 xl:text-[7px]">
            NYC
          </span>
        </div>
      </div>

      <div className="px-1.5 pt-4 xl:pt-5">
        <h2 className="whitespace-nowrap text-[19px] font-semibold tracking-[-0.04em] text-white xl:text-[24px]">
          Akash Kute
        </h2>

        <div className="mt-2 flex items-center justify-between gap-3 xl:mt-3">
          <p className="text-[10px] text-zinc-500 xl:text-[12px]">
            Software Engineer
          </p>

          <div className="flex items-center gap-1.5 rounded-full border border-white/10 px-2 py-1 xl:px-2.5 xl:py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

            <span className="font-mono text-[6px] uppercase tracking-[0.12em] text-zinc-500 xl:text-[7px]">
              available
            </span>
          </div>
        </div>

        <p className="mt-4 text-[10px] leading-[1.55] text-zinc-500 xl:mt-5 xl:text-[12px] xl:leading-[1.6]">
          Engineer who enjoys the space between product thinking and systems
          design.
        </p>

        <div className="mt-4 h-px bg-white/10 xl:mt-5" />

        <div className="mt-3 flex flex-wrap gap-1.5 xl:gap-2">
          {["Backend", "Systems", "Full Stack"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-2 py-1 font-mono text-[6px] uppercase tracking-[0.1em] text-zinc-500 xl:px-2.5 xl:py-1.5 xl:text-[7px]"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 xl:mt-5 xl:gap-2.5">
          <a
            href="https://github.com/akashkutex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.025] text-zinc-500 transition duration-300 hover:border-orange-500/50 hover:bg-orange-500 hover:text-black xl:h-12 xl:rounded-[12px]"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-kute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.025] text-zinc-500 transition duration-300 hover:border-orange-500/50 hover:bg-orange-500 hover:text-black xl:h-12 xl:rounded-[12px]"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://medium.com/@kuteakash51"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="flex h-10 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.025] text-zinc-500 transition duration-300 hover:border-orange-500/50 hover:bg-orange-500 hover:text-black xl:h-12 xl:rounded-[12px]"
          >
            <MediumIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MOBILE PROFILE
========================================================= */

function MobileProfileCard() {
  return (
    <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-[#111111] p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
      <div className="relative z-10 flex items-center gap-3">
        <div className="relative h-[74px] w-[74px] shrink-0 overflow-hidden rounded-[13px] border border-white/10 bg-black">
          <Image
            src="/akash-profile.png"
            alt="Akash Kute"
            fill
            priority
            className="scale-[1.08] object-cover object-center"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h2 className="truncate text-[18px] font-semibold tracking-[-0.04em]">
                Akash Kute
              </h2>

              <p className="mt-1 text-[9px] text-zinc-500">
                Software Engineer
              </p>
            </div>

            <div className="mt-0.5 flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

              <span className="font-mono text-[5px] uppercase tracking-[0.11em] text-zinc-500">
                available
              </span>
            </div>
          </div>

          <div className="mt-2.5 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

            <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-zinc-600">
              NYC
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-3 flex items-center justify-between gap-3 border-t border-white/10 pt-3">
        <p className="max-w-[205px] text-[8px] leading-[1.5] text-zinc-500">
          Engineer who enjoys the space between product thinking and systems
          design.
        </p>

        <div className="flex shrink-0 gap-1.5">
          <a
            href="https://github.com/akashkutex"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.02] text-zinc-500"
          >
            <GitHubIcon />
          </a>

          <a
            href="https://www.linkedin.com/in/akash-kute"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.02] text-zinc-500"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://medium.com/@kuteakash51"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Medium"
            className="flex h-8 w-8 items-center justify-center rounded-[8px] border border-white/10 bg-white/[0.02] text-zinc-500"
          >
            <MediumIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const next =
        maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, next)));
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0b0b0b] text-white">
      {/* PROGRESS */}
      <div className="fixed left-0 top-0 z-[100] h-[2px] w-full">
        <div
          className="h-full bg-orange-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* SHELL */}

      <div
        className="
          mx-auto
          w-full
          max-w-[1040px]
          px-4
          py-4

          md:grid
          md:min-h-screen
          md:grid-cols-[215px_minmax(0,1fr)]
          md:items-start
          md:gap-10
          md:px-5
          md:py-10

          xl:max-w-[1280px]
          xl:grid-cols-[250px_minmax(0,1fr)]
          xl:gap-12
          xl:px-7

          2xl:max-w-[1400px]
          2xl:grid-cols-[265px_minmax(0,1fr)]
          2xl:gap-14
        "
      >
        {/* SIDEBAR */}

        <aside className="hidden self-start md:sticky md:top-1/2 md:block md:-translate-y-1/2">
          <ProfileCard />
        </aside>

        {/* CONTENT */}

        <div className="min-w-0">
          <div className="mb-8 md:hidden">
            <MobileProfileCard />
          </div>

          {/* =================================================
              HERO
          ================================================== */}

          <section
            id="home"
            className="scroll-mt-6 pb-8 pt-2 md:flex md:min-h-[calc(100svh-2.5rem)] md:scroll-mt-8 md:flex-col md:justify-center md:pb-0 md:pt-0"
          >
            <div>
              <h1 className="text-[43px] font-bold uppercase leading-[0.8] tracking-[-0.07em] sm:text-[52px] md:text-[clamp(2.95rem,5.5vw,4.65rem)] xl:text-[5.5rem] 2xl:text-[6rem]">
                Software
              </h1>

              <h1 className="text-[43px] font-bold uppercase leading-[0.8] tracking-[-0.07em] text-orange-500 sm:text-[52px] md:text-[clamp(2.95rem,5.5vw,4.65rem)] xl:text-[5.5rem] 2xl:text-[6rem]">
                Engineer
              </h1>
            </div>

            <p className="mt-4 max-w-[560px] text-[10px] leading-[1.65] text-zinc-400 md:text-[11px] xl:mt-6 xl:max-w-[720px] xl:text-[14px]">
              I build scalable backend systems, modern web applications, and
              reliable distributed software.
            </p>

            {/* METRICS */}

            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-[13px] border border-white/15 bg-white/10 md:mt-6 md:rounded-[14px] xl:mt-8 xl:rounded-[18px]">
              <div className="bg-[#111111] px-4 py-3 md:px-5 md:py-3.5 xl:px-7 xl:py-5">
                <p className="font-mono text-[21px] tracking-[-0.05em] md:text-[25px] xl:text-[36px]">
                  11
                </p>

                <div className="mt-2 flex items-end justify-between gap-2 xl:mt-3">
                  <p className="text-[6px] uppercase tracking-[0.15em] text-zinc-300 md:text-[8px] xl:text-[10px]">
                    Clinic sites
                  </p>

                  <p className="font-mono text-[5px] text-zinc-600 md:text-[7px] xl:text-[8px]">
                    Mazecare
                  </p>
                </div>
              </div>

              <div className="bg-[#111111] px-4 py-3 md:px-5 md:py-3.5 xl:px-7 xl:py-5">
                <p className="font-mono text-[21px] tracking-[-0.05em] md:text-[25px] xl:text-[36px]">
                  5M+
                </p>

                <div className="mt-2 flex items-end justify-between gap-2 xl:mt-3">
                  <p className="text-[6px] uppercase tracking-[0.15em] text-zinc-300 md:text-[8px] xl:text-[10px]">
                    Events / day
                  </p>

                  <p className="font-mono text-[5px] text-zinc-600 md:text-[7px] xl:text-[8px]">
                    TimeTrace
                  </p>
                </div>
              </div>
            </div>

            {/* FOCUS */}

            <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:mt-3 md:gap-3 xl:mt-4 xl:gap-4">
              <div className="relative min-h-[90px] overflow-hidden rounded-[14px] bg-[#F25A2B] px-4 py-3.5 text-black md:min-h-[102px] md:rounded-[16px] md:px-[18px] md:py-4 xl:min-h-[135px] xl:rounded-[20px] xl:px-7 xl:py-5">
                <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-black/45 md:text-[7px] xl:text-[9px]">
                  Systems
                </p>

                <p className="mt-3 max-w-[270px] text-[13px] font-semibold leading-[1.12] tracking-[-0.035em] md:mt-4 md:text-[15px] xl:mt-6 xl:max-w-[420px] xl:text-[20px]">
                  Distributed systems, APIs and backend architecture
                </p>

                <div className="absolute -bottom-11 -right-10 h-28 w-28 rounded-full border border-black/10 xl:h-36 xl:w-36" />
              </div>

              <div className="relative min-h-[90px] overflow-hidden rounded-[14px] bg-[#ded5ca] px-4 py-3.5 text-[#181818] md:min-h-[102px] md:rounded-[16px] md:px-[18px] md:py-4 xl:min-h-[135px] xl:rounded-[20px] xl:px-7 xl:py-5">
                <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-black/35 md:text-[7px] xl:text-[9px]">
                  Product
                </p>

                <p className="mt-3 max-w-[270px] text-[13px] font-semibold leading-[1.12] tracking-[-0.035em] md:mt-4 md:text-[15px] xl:mt-6 xl:max-w-[430px] xl:text-[20px]">
                  React, Next.js and AI-powered product experiences
                </p>

                <div className="absolute -right-8 -top-8 h-24 w-24 rotate-45 border border-black/10 xl:h-32 xl:w-32" />
              </div>
            </div>
          </section>

          {/* =================================================
              PROJECTS
          ================================================== */}

          <section
            id="projects"
            className="scroll-mt-6 pb-8 pt-5 md:scroll-mt-8 md:py-0"
          >
            <SectionHeading
              eyebrow="Selected Work"
              title="Recent Projects"
              major
            />

            {projects.map((project) => (
              <article
                key={project.number}
                className="
                  border-b
                  border-white/10
                  py-7
                  first:pt-3

                  md:flex
                  md:items-start
                  md:py-12

                  xl:py-14
                "
              >
                <div className="w-full">
                  <div className="grid gap-2.5 md:grid-cols-[30px_minmax(0,1fr)] md:gap-3 xl:grid-cols-[40px_minmax(0,1fr)] xl:gap-4">
                    <p className="font-mono text-[6px] text-zinc-700 md:pt-0.5 md:text-[8px] xl:text-[9px]">
                      {project.number}
                    </p>

                    <div className="min-w-0">
                      <p className="font-mono text-[6px] uppercase tracking-[0.16em] text-zinc-600 md:text-[8px] xl:text-[10px]">
                        {project.subtitle}
                      </p>

                      <div className="mt-2 flex items-center justify-between gap-3 md:max-w-[690px] xl:max-w-none">
                        <h3 className="min-w-0 text-[22px] font-medium tracking-[-0.045em] md:text-[27px] xl:text-[35px]">
                          {project.title}
                        </h3>

                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 rounded-full border border-white/20 px-3 py-1.5 text-[7px] font-medium text-zinc-200 transition duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-black md:px-3.5 md:text-[8px] xl:px-5 xl:py-2.5 xl:text-[10px]"
                        >
                          View Project ↗
                        </a>
                      </div>

                      <p className="mt-2.5 max-w-[590px] text-[9px] leading-[1.65] text-zinc-500 md:text-[10px] xl:mt-4 xl:max-w-[780px] xl:text-[13px]">
                        {project.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-1.5 xl:mt-4 xl:gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/15 bg-white/[0.02] px-2 py-1 font-mono text-[6px] text-zinc-400 md:px-2.5 md:text-[7px] xl:px-3 xl:py-1.5 xl:text-[8px]"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-4">
                        <ArchitectureDiagram project={project} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* =================================================
              EXPERIENCE
          ================================================== */}

          <section
            id="experience"
            className="scroll-mt-6 py-8 md:scroll-mt-8 md:py-10 xl:py-12"
          >
            <SectionHeading
              eyebrow="Career"
              title="Experience"
              major
            />

            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="border-b border-white/10 py-6 first:pt-1 md:py-5 xl:py-7"
              >
                <div className="grid gap-2.5 md:grid-cols-[30px_minmax(0,1fr)] md:gap-3 xl:grid-cols-[40px_minmax(0,1fr)] xl:gap-4">
                  <p className="font-mono text-[6px] text-zinc-700 md:text-[8px] xl:text-[9px]">
                    {experience.number}
                  </p>

                  <div className="min-w-0">
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="font-mono text-[6px] uppercase tracking-[0.16em] text-zinc-600 md:text-[8px] xl:text-[10px]">
                          {experience.role}
                        </p>

                        <h3 className="mt-1.5 text-[18px] font-medium tracking-[-0.04em] md:text-[21px] xl:text-[28px]">
                          {experience.company}
                        </h3>
                      </div>

                      <div className="shrink-0 font-mono text-[6px] md:text-right md:text-[7px] xl:text-[9px]">
                        <p className="text-zinc-400">
                          {experience.period}
                        </p>

                        <p className="mt-1 text-zinc-600">
                          {experience.location}
                        </p>
                      </div>
                    </div>

                    <p className="mt-3 max-w-[650px] text-[9px] leading-[1.65] text-zinc-500 md:text-[10px] xl:mt-4 xl:max-w-[780px] xl:text-[13px]">
                      {experience.description}
                    </p>

                    <ExperienceFlow flow={experience.flow} />
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* =================================================
              TOOLBOX
          ================================================== */}

          <section
            id="toolbox"
            className="scroll-mt-6 py-8 md:flex md:min-h-[calc(100svh-4rem)] md:scroll-mt-8 md:flex-col md:justify-center md:py-8"
          >
            <SectionHeading
              eyebrow="Toolbox"
              title="What I Build With"
            />

            <div className="space-y-2 xl:space-y-3">
              <ToolboxCard tool={toolbox[0]} />

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1.35fr_1fr] md:gap-2.5 xl:gap-3">
                <ToolboxCard tool={toolbox[1]} />
                <ToolboxCard tool={toolbox[2]} />
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-[1fr_1.35fr] md:gap-2.5 xl:gap-3">
                <ToolboxCard tool={toolbox[3]} />
                <ToolboxCard tool={toolbox[4]} />
              </div>

              <ToolboxCard tool={toolbox[5]} />
            </div>
          </section>

          {/* =================================================
              WRITING
          ================================================== */}

          <section
            id="writing"
            className="scroll-mt-6 py-8 md:flex md:min-h-[calc(100svh-5rem)] md:scroll-mt-8 md:flex-col md:justify-center md:py-0"
          >
            <SectionHeading
              eyebrow="Engineering Writing"
              title="Ideas, Tradeoffs & Systems"
              major
            />

            <a
              href="https://medium.com/@kuteakash51"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <article className="overflow-hidden rounded-[16px] border border-white/10 bg-[#111111] px-4 py-4 transition duration-300 hover:border-orange-500/45 md:rounded-[18px] md:px-6 xl:rounded-[22px] xl:px-8 xl:py-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[6px] uppercase tracking-[0.15em] text-zinc-600 md:text-[8px] xl:text-[9px]">
                    01 · Sep 2026
                  </p>

                  <p className="text-[7px] text-zinc-500 transition duration-300 group-hover:text-orange-500 md:text-[9px] xl:text-[11px]">
                    Read article ↗
                  </p>
                </div>

                <div className="mt-4 max-w-[700px] xl:mt-6 xl:max-w-[900px]">
                  <p className="text-[32px] font-semibold uppercase leading-[0.84] tracking-[-0.06em] sm:text-[38px] md:text-[clamp(2.3rem,4.6vw,3.75rem)] xl:text-[4.6rem]">
                    Migrating
                  </p>

                  <p className="text-[32px] font-semibold uppercase leading-[0.84] tracking-[-0.06em] text-orange-500 sm:text-[38px] md:text-[clamp(2.3rem,4.6vw,3.75rem)] xl:text-[4.6rem]">
                    100M Rows
                  </p>

                  <p className="text-[32px] font-semibold uppercase leading-[0.84] tracking-[-0.06em] sm:text-[38px] md:text-[clamp(2.3rem,4.6vw,3.75rem)] xl:text-[4.6rem]">
                    Without Downtime
                  </p>
                </div>

                <div className="mt-4 border-t border-white/10 pt-3.5 xl:mt-6 xl:pt-5">
                  <p className="max-w-xl text-[8px] leading-[1.7] text-zinc-500 md:text-[10px] xl:max-w-[780px] xl:text-[13px]">
                    CDC, version-guarded backfills, invariant validation,
                    shadow reads, progressive cutover, and rollback design.
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-1.5 xl:mt-4 xl:gap-2">
                    {[
                      "CDC",
                      "Backfill",
                      "Shadow Reads",
                      "Cutover",
                      "Rollback",
                    ].map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-white/15 px-2 py-1 font-mono text-[6px] uppercase tracking-[0.08em] text-zinc-400 md:px-2.5 md:text-[7px] xl:px-3 xl:py-1.5 xl:text-[8px]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </a>
          </section>

          {/* =================================================
              EDUCATION
          ================================================== */}

          <section
            id="education"
            className="scroll-mt-6 py-8 md:scroll-mt-8 md:py-8 xl:py-12"
          >
            <div className="mb-4 border-b border-white/10 pb-4 xl:mb-6 xl:pb-5">
              <p className="mb-2 text-[8px] uppercase tracking-[0.28em] text-orange-500 md:text-[9px] xl:text-[10px]">
                Education
              </p>

              <h2 className="text-[26px] font-semibold tracking-[-0.04em] sm:text-3xl xl:text-[40px]">
                Academic Background
              </h2>
            </div>

            {education.map((item) => (
              <article
                key={item.number}
                className="group border-b border-white/10 py-5 md:py-4 xl:py-6"
              >
                <div className="grid gap-2.5 md:grid-cols-[30px_minmax(0,1fr)_125px] md:gap-3 xl:grid-cols-[40px_minmax(0,1fr)_160px] xl:gap-4">
                  <p className="font-mono text-[6px] text-zinc-700 md:text-[8px] xl:text-[9px]">
                    {item.number}
                  </p>

                  <div>
                    <p className="font-mono text-[6px] uppercase tracking-[0.14em] text-zinc-600 md:text-[8px] xl:text-[10px]">
                      {item.title}
                    </p>

                    <h3 className="mt-1.5 text-[16px] font-medium tracking-[-0.035em] text-zinc-100 transition duration-300 group-hover:text-orange-500 md:text-[18px] xl:text-[24px]">
                      {item.school}
                    </h3>
                  </div>

                  <div className="font-mono text-[6px] md:text-right md:text-[8px] xl:text-[9px]">
                    <p className="text-zinc-400">
                      {item.period}
                    </p>

                    <p className="mt-1 text-zinc-600">
                      {item.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* =================================================
              CONTACT
          ================================================== */}

          <section
            id="contact"
            className="scroll-mt-6 pb-6 pt-8 md:flex md:min-h-[calc(100svh-5rem)] md:scroll-mt-8 md:items-center md:pb-0 md:pt-0"
          >
            <div className="w-full rounded-[18px] border border-orange-500/25 bg-[#160e09] p-4 md:rounded-[20px] md:p-6 xl:rounded-[24px] xl:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[7px] uppercase tracking-[0.16em] text-orange-500 md:text-[8px] xl:text-[10px]">
                  Contact
                </p>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />

                  <p className="font-mono text-[6px] uppercase tracking-[0.12em] text-zinc-500 md:text-[7px] xl:text-[9px]">
                    Available
                  </p>
                </div>
              </div>

              <div className="mt-5 md:mt-6 xl:mt-8">
                <p className="text-[38px] font-semibold uppercase leading-[0.84] tracking-[-0.06em] sm:text-[44px] md:text-[clamp(2.45rem,4.7vw,3.9rem)] xl:text-[5rem]">
                  Let&apos;s Build
                </p>

                <p className="text-[38px] font-semibold uppercase leading-[0.84] tracking-[-0.06em] text-orange-500 sm:text-[44px] md:text-[clamp(2.45rem,4.7vw,3.9rem)] xl:text-[5rem]">
                  Something.
                </p>
              </div>

              <div className="mt-5 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-2 md:gap-5 xl:mt-7 xl:pt-6">
                <div>
                  <p className="font-mono text-[6px] uppercase tracking-[0.13em] text-zinc-600 md:text-[7px] xl:text-[9px]">
                    Looking for
                  </p>

                  <p className="mt-1.5 text-[10px] text-zinc-300 md:text-[11px] xl:text-[14px]">
                    Full-time Software Engineering roles
                  </p>

                  <p className="mt-1 text-[8px] text-zinc-600 md:text-[9px] xl:text-[11px]">
                    Backend · Full Stack · Distributed Systems
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[6px] uppercase tracking-[0.13em] text-zinc-600 md:text-[7px] xl:text-[9px]">
                    Start
                  </p>

                  <p className="mt-1.5 text-[10px] text-zinc-300 md:text-[11px] xl:text-[14px]">
                    Flexible
                  </p>
                </div>
              </div>

              <a
                href="mailto:kuteakash51@gmail.com"
                className="group/email mt-4 flex items-center justify-between gap-3 border-t border-white/10 pt-4 md:mt-5 xl:mt-6 xl:pt-6"
              >
                <span className="min-w-0 truncate text-[10px] font-medium text-zinc-200 transition group-hover/email:text-white md:text-[12px] xl:text-[15px]">
                  kuteakash51@gmail.com
                </span>

                <span className="shrink-0 text-[7px] font-medium text-orange-500 transition group-hover/email:translate-x-0.5 md:text-[9px] xl:text-[11px]">
                  Email me ↗
                </span>
              </a>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 xl:mt-6 xl:pt-6">
                <div className="flex gap-3 xl:gap-5">
                  <a
                    href="https://github.com/akashkutex"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[7px] text-zinc-600 transition hover:text-zinc-200 md:text-[9px] xl:text-[11px]"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href="https://www.linkedin.com/in/akash-kute"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[7px] text-zinc-600 transition hover:text-zinc-200 md:text-[9px] xl:text-[11px]"
                  >
                    LinkedIn ↗
                  </a>

                  <a
                    href="https://medium.com/@kuteakash51"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[7px] text-zinc-600 transition hover:text-zinc-200 md:text-[9px] xl:text-[11px]"
                  >
                    Medium ↗
                  </a>
                </div>

                <p className="font-mono text-[6px] uppercase tracking-[0.08em] text-zinc-700 md:text-[7px] xl:text-[9px]">
                  © 2026 Akash Kute
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}