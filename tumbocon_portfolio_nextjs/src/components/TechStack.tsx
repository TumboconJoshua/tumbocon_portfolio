import { techStackData } from '@/data/techStack';
import AnimatedSection from './AnimatedSection';

export default function TechStack() {
  return (
    <AnimatedSection>
      <div className="bg-white/70 dark:bg-[#18181B]/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-[1.25rem] p-6 sm:p-8 flex flex-col gap-6 transition-all hover:border-white/60 dark:hover:border-white/20 shadow-lg dark:shadow-md">
        <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-[#555555]">Tech Stack</div>
        
        <div className="flex flex-col gap-8">
          {techStackData.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3
                className="text-xs font-bold tracking-widest uppercase pb-2 border-b border-black/5 dark:border-white/10 text-gray-500 dark:text-[#A1A1AA] font-[family-name:var(--font-archivo)]"
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-transparent border border-black/5 dark:border-white/10 text-gray-600 dark:text-[#A1A1AA] hover:text-[#2563EB] dark:hover:text-[#3B82F6] hover:border-[#2563EB]/40 dark:hover:border-[#3B82F6]/40 hover:bg-[#2563EB]/5 dark:hover:bg-[#3B82F6]/10 transition-all duration-200 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
