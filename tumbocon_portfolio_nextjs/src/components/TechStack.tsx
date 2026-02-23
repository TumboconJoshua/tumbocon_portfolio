import { techStackData } from '@/data/techStack';
import AnimatedSection from './AnimatedSection';

export default function TechStack() {
  return (
    <AnimatedSection>
      <div className="bg-white dark:bg-[#111111] border border-black/5 dark:border-white/7 rounded-[1.25rem] p-6 sm:p-8 flex flex-col gap-6 transition-all hover:border-black/10 dark:hover:bg-[#161616] dark:hover:border-white/14 shadow-sm dark:shadow-none">
        <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-[#555555]">Tech Stack</div>
        
        <div className="flex flex-col gap-8">
          {techStackData.map((category, idx) => (
            <div key={idx} className="flex flex-col gap-3">
              <h3
                className="text-xs font-bold tracking-widest uppercase pb-2 border-b border-black/5 dark:border-white/7 text-gray-500 dark:text-[#555555]"
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-transparent border border-black/5 dark:border-white/7 text-gray-600 dark:text-[#888888] hover:text-gray-900 dark:hover:text-white transition-colors duration-150 cursor-default"
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
