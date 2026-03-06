import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "anytext - Instant docs for coding agents",
  description:
    "Give your coding agent instant access to clean, LLM-ready documentation for any library or framework. Zero dependencies, plain markdown, sub-50ms cached reads.",
  openGraph: {
    title: "anytext - Instant docs for coding agents",
    description:
      "Give your coding agent instant access to clean, LLM-ready documentation for any library or framework.",
    url: "https://anytext.dev",
    siteName: "anytext",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "anytext - Instant docs for coding agents",
    description:
      "Give your coding agent instant access to clean, LLM-ready documentation for any library or framework.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
