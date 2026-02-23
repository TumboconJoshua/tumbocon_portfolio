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
          className="card p-10 sm:p-14 flex flex-col items-center text-center gap-6"
          style={{ borderColor: 'var(--border)' }}
        >
          <p style={{ color: 'var(--text-muted)' }} className="text-xs font-bold tracking-widest uppercase">
            Let&apos;s Work Together
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-xl leading-tight">
            Have a project in mind? Let&apos;s build it together.
          </h2>
          <a
            href="mailto:tumboconjoshua26@gmail.com"
            className="px-8 py-3 rounded-full text-sm font-bold bg-white text-black hover:bg-[#ff4500] hover:text-white transition-colors duration-200 mt-2"
          >
            Get in touch
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 pb-8"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <span style={{ color: 'var(--text-muted)' }} className="text-xs">
              Local time · <span style={{ color: 'var(--text-secondary)' }}>{time}</span>
            </span>
          </div>

          <div className="flex items-center justify-center gap-5">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="relative w-5 h-5 opacity-40 hover:opacity-100 hover:scale-110 transition-all duration-200 invert"
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

          <span style={{ color: 'var(--text-muted)' }} className="text-xs text-right">
            © 2026 Joshua Tumbocon. All Rights Reserved.
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
