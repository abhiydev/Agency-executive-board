import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "KamiyTech | Custom Software, Web & AI Automation Agency in Indore",
  description:
    "Modernize operations with enterprise custom software, Next.js web applications, mobile apps, and AI business automation engineered for scale in Indore, MP, India. Book a 30-min strategy call.",
  keywords: [
    "Next.js web development agency",
    "Custom software development Indore",
    "AI business automation India",
    "React Native mobile apps",
    "KamiyTech AI",
    "Software agency Vijay Nagar Indore",
  ],
  metadataBase: new URL("https://kamiytech.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "KamiyTech | Custom Software, Web & AI Automation Agency",
    description:
      "From enterprise Next.js web platforms and mobile apps to bespoke AI workflows—KamiyTech delivers enterprise engineering standards with agency speed.",
    url: "https://kamiytech.com",
    siteName: "KamiyTech",
    images: [
      {
        url: "/assets/logo/logo.svg",
        width: 1200,
        height: 630,
        alt: "KamiyTech Official Brand Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KamiyTech | Custom Software, Web & AI Automation Agency",
    description:
      "Enterprise Next.js web development, custom software, and AI automation engineered for scale.",
    images: ["/assets/logo/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
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
        <JsonLd />
      </head>
      <body className="antialiased bg-[#0B0F17] text-[#F9FAFB] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
