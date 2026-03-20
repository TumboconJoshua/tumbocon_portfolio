import { experienceData } from '@/data/experience';
import AnimatedSection from './AnimatedSection';

export default function ExperienceTimeline() {
  return (
    <AnimatedSection>
      <div className="bg-white/70 dark:bg-[#18181B]/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-[1.25rem] p-6 sm:p-8 transition-all hover:border-white/60 dark:hover:border-white/20 shadow-lg dark:shadow-md">
        <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-[#555555] mb-8">Experience</div>

        <div className="relative pl-8 sm:pl-10">
          {/* Vertical Tail Track */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#2563EB]/60 via-black/5 dark:via-white/10 to-transparent" />

          <div className="flex flex-col gap-2">
            {experienceData.map((exp, index) => (
              <div
                key={index}
                className="relative group flex flex-col sm:flex-row sm:items-start justify-between gap-4 p-4 -ml-4 rounded-xl hover:bg-white/80 dark:hover:bg-white/5 transition-all duration-300 pointer-events-auto border border-transparent hover:border-black/5 dark:hover:border-white/5 shadow-none hover:shadow-sm"
              >
                {/* Interactive Visual Node */}
                <div className="absolute left-[-20.5px] sm:left-[-28.5px] top-[26px] z-10 flex items-center justify-center">
                  <div className="absolute w-2.5 h-2.5 rounded-full bg-[#2563EB] dark:bg-[#3B82F6] opacity-0 group-hover:animate-ping transition-all duration-300" />
                  <div className="relative w-2.5 h-2.5 rounded-full bg-white dark:bg-[#18181B] border-2 border-gray-300 dark:border-white/20 group-hover:bg-[#2563EB] dark:group-hover:bg-[#3B82F6] group-hover:border-[#2563EB] dark:group-hover:border-[#3B82F6] transition-all duration-300 shadow-[0_0_0_4px_#FAFAFA] dark:shadow-[0_0_0_4px_#09090B] group-hover:scale-125 group-hover:shadow-[0_0_12px_rgba(37,99,235,0.4),0_0_0_4px_#FAFAFA] dark:group-hover:shadow-[0_0_12px_rgba(59,130,246,0.5),0_0_0_4px_#09090B]" />
                </div>

                <div className="flex flex-col gap-1 relative z-10 transform transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors duration-200 font-[family-name:var(--font-archivo)]">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-[#A1A1AA]">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2 shrink-0 relative z-10">
                  <span
                    className="text-xs font-medium tabular-nums text-gray-500 dark:text-[#A1A1AA]"
                  >
                    {exp.date}
                  </span>
                  <span className="inline-flex items-center gap-[0.375rem] px-2 py-0.5 rounded-full border border-black/5 dark:border-white/10 text-[0.6rem] font-semibold tracking-wider uppercase text-gray-500 dark:text-[#A1A1AA] bg-transparent group-hover:border-[#2563EB]/30 group-hover:text-[#2563EB]/90 dark:group-hover:text-[#3B82F6]/90 transition-all duration-300">
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
