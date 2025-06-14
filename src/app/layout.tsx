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
  title: "BestWriter - Write perfect blogs with AI",
  description: "Transform your ideas into professional content. Automatic correction, social media summaries and SEO-optimized excerpts. All in one platform.",
  keywords: "writing, blog, AI, artificial intelligence, correction, SEO, social media",
  authors: [{ name: "BestWriter Team" }],
  openGraph: {
    title: "BestWriter - Write perfect blogs with AI",
    description: "Transform your ideas into professional content with artificial intelligence",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "BestWriter - Write perfect blogs with AI",
    description: "Transform your ideas into professional content with artificial intelligence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}