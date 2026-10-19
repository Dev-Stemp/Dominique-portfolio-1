"use client";

import { motion } from "framer-motion";

import {
  ArrowUpRight,
  GitBranch,
  Globe2,
} from "lucide-react";

import { useThemeContext } from "@/src/context/theme-context";

const projects = [
  {
    title: "AI Knowledge Assistant",
    description:
      "RAG-powered internal knowledge assistant with semantic search, chat workflows, and retrieval over enterprise docs.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&auto=format&fit=crop",
    tags: [
      "Next.js",
      "OpenAI",
      "RAG",
      "FastAPI",
    ],
    github: "https://github.com/talentvcrysty",
    live: "#",
  },

  {
    title: "AI Customer Support Platform",
    description:
      "Conversational support system with LLM orchestration, ticket routing, and response automation for customer teams.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    tags: [
      "LLM",
      "Node.js",
      "PostgreSQL",
      "Automation",
    ],
    github: "https://github.com/talentvcrysty",
    live: "#",
  },

  {
    title: "AI Document Intelligence Suite",
    description:
      "Document extraction and summarization platform using LLMs, OCR workflows, and structured data pipelines.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    tags: [
      "Python",
      "OpenAI",
      "Pipelines",
      "AI",
    ],
    github: "https://github.com/talentvcrysty",
    live: "#",
  },

  {
    title: "AI SaaS Analytics Dashboard",
    description:
      "Interactive dashboard combining product analytics, AI insights, and workflow automation for modern SaaS teams.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    tags: [
      "Next.js",
      "Analytics",
      "AI",
      "Dashboard",
    ],
    github: "https://github.com/talentvcrysty",
    live: "#",
  },

  {
    title: "AI Workflow Copilot",
    description:
      "Ops-focused Copilot that turns business requests into action plans using LLM orchestration and API integrations.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    tags: [
      "AI Agents",
      "LangChain",
      "API Design",
      "Automation",
    ],
    github: "https://github.com/talentvcrysty",
    live: "#",
  },
];

