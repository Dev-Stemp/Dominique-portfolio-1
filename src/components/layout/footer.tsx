"use client";

import Link from "next/link";


import {
  ArrowUpRight,
  GitBranch,
  Globe2,
   Mail,
  ArrowUp,
} from "lucide-react";

import { useThemeContext } from "@/src/context/theme-context";

export default function Footer() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      title: "GitHub",
      href: "https://github.com/talentvcrysty",
      icon: GitBranch,
    },

    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/dominique-coleman-4588823b1/",
      icon: Globe2,
    },

    {
      title: "WhatsApp",
      href: "https://wa.me/16027041567",
      icon: ArrowUpRight,
    },

    {
      title: "Email",
      href: "mailto:neekthegeek3@gmail.com",
      icon: Mail,
    },
  ];

  const navigationLinks = [
    {
      label: "Home",
      href: "#home",
    },

    {
      label: "Projects",
      href: "#projects",
    },

    {
      label: "Experience",
      href: "#experience",
    },

    {
      label: "Skills",
      href: "#skills",
    },

    {
      label: "Contact",
      href: "#contact",
    },
  ];

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className={`
        relative
        overflow-hidden
        border-t
        transition-colors
        duration-300

        ${
          isDark
            ? "border-white/10 bg-black"
            : "border-black/10 bg-white"
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
          lg:bg-[size:60px_60px]

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
          h-[200px]
          w-[200px]
          rounded-full
          blur-[100px]

          sm:h-[300px]
          sm:w-[300px]

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
          h-[200px]
          w-[200px]
          rounded-full
          blur-[100px]

          sm:h-[300px]
          sm:w-[300px]

          ${
            isDark
              ? "bg-fuchsia-500/10"
              : "bg-fuchsia-200/40"
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
          py-12

          sm:px-6
          sm:py-16

          lg:px-8
          lg:py-20
        "
      >
        {/* TOP */}
        <div
          className="
            flex
            flex-col

            gap-12

            lg:flex-row
            lg:items-start
            lg:justify-between
          "
        >
          {/* LEFT */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-cyan-500" />

              <h2
                className={`
                  text-2xl
                  font-black

                  sm:text-3xl

                  ${
                    isDark
                      ? "text-white"
                      : "text-black"
                  }
                `}
              >
                Dominique Coleman
              </h2>
            </div>

            <p
              className={`
                mt-6
                max-w-lg
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
              Senior Full Stack Engineer based in Arizona,
              building scalable web applications, cloud
              systems, AI-powered experiences, and modern
              digital products.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-8 flex flex-wrap gap-4">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.title}
                    className={`
                      group
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
                      hover:border-cyan-500/40
                      hover:bg-cyan-500/10

                      ${
                        isDark
                          ? "border-white/10 bg-white/[0.03] text-zinc-300"
                          : "border-black/10 bg-black/[0.03] text-zinc-700"
                      }
                    `}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              flex
              flex-col

              gap-10

              sm:flex-row
              sm:justify-between

              lg:gap-20
            "
          >
            {/* NAVIGATION */}
            <div>
              <h3
                className={`
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  ${
                    isDark
                      ? "text-zinc-500"
                      : "text-zinc-500"
                  }
                `}
              >
                Navigation
              </h3>

              <div className="mt-6 flex flex-col gap-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`
                      text-sm
                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:text-cyan-500

                      sm:text-base

                      ${
                        isDark
                          ? "text-zinc-300"
                          : "text-zinc-700"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3
                className={`
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]

                  ${
                    isDark
                      ? "text-zinc-500"
                      : "text-zinc-500"
                  }
                `}
              >
                Contact
              </h3>

              <div className="mt-6 space-y-4">
                <p
                  className={`
                    text-sm
                    leading-7

                    sm:text-base

                    ${
                      isDark
                        ? "text-zinc-300"
                        : "text-zinc-700"
                    }
                  `}
                >
                  Arizona, United States
                </p>

                <a
                  href="mailto:neekthegeek3@gmail.com"
                  className={`
                    block
                    text-sm
                    transition-colors
                    duration-300

                    hover:text-cyan-500

                    sm:text-base

                    ${
                      isDark
                        ? "text-zinc-300"
                        : "text-zinc-700"
                    }
                  `}
                >
                  neekthegeek3@gmail.com
                </a>

                <a
                  href="https://wa.me/16027041567"
                  className={`
                    block
                    text-sm
                    transition-colors
                    duration-300

                    hover:text-cyan-500

                    sm:text-base

                    ${
                      isDark
                        ? "text-zinc-300"
                        : "text-zinc-700"
                    }
                  `}
                >
                  +1 (602) 704-1567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className={`
            my-10
            h-px
            w-full

            sm:my-12

            ${
              isDark
                ? "bg-white/10"
                : "bg-black/10"
            }
          `}
        />

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col

            items-center
            justify-between

            gap-6

            md:flex-row
          "
        >
          {/* COPYRIGHT */}
          <p
            className={`
              text-center
              text-sm
              leading-7

              sm:text-base

              ${
                isDark
                  ? "text-zinc-500"
                  : "text-zinc-600"
              }
            `}
          >
            © {currentYear} Dominique Coleman.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}