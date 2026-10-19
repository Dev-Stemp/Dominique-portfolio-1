"use client";

import { useState } from "react";
import { useThemeContext } from "@/src/context/theme-context";

export default function ContactSection() {
  const { theme } = useThemeContext();

  const isDark = theme === "dark";

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className={`
        relative
        overflow-hidden

        py-20

        transition-colors
        duration-300

        sm:py-24
        md:py-28
        lg:py-32
        xl:py-40

        ${
          isDark
            ? "bg-black text-white"
            : "bg-white text-zinc-900"
        }
      `}
    >
      {/* BACKGROUND */}
      <div
        className={`absolute inset-0 ${
          isDark ? "bg-black" : "bg-white"
        }`}
      />

      {/* GRID */}
      <div
        className={`
          absolute
          inset-0

          bg-[size:40px_40px]

          sm:bg-[size:55px_55px]
          lg:bg-[size:70px_70px]

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
          blur-[90px]

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
          blur-[90px]

          sm:h-[350px]
          sm:w-[350px]

          lg:h-[500px]
          lg:w-[500px]
          lg:blur-[140px]

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
          sm:px-6
          lg:px-8
        "
      >
        {/* HEADER */}
        <div className="mb-14 text-center sm:mb-20 lg:mb-24">
          <p
            className={`
              mb-4

              text-[11px]
              font-semibold
              uppercase

              tracking-[0.3em]

              sm:mb-5
              sm:text-sm
              sm:tracking-[0.5em]

              ${
                isDark
                  ? "text-cyan-400"
                  : "text-cyan-600"
              }
            `}
          >
            Contact
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
              xl:text-8xl
            "
          >
            Let’s Create

            <span className="block bg-gradient-to-r from-cyan-500 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent">
              Something Extraordinary
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

              lg:text-xl
              lg:leading-9

              ${
                isDark
                  ? "text-zinc-400"
                  : "text-zinc-600"
              }
            `}
          >
            Available for full-stack engineering,
            SaaS development, scalable architecture,
            cloud infrastructure, and innovative
            digital products.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-6 sm:space-y-8">
            {/* BIG CARD */}
            <div
              className={`
                group
                relative
                overflow-hidden

                rounded-[24px]
                border

                p-5

                shadow-2xl
                backdrop-blur-2xl

                transition-colors
                duration-300

                sm:rounded-[32px]
                sm:p-7

                md:p-8

                lg:rounded-[40px]
                lg:p-10

                ${
                  isDark
                    ? "border-white/10 bg-zinc-900/70"
                    : "border-zinc-200 bg-white/80"
                }
              `}
            >
              {/* GLOW */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-br
                  opacity-70

                  ${
                    isDark
                      ? "from-cyan-500/10 via-transparent to-fuchsia-500/10"
                      : "from-cyan-100/60 via-transparent to-fuchsia-100/60"
                  }
                `}
              />

              {/* TOP */}
              <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p
                    className={`
                      text-[11px]
                      uppercase
                      tracking-[0.3em]

                      sm:text-sm
                      sm:tracking-[0.4em]

                      ${
                        isDark
                          ? "text-cyan-400"
                          : "text-cyan-600"
                      }
                    `}
                  >
                    Contact Information
                  </p>

                  <h3
                    className={`
                      mt-4
                      text-2xl
                      font-black
                      leading-tight

                      sm:mt-5
                      sm:text-3xl

                      md:text-4xl

                      ${
                        isDark
                          ? "text-white"
                          : "text-zinc-900"
                      }
                    `}
                  >
                    Ready to build

                    <span
                      className={`block ${
                        isDark
                          ? "text-cyan-400"
                          : "text-cyan-600"
                      }`}
                    >
                      your next project.
                    </span>
                  </h3>
                </div>

                <div
                  className={`
                    hidden

                    h-20
                    w-20

                    rounded-full
                    blur-2xl

                    md:block
                    lg:h-24
                    lg:w-24

                    ${
                      isDark
                        ? "bg-cyan-500/20"
                        : "bg-cyan-200"
                    }
                  `}
                />
              </div>

              {/* CONTACT ITEMS */}
              <div className="relative z-10 mt-10 space-y-5 sm:mt-12 sm:space-y-6 lg:mt-14 lg:space-y-8">
                {[
                  {
                    title: "Email",
                    value:
                      "neekthegeek3@gmail.com",
                    hover: isDark
                      ? "hover:border-cyan-400/30 hover:bg-cyan-500/5"
                      : "hover:border-cyan-300 hover:bg-cyan-50",
                    iconBg:
                      "from-cyan-500 to-blue-600",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8"
                        />
                      </svg>
                    ),
                  },

                  {
                    title: "WhatsApp",
                    value: "+1 (602) 704-1567",
                    hover: isDark
                      ? "hover:border-fuchsia-400/30 hover:bg-fuchsia-500/5"
                      : "hover:border-fuchsia-300 hover:bg-fuchsia-50",
                    iconBg:
                      "from-fuchsia-500 to-violet-600",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.547 2.19a2 2 0 01-.502 1.88l-1.27 1.27a16 16 0 006.364 6.364l1.27-1.27a2 2 0 011.88-.502l2.19.547A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1"
                        />
                      </svg>
                    ),
                  },

                  {
                    title: "Location",
                    value: "Arizona, United States",
                    hover: isDark
                      ? "hover:border-yellow-400/30 hover:bg-yellow-500/5"
                      : "hover:border-yellow-300 hover:bg-yellow-50",
                    iconBg:
                      "from-yellow-500 to-orange-600",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white sm:h-7 sm:w-7 lg:h-9 lg:w-9"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`
                      flex
                      items-center

                      gap-4

                      rounded-[22px]
                      border

                      p-4

                      transition-all
                      duration-300

                      sm:gap-5
                      sm:p-5

                      lg:gap-6
                      lg:rounded-3xl
                      lg:p-6

                      ${
                        isDark
                          ? "border-white/10 bg-black/30"
                          : "border-zinc-200 bg-white"
                      }

                      ${item.hover}
                    `}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br sm:h-16 sm:w-16 lg:h-20 lg:w-20 lg:rounded-3xl ${item.iconBg}`}
                    >
                      {item.icon}
                    </div>

                    <div className="min-w-0">
                      <p
                        className={`
                          text-[10px]
                          uppercase

                          tracking-[0.25em]

                          sm:text-xs
                          sm:tracking-[0.35em]

                          ${
                            isDark
                              ? "text-zinc-500"
                              : "text-zinc-500"
                          }
                        `}
                      >
                        {item.title}
                      </p>

                      <h4
                        className={`
                          mt-2
                          break-all

                          text-base
                          font-bold

                          sm:text-lg

                          md:text-xl

                          lg:text-2xl

                          ${
                            isDark
                              ? "text-white"
                              : "text-zinc-900"
                          }
                        `}
                      >
                        {item.value}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className={`
              relative
              overflow-hidden

              rounded-[24px]
              border

              p-5

              shadow-2xl
              backdrop-blur-2xl

              transition-colors
              duration-300

              sm:rounded-[32px]
              sm:p-7

              md:p-8

              lg:rounded-[40px]
              lg:p-10

              ${
                isDark
                  ? "border-white/10 bg-zinc-900/70"
                  : "border-zinc-200 bg-white/80"
              }
            `}
          >
            {/* LIGHT */}
            <div
              className={`
                absolute
                right-0
                top-0

                h-40
                w-40

                blur-[90px]

                sm:h-52
                sm:w-52

                lg:h-60
                lg:w-60
                lg:blur-[120px]

                ${
                  isDark
                    ? "bg-fuchsia-500/10"
                    : "bg-fuchsia-200/50"
                }
              `}
            />

            <div className="relative z-10">
              <div className="mb-8 sm:mb-10">
                <p
                  className={`
                    text-[11px]
                    uppercase

                    tracking-[0.3em]

                    sm:text-sm
                    sm:tracking-[0.4em]

                    ${
                      isDark
                        ? "text-fuchsia-400"
                        : "text-fuchsia-600"
                    }
                  `}
                >
                  Send Message
                </p>

                <h3
                  className={`
                    mt-4
                    text-2xl
                    font-black

                    sm:text-3xl

                    md:text-4xl

                    ${
                      isDark
                        ? "text-white"
                        : "text-zinc-900"
                    }
                  `}
                >
                  Start a Conversation
                </h3>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-6 sm:space-y-8"
              >
                {[
                  {
                    label: "Your Name",
                    name: "name",
                    type: "text",
                    placeholder: "John Doe",
                  },

                  {
                    label: "Your Email",
                    name: "email",
                    type: "email",
                    placeholder: "john@example.com",
                  },
                ].map((field) => (
                  <div key={field.name}>
                    <label
                      className={`
                        mb-3
                        block
                        text-sm
                        font-semibold

                        sm:mb-4

                        ${
                          isDark
                            ? "text-zinc-300"
                            : "text-zinc-700"
                        }
                      `}
                    >
                      {field.label}
                    </label>

                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      name={field.name}
                      value={
                        formData[
                          field.name as keyof typeof formData
                        ]
                      }
                      onChange={handleChange}
                      className={`
                        w-full
                        rounded-2xl
                        border

                        px-5
                        py-4

                        text-sm

                        outline-none
                        transition-all
                        duration-300

                        sm:h-16
                        sm:px-6
                        sm:text-base

                        ${
                          isDark
                            ? "border-white/10 bg-black/30 text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-cyan-500/5"
                            : "border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-cyan-400 focus:bg-cyan-50"
                        }
                      `}
                    />
                  </div>
                ))}

                {/* MESSAGE */}
                <div>
                  <label
                    className={`
                      mb-3
                      block
                      text-sm
                      font-semibold

                      sm:mb-4

                      ${
                        isDark
                          ? "text-zinc-300"
                          : "text-zinc-700"
                      }
                    `}
                  >
                    Your Message
                  </label>

                  <textarea
                    rows={7}
                    placeholder="Tell me about your project..."
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`
                      w-full
                      rounded-2xl
                      border

                      p-5

                      text-sm

                      outline-none
                      transition-all
                      duration-300

                      sm:p-6
                      sm:text-base

                      ${
                        isDark
                          ? "border-white/10 bg-black/30 text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-cyan-500/5"
                          : "border-zinc-200 bg-zinc-50 text-zinc-900 placeholder:text-zinc-400 focus:border-cyan-400 focus:bg-cyan-50"
                      }
                    `}
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
                    relative

                    flex
                    h-14
                    w-full
                    items-center
                    justify-center
                    overflow-hidden

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-fuchsia-500

                    text-base
                    font-bold
                    text-white

                    transition-all
                    duration-500

                    hover:scale-[1.02]
                    hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]

                    sm:h-16
                    sm:text-lg
                  "
                >
                  <span className="relative z-10">
                    {loading
                      ? "Sending..."
                      : "Send Message"}
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}