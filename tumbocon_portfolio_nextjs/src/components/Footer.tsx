"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const socialLinks = [
  { href: "https://twitter.com/_joshinnn", label: "Twitter", icon: "/pictures/x.png" },
  { href: "https://www.linkedin.com/in/joshua-tumbocon-86376a197", label: "LinkedIn", icon: "/pictures/linkedin-logo.png" },
  { href: "https://web.facebook.com/TumboconJoshua", label: "Facebook", icon: "/pictures/fb.png" },
  { href: "mailto:tumboconjoshua26@gmail.com", label: "Email", icon: "/pictures/gmail-logo.png" },
  { href: "https://www.instagram.com/__joshin", label: "Instagram", icon: "/pictures/instagram.png" },
  { href: "https://github.com/TumboconJoshua", label: "GitHub", icon: "/pictures/github.png" },
];

export default function Footer() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatedSection>
      <div className="flex flex-col gap-6 pt-4">
        {/* CTA Card */}
        <div
          className="bg-white/70 dark:bg-[#18181B]/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-[1.25rem] p-10 sm:p-14 flex flex-col items-center text-center gap-6 transition-all hover:bg-white/80 dark:hover:bg-[#18181B]/80 hover:border-white/60 dark:hover:border-white/20 shadow-xl dark:shadow-md"
        >
          <p className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-[#A1A1AA]">
            Let&apos;s Work Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white max-w-xl leading-tight font-[family-name:var(--font-archivo)]">
            Have a project in mind? Let&apos;s build it together.
          </h2>
          <a
            href="mailto:tumboconjoshua26@gmail.com"
            className="px-8 py-3 rounded-full text-sm font-bold bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors duration-200 mt-2 shadow-md hover:shadow-lg"
          >
            Get in touch
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 pb-8 border-t border-black/5 dark:border-white/10"
        >
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span className="text-xs text-gray-500 dark:text-[#A1A1AA]">
              Local time · <span className="text-gray-600 dark:text-[#E4E4E7]">{time}</span>
            </span>
          </div>

          <span className="text-[0.65rem] font-medium text-gray-500 dark:text-[#A1A1AA] text-center sm:text-center">
            © 2026 Joshua Tumbocon. All Rights Reserved.
          </span>

          <div className="flex items-center justify-center gap-5">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="relative w-5 h-5 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200 dark:invert"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

