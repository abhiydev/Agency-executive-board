import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KamiyTech | Custom Software, Web & AI Automation Agency",
  description:
    "Modernize operations with enterprise custom software, Next.js web applications, mobile apps, and AI business automation engineered for scale in Indore, MP, India.",
  keywords: [
    "Next.js agency",
    "Custom software development",
    "AI automation Indore",
    "React Native mobile apps",
    "KamiyTech AI",
  ],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@600;700;800&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#0B0F17] text-[#F9FAFB] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
