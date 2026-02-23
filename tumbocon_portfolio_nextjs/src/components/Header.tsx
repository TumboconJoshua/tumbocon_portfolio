"use client";

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import { ThemeToggle } from './ThemeToggle';

export default function Header() {
  return (
    <AnimatedSection>
      <div className="relative bg-white dark:bg-[#111111] border border-black/5 dark:border-white/7 rounded-[1.25rem] p-6 sm:p-8 transition-all hover:bg-gray-50 dark:hover:bg-[#161616] hover:border-black/10 dark:hover:border-white/14 shadow-sm dark:shadow-none">
        {/* Theme Toggle — top right of card */}
        <div className="absolute top-5 right-5 z-10">
          <ThemeToggle />
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
          {/* Left: Photo */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 mt-7 shrink-0 rounded-2xl overflow-hidden border border-black/5 dark:border-white/10 shadow-md">
            <Image
              src="/pictures/joshua.jpg"
              alt="Joshua Tumbocon"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: Text content */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-[0.375rem] px-3 py-1 rounded-full border border-black/5 dark:border-white/7 text-[0.65rem] font-semibold tracking-wider uppercase text-gray-500 dark:text-[#888888] bg-transparent">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </span>
              <span className="inline-flex items-center gap-[0.375rem] px-3 py-1 rounded-full border border-black/5 dark:border-white/7 text-[0.65rem] font-semibold tracking-wider uppercase text-gray-500 dark:text-[#888888] bg-transparent">📍 Olongapo, Philippines</span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white leading-[1.1] mb-1">
                Joshua Tumbocon
              </h1>
              <p className="text-base font-medium text-gray-600 dark:text-[#888888]">
                Full Stack Developer
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed max-w-lg text-gray-600 dark:text-[#888888]">
              I build reliable, scalable web applications. Focused on clean code, performance, and meaningful products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href="mailto:tumboconjoshua26@gmail.com"
                className="px-5 py-2 rounded-full text-xs font-semibold bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-[#ff4500] hover:text-white transition-colors duration-200 shadow-sm"
              >
                Get in touch
              </a>
              <a
                href="/files/Tumbocon Joshua.pdf"
                download
                className="px-5 py-2 rounded-full text-xs font-semibold bg-transparent border border-gray-200 text-gray-600 dark:border-white/10 dark:text-[#888888] hover:border-gray-300 hover:border-white/20 hover:text-white transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
