"use client";

import { useEffect, useState } from "react";

import {
  Menu,
  Moon,
  Sun,
  X,
  Sparkles,
} from "lucide-react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useThemeContext } from "@/src/context/theme-context";

const navItems = [
  {
    label: "About",
    href: "#about",
  },

  {
    label: "Skills",
    href: "#skills",
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
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const { theme, toggleTheme } = useThemeContext();

  const [openMenu, setOpenMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const isDark = theme === "dark";

  /* SCROLL EFFECT */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* CLOSE MENU ON DESKTOP */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpenMenu(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  /* PREVENT BODY SCROLL */
  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500

          ${
            scrolled
              ? `
                py-3
                ${
                  isDark
                    ? "bg-black/80"
                    : "bg-white/80"
                }
                backdrop-blur-2xl
              `
              : "py-5"
          }
        `}
      >
        <div
          className="
            mx-auto
            max-w-7xl

            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div
            className={`
              flex
              items-center
              justify-between

              rounded-2xl
              border

              px-4
              py-3

              transition-all
              duration-500

              sm:px-6
              lg:rounded-full

              ${
                isDark
                  ? `
                    border-white/10
                    bg-white/[0.03]
                  `
                  : `
                    border-black/10
                    bg-white/70
                    shadow-[0_10px_50px_rgba(0,0,0,0.05)]
                  `
              }
            `}
          >
            {/* LOGO */}
            <a
              href="#"
              className="
                group
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-500
                  to-blue-600
                  shadow-lg
                "
              >
                <Sparkles className="h-5 w-5 text-white" />
              </div>

              <div>
                <h2
                  className={`
                    text-base
                    font-black
                    tracking-tight

                    sm:text-lg

                    ${
                      isDark
                        ? "text-white"
                        : "text-black"
                    }
                  `}
                >
                  Dominique Coleman
                </h2>

                <p
                  className={`
                    hidden
                    text-xs

                    sm:block

                    ${
                      isDark
                        ? "text-zinc-500"
                        : "text-zinc-500"
                    }
                  `}
                >
                  Senior Full Stack Engineer
                </p>
              </div>
            </a>

            {/* DESKTOP NAV */}
            <nav
              className="
                hidden
                items-center
                gap-2

                lg:flex
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`
                    rounded-full

                    px-5
                    py-3

                    text-sm
                    font-medium

                    transition-all
                    duration-300

                    hover:scale-105

                    ${
                      isDark
                        ? `
                          text-zinc-400
                          hover:bg-white/5
                          hover:text-white
                        `
                        : `
                          text-zinc-600
                          hover:bg-black/5
                          hover:text-black
                        `
                    }
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-3">
              {/* THEME TOGGLE */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-2xl
                  border

                  transition-all
                  duration-300

                  hover:scale-105

                  ${
                    isDark
                      ? `
                        border-white/10
                        bg-white/5
                        text-yellow-400
                        hover:bg-white/10
                      `
                      : `
                        border-black/10
                        bg-black/5
                        text-black
                        hover:bg-black/10
                      `
                  }
                `}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={theme}
                    initial={{
                      rotate: -180,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 180,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                  >
                    {isDark ? (
                      <Sun className="h-5 w-5" />
                    ) : (
                      <Moon className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>

              {/* MOBILE MENU BUTTON */}
              <button
                onClick={() =>
                  setOpenMenu(!openMenu)
                }
                aria-label="Toggle Menu"
                className={`
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-2xl
                  border

                  transition-all
                  duration-300

                  lg:hidden

                  ${
                    isDark
                      ? `
                        border-white/10
                        bg-white/5
                        text-white
                      `
                      : `
                        border-black/10
                        bg-black/5
                        text-black
                      `
                  }
                `}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={
                      openMenu
                        ? "close"
                        : "menu"
                    }
                    initial={{
                      rotate: -90,
                      opacity: 0,
                    }}
                    animate={{
                      rotate: 0,
                      opacity: 1,
                    }}
                    exit={{
                      rotate: 90,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {openMenu ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {openMenu && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              onClick={() =>
                setOpenMenu(false)
              }
              className="
                fixed
                inset-0
                z-40
                bg-black/60
                backdrop-blur-sm

                lg:hidden
              "
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                type: "spring",
                damping: 25,
                stiffness: 220,
              }}
              className={`
                fixed
                right-0
                top-0
                z-50

                flex
                h-screen
                w-[85%]
                max-w-sm
                flex-col

                border-l
                p-6

                lg:hidden

                ${
                  isDark
                    ? `
                      border-white/10
                      bg-black
                    `
                    : `
                      border-black/10
                      bg-white
                    `
                }
              `}
            >
              {/* TOP */}
              <div
                className="
                  mb-10
                  flex
                  items-center
                  justify-between
                "
              >
                <div>
                  <h2
                    className={`
                      text-xl
                      font-black

                      ${
                        isDark
                          ? "text-white"
                          : "text-black"
                      }
                    `}
                  >
                    Navigation
                  </h2>

                  <p
                    className={`
                      mt-1
                      text-sm

                      ${
                        isDark
                          ? "text-zinc-500"
                          : "text-zinc-500"
                      }
                    `}
                  >
                    Explore portfolio
                  </p>
                </div>

                <button
                  onClick={() =>
                    setOpenMenu(false)
                  }
                  className={`
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center

                    rounded-2xl

                    ${
                      isDark
                        ? "bg-white/5 text-white"
                        : "bg-black/5 text-black"
                    }
                  `}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex flex-1 flex-col gap-3">
                {navItems.map(
                  (item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{
                        opacity: 0,
                        x: 40,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay:
                          index * 0.08,
                      }}
                      onClick={() =>
                        setOpenMenu(false)
                      }
                      className={`
                        flex
                        items-center
                        justify-between

                        rounded-2xl

                        px-5
                        py-4

                        text-base
                        font-semibold

                        transition-all
                        duration-300

                        ${
                          isDark
                            ? `
                              text-zinc-300
                              hover:bg-white/5
                              hover:text-white
                            `
                            : `
                              text-zinc-700
                              hover:bg-black/5
                              hover:text-black
                            `
                        }
                      `}
                    >
                      {item.label}

                      <span
                        className={`
                          text-xs

                          ${
                            isDark
                              ? "text-zinc-600"
                              : "text-zinc-400"
                          }
                        `}
                      >
                        0{index + 1}
                      </span>
                    </motion.a>
                  )
                )}
              </nav>

              {/* FOOTER */}
              <div
                className={`
                  mt-10
                  rounded-3xl
                  border
                  p-5

                  ${
                    isDark
                      ? `
                        border-white/10
                        bg-white/[0.03]
                      `
                      : `
                        border-black/10
                        bg-black/[0.03]
                      `
                  }
                `}
              >
                <p
                  className={`
                    text-sm
                    leading-7

                    ${
                      isDark
                        ? "text-zinc-400"
                        : "text-zinc-600"
                    }
                  `}
                >
                  Building modern scalable
                  digital products with
                  Next.js, TypeScript,
                  Node.js, and cloud
                  infrastructure.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}