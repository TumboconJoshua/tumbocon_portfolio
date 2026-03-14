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
                className="bg-white dark:bg-[#111111] border border-black/5 dark:border-white/7 rounded-[1.25rem] p-6 flex flex-col justify-between gap-4 group min-h-[120px] transition-all duration-200 hover:bg-gray-50 dark:hover:bg-[#161616] hover:border-black/10 dark:hover:border-white/14 shadow-sm dark:shadow-none"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#ff4500] dark:group-hover:text-[#ff4500] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-[#888888]">
                    {project.techTags.split(',')[0].trim()} — {project.techTags.split(',').slice(1, 4).join(', ').trim()}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-gray-400 dark:text-[#555555]">
                    {domain}
                  </span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-gray-400 dark:text-[#888888]"
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
