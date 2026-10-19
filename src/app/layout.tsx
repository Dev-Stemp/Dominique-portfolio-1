import "./globals.css";


import { ThemeProvider } from "@/src/context/theme-context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dominique Coleman | Senior Full Stack Engineer",
  description: "Senior Full Stack Engineer specializing in AI-powered web products, SaaS platforms, cloud systems, and scalable full-stack engineering.",
  icons: {
    icon: "/public/favicon.png",
    /* shortcut: "/public/favicon.png",
    apple: "/public/favicon.png", */
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}