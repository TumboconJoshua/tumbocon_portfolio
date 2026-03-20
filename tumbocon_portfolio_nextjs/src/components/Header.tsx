"use client";

import Image from 'next/image';
import { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { ThemeToggle } from './ThemeToggle';
import BookCallModal from './BookCallModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AnimatedSection>
      <div className="relative bg-white/70 dark:bg-[#18181B]/60 backdrop-blur-xl border border-white/40 dark:border-white/10 rounded-[1.25rem] p-5 sm:p-6 transition-all hover:bg-white/80 dark:hover:bg-[#18181B]/80 hover:border-white/60 dark:hover:border-white/15 shadow-xl dark:shadow-lg overflow-hidden">
        {/* Subtle Pattern Texture for Light Mode */}
        <div className="absolute inset-0 pointer-events-none z-0 opacity-[0.15] dark:opacity-5 bg-[radial-gradient(circle_at_center,_#6b7280_1px,_transparent_1px)] [background-size:16px_16px]" />
        
        {/* Decorative ambient center glow */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[24rem] h-[24rem] bg-[#2563EB]/15 rounded-full blur-3xl pointer-events-none z-0" />

        {/* Theme Toggle — top right of card */}
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center gap-4 w-full max-w-2xl mx-auto pt-2 pb-1">
          
          {/* Center: Photo */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-full p-1.5 bg-white/40 dark:bg-[#27272A]/40 border border-black/5 dark:border-white/10 shadow-md backdrop-blur-sm group">
            <div className="relative w-full h-full rounded-full overflow-hidden transition-transform duration-500 group-hover:scale-105">
              <Image
                src="/pictures/joshua.jpg"
                alt="Joshua Tumbocon"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/5 dark:border-white/10 text-[0.65rem] sm:text-xs font-semibold tracking-wide text-gray-700 dark:text-[#E4E4E7] bg-white/60 dark:bg-[#18181B]/60 shadow-sm backdrop-blur-md">
              <span className="relative flex w-1.5 h-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-green-500"></span>
              </span>
              Available for work
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full border border-black/5 dark:border-white/10 text-[0.65rem] sm:text-xs font-semibold tracking-wide text-gray-600 dark:text-[#A1A1AA] bg-white/60 dark:bg-[#18181B]/60 shadow-sm backdrop-blur-md">
              📍 Olongapo, Philippines
            </span>
          </div>

          {/* Name & Title */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.1] font-[family-name:var(--font-archivo)]">
              Joshua Tumbocon
            </h1>
            <p className="text-base sm:text-lg font-medium text-[#2563EB] dark:text-[#3B82F6]">
              Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed max-w-lg text-gray-600 dark:text-[#A1A1AA]">
            I build reliable, scalable web applications with a focus on clean code, performance, and meaningful digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <a
              href="mailto:tumboconjoshua26@gmail.com"
              className="px-5 py-2 rounded-full text-xs font-bold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-5 py-2 rounded-full text-xs font-bold bg-[#18181B] dark:bg-white text-white dark:text-black hover:bg-black/80 dark:hover:bg-gray-200 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Book a Call
            </button>
            <a
              href="/files/Tumbocon Joshua.pdf"
              download
              className="px-5 py-2 rounded-full text-xs font-bold bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-[#E4E4E7] hover:border-black/20 dark:hover:border-white/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <BookCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AnimatedSection>
  );
}
