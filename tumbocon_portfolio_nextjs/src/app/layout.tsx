import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joshua Tumbocon | Full Stack Developer",
  description: "A passionate Developer dedicated to creating performant and scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased font-sans`}>
        <div className="max-w-[1200px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {children}
        </div>
      </body>
    </html>
  );
}
