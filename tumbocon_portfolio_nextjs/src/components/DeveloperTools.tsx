"use client";

import { toolsData } from '@/data/tools';
import AnimatedSection from './AnimatedSection';
import { useState } from 'react';
import Image from 'next/image';

const ScrambledTitle = ({ title }: { title: string }) => {
  const [text, setText] = useState(title);
  const chars = "0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  const scramble = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setText(prev =>
        prev.split("").map((_, index) => {
          if (index < iterations) return title[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iterations >= title.length) clearInterval(interval);
      iterations += 0.6;
    }, 30);
  };

  return (
    <span onMouseEnter={scramble} onMouseLeave={() => setText(title)}>
      {text}
    </span>
  );
};

export default function DeveloperTools() {
  const getIconPath = (className: string) => {
    const mapping: Record<string, string> = {
      vscode: "vscode.png",
      github: "github.png",
      postman: "postman.svg",
      devtools: "devtools.png",
      chatgpt: "chatgpt.png",
      deepseek: "deepseek.png",
      figma: "figma.png",
      clickup: "clickup.png",
      vercel: "Vercel_favicon.svg",
      hostinger: "hostinger.png",
    };
    return mapping[className] ? `/pictures/${mapping[className]}` : null;
  };

  return (
    <AnimatedSection>
      <div className="flex flex-col gap-4">
        <div className="section-label">Developer Stack</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {toolsData.map((tool, index) => {
            const iconPath = getIconPath(tool.class);
            return (
              <div
                key={index}
                className="card p-5 flex flex-col gap-1 group cursor-default relative overflow-hidden"
              >
                {/* Background Icon */}
                {iconPath && (
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 w-16 h-16 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-300 pointer-events-none">
                    <Image
                      src={iconPath}
                      alt={tool.name}
                      fill
                      className="object-contain grayscale"
                    />
                  </div>
                )}
                
                <h3 className="text-sm font-semibold text-white group-hover:text-[#ff4500] transition-colors duration-200 font-mono relative z-10">
                  <ScrambledTitle title={tool.name} />
                </h3>
                <p style={{ color: 'var(--text-muted)' }} className="text-xs leading-relaxed relative z-10">
                  {tool.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
