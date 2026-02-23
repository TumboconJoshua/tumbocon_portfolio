import { projectsData } from '@/data/projects';
import AnimatedSection from './AnimatedSection';

export default function LatestProjects() {
  return (
    <AnimatedSection>
      <div className="flex flex-col gap-4">
        <div className="section-label">Recent Projects</div>

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
                className="card p-6 flex flex-col justify-between gap-4 group min-h-[120px]"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-white group-hover:text-[#ff4500] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed">
                    {project.techTags.split(',')[0].trim()} — {project.techTags.split(',').slice(1, 3).join(', ').trim()}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span style={{ color: 'var(--text-muted)' }} className="text-xs font-mono">
                    {domain}
                  </span>
                  <svg
                    className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                    style={{ color: 'var(--text-secondary)' }}
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
