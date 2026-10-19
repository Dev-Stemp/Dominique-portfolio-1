"use client";

import {
  Code2,
  Database,
  Palette,
  Cloud,
  Cpu,
  Sparkles,
} from "lucide-react";

import { useThemeContext } from "@/src/context/theme-context";

const skills = [
  {
    title: "Frontend",
    icon: Code2,
    iconColor: "text-cyan-500",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    icon: Database,
    iconColor: "text-emerald-500",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "Express.js",
      "REST APIs",
      "GraphQL",
    ],
  },

  {
    title: "AI & LLM",
    icon: Sparkles,
    iconColor: "text-violet-500",
    skills: [
      "OpenAI APIs",
      "Claude",
      "LLM Integration",
      "RAG",
      "AI Agents",
      "LangChain",
      "LangGraph",
    ],
  },

  {
    title: "Databases",
    icon: Database,
    iconColor: "text-emerald-600",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },

  {
    title: "Cloud & DevOps",
    icon: Cloud,
    iconColor: "text-orange-500",
    skills: [
      "AWS",
      "Azure",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Linux",
      "Cloud Deployment",
    ],
  },

  {
    title: "Architecture & Security",
    icon: Cpu,
    iconColor: "text-pink-500",
    skills: [
      "OAuth 2.0",
      "JWT",
      "RBAC",
      "Microsoft Entra ID",
      "Microservices",
      "Distributed Systems",
      "Event-Driven Architecture",
      "API Design",
    ],
  },

  {
    title: "Testing",
    icon: Palette,
    iconColor: "text-fuchsia-500",
    skills: [
      "Jest",
      "React Testing Library",
      "Pytest",
      "Unit Testing",
      "Integration Testing",
    ],
  },

  {
    title: "Tools & Workflow",
    icon: Cpu,
    iconColor: "text-yellow-500",
    skills: [
      "Git",
      "GitHub",
      "Jira",
      "Postman",
      "VS Code",
      "Agile/Scrum",
      "Code Reviews",
      "Technical Documentation",
      "System Design",
      "Web Performance",
      "Core Web Vitals",
      "Caching",
      "Database Optimization",
    ],
  },
];

export default function SkillsSection() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  return (
    <section
      id="skills"
      className={`
        relative
        overflow-hidden
        py-16
        transition-colors
        duration-300

        min-[350px]:py-20
        sm:py-24
        lg:py-32

        ${
          isDark
            ? "bg-black"
            : "bg-white"
        }
      `}
    >
      {/* GRID BACKGROUND */}
      <div
        className={`
          absolute
          inset-0
          bg-[size:32px_32px]

          min-[350px]:bg-[size:40px_40px]
          sm:bg-[size:50px_50px]
          md:bg-[size:60px_60px]

          ${
            isDark
              ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px)]"
          }
        `}
      />

      {/* BLUR EFFECT */}
      <div className="absolute left-0 top-0 h-[180px] w-[180px] rounded-full bg-cyan-500/10 blur-[80px] min-[350px]:h-[250px] min-[350px]:w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      <div className="absolute bottom-0 right-0 h-[180px] w-[180px] rounded-full bg-violet-500/10 blur-[80px] min-[350px]:h-[250px] min-[350px]:w-[250px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px]" />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-3

          min-[350px]:px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}
        <div className="mb-14 text-center sm:mb-20">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-500 min-[350px]:text-xs sm:text-sm sm:tracking-[0.4em]">
            Skills & Expertise
          </p>

          <h2
            className={`
              text-2xl
              font-black
              leading-tight

              min-[280px]:text-3xl
              min-[400px]:text-4xl
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
            Engineering Modern

            <span className="block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Digital Products
            </span>
          </h2>

          <p
            className={`
              mx-auto
              mt-5
              max-w-3xl
              text-sm
              leading-6

              min-[350px]:text-base
              min-[350px]:leading-7

              sm:mt-8
              sm:text-lg
              sm:leading-8

              ${
                isDark
                  ? "text-zinc-400"
                  : "text-zinc-600"
              }
            `}
          >
            Strong expertise across frontend engineering,
            backend architecture, cloud infrastructure,
            performance optimization, and scalable systems.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border
                  p-4
                  shadow-xl
                  backdrop-blur-xl
                  transition-all
                  duration-500

                  hover:-translate-y-2
                  hover:border-cyan-500/30
                  hover:shadow-[0_0_60px_rgba(34,211,238,0.15)]

                  min-[350px]:rounded-[24px]
                  min-[350px]:p-5

                  sm:rounded-[28px]
                  sm:p-6

                  md:rounded-[30px]
                  md:p-7

                  lg:rounded-[32px]
                  lg:p-8

                  ${
                    isDark
                      ? "border-white/10 bg-zinc-900/60"
                      : "border-black/10 bg-white/70"
                  }
                `}
              >
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* ICON */}
                <div
                  className={`
                    mb-5
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl

                    min-[350px]:h-16
                    min-[350px]:w-16

                    sm:mb-8
                    sm:h-20
                    sm:w-20
                    sm:rounded-3xl

                    ${
                      isDark
                        ? "bg-white/5"
                        : "bg-black/5"
                    }
                  `}
                >
                  <Icon
                    className={`h-7 w-7 min-[350px]:h-8 min-[350px]:w-8 sm:h-10 sm:w-10 ${category.iconColor}`}
                  />
                </div>

                {/* TITLE */}
                <h3
                  className={`
                    mb-5
                    text-xl
                    font-bold
                    leading-tight

                    min-[350px]:text-2xl

                    sm:mb-8
                    sm:text-3xl

                    md:text-4xl

                    ${
                      isDark
                        ? "text-white"
                        : "text-black"
                    }
                  `}
                >
                  {category.title}
                </h3>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 min-[350px]:gap-3 sm:gap-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`
                        rounded-full
                        border
                        px-3
                        py-2
                        text-[11px]
                        font-medium
                        transition-all
                        duration-300

                        min-[350px]:px-4
                        min-[350px]:text-xs

                        sm:px-5
                        sm:py-3
                        sm:text-sm

                        hover:border-cyan-500/30
                        hover:bg-cyan-500/10
                        hover:text-cyan-600

                        ${
                          isDark
                            ? "border-white/10 bg-white/[0.03] text-zinc-300 dark:hover:text-cyan-300"
                            : "border-black/10 bg-black/[0.03] text-zinc-700"
                        }
                      `}
                    >
                      {skill}
                    </div>
                  ))}
                </div>

                {/* CORNER LIGHT */}
                <div className="absolute right-0 top-0 h-24 w-24 bg-cyan-500/10 blur-3xl sm:h-40 sm:w-40" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}