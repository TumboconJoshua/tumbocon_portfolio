import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import ChatWidget from "@/components/ChatWidget";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${archivo.variable} ${spaceGrotesk.variable} antialiased font-[family-name:var(--font-space)]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="min-h-screen relative overflow-hidden bg-[#FAFAFA] text-[#09090B] dark:bg-[#09090B] dark:text-[#FAFAFA] transition-colors duration-300">
            {/* Subtle Dot Texture Grid */}
            <div className="absolute inset-0 pointer-events-none z-0 
              opacity-10 dark:opacity-[0.07] 
              bg-[radial-gradient(circle_at_center,_#000000_1px,_transparent_1.5px)] 
              dark:bg-[radial-gradient(circle_at_center,_#ffffff_1px,_transparent_1px)] 
              [background-size:24px_24px] 
              [mask-image:linear-gradient(to_bottom,white,transparent)]" 
            />
            
            {/* Ambient Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#2563EB]/40 dark:bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-blue-500/30 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
              {children}
            </div>

            <ChatWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
