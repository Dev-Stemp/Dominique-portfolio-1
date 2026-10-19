"use client";

import { useEffect, useState } from "react";

import { ChevronUp } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import { useThemeContext } from "@/src/context/theme-context";

export default function BackToTopButton() {
  const { theme } = useThemeContext();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: 0.8,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={scrollToTop}
          className={`
            fixed
            bottom-8
            right-8
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-300
            hover:scale-110

            ${
              theme === "dark"
                ? `
                  border-white/10
                  bg-black/70
                  text-white
                  hover:bg-cyan-500
                `
                : `
                  border-black/10
                  bg-white/80
                  text-black
                  hover:bg-cyan-500
                  hover:text-white
                `
            }
          `}
        >
          <ChevronUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}