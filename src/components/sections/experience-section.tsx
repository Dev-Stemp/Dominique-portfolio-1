"use client";

import { useThemeContext } from "@/src/context/theme-context";

const experiences = [
  {
    role: "Senior Full Stack Engineer",
    period: "2022 - Present",
    description:
      "Architected and delivered high-impact SaaS products, AI-powered experiences, and cloud-native platforms using Next.js, TypeScript, Python, and modern distributed systems.",
    highlights: [
      "Built AI-enabled product experiences",
      "Designed scalable backend systems",
      "Led end-to-end engineering delivery",
    ],
  },

  {
    role: "Full Stack Engineer",
    period: "2019 - 2022",
    description:
      "Developed business-critical web applications, authentication systems, APIs, and dashboards with a strong focus on performance, maintainability, and product reliability.",
    highlights: [
      "Delivered secure web platforms",
      "Optimized system performance",
      "Integrated cloud and data services",
    ],
  },

  {
    role: "Software Engineer",
    period: "2017 - 2019",
    description:
      "Built frontend and backend solutions across several product teams with emphasis on responsive UX, maintainable code, and scalable architecture.",
    highlights: [
      "Created resilient APIs",
      "Improved application responsiveness",
      "Supported production-scale releases",
    ],
  },
];

export default function ExperienceSection() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  return (
    <section
      id="experience"
      className={`
        relative
        overflow-hidden
        py-20
        transition-colors
        duration-300

        sm:py-24
        md:py-28
        lg:py-32

        ${
          isDark
            ? "bg-black text-white"
            : "bg-white text-zinc-900"
        }
      `}
    >
      {/* GRID */}
      <div
        className={`
          absolute
          inset-0

          bg-[size:40px_40px]

          sm:bg-[size:50px_50px]
          md:bg-[size:60px_60px]

          ${
            isDark
              ? "bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)]"
              : "bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px)]"
          }
        `}
      />

      {/* GLOW */}
      <div
        className={`
          absolute
          left-0
          top-0

          h-[220px]
          w-[220px]

          rounded-full
          blur-[100px]

          sm:h-[350px]
          sm:w-[350px]

          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[140px]

          ${
            isDark
              ? "bg-cyan-500/10"
              : "bg-cyan-200/40"
          }
        `}
      />

      <div
        className={`
          absolute
          bottom-0
          right-0

          h-[220px]
          w-[220px]

          rounded-full
          blur-[100px]

          sm:h-[350px]
          sm:w-[350px]

          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[140px]

          ${
            isDark
              ? "bg-violet-500/10"
              : "bg-violet-200/40"
          }
        `}
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl

          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}
        <div className="mb-16 text-center sm:mb-20 lg:mb-24">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-500 sm:text-sm sm:tracking-[0.5em]">
            Career Journey
          </p>

          <h2
            className="
              text-3xl
              font-black
              leading-tight

              min-[350px]:text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Professional

            <span className="block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p
            className={`
              mx-auto
              mt-6
              max-w-3xl

              text-base
              leading-7

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
            8+ years of experience building scalable web
            applications, AI-powered products, cloud
            infrastructure, APIs, and modern digital systems.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mx-auto max-w-6xl">
          {/* MOBILE + TABLET LINE */}
          <div
            className={`
              absolute
              left-3
              top-0
              h-full
              w-[2px]

              sm:left-5

              lg:hidden

              ${
                isDark
                  ? "bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500"
                  : "bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500"
              }
            `}
          />

          {/* DESKTOP CENTER LINE */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500 lg:block" />

          <div className="space-y-10 sm:space-y-14 lg:space-y-24">
            {experiences.map((item, index) => (
              <div
                key={item.role}
                className={`
                  relative
                  flex
                  flex-col

                  pl-12

                  sm:pl-16

                  lg:pl-0
                  lg:flex-row
                  lg:gap-10

                  ${
                    index % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }
                `}
              >
                {/* MOBILE DOT */}
                <div
                  className={`
                    absolute
                    left-0
                    top-8

                    h-6
                    w-6

                    rounded-full
                    border-4

                    sm:left-2

                    lg:hidden

                    ${
                      isDark
                        ? "border-black bg-cyan-400 shadow-[0_0_30px_#22d3ee]"
                        : "border-white bg-cyan-500 shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                    }
                  `}
                />

                {/* DESKTOP DOT */}
                <div
                  className={`
                    absolute
                    left-1/2
                    top-10

                    hidden
                    h-6
                    w-6
                    -translate-x-1/2
                    rounded-full
                    border-4

                    lg:block

                    ${
                      isDark
                        ? "border-black bg-cyan-400 shadow-[0_0_40px_#22d3ee]"
                        : "border-white bg-cyan-500 shadow-[0_0_40px_rgba(6,182,212,0.5)]"
                    }
                  `}
                />

                {/* CARD */}
                <div className="w-full lg:w-1/2">
                  <div
                    className={`
                      group
                      relative
                      overflow-hidden

                      rounded-[24px]
                      border

                      p-5

                      backdrop-blur-2xl
                      transition-all
                      duration-500

                      hover:-translate-y-2

                      sm:rounded-[30px]
                      sm:p-7

                      md:p-8

                      lg:rounded-[36px]
                      lg:p-10

                      ${
                        isDark
                          ? `
                            border-white/10
                            bg-zinc-900/70
                            hover:border-cyan-400/30
                            hover:shadow-[0_0_80px_rgba(34,211,238,0.15)]
                          `
                          : `
                            border-zinc-200
                            bg-white/80
                            shadow-xl
                            hover:border-cyan-300
                            hover:shadow-[0_20px_80px_rgba(34,211,238,0.15)]
                          `
                      }
                    `}
                  >
                    {/* GRADIENT */}
                    <div
                      className={`
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100

                        ${
                          isDark
                            ? "bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5"
                            : "bg-gradient-to-br from-cyan-100/40 via-transparent to-violet-100/40"
                        }
                      `}
                    />

                    {/* PERIOD */}
                    <div
                      className={`
                        inline-flex
                        rounded-full
                        border

                        px-4
                        py-2

                        text-xs
                        font-semibold

                        sm:px-5
                        sm:py-2.5
                        sm:text-sm

                        md:px-6
                        md:py-3

                        ${
                          isDark
                            ? "border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
                            : "border-cyan-200 bg-cyan-50 text-cyan-700"
                        }
                      `}
                    >
                      {item.period}
                    </div>

                    {/* ROLE */}
                    <h3
                      className={`
                        mt-6
                        font-black
                        leading-tight

                        text-2xl

                        sm:mt-7
                        sm:text-3xl

                        md:text-4xl

                        ${
                          isDark
                            ? "text-white"
                            : "text-zinc-900"
                        }
                      `}
                    >
                      {item.role}
                    </h3>

                    {/* DESCRIPTION */}
                    <p
                      className={`
                        mt-5

                        text-sm
                        leading-7

                        sm:text-base
                        sm:leading-8

                        lg:text-lg

                        ${
                          isDark
                            ? "text-zinc-400"
                            : "text-zinc-600"
                        }
                      `}
                    >
                      {item.description}
                    </p>

                    {/* HIGHLIGHTS */}
                    <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                      {item.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className={`
                            rounded-full
                            border

                            px-4
                            py-2

                            text-xs
                            font-medium

                            transition-all
                            duration-300

                            sm:px-5
                            sm:py-3
                            sm:text-sm

                            ${
                              isDark
                                ? `
                                  border-white/10
                                  bg-white/[0.03]
                                  text-zinc-300
                                  hover:border-cyan-400/30
                                  hover:bg-cyan-500/10
                                  hover:text-cyan-300
                                `
                                : `
                                  border-zinc-200
                                  bg-zinc-50
                                  text-zinc-700
                                  hover:border-cyan-300
                                  hover:bg-cyan-50
                                  hover:text-cyan-700
                                `
                            }
                          `}
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>

                    {/* CORNER LIGHT */}
                    <div
                      className={`
                        absolute
                        right-0
                        top-0

                        h-24
                        w-24

                        blur-3xl

                        sm:h-32
                        sm:w-32

                        lg:h-40
                        lg:w-40

                        ${
                          isDark
                            ? "bg-cyan-500/10"
                            : "bg-cyan-200/30"
                        }
                      `}
                    />
                  </div>
                </div>

                {/* EMPTY SIDE */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}