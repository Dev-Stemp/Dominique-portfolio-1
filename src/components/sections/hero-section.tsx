"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Download,
  GitBranch,
  Globe2,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { useThemeContext } from "@/src/context/theme-context";

export default function HeroSection() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  return (
    <section
      className={`
        relative
        flex
        min-h-screen
        items-center
        overflow-hidden

        pt-28
        pb-16

        sm:pt-32
        sm:pb-20

        lg:pt-36
        lg:pb-24

        transition-colors
        duration-500

        ${isDark
          ? "bg-black text-white"
          : "bg-white text-black"
        }
      `}
    >
      {/* GRID BACKGROUND */}
      <div
        className={`
          absolute
          inset-0

          bg-[size:32px_32px]

          sm:bg-[size:44px_44px]
          md:bg-[size:52px_52px]
          lg:bg-[size:60px_60px]

          ${isDark
            ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]"
            : "bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)]"
          }
        `}
      />

      {/* TOP GLOW */}
      <div
        className={`
          absolute
          left-1/2
          top-0
          h-[220px]
          w-[220px]
          -translate-x-1/2
          rounded-full
          blur-[100px]

          sm:h-[320px]
          sm:w-[320px]

          md:h-[420px]
          md:w-[420px]

          lg:h-[520px]
          lg:w-[520px]

          ${isDark
            ? "bg-cyan-500/20"
            : "bg-cyan-400/20"
          }
        `}
      />

      {/* BOTTOM GLOW */}
      <div
        className={`
          absolute
          bottom-0
          right-0
          h-[220px]
          w-[220px]
          rounded-full
          blur-[100px]

          sm:h-[320px]
          sm:w-[320px]

          lg:h-[450px]
          lg:w-[450px]

          ${isDark
            ? "bg-fuchsia-500/10"
            : "bg-fuchsia-300/20"
          }
        `}
      />

      <div
        className="
          container
          relative
          z-10
          mx-auto
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            items-center

            gap-14

            lg:grid-cols-2
            lg:gap-20
          "
        >
          {/* LEFT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              order-2
              text-center

              lg:order-1
              lg:text-left
            "
          >
            {/* BADGE */}
            <div
              className={`
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border

                px-4
                py-2

                text-[11px]
                font-semibold
                uppercase
                tracking-[0.25em]

                backdrop-blur-xl

                sm:text-xs

                ${isDark
                  ? "border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
                  : "border-cyan-300 bg-cyan-50 text-cyan-700"
                }
              `}
            >
              <span className="h-2 w-2 rounded-full bg-cyan-500" />

              Senior Full Stack Engineer
            </div>

            {/* TITLE */}
            <h1
              className="
                mx-auto
                max-w-5xl

                text-4xl
                font-black
                leading-[0.95]
                tracking-tight

                min-[350px]:text-5xl

                sm:text-6xl

                md:text-7xl

                xl:text-[5.5rem]

                lg:mx-0
              "
            >
              Building

              <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
                modern scalable
              </span>

              digital products.
            </h1>

            {/* DESCRIPTION */}
            <p
              className={`
    mx-auto
    mt-5
    max-w-2xl

    text-sm
    leading-6

    sm:mt-6
    sm:text-base
    sm:leading-7

    lg:mx-0

    ${isDark
                  ? "text-zinc-400"
                  : "text-zinc-600"
                }
  `}
            >
              Senior Full Stack Engineer based in Arizona,
              United States, building AI-powered web products,
              scalable SaaS platforms, cloud systems, and
              modern digital experiences for growing businesses.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-8
                flex
                flex-col
                gap-4

                sm:mt-10
                sm:flex-row
                sm:flex-wrap

                lg:justify-start
              "
            >
              <Link href="#projects">
                <Button
                  size="lg"
                  className="
                    group
                    h-12
                    w-full
                    rounded-2xl

                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-fuchsia-500

                    px-6
                    text-sm
                    font-semibold
                    text-white

                    transition-all
                    duration-300

                    hover:scale-105
                    hover:shadow-[0_0_40px_rgba(34,211,238,0.35)]

                    sm:h-14
                    sm:px-8
                    sm:text-base
                  "
                >
                  View Projects

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="#contact">
                <Button
                  variant="outline"
                  size="lg"
                  className={`
                    h-12
                    w-full
                    rounded-2xl

                    px-6
                    text-sm
                    font-semibold

                    backdrop-blur-xl
                    transition-all
                    duration-300

                    hover:scale-105

                    sm:h-14
                    sm:px-8
                    sm:text-base

                    ${isDark
                      ? `
                          border-white/10
                          bg-white/5
                          text-white
                          hover:border-cyan-400/30
                          hover:bg-white/10
                        `
                      : `
                          border-zinc-300
                          bg-white
                          text-black
                          hover:border-cyan-400
                          hover:bg-cyan-50
                        `
                    }
                  `}
                >
                  Contact Me
                </Button>
              </Link>

              <Link
                href="/resume.pdf"
                target="_blank"
                download
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className={`
      group
      h-12
      rounded-2xl

      px-6
      text-sm
      font-semibold

      transition-all
      duration-300

      hover:scale-105

      sm:h-14
      sm:px-8
      sm:text-base

      ${isDark
                      ? `
            text-zinc-300
            hover:bg-white/5
            hover:text-white
          `
                      : `
            text-zinc-700
            hover:bg-zinc-100
            hover:text-black
          `
                    }
    `}
                >
                  <Download
                    className="
        mr-2
        h-5
        w-5
        transition-transform
        duration-300

        group-hover:-translate-y-0.5
      "
                  />

                  Download Resume
                </Button>
              </Link>
            </div>

            {/* SOCIALS */}
            <div
              className="
                mt-10
                flex
                items-center
                justify-center
                gap-4

                lg:justify-start
              "
            >
              {[
                {
                  icon: GitBranch,
                  href: "https://github.com/talentvcrysty",
                },
                {
                  icon: Globe2,
                  href: "https://www.linkedin.com/in/dominique-coleman-4588823b1/",
                },
                {
                  icon: Mail,
                  href: "mailto:neekthegeek3@gmail.com",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center

                      rounded-2xl
                      border

                      backdrop-blur-xl
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:scale-105

                      ${isDark
                        ? `
                            border-white/10
                            bg-white/5
                            text-zinc-300
                            hover:border-cyan-400/30
                            hover:bg-cyan-500/10
                            hover:text-cyan-300
                          `
                        : `
                            border-zinc-200
                            bg-white/80
                            text-zinc-700
                            hover:border-cyan-400
                            hover:bg-cyan-50
                            hover:text-cyan-700
                          `
                      }
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="
              relative
              order-1

              lg:order-2
            "
          >
            {/* CARD GLOW */}
            <div
              className={`
                absolute
                inset-0
                rounded-[28px]
                blur-3xl

                ${isDark
                  ? "bg-cyan-500/10"
                  : "bg-cyan-300/20"
                }
              `}
            />

            {/* MAIN CARD */}
            <div
              className={`
                relative
                overflow-hidden
                rounded-[28px]
                border

                p-4

                backdrop-blur-2xl
                transition-all
                duration-500

                sm:p-6

                lg:p-8

                ${isDark
                  ? `
                      border-cyan-500/20
                      bg-zinc-950/80
                    `
                  : `
                      border-cyan-200
                      bg-white/90
                      shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                    `
                }
              `}
            >
              {/* LIGHT EFFECT */}
              <div
                className={`
                  absolute
                  right-0
                  top-0
                  h-40
                  w-40
                  blur-3xl

                  ${isDark
                    ? "bg-cyan-500/10"
                    : "bg-cyan-300/30"
                  }
                `}
              />

              {/* TOP BAR */}
              <div className="mb-6 flex items-center gap-2 sm:mb-8">
                <div className="h-3 w-3 rounded-full bg-red-500" />

                <div className="h-3 w-3 rounded-full bg-yellow-500" />

                <div className="h-3 w-3 rounded-full bg-green-500" />

                <span
                  className={`
                    ml-3
                    text-xs

                    sm:text-sm

                    ${isDark
                      ? "text-zinc-500"
                      : "text-zinc-600"
                    }
                  `}
                >
                  developer.ts
                </span>
              </div>

              {/* CODE BLOCK */}
              <pre
                className={`
                  overflow-x-auto

                  rounded-2xl

                  p-4

                  text-[11px]
                  leading-6

                  sm:text-xs
                  sm:leading-7

                  md:text-sm
                  md:leading-8

                  ${isDark
                    ? "bg-black/40 text-zinc-300"
                    : "bg-zinc-100 text-zinc-700"
                  }
                `}
              >
                {`const developer = {
  name: "Dominique Coleman",

  role: "Senior Full Stack Engineer",

  experience: "8+ years",

  stack: [
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "OpenAI API",
    "AWS",
    "Docker",
  ],

  specialties: [
    "AI Product Development",
    "LLM Integration",
    "Cloud Architecture",
    "Modern UI/UX"
  ],

  location: "Arizona, United States",

  availableForWork: true,
};`}
              </pre>

              {/* BOTTOM STATS */}
              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-4

                  sm:grid-cols-3
                "
              >
                {[
                  {
                    label: "Experience",
                    value: "8+ Years",
                  },
                  {
                    label: "Focus",
                    value: "AI",
                  },
                  {
                    label: "Delivery",
                    value: "Full Stack",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`
                      rounded-2xl
                      border
                      p-4
                      text-center

                      ${isDark
                        ? "border-white/10 bg-white/[0.03]"
                        : "border-zinc-200 bg-zinc-50"
                      }
                    `}
                  >
                    <h4 className="text-lg font-black sm:text-xl">
                      {item.value}
                    </h4>

                    <p
                      className={`
                        mt-1
                        text-xs

                        ${isDark
                          ? "text-zinc-500"
                          : "text-zinc-600"
                        }
                      `}
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}