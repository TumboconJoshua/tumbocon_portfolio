import { projectsData } from '@/data/projects';
import AnimatedSection from './AnimatedSection';

export default function LatestProjects() {
  return (
    <AnimatedSection>
      <div className="flex flex-col gap-4">
        <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-[#555555] mb-5">Recent Projects</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projectsData.map((project, index) => {
            const domain = (() => {
              try { return new URL(project.href).hostname; }
              catch { return project.href; }
            })();

            return (
              <a
                key={index}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/70 dark:bg-[#18181B]/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-[1.25rem] p-6 flex flex-col justify-between gap-4 group min-h-[120px] transition-all duration-200 hover:bg-white/80 dark:hover:bg-[#18181B]/80 hover:border-white/60 dark:hover:border-white/20 shadow-lg dark:shadow-md"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-[#2563EB] dark:group-hover:text-[#3B82F6] transition-colors duration-200 font-[family-name:var(--font-archivo)]">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-[#A1A1AA]">
                    {project.techTags.split(',')[0].trim()} — {project.techTags.split(',').slice(1, 4).join(', ').trim()}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400 dark:text-[#555555]">
                    {domain}
                  </span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-[#2563EB] dark:text-[#3B82F6]"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
