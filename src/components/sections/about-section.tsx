"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Sparkles,
  Rocket,
  BrainCircuit,
  Globe,
} from "lucide-react";

import { useThemeContext } from "@/src/context/theme-context";

export default function AboutSection() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  return (
    <section
      id="about"
      className={`
        relative
        overflow-hidden
        py-20
        transition-all
        duration-300

        sm:py-24
        md:py-28
        lg:py-32

        ${
          isDark
            ? "bg-black text-white"
            : "bg-white text-black"
        }
      `}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className={`
            absolute
            inset-0
            bg-[size:40px_40px]

            sm:bg-[size:50px_50px]
            md:bg-[size:60px_60px]

            ${
              isDark
                ? "bg-[linear-gradient(rgba(0,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.06)_1px,transparent_1px)]"
                : "bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]"
            }
          `}
        />

        <div className="absolute left-0 top-0 h-[260px] w-[260px] rounded-full bg-cyan-500/10 blur-[100px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />

        <div className="absolute bottom-0 right-0 h-[260px] w-[260px] rounded-full bg-purple-500/10 blur-[100px] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]" />
      </div>

      <div
        className="
          container
          relative
          z-10
          mx-auto
          px-4

          sm:px-6
          lg:px-8
        "
      >
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16 text-center sm:mb-20 lg:mb-24"
        >
          <p
            className="
              mb-4
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.3em]
              text-cyan-500

              sm:text-sm
              sm:tracking-[0.4em]
            "
          >
            About Me
          </p>

          <h2
            className={`
              mx-auto
              max-w-5xl
              text-3xl
              font-black
              leading-tight

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
            I build{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              high-performance
            </span>{" "}
            digital experiences for modern businesses.
          </h2>
        </motion.div>

        {/* MAIN LAYOUT */}
        <div
          className="
            grid
            items-center
            gap-10

            md:gap-14
            lg:grid-cols-2
            lg:gap-16
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className={`
                relative
                overflow-hidden
                rounded-[24px]
                border
                p-6
                transition-all
                duration-300

                sm:rounded-[30px]
                sm:p-8

                md:rounded-[36px]
                md:p-10

                lg:rounded-[40px]

                ${
                  isDark
                    ? "border-white/10 bg-gradient-to-br from-zinc-900 to-black shadow-[0_0_60px_rgba(0,255,255,0.08)]"
                    : "border-black/10 bg-gradient-to-br from-white to-zinc-100 shadow-2xl"
                }
              `}
            >
              <div className="absolute -left-20 top-0 h-52 w-52 rounded-full bg-cyan-500/20 blur-[120px]" />

              {/* BADGE */}
              <div className="mb-6 inline-flex flex-wrap items-center gap-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs text-cyan-500 backdrop-blur-xl sm:px-5 sm:text-sm">
                <Sparkles className="h-4 w-4" />
                8+ Years Experience
              </div>

              <h3
                className={`
                  mb-5
                  text-2xl
                  font-black
                  leading-tight

                  sm:text-3xl
                  md:text-4xl

                  ${
                    isDark
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Turning ideas into scalable web and AI products.
              </h3>

              <p
                className={`
                  mb-6
                  text-base
                  leading-8

                  sm:text-lg
                  sm:leading-9

                  ${
                    isDark
                      ? "text-zinc-400"
                      : "text-zinc-600"
                  }
                `}
              >
                I’m Dominique Coleman, a Senior Full Stack Engineer based in
                Arizona, United States, with a strong focus on building
                AI-powered web products, scalable SaaS platforms, cloud
                systems, and high-performance digital experiences.
              </p>

              <p
                className={`
                  mb-8
                  text-base
                  leading-8

                  sm:text-lg
                  sm:leading-9

                  ${
                    isDark
                      ? "text-zinc-400"
                      : "text-zinc-600"
                  }
                `}
              >
                I combine elegant frontend design with resilient backend
                architecture and practical AI integration to deliver products
                that are scalable, secure, and ready for real business growth.
              </p>

              {/* STATS */}
              <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-6">
                <div
                  className={`
                    rounded-3xl
                    border
                    p-5
                    backdrop-blur-xl

                    sm:p-6

                    ${
                      isDark
                        ? "border-white/10 bg-white/5"
                        : "border-black/10 bg-black/[0.03]"
                    }
                  `}
                >
                  <h4 className="text-3xl font-black text-cyan-500 sm:text-4xl">
                    8+
                  </h4>

                  <p
                    className={`mt-2 text-sm sm:text-base ${
                      isDark
                        ? "text-zinc-400"
                        : "text-zinc-600"
                    }`}
                  >
                    Years in Engineering
                  </p>
                </div>

                <div
                  className={`
                    rounded-3xl
                    border
                    p-5
                    backdrop-blur-xl

                    sm:p-6

                    ${
                      isDark
                        ? "border-white/10 bg-white/5"
                        : "border-black/10 bg-black/[0.03]"
                    }
                  `}
                >
                  <h4 className="text-3xl font-black text-purple-500 sm:text-4xl">
                    AI
                  </h4>

                  <p
                    className={`mt-2 text-sm sm:text-base ${
                      isDark
                        ? "text-zinc-400"
                        : "text-zinc-600"
                    }`}
                  >
                    Product Delivery
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-5 sm:gap-6"
          >
            {[
              {
                icon: Code2,
                title: "Frontend Excellence",
                text: "Creating smooth and modern UI experiences using Next.js, React, TailwindCSS, and animation systems.",
              },
              {
                icon: BrainCircuit,
                title: "Backend Architecture",
                text: "Building scalable APIs, microservices, authentication systems, and cloud infrastructure.",
              },
              {
                icon: Rocket,
                title: "Performance Optimization",
                text: "Optimizing speed, SEO, rendering, and developer experience for production-grade applications.",
              },
              {
                icon: Globe,
                title: "Global Product Mindset",
                text: "Developing products used by international clients with clean architecture and scalable systems.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.01,
                }}
                transition={{
                  duration: 0.3,
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[24px]
                  border
                  p-5
                  transition-all
                  duration-300

                  sm:rounded-[28px]
                  sm:p-6

                  md:rounded-[30px]
                  md:p-8

                  ${
                    isDark
                      ? "border-white/10 bg-gradient-to-br from-zinc-900 to-black"
                      : "border-black/10 bg-gradient-to-br from-white to-zinc-100 shadow-xl"
                  }
                `}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" />
                </div>

                <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:gap-6">
                  <div
                    className={`
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl

                      sm:h-16
                      sm:w-16

                      ${
                        isDark
                          ? "bg-white/5"
                          : "bg-black/[0.04]"
                      }
                    `}
                  >
                    <item.icon className="h-7 w-7 text-cyan-500 sm:h-8 sm:w-8" />
                  </div>

                  <div>
                    <h4
                      className={`
                        mb-3
                        text-xl
                        font-bold

                        sm:text-2xl

                        ${
                          isDark
                            ? "text-white"
                            : "text-black"
                        }
                      `}
                    >
                      {item.title}
                    </h4>

                    <p
                      className={`
                        text-sm
                        leading-7

                        sm:text-base
                        sm:leading-8

                        ${
                          isDark
                            ? "text-zinc-400"
                            : "text-zinc-600"
                        }
                      `}
                    >
                      {item.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}