export default function ProjectsSection() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  return (
    <section
      id="projects"
      className={`
        relative
        overflow-hidden

        py-16
        transition-colors
        duration-300

        sm:py-20
        md:py-24
        lg:py-28
        xl:py-32

        ${
          isDark
            ? "bg-black"
            : "bg-white"
        }
      `}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`
            absolute
            inset-0

            bg-[size:28px_28px]

            sm:bg-[size:40px_40px]
            md:bg-[size:55px_55px]
            lg:bg-[size:70px_70px]

            ${
              isDark
                ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]"
            }
          `}
        />

        <div className="absolute left-0 top-0 h-[220px] w-[220px] rounded-full bg-cyan-500/10 blur-[90px] sm:h-[320px] sm:w-[320px] lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[220px] w-[220px] rounded-full bg-purple-600/10 blur-[90px] sm:h-[320px] sm:w-[320px] lg:h-[500px] lg:w-[500px] lg:blur-[120px]" />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-14

            sm:mb-16
            md:mb-20
            lg:mb-24
          "
        >
          <p
            className="
              mb-4
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-cyan-500

              min-[350px]:text-[11px]

              sm:text-sm
              sm:tracking-[0.4em]
            "
          >
            Featured Projects
          </p>

          <h2
            className={`
              max-w-6xl
              font-black
              leading-[1.05]

              text-3xl

              min-[350px]:text-4xl

              sm:text-5xl
              md:text-6xl
              lg:text-7xl

              ${
                isDark
                  ? "text-white"
                  : "text-black"
              }
            `}
          >
            Crafted digital products with{" "}

            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              premium experiences
            </span>
          </h2>
        </motion.div>

        {/* PROJECTS */}
        <div
          className="
            space-y-16

            sm:space-y-20
            md:space-y-24
            lg:space-y-32
          "
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className={`
                grid
                items-center

                gap-10

                lg:grid-cols-2
                lg:gap-14
                xl:gap-20

                ${
                  index % 2 === 1
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >
              {/* IMAGE */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="group relative"
              >
                {/* GLOW */}
                <div
                  className="
                    absolute
                    -inset-2
                    rounded-[28px]
                    bg-gradient-to-r
                    from-cyan-500/20
                    to-purple-500/20
                    opacity-0
                    blur-2xl
                    transition
                    duration-500

                    group-hover:opacity-100

                    sm:rounded-[36px]
                    lg:rounded-[42px]
                  "
                />

                {/* CARD */}
                <div
                  className={`
                    relative
                    overflow-hidden
                    rounded-[24px]
                    border
                    shadow-2xl

                    sm:rounded-[30px]
                    md:rounded-[34px]
                    lg:rounded-[40px]

                    ${
                      isDark
                        ? "border-white/10 bg-zinc-900"
                        : "border-black/10 bg-zinc-100"
                    }
                  `}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="
                      h-[240px]
                      w-full
                      object-cover
                      transition
                      duration-700

                      group-hover:scale-110

                      min-[400px]:h-[280px]

                      sm:h-[360px]
                      md:h-[420px]
                      lg:h-[500px]
                    "
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* FLOATING BUTTONS */}
                  <div
                    className="
                      absolute
                      right-3
                      top-3
                      flex
                      gap-3

                      sm:right-5
                      sm:top-5
                    "
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        backdrop-blur-xl
                        transition-all
                        duration-300

                        hover:scale-110

                        sm:h-12
                        sm:w-12

                        md:h-14
                        md:w-14
                        md:rounded-2xl

                        ${
                          isDark
                            ? "border-white/10 bg-black/40"
                            : "border-white/20 bg-white/30"
                        }
                      `}
                    >
                      <GitBranch className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        border
                        backdrop-blur-xl
                        transition-all
                        duration-300

                        hover:scale-110

                        sm:h-12
                        sm:w-12

                        md:h-14
                        md:w-14
                        md:rounded-2xl

                        ${
                          isDark
                            ? "border-white/10 bg-black/40"
                            : "border-white/20 bg-white/30"
                        }
                      `}
                    >
                      <Globe2 className="h-4 w-4 text-white sm:h-5 sm:w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* CONTENT */}
              <div className="w-full overflow-hidden">
                {/* BADGE */}
                <div
                  className="
                    mb-5
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-cyan-500/20
                    bg-cyan-500/10

                    px-4
                    py-2

                    text-[11px]
                    text-cyan-500
                    backdrop-blur-xl

                    sm:mb-6
                    sm:px-5
                    sm:text-sm
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-500" />

                  Featured Project
                </div>

                {/* TITLE */}
                <h3
                  className={`
                    mb-5
                    font-black
                    leading-tight

                    text-2xl

                    min-[350px]:text-3xl

                    sm:text-4xl
                    md:text-5xl

                    ${
                      isDark
                        ? "text-white"
                        : "text-black"
                    }
                  `}
                >
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className={`
                    mb-8
                    text-sm
                    leading-7

                    sm:text-base
                    sm:leading-8

                    md:text-lg
                    md:leading-9

                    ${
                      isDark
                        ? "text-zinc-400"
                        : "text-zinc-600"
                    }
                  `}
                >
                  {project.description}
                </p>

                {/* TAGS */}
                <div
                  className="
                    mb-8
                    flex
                    flex-wrap

                    gap-2

                    sm:mb-10
                    sm:gap-3

                    md:gap-4
                  "
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        rounded-full
                        border

                        px-3
                        py-2

                        text-[10px]
                        font-medium
                        backdrop-blur-xl

                        min-[350px]:text-xs

                        sm:px-4
                        sm:py-2.5

                        md:px-5
                        md:py-3
                        md:text-sm

                        ${
                          isDark
                            ? "border-white/10 bg-white/5 text-zinc-300"
                            : "border-black/10 bg-black/5 text-zinc-700"
                        }
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div
                  className="
                    flex
                    flex-col

                    gap-4

                    sm:flex-row
                    sm:flex-wrap
                  "
                >
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      bg-gradient-to-r
                      from-cyan-500
                      to-blue-600

                      px-6
                      py-4

                      text-sm
                      font-semibold
                      text-white

                      transition-all
                      duration-300

                      hover:scale-[1.02]

                      sm:px-7

                      md:px-8
                      md:text-base
                    "
                  >
                    Live Preview

                    <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex
                      items-center
                      justify-center
                      gap-3
                      rounded-2xl
                      border

                      px-6
                      py-4

                      text-sm
                      font-semibold
                      backdrop-blur-xl

                      transition-all
                      duration-300

                      hover:border-cyan-500/40
                      hover:bg-cyan-500/10

                      sm:px-7

                      md:px-8
                      md:text-base

                      ${
                        isDark
                          ? "border-white/10 bg-white/5 text-white"
                          : "border-black/10 bg-black/5 text-black"
                      }
                    `}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}