import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Providers } from "@/components/providers/providers";
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
  metadataBase: new URL("https://synaptic.app"),

  title: {
    default: "Synaptic",
    template: "%s | Synaptic",
  },

  description:
    "An AI-powered collaborative learning platform for students and professionals.",

  applicationName: "Synaptic",

  keywords: [
    "AI",
    "Learning",
    "Education",
    "Study",
    "Collaboration",
    "Productivity",
    "Flashcards",
    "Quiz",
    "Students",
  ],

  authors: [
    {
      name: "Synaptic Team",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}