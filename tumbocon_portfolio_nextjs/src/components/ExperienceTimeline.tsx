import { experienceData } from '@/data/experience';
import AnimatedSection from './AnimatedSection';

export default function ExperienceTimeline() {
  return (
    <AnimatedSection>
      <div className="bg-white dark:bg-[#111111] border border-black/5 dark:border-white/7 rounded-[1.25rem] p-6 sm:p-8 transition-all hover:border-black/10 dark:hover:bg-[#161616] dark:hover:border-white/14 shadow-sm dark:shadow-none">
        <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-[#555555] mb-8">Experience</div>

        <div className="relative pl-8 sm:pl-10">
          {/* Vertical Tail Track */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#ff4500]/60 via-black/5 dark:via-white/10 to-transparent" />

          <div className="flex flex-col gap-2">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="relative group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-4 -ml-4 rounded-xl hover:bg-gray-50 dark:hover:bg-[#161616] transition-all duration-300 pointer-events-auto"
              >
                {/* Visual Node */}
                <div className="absolute left-[-20.5px] sm:left-[-28.5px] top-[26px] w-2.5 h-2.5 rounded-full bg-white dark:bg-[#1a1a1a] border-2 border-gray-200 dark:border-white/10 group-hover:border-[#ff4500] group-hover:scale-125 transition-all duration-300 z-10 shadow-[0_0_0_4px_white] dark:shadow-[0_0_0_4px_#0a0a0a]" />

                <div className="flex flex-col gap-1 relative z-10">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white group-hover:text-[#ff4500] dark:group-hover:text-[#ff4500] transition-colors duration-200">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-[#888888]">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 relative z-10">
                  <span
                    className="text-xs font-medium tabular-nums text-gray-500 dark:text-[#555555]"
                  >
                    {exp.date}
                  </span>
                  <span className="inline-flex items-center gap-[0.375rem] px-2 py-0.5 rounded-full border border-black/5 dark:border-white/7 text-[0.6rem] font-semibold tracking-wider uppercase text-gray-500 dark:text-[#888888] bg-transparent group-hover:border-[#ff4500]/30 group-hover:text-[#ff4500]/90 dark:group-hover:text-[#ff4500]/90 transition-all duration-300">
                    {exp.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